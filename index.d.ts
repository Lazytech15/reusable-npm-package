import React from 'react';

/**
 * ResponsiveContainer - A flexible container component that adapts to different screen sizes
 * Uses custom CSS classes instead of Tailwind CSS
 */
export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Maximum width breakpoint */
  maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'full';
  /** Custom width of the container */
  width?: '25' | '50' | '75' | '85' | '95' | 'auto' | 'screen';
  /** Horizontal alignment */
  align?: 'start' | 'center' | 'end';
  /** Whether to add responsive padding */
  padding?: boolean;
  /** Whether to add responsive margin */
  margin?: boolean;
  /** Custom horizontal padding */
  paddingX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Custom vertical padding */
  paddingY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Custom horizontal margin */
  marginX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Custom vertical margin */
  marginY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Layout type for children */
  layout?: 'stack' | 'grid' | 'flex';
  /** Gap between child elements (only applies to flex and grid layouts) */
  gap?: '1' | '2' | '4' | '6' | '8';
  /** Text alignment for child elements */
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  /** Flex align-items property (for flex layout) */
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Flex justify-content property (for flex layout) */
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Flex direction (for flex layout) */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Flex wrap property (for flex layout) */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Dark mode background variants */
  darkBackground?: boolean;
  /** Whether to render as a modal */
  modal?: boolean;
  /** Whether the modal is open (required if modal=true) */
  modalOpen?: boolean;
  /** Callback when modal should close (required if modal=true) */
  onModalClose?: () => void;
  /** Whether clicking backdrop closes modal (default: true) */
  modalCloseOnBackdrop?: boolean;
  /** Whether pressing Escape closes modal (default: true) */
  modalCloseOnEscape?: boolean;
  /** Modal size variant */
  modalSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Modal position on screen */
  modalPosition?: 'center' | 'top' | 'bottom';
  /** Whether to blur the backdrop */
  modalBlurBackdrop?: boolean;
}

/**
 * ResponsiveGrid - A responsive grid component with customizable columns and spacing
 */
export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Number of columns (default breakpoint) */
  cols?: number;
  /** Number of columns on small screens */
  smCols?: number;
  /** Number of columns on medium screens */
  mdCols?: number;
  /** Number of columns on large screens */
  lgCols?: number;
  /** Number of columns on extra large screens */
  xlCols?: number;
  /** Gap between grid items */
  gap?: '1' | '2' | '4' | '6' | '8' | '10' | '12';
  /** Vertical alignment of grid items */
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  /** Horizontal alignment of grid items */
  justifyItems?: 'start' | 'center' | 'end' | 'between';
  /** Whether to use auto-fit instead of explicit columns */
  autoFit?: boolean;
  /** Minimum size for auto-fit columns */
  autoFitSize?: 'sm' | 'md' | 'lg';
}

export interface ResponsiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text or elements to display inside the button */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info' | 'ghost' | 'outline';
  /** Button size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Button width behavior */
  width?: 'auto' | 'full' | 'fit';
  /** Button border radius style */
  shape?: 'square' | 'rounded' | 'pill' | 'sharp';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether to show loading state */
  loading?: boolean;
  /** Text to display while loading */
  loadingText?: string;
  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;
  /** Whether this is an icon-only button */
  iconOnly?: boolean;
  /** Horizontal alignment of button content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Vertical alignment of button content */
  align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Accessibility label for screen readers */
  ariaLabel?: string;
  /** ID of element that describes the button */
  ariaDescribedBy?: string;
  /** Whether the button is in a pressed state */
  ariaPressed?: boolean;
  /** Whether the button controls an expanded element */
  ariaExpanded?: boolean;
  /** Tab order for keyboard navigation */
  tabIndex?: number;
  /** Whether to automatically focus the button */
  autoFocus?: boolean;
  /** Custom horizontal margin */
  marginX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Custom vertical margin */
  marginY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Whether to adjust size and spacing on different screen sizes */
  responsive?: boolean;
  /** Screen size at which responsive adjustments take effect */
  responsiveBreakpoint?: 'mobile' | 'tablet' | 'desktop';
  /** Whether to use dark mode styling */
  darkMode?: boolean;
  /** Whether to add shadow/elevation effect */
  elevate?: boolean;
  /** Shadow elevation level */
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show ripple effect on click */
  ripple?: boolean;
  /** Milliseconds to debounce click events */
  debounceMs?: number;
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Key down event handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  /** Mouse enter event handler */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Mouse leave event handler */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * ResponsiveText - A text component with responsive typography and styling options
 */
