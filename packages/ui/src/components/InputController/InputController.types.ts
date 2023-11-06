import type { FormSchemas } from 'form-schemas';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  UseFormStateReturn,
} from 'react-hook-form';

import type { FormHandling } from '../../types';

export interface ControllerProps<T extends FormSchemas>
  extends FormHandling<T> {
  defaultValue: string | number | boolean | null;
  render: ({
    field,
    fieldState: { error },
  }: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => React.ReactElement;
}
