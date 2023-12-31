import type { DataTestId } from '../../types';
import type {
  ColorIntensityType,
  ColorNameType,
  TextColorType,
} from '../../types/tailwind';
import type { IconPropsType } from '../Icon/Icon.types';

interface ButtonColorType {
  light:
    | 'btn-neutral'
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-ghost'
    | 'btn-link'
    | 'btn-info'
    | 'btn-success'
    | 'btn-warning'
    | 'btn-error'
    | 'bg-transparent'
    | `bg-${ColorNameType}-${ColorIntensityType}`;
  dark:
    | 'dark:btn-neutral'
    | 'dark:btn-primary'
    | 'dark:btn-secondary'
    | 'dark:btn-accent'
    | 'dark:btn-ghost'
    | 'dark:btn-link'
    | 'dark:btn-info'
    | 'dark:btn-success'
    | 'dark:btn-warning'
    | 'dark:btn-error'
    | 'dark:bg-transparent'
    | `dark:bg-${ColorNameType}-${ColorIntensityType}`;
}

export type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  DataTestId & {
    /**
     * @remarks either activeButton or outlineButton, not both.
     */
    activeButton?: boolean;
    ariaHidden?: boolean;
    ariaLabel?: string;
    children?: string | React.ReactNode;
    colorLight: ButtonColorType['light'];
    colorDark: ButtonColorType['dark'];
    endIcon?: {
      className?: IconPropsType['className'];
      color?: IconPropsType['color'];
      iconComponent: IconPropsType['iconComponent'];
      size?: IconPropsType['size'];
      title?: IconPropsType['title'];
    };
    glass?: boolean;
    name?: string;
    /**
     * @remarks Use either activeButton or outlineButton, not both.
     */
    outlineButton?: boolean;
    size?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg';
    sizeText?:
      | 'text-xs'
      | 'text-sm'
      | 'text-base'
      | 'text-lg'
      | 'text-xl'
      | 'text-2xl'
      | 'text-3xl'
      | 'text-4xl'
      | 'text-5xl'
      | 'text-6xl'
      | 'text-7xl'
      | 'text-8xl'
      | `text-[${number}px]`;
    startIcon?: {
      className?: IconPropsType['className'];
      color?: IconPropsType['color'];
      iconComponent: IconPropsType['iconComponent'];
      size?: IconPropsType['size'];
      title?: IconPropsType['title'];
    };
    textColorDark?: TextColorType['dark'];
    textColorLight?: TextColorType['light'];
    type?: 'button' | 'reset' | 'submit';
    unstyled?: boolean;
    withoutAnimation?: boolean;
  } & (
    | {
        activeButton?: true;
        outlineButton?: never;
      }
    | {
        activeButton?: never;
        outlineButton?: true;
      }
  );