export interface ResponsiveTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Text content to render */
  children: React.ReactNode;
  /** HTML element to render as */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** Base font size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  /** Font size on small screens */
  smSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  /** Font size on medium screens */
  mdSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  /** Font size on large screens */
  lgSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  /** Font weight */
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  /** Text alignment (base) */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Text alignment on small screens */
  smAlign?: 'left' | 'center' | 'right' | 'justify';
  /** Text alignment on medium screens */
  mdAlign?: 'left' | 'center' | 'right' | 'justify';
  /** Text alignment on large screens */
  lgAlign?: 'left' | 'center' | 'right' | 'justify';
  /** Line height */
  leading?: 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  /** Text color in light mode */
  color?: 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'white' | 'black';
  /** Text color in dark mode */
  darkColor?: 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'white' | 'black';
  /** Horizontal padding */
  paddingX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Vertical padding */
  paddingY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Horizontal margin */
  marginX?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Vertical margin */
  marginY?: '1' | '2' | '4' | '6' | '8' | '12' | '16';
  /** Additional CSS classes */
  className?: string;
}

/**
 * DarkModeToggle - A sleek animated button component for toggling dark mode
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Current dark mode state
 * @param {function} props.onToggle - Function to toggle dark mode
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {'switch' | 'button' | 'icon'} [props.variant='switch'] - Toggle variant style
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Component size
 * @param {boolean} [props.disabled=false] - Whether the toggle is disabled
 * @param {boolean} [props.showLabels=true] - Whether to show sun/moon labels (switch variant only)
 * @param {string} [props.lightIcon='☀️'] - Custom icon for light mode
 * @param {string} [props.darkIcon='🌙'] - Custom icon for dark mode
 * @param {string} [props.lightLabel='Light'] - Custom label for light mode (button variant only)
 * @param {string} [props.darkLabel='Dark'] - Custom label for dark mode (button variant only)
 * @param {boolean} [props.animate=true] - Whether to enable animations
 * @param {'left' | 'right' | 'center'} [props.alignment='center'] - Text alignment for button variant
 * @param {function} [props.onToggleStart] - Callback fired when toggle animation starts
 * @param {function} [props.onToggleComplete] - Callback fired when toggle animation completes
 * @param {Object} [props.customStyles] - Custom inline styles object
 * @param {string} [props.ariaLabel] - Custom aria-label (overrides default)
 * @param {string} [props.id] - HTML id attribute
 * @param {Object} [props.dataAttributes] - Object of data-* attributes to apply
 */
export interface DarkModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Current dark mode state */
  isDarkMode: boolean;
  /** Callback function when toggle is clicked */
  onToggle: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Visual style variant of the toggle */
  variant?: 'switch' | 'button' | 'icon';
  /** Size of the toggle component */
  size?: 'small' | 'medium' | 'large';
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Whether to show text labels */
  showLabels?: boolean;
  /** Icon to display in light mode */
  lightIcon?: string;
  /** Icon to display in dark mode */
  darkIcon?: string;
  /** Text label for light mode */
  lightLabel?: string;
  /** Text label for dark mode */
  darkLabel?: string;
  /** Whether to animate state transitions */
  animate?: boolean;
  /** Horizontal alignment of the toggle */
  alignment?: 'left' | 'right' | 'center';
  /** Callback fired when toggle animation starts */
  onToggleStart?: () => void;
  /** Callback fired when toggle animation completes */
  onToggleComplete?: () => void;
  /** Custom inline styles */
  customStyles?: React.CSSProperties;
  /** Accessibility label for screen readers */
  ariaLabel?: string;
  /** HTML id attribute */
  id?: string;
  /** Custom data attributes */
  dataAttributes?: Record<string, string>;
}

