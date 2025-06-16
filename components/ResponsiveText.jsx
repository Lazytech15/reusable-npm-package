import React from 'react';
import '../style.css'

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
const ResponsiveText = ({
  children,
  as: Element = 'p',
  size = 'md',
  smSize,
  mdSize,
  lgSize,
  weight = 'normal',
  align = 'left',
  smAlign,
  mdAlign,
  lgAlign,
  leading = 'normal',
  color = 'gray-900',
  darkColor,
  paddingX,
  paddingY,
  marginX,
  marginY,
  className = '',
  ...restProps // All other props that should be passed to DOM element
}) => {
  // Filter out custom props that shouldn't be passed to DOM
  const {
    // Remove any props that might cause issues - add more as needed
    ...domProps
  } = restProps;

  // Combine all classes
  const textClasses = [
    'responsive-text', // Base class
    `responsive-text--${size}`, // Base size
    smSize && `responsive-text--sm-${smSize}`, // Small screen size
    mdSize && `responsive-text--md-${mdSize}`, // Medium screen size
    lgSize && `responsive-text--lg-${lgSize}`, // Large screen size
    `responsive-text--${weight}`, // Font weight
    `responsive-text--${align}`, // Base alignment
    smAlign && `responsive-text--sm-${smAlign}`, // Small screen alignment
    mdAlign && `responsive-text--md-${mdAlign}`, // Medium screen alignment
    lgAlign && `responsive-text--lg-${lgAlign}`, // Large screen alignment
    `responsive-text--leading-${leading}`, // Line height
    `responsive-text--${color}`, // Text color
    darkColor && `responsive-text--dark-${darkColor}`, // Dark mode color
    // Custom spacing
    paddingX && `responsive-text--padding-x-${paddingX}`,
    paddingY && `responsive-text--padding-y-${paddingY}`,
    marginX && `responsive-text--margin-x-${marginX}`,
    marginY && `responsive-text--margin-y-${marginY}`,
    className // Additional custom classes
  ].filter(Boolean).join(' ');

  return (
    <Element className={textClasses} {...domProps}>
      {children}
    </Element>
  );
};

export default ResponsiveText;

{/* <ResponsiveText 
  as="h1" 
  size="2xl" 
  mdSize="4xl" 
  weight="bold" 
  color="gray-800"
  align="center"
>
  Your responsive heading
</ResponsiveText> */}

// Header with custom vertical spacing
{/* <ResponsiveText 
  as="h1" 
  size="3xl" 
  weight="bold" 
  marginY="8" 
  paddingX="4"
>
  Main Title
</ResponsiveText>

// Paragraph with custom horizontal padding
<ResponsiveText 
  as="p" 
  size="lg" 
  paddingX="6" 
  marginY="2"
>
  This paragraph has custom horizontal padding and vertical margin.
</ResponsiveText>

// Span with all custom spacing
<ResponsiveText 
  as="span" 
  size="sm" 
  color="gray-600"
  paddingX="2" 
  paddingY="1" 
  marginX="4" 
  marginY="1"
>
  Small text with full custom spacing
</ResponsiveText>

// Centered text with large vertical margins
<ResponsiveText 
  as="h2" 
  size="2xl" 
  smSize="3xl" 
  weight="semibold" 
  align="center"
  marginY="12"
  paddingY="4"
>
  Section Header
</ResponsiveText> */}