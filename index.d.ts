import React from 'react';

// ResponsiveContainer Props
export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'full';
  width?: '25' | '50' | '75' | '85' | '95' | 'auto' | 'screen';
  align?: 'start' | 'center' | 'end';
  padding?: boolean;
  margin?: boolean;
  paddingX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  paddingY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  marginX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  marginY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  layout?: 'stack' | 'grid' | 'flex';
  gap?: '1' | '2' | '4' | '6' | '8';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  darkBackground?: boolean;
  modal?: boolean;
  modalOpen?: boolean;
  onModalClose?: () => void;
  modalCloseOnBackdrop?: boolean;
  modalCloseOnEscape?: boolean;
  modalSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  modalPosition?: 'center' | 'top' | 'bottom';
  modalBlurBackdrop?: boolean;
}

// ResponsiveGrid Props
export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  xlCols?: number;
  gap?: '1' | '2' | '4' | '6' | '8' | '10' | '12';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'between';
  autoFit?: boolean;
  autoFitSize?: 'sm' | 'md' | 'lg';
}

// ResponsiveText Props
export interface ResponsiveTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  smSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  mdSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  lgSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  smAlign?: 'left' | 'center' | 'right' | 'justify';
  mdAlign?: 'left' | 'center' | 'right' | 'justify';
  lgAlign?: 'left' | 'center' | 'right' | 'justify';
  leading?: 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  color?: 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'white' | 'black';
  darkColor?: 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'white' | 'black';
  paddingX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  paddingY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  marginX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  marginY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  className?: string;
}

// DarkModeToggle Props
export interface DarkModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
  variant?: 'switch' | 'button' | 'icon';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  showLabels?: boolean;
  lightIcon?: string;
  darkIcon?: string;
  lightLabel?: string;
  darkLabel?: string;
  animate?: boolean;
  alignment?: 'left' | 'right' | 'center';
  onToggleStart?: () => void;
  onToggleComplete?: () => void;
  customStyles?: React.CSSProperties;
  ariaLabel?: string;
  id?: string;
  dataAttributes?: Record<string, string>;
}

// Component Declarations
export declare const ResponsiveContainer: React.FC<ResponsiveContainerProps>;
export declare const ResponsiveGrid: React.FC<ResponsiveGridProps>;
export declare const ResponsiveText: React.FC<ResponsiveTextProps>;
export declare const DarkModeToggle: React.FC<DarkModeToggleProps>;

// Default export (if you have one)
declare const _default: {
  ResponsiveContainer: React.FC<ResponsiveContainerProps>;
  ResponsiveGrid: React.FC<ResponsiveGridProps>;
  ResponsiveText: React.FC<ResponsiveTextProps>;
  DarkModeToggle: React.FC<DarkModeToggleProps>;
};

export default _default;