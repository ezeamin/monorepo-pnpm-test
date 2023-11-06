import dayjs, { type Dayjs } from 'dayjs';
import { z, type ZodType } from 'zod';

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------

const optionalWrapper = <T extends ZodType>(required: boolean, rule: T) => {
  if (!required) {
    return z.optional(rule);
  }
  return rule;
};

// ----------------------------------------------------
// COMMON RULES
// ----------------------------------------------------

export const resolutionRules = (required = false) => {
  const rule = z
    .string()
    .max(25, {
      message: 'El número de acordada debe tener como máximo 25 caracteres',
    })
    .refine(
      // Min length is 3 when it does have content (cannot use .min() because it's initially empty)
      (data) => {
        return !data || data.length >= 3;
      },
      {
        message: 'El número de acordada debe tener al menos 3 caracteres',
      }
    )
    .default('');

  return optionalWrapper<typeof rule>(required, rule);
};

export const dateRules = (required = false) => {
  const rule = z
    .union([z.date(), z.string()])
    // Check if it's a string (empty field)
    .refine(
      (data) => {
        return !(typeof data === 'string');
      },
      {
        message: `Debe ingresar una fecha valida`,
      }
    )
    .refine(
      // If it has a value, it must be a valid date
      (data) => {
        if (!data) return true;
        const date = dayjs(data);
        return date.isValid();
      },
      {
        message: `La fecha no es válida`,
      }
    );

  return optionalWrapper<typeof rule>(required, rule);
};

export const typeRules = (required = false) => {
  const rule = z.string().min(1, {
    message: 'Debe seleccionar un tipo',
  });

  return optionalWrapper<typeof rule>(required, rule);
};

// ----------------------------------------------------
// COMMON REFINES
// ----------------------------------------------------

// At least one field must have value
export const notEmptyForm = (data: object) => {
  return Object.values(data).some(Boolean);
};

notEmptyForm.msg = () => ({
  message: 'Por lo menos un campo debe tener valores',
});

// If fromDate and toDate have values, fromDate must be before or equal to toDate
export const fromDateBeforeToDate = (data: {
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
}) => {
  if (!data.fromDate || !data.toDate) return true;
  if (data.fromDate.isSame(data.toDate)) return true;
  return data.fromDate.isBefore(data.toDate);
};

fromDateBeforeToDate.msg = () => ({
  message: 'La fecha desde debe ser menor a la fecha hasta',
});

// If fromDate has value, toDate must have value too
export const fromDateAndToDate = (
  data: {
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  },
  field: 'toDate' | 'fromDate'
) => {
  const otherField = field === 'toDate' ? 'fromDate' : 'toDate';

  if (!data[field]) return true;
  return data[field] && !!data[otherField];
};

fromDateAndToDate.msg = (field: 'toDate' | 'fromDate') => ({
  message: `Para buscar por fecha ${
    field === 'toDate' ? 'hasta' : 'desde'
  }, debe ingresar también una fecha ${field === 'toDate' ? 'desde' : 'hasta'}`,
  path: [field],
});
