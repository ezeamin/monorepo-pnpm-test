export interface BgColorProp {
  color?:
    | 'bg-black'
    | 'bg-current'
    | 'bg-inherit'
    | 'bg-transparent'
    | 'bg-white'
    | `bg-${ColorNameType}-${ColorIntensityType}`;
}

export type ColorNameType =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

export type ColorIntensityType =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type HeightType =
  | 'h-fit'
  | 'h-full'
  | 'h-max'
  | 'h-min'
  | 'h-screen'
  | `h-${number}px`
  | 'h-0'
  | 'h-0.5'
  | 'h-1'
  | 'h-1.5'
  | 'h-2'
  | 'h-2.5'
  | 'h-3'
  | 'h-3.5'
  | 'h-4'
  | 'h-5'
  | 'h-6'
  | 'h-7'
  | 'h-8'
  | 'h-9'
  | 'h-10'
  | 'h-11'
  | 'h-12'
  | 'h-14'
  | 'h-16'
  | 'h-20'
  | 'h-24'
  | 'h-28'
  | 'h-32'
  | 'h-36'
  | 'h-40'
  | 'h-44'
  | 'h-48'
  | 'h-52'
  | 'h-56'
  | 'h-60'
  | 'h-64'
  | 'h-72'
  | 'h-80'
  | 'h-96'
  | 'h-auto'
  | 'h-1/2'
  | 'h-1/3'
  | 'h-2/3'
  | 'h-1/4'
  | 'h-2/4'
  | 'h-3/4'
  | 'h-1/5'
  | 'h-2/5'
  | 'h-3/5'
  | 'h-4/5'
  | 'h-1/6'
  | 'h-2/6'
  | 'h-3/6'
  | 'h-4/6'
  | 'h-5/6';

export interface TextColorProp {
  textColor?:
    | 'text-inherit'
    | 'text-current'
    | 'text-transparent'
    | 'text-black'
    | 'text-white'
    | `text-${ColorNameType}-${ColorIntensityType}`;
}

export interface TextColorType {
  dark:
    | 'dark:text-inherit'
    | 'dark:text-current'
    | 'dark:text-transparent'
    | 'dark:text-black'
    | 'dark:text-white'
    | `dark:text-${ColorNameType}-${ColorIntensityType}`;
  light:
    | 'text-inherit'
    | 'text-current'
    | 'text-transparent'
    | 'text-black'
    | 'text-white'
    | `text-${ColorNameType}-${ColorIntensityType}`;
}

export type WidthType =
  | 'w-auto'
  | 'w-fit'
  | 'w-full'
  | 'w-max'
  | 'w-min'
  | 'w-screen'
  | `w-${number}px`
  | 'w-0'
  | 'w-0.5'
  | 'w-1'
  | 'w-1.5'
  | 'w-2'
  | 'w-2.5'
  | 'w-3'
  | 'w-3.5'
  | 'w-4'
  | 'w-5'
  | 'w-6'
  | 'w-7'
  | 'w-8'
  | 'w-9'
  | 'w-10'
  | 'w-11'
  | 'w-12'
  | 'w-14'
  | 'w-16'
  | 'w-20'
  | 'w-24'
  | 'w-28'
  | 'w-32'
  | 'w-36'
  | 'w-40'
  | 'w-44'
  | 'w-48'
  | 'w-52'
  | 'w-56'
  | 'w-60'
  | 'w-64'
  | 'w-72'
  | 'w-80'
  | 'w-96'
  | 'w-1/2'
  | 'w-1/3'
  | 'w-2/3'
  | 'w-1/4'
  | 'w-2/4'
  | 'w-3/4'
  | 'w-1/5'
  | 'w-2/5'
  | 'w-3/5'
  | 'w-4/5'
  | 'w-1/6'
  | 'w-2/6'
  | 'w-3/6'
  | 'w-4/6'
  | 'w-5/6'
  | 'w-1/12'
  | 'w-2/12'
  | 'w-3/12'
  | 'w-4/12'
  | 'w-5/12'
  | 'w-6/12'
  | 'w-7/12'
  | 'w-8/12'
  | 'w-9/12'
  | 'w-10/12'
  | 'w-11/12';