/**
 * ResponsiveContainer - A flexible container component that adapts to different screen sizes
 * Uses custom CSS classes instead of Tailwind CSS
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to render
 * @param {string} props.className - Additional CSS classes
 * @param {'mobile'|'tablet'|'desktop'|'full'} props.maxWidth - Maximum width breakpoint
 * @param {'25'|'50'|'75'|'85'|'95'|'auto'|'screen'} props.width - Custom width of the container
 * @param {'start'|'center'|'end'} props.align - Horizontal alignment
 * @param {boolean} props.padding - Whether to add responsive padding
 * @param {boolean} props.margin - Whether to add responsive margin
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingX - Custom horizontal padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingY - Custom vertical padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginX - Custom horizontal margin
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginY - Custom vertical margin
 * @param {'stack'|'grid'|'flex'} props.layout - Layout type for children
 * @param {'1'|'2'|'4'|'6'|'8'} props.gap - Gap between child elements (only applies to flex and grid layouts)
 * @param {'left'|'center'|'right'|'justify'} props.textAlign - Text alignment for child elements
 * @param {'start'|'center'|'end'|'stretch'|'baseline'} props.alignItems - Flex align-items property (for flex layout)
 * @param {'start'|'center'|'end'|'between'|'around'|'evenly'} props.justifyContent - Flex justify-content property (for flex layout)
 * @param {'row'|'column'|'row-reverse'|'column-reverse'} props.flexDirection - Flex direction (for flex layout)
 * @param {'nowrap'|'wrap'|'wrap-reverse'} props.flexWrap - Flex wrap property (for flex layout)
 * @param {boolean} props.darkBackground - Dark mode background variants
 * @param {boolean} props.modal - Whether to render as a modal
 * @param {boolean} props.modalOpen - Whether the modal is open (required if modal=true)
 * @param {Function} props.onModalClose - Callback when modal should close (required if modal=true)
 * @param {boolean} props.modalCloseOnBackdrop - Whether clicking backdrop closes modal (default: true)
 * @param {boolean} props.modalCloseOnEscape - Whether pressing Escape closes modal (default: true)
 * @param {'sm'|'md'|'lg'|'xl'|'full'} props.modalSize - Modal size variant
 * @param {'center'|'top'|'bottom'} props.modalPosition - Modal position on screen
 * @param {boolean} props.modalBlurBackdrop - Whether to blur the backdrop
 */
export declare const ResponsiveContainer: React.FC<ResponsiveContainerProps>;

/**
 * ResponsiveGrid - A flexible grid component that adapts columns based on screen size
 * Uses custom CSS classes instead of Tailwind CSS
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to render
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.cols - Default number of columns (1-12)
 * @param {number} props.smCols - Columns on small screens (640px+)
 * @param {number} props.mdCols - Columns on medium screens (768px+)
 * @param {number} props.lgCols - Columns on large screens (1024px+)
 * @param {number} props.xlCols - Columns on extra large screens (1280px+)
 * @param {'1'|'2'|'4'|'6'|'8'|'10'|'12'} props.gap - Gap between grid items
 * @param {'start'|'center'|'end'|'stretch'} props.alignItems - Vertical alignment
 * @param {'start'|'center'|'end'|'between'} props.justifyItems - Horizontal alignment
 * @param {boolean} props.autoFit - Whether to use auto-fit instead of fixed columns
 * @param {'sm'|'md'|'lg'} props.autoFitSize - Size variant for auto-fit (sm=200px, md=250px, lg=300px)
 */
export declare const ResponsiveGrid: React.FC<ResponsiveGridProps>;

/**
 * ResponsiveText - A text component that scales typography across different screen sizes
 * Uses custom CSS classes instead of Tailwind CSS
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span'|'div'} props.as - HTML element to render
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'} props.size - Base text size
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'} props.smSize - Text size on small screens
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'} props.mdSize - Text size on medium screens
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'} props.lgSize - Text size on large screens
 * @param {'thin'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black'} props.weight - Font weight
 * @param {'left'|'center'|'right'|'justify'} props.align - Text alignment
 * @param {'left'|'center'|'right'|'justify'} props.smAlign - Text alignment on small screens
 * @param {'left'|'center'|'right'|'justify'} props.mdAlign - Text alignment on medium screens
 * @param {'left'|'center'|'right'|'justify'} props.lgAlign - Text alignment on large screens
 * @param {'tight'|'snug'|'normal'|'relaxed'|'loose'} props.leading - Line height
 * @param {'gray-50'|'gray-100'|'gray-200'|'gray-300'|'gray-400'|'gray-500'|'gray-600'|'gray-700'|'gray-800'|'gray-900'|'white'|'black'} props.color - Text color
 * @param {'gray-50'|'gray-100'|'gray-200'|'gray-300'|'gray-400'|'gray-500'|'gray-600'|'gray-700'|'gray-800'|'gray-900'|'white'|'black'} props.darkColor - Text color for dark mode
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingX - Custom horizontal padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingY - Custom vertical padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginX - Custom horizontal margin
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginY - Custom vertical margin
 * @param {string} props.className - Additional CSS classes
 */
