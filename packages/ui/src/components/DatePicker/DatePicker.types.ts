import type { CustomLocale } from 'flatpickr/dist/types/locale';
import type { Options } from 'flatpickr/dist/types/options';

import type { DataTestId } from '../../types';

export interface DatePickerProps extends DataTestId {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  name: string;
  onChange: (selectedDate: Date | string) => void;
  options?: OptionsDatePickerProps;
  placeholder?: string;
}

export type OptionsDatePickerProps = Options & {
  allowInput?: boolean;
  clickOpens?: boolean;
  dateFormat?: 'd/m/Y H:i' | 'd/m/Y H:i:S' | 'd/m/Y' | 'H:i' | 'H:i:S';
  defaultDate?: Date;
  defaultHour?: number;
  defaultMinute?: number;
  defaultSeconds?: number;
  disableMobile?: boolean;
  enableTime?: boolean;
  errorHandler?: (e: Error) => void;
  locale?: CustomLocale;
  maxDate?: Date;
  minDate?: Date;
  mode?: 'single' | 'multiple' | 'range' | 'time';
  noCalendar?: boolean;
};