export declare const ResponsiveText: React.FC<ResponsiveTextProps>;

/**
 * DarkModeToggle - A sleek animated button component for toggling dark mode
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isDarkMode - Current dark mode state
 * @param {function} props.onToggle - Function to toggle dark mode
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {'switch' | 'button' | 'icon'} [props.variant='switch'] - Toggle variant style
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Component size
 * @param {boolean} [props.disabled=false] - Whether the toggle is disabled
 * @param {boolean} [props.showLabels=true] - Whether to show sun/moon labels (switch variant only)
 * @param {string} [props.lightIcon='☀️'] - Custom icon for light mode
 * @param {string} [props.darkIcon='🌙'] - Custom icon for dark mode
 * @param {string} [props.lightLabel='Light'] - Custom label for light mode (button variant only)
 * @param {string} [props.darkLabel='Dark'] - Custom label for dark mode (button variant only)
 * @param {boolean} [props.animate=true] - Whether to enable animations
 * @param {'left' | 'right' | 'center'} [props.alignment='center'] - Text alignment for button variant
 * @param {function} [props.onToggleStart] - Callback fired when toggle animation starts
 * @param {function} [props.onToggleComplete] - Callback fired when toggle animation completes
 * @param {Object} [props.customStyles] - Custom inline styles object
 * @param {string} [props.ariaLabel] - Custom aria-label (overrides default)
 * @param {string} [props.id] - HTML id attribute
 * @param {Object} [props.dataAttributes] - Object of data-* attributes to apply
 * 
 * 
 * useDarkModeAdvanced - Enhanced version of useDarkMode with more options
 * Note: Uses in-memory storage instead of localStorage for Claude.ai compatibility
 * 
 * @param {Object} [options] - Configuration options
 * @param {boolean} [options.defaultValue=false] - Default dark mode state when no system preference is available
 * @param {boolean} [options.respectSystemPreference=true] - Whether to respect the user's system color scheme preference
 * @param {boolean} [options.watchSystemChanges=true] - Whether to listen for system theme changes
 * @param {function} [options.onChange] - Callback fired when dark mode state changes
 * @param {string} [options.documentClass='dark'] - CSS class to apply to document element in dark mode
 * @param {string} [options.lightClass='auto-dark'] - CSS class to apply to document element in light mode
 * @param {boolean} [options.applyToBody=false] - Whether to also apply classes to document body
 * @param {Object} [options.customClasses] - Custom classes to apply { dark: 'custom-dark', light: 'custom-light' }
 * @returns {Object} - { isDarkMode, toggleDarkMode, setDarkMode, systemPreference }
 */
export declare const DarkModeToggle: React.FC<DarkModeToggleProps>;

/**
 * ResponsiveButton - A flexible button component that adapts to different screen sizes and contexts
 * 
 * A highly customizable button component that provides responsive design capabilities,
 * multiple variants, flexible sizing options, loading states, icon support, and accessibility features.
 * Uses custom CSS classes instead of Tailwind CSS for maximum compatibility.
 * 
 * @param {React.ReactNode} [children] - Text or elements to display inside the button
 * @param {string} [className=''] - Additional CSS classes to apply to the button for custom styling
 * @param {'primary'|'secondary'|'tertiary'|'danger'|'success'|'warning'|'info'|'ghost'|'outline'} [variant='primary'] - Button style variant
 *   - primary: Main action button with prominent styling
 *   - secondary: Secondary action with less prominent styling
 *   - tertiary: Subtle button for minor actions
 *   - danger: Destructive action (delete, remove, etc.)
 *   - success: Positive action (save, confirm, etc.)
 *   - warning: Cautionary action (proceed with caution)
 *   - info: Informational action (help, details, etc.)
 *   - ghost: Minimal styling, text-only appearance
 *   - outline: Border-only styling with transparent background
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} [size='md'] - Button size variant
 *   - xs: Extra small (height: 24px, padding: 4px 8px, font-size: 12px)
 *   - sm: Small (height: 32px, padding: 6px 12px, font-size: 14px)
 *   - md: Medium (height: 40px, padding: 8px 16px, font-size: 16px)
 *   - lg: Large (height: 48px, padding: 12px 24px, font-size: 18px)
 *   - xl: Extra large (height: 56px, padding: 16px 32px, font-size: 20px)
 * @param {'auto'|'full'|'fit'} [width='auto'] - Button width behavior
 *   - auto: Width determined by content and padding
 *   - full: Full width of parent container (100%)
 *   - fit: Fit content with minimal padding
 * @param {'square'|'rounded'|'pill'|'sharp'} [shape='rounded'] - Button border radius style
 *   - square: No border radius (sharp corners)
 *   - rounded: Standard border radius (4-8px depending on size)
 *   - pill: Fully rounded ends (border-radius: 9999px)
 *   - sharp: Sharp corners with minimal radius (2px)
 * @param {boolean} [disabled=false] - Whether the button is disabled and non-interactive
 * @param {boolean} [loading=false] - Whether to show loading state with spinner
 * @param {string} [loadingText] - Text to display while loading (defaults to children if not provided)
 * @param {React.ReactNode} [leftIcon] - Icon to display on the left side of the button text
 * @param {React.ReactNode} [rightIcon] - Icon to display on the right side of the button text
 * @param {boolean} [iconOnly=false] - Whether this is an icon-only button (no text)
 * @param {'start'|'center'|'end'|'between'|'around'} [justify='center'] - Horizontal alignment of button content
 *   - start: Align content to the left/start
 *   - center: Center content horizontally
 *   - end: Align content to the right/end
 *   - between: Space content with equal gaps between
 *   - around: Space content with equal space around each item
 * @param {'top'|'center'|'bottom'|'baseline'|'stretch'} [align='center'] - Vertical alignment of button content
 *   - top: Align content to the top
 *   - center: Center content vertically
 *   - bottom: Align content to the bottom
 *   - baseline: Align content to baseline
 *   - stretch: Stretch content to full height
 * @param {'button'|'submit'|'reset'} [type='button'] - HTML button type attribute
 * @param {string} [ariaLabel] - Accessibility label for screen readers (especially important for icon-only buttons)
 * @param {string} [ariaDescribedBy] - ID of element that describes the button
 * @param {boolean} [ariaPressed] - Whether the button is in a pressed state (for toggle buttons)
 * @param {boolean} [ariaExpanded] - Whether the button controls an expanded element (for dropdown triggers)
 * @param {string} [tabIndex] - Tab order for keyboard navigation
 * @param {boolean} [autoFocus=false] - Whether to automatically focus the button when component mounts
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [marginX] - Custom horizontal margin
 *   - 1: 4px horizontal margin
 *   - 2: 8px horizontal margin
 *   - 4: 16px horizontal margin
 *   - 6: 24px horizontal margin
 *   - 8: 32px horizontal margin
 *   - 12: 48px horizontal margin
 *   - 16: 64px horizontal margin
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [marginY] - Custom vertical margin
 *   - 1: 4px vertical margin
 *   - 2: 8px vertical margin
 *   - 4: 16px vertical margin
 *   - 6: 24px vertical margin
 *   - 8: 32px vertical margin
 *   - 12: 48px vertical margin
 *   - 16: 64px vertical margin
 * @param {boolean} [responsive=true] - Whether to adjust size and spacing on different screen sizes
 * @param {'mobile'|'tablet'|'desktop'} [responsiveBreakpoint='tablet'] - Screen size at which responsive adjustments take effect
 *   - mobile: Adjustments apply to mobile screens and up
 *   - tablet: Adjustments apply to tablet screens and up
 *   - desktop: Adjustments apply to desktop screens only
 * @param {boolean} [darkMode=false] - Whether to use dark mode styling variants
 * @param {boolean} [elevate=false] - Whether to add shadow/elevation effect
 * @param {'none'|'sm'|'md'|'lg'|'xl'} [elevation='none'] - Shadow elevation level (only applies if elevate=true)
 *   - none: No shadow
 *   - sm: Small shadow (2px blur)
 *   - md: Medium shadow (4px blur)
 *   - lg: Large shadow (8px blur)
 *   - xl: Extra large shadow (16px blur)
 * @param {boolean} [ripple=false] - Whether to show ripple effect on click (material design style)
 * @param {number} [debounceMs=0] - Milliseconds to debounce click events (prevents rapid clicking)
 * @param {Function} [onClick] - Click event handler
 *   - Receives (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param {Function} [onFocus] - Focus event handler
 *   - Receives (event: React.FocusEvent<HTMLButtonElement>) => void
 * @param {Function} [onBlur] - Blur event handler
 *   - Receives (event: React.FocusEvent<HTMLButtonElement>) => void
 * @param {Function} [onKeyDown] - Key down event handler
 *   - Receives (event: React.KeyboardEvent<HTMLButtonElement>) => void
 * @param {Function} [onMouseEnter] - Mouse enter event handler
 *   - Receives (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param {Function} [onMouseLeave] - Mouse leave event handler
 *   - Receives (event: React.MouseEvent<HTMLButtonElement>) => void
 * @param {...Object} props - Additional HTML button attributes passed through to the button element
 * 
 * @returns {React.ReactElement} The rendered button component
 * 
 * @example
 * // Basic primary button
 * <ResponsiveButton variant="primary" onClick={handleSubmit}>
 *   Submit Form
 * </ResponsiveButton>
 * 
 * @example
 * // Loading button with custom text
 * <ResponsiveButton 
 *   variant="secondary" 
 *   loading={isSubmitting}
 *   loadingText="Saving..."
 *   disabled={isSubmitting}
 * >
 *   Save Changes
 * </ResponsiveButton>
 * 
 * @example
 * // Icon button with accessibility
 * <ResponsiveButton
 *   variant="ghost"
 *   iconOnly={true}
 *   leftIcon={<CloseIcon />}
 *   ariaLabel="Close dialog"
 *   shape="pill"
 *   size="sm"
 * />
 * 
 * @example
 * // Full-width button with icons
 * <ResponsiveButton
 *   variant="primary"
 *   width="full"
 *   size="lg"
 *   leftIcon={<DownloadIcon />}
 *   rightIcon={<ArrowRightIcon />}
 *   elevate={true}
 *   elevation="md"
 * >
 *   Download Report
 * </ResponsiveButton>
 * 
 * @example
 * // Responsive button with custom spacing
 * <ResponsiveButton
 *   variant="outline"
 *   size="md"
 *   responsive={true}
 *   responsiveBreakpoint="tablet"
 *   marginX="4"
 *   marginY="2"
 *   debounceMs={300}
 * >
 *   Click Me
 * </ResponsiveButton>
 * 
 * @example
 * // Danger button with confirmation
 * <ResponsiveButton
 *   variant="danger"
 *   size="md"
 *   shape="rounded"
 *   leftIcon={<DeleteIcon />}
 *   onClick={handleDelete}
 *   ariaLabel="Delete item permanently"
 * >
 *   Delete Item
 * </ResponsiveButton>
 * 
 * @example
 * // Toggle button with pressed state
 * <ResponsiveButton
 *   variant="secondary"
 *   ariaPressed={isToggled}
 *   onClick={handleToggle}
 *   leftIcon={isToggled ? <StarFilledIcon /> : <StarOutlineIcon />}
 * >
 *   {isToggled ? 'Favorited' : 'Add to Favorites'}
 * </ResponsiveButton>
 * 
 * @example
 * // Dark mode elevated button
 * <ResponsiveButton
 *   variant="primary"
 *   darkMode={true}
 *   elevate={true}
 *   elevation="lg"
 *   ripple={true}
 *   shape="pill"
 *   size="lg"
 * >
 *   Get Started
 * </ResponsiveButton>
 */

export declare const ResponsiveButton: React.FC<ResponsiveButtonProps>;


declare const _default: {
  ResponsiveContainer: React.FC<ResponsiveContainerProps>;
  ResponsiveGrid: React.FC<ResponsiveGridProps>;
  ResponsiveText: React.FC<ResponsiveTextProps>;
  DarkModeToggle: React.FC<DarkModeToggleProps>;
  ResponsiveButton: React.FC<ResponsiveButtonProps>;
};

export default _default;