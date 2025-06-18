import React, { useEffect } from 'react';
import '../style.css'

/**
 * ResponsiveContainer - A fully customizable container component that adapts to different screen sizes
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
 * @param {'0'|'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingX - Custom horizontal padding
 * @param {'0'|'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.paddingY - Custom vertical padding
 * @param {'0'|'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginX - Custom horizontal margin
 * @param {'0'|'1'|'2'|'4'|'6'|'8'|'12'|'16'} props.marginY - Custom vertical margin
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
 * @param {'none'|'sm'|'md'|'lg'|'xl'|'full'} props.radius - Border radius variant
 * 
 * // NEW STYLING PROPS
 * @param {'none'|'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'} props.shadow - Box shadow variant
 * @param {'white'|'gray-50'|'gray-100'|'gray-200'|'gray-300'|'gray-400'|'gray-500'|'gray-600'|'gray-700'|'gray-800'|'gray-900'|'black'|'primary'|'secondary'|'accent'|'success'|'warning'|'error'|'info'|'transparent'} props.background - Background color variant
 * @param {'1'|'2'|'3'|'4'|'5'|'6'|'8'} props.border - Border width
 * @param {'gray-200'|'gray-300'|'gray-400'|'gray-500'|'gray-600'|'primary'|'secondary'|'accent'|'success'|'warning'|'error'|'info'} props.borderColor - Border color variant
 * @param {'solid'|'dashed'|'dotted'|'double'} props.borderStyle - Border style
 * @param {'auto'|'50'|'75'|'100'|'125'|'150'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'full'|'screen'} props.height - Height variant
 * @param {'auto'|'50'|'75'|'100'|'125'|'150'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'full'|'screen'} props.minHeight - Minimum height variant
 * @param {'auto'|'50'|'75'|'100'|'125'|'150'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'full'|'screen'} props.maxHeight - Maximum height variant
 * @param {'visible'|'hidden'|'scroll'|'auto'} props.overflow - Overflow behavior
 * @param {'visible'|'hidden'|'scroll'|'auto'} props.overflowX - Horizontal overflow behavior
 * @param {'visible'|'hidden'|'scroll'|'auto'} props.overflowY - Vertical overflow behavior
 * @param {'static'|'relative'|'absolute'|'fixed'|'sticky'} props.position - CSS position property
 * @param {'0'|'1'|'2'|'3'|'4'|'5'|'10'|'20'|'30'|'40'|'50'|'auto'} props.zIndex - Z-index value
 * @param {string} props.top - Top position (CSS value like '10px', '1rem', '50%')
 * @param {string} props.right - Right position (CSS value)
 * @param {string} props.bottom - Bottom position (CSS value)
 * @param {string} props.left - Left position (CSS value)
 * @param {'0'|'25'|'50'|'75'|'90'|'95'|'100'} props.opacity - Opacity level
 * @param {'none'|'hover'|'focus'|'active'} props.transition - Transition effects
 * @param {'1'|'1.05'|'1.1'|'1.2'} props.hoverScale - Scale on hover
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'} props.hoverShadow - Shadow on hover
 * @param {string} props.hoverBackground - Background color on hover
 */
const ResponsiveContainer = ({
  children,
  className = '',
  maxWidth = 'full',
  width,
  align = 'center',
  padding = true,
  margin = true,
  paddingX,
  paddingY,
  marginX,
  marginY,
  layout = 'stack',
  gap = '4',
  radius = 'none',
  // Alignment props
  textAlign,
  alignItems,
  justifyContent,
  flexDirection = 'column',
  flexWrap = 'nowrap',
  darkBackground = false,
  // Modal props
  modal = false,
  modalOpen = false,
  onModalClose,
  modalCloseOnBackdrop = true,
  modalCloseOnEscape = true,
  modalSize = 'md',
  modalPosition = 'center',
  modalBlurBackdrop = false,
  // NEW STYLING PROPS
  shadow,
  background,
  border,
  borderColor,
  borderStyle = 'solid',
  height,
  minHeight,
  maxHeight,
  overflow,
  overflowX,
  overflowY,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  opacity,
  transition,
  hoverScale,
  hoverShadow,
  hoverBackground,
  ...props
}) => {
  // Handle escape key press for modal
  useEffect(() => {
    if (modal && modalOpen && modalCloseOnEscape && onModalClose) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onModalClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [modal, modalOpen, modalCloseOnEscape, onModalClose]);

  // Handle body scroll lock for modal
  useEffect(() => {
    if (modal && modalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [modal, modalOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (modalCloseOnBackdrop && onModalClose && e.target === e.currentTarget) {
      onModalClose();
    }
  };

  // Combine all classes for the container
  const containerClasses = [
    'responsive-container', // Base class
    !modal && `responsive-container--${maxWidth}`, // Max width (not for modal)
    !modal && width && `responsive-container--width-${width}`, // Custom width (not for modal)
    !modal && `responsive-container--align-${align}`, // Alignment (not for modal)
    
    // Spacing
    paddingX && `responsive-container--padding-x-${paddingX}`,
    paddingY && `responsive-container--padding-y-${paddingY}`,
    marginX && `responsive-container--margin-x-${marginX}`,
    marginY && `responsive-container--margin-y-${marginY}`,
    (!paddingX && !paddingY && padding) && 'responsive-container--padding',
    (!marginX && !marginY && margin && !modal) && 'responsive-container--margin',
    
    // Layout
    `responsive-container--${layout}`,
    (layout === 'flex' || layout === 'grid') && `responsive-container--gap-${gap}`,
    textAlign && `responsive-container--text-${textAlign}`,
    layout === 'flex' && alignItems && `responsive-container--align-items-${alignItems}`,
    layout === 'flex' && justifyContent && `responsive-container--justify-${justifyContent}`,
    layout === 'flex' && flexDirection && `responsive-container--flex-${flexDirection}`,
    layout === 'flex' && flexWrap && `responsive-container--flex-wrap-${flexWrap}`,
    
    // Appearance
    radius && `responsive-container--radius-${radius}`,
    shadow && `responsive-container--shadow-${shadow}`,
    background && `responsive-container--bg-${background}`,
    darkBackground && 'responsive-container--dark-bg',
    
    // Border
    border && `responsive-container--border-${border}`,
    borderColor && `responsive-container--border-${borderColor}`,
    borderStyle !== 'solid' && `responsive-container--border-${borderStyle}`,
    
    // Dimensions
    height && `responsive-container--height-${height}`,
    minHeight && `responsive-container--min-height-${minHeight}`,
    maxHeight && `responsive-container--max-height-${maxHeight}`,
    
    // Overflow
    overflow && `responsive-container--overflow-${overflow}`,
    overflowX && `responsive-container--overflow-x-${overflowX}`,
    overflowY && `responsive-container--overflow-y-${overflowY}`,
    
    // Position
    position && `responsive-container--position-${position}`,
    zIndex && `responsive-container--z-${zIndex}`,
    
    // Opacity
    opacity && `responsive-container--opacity-${opacity}`,
    
    // Transitions and Hover Effects
    transition && `responsive-container--transition-${transition}`,
    hoverScale && `responsive-container--hover-scale-${hoverScale}`,
    hoverShadow && `responsive-container--hover-shadow-${hoverShadow}`,
    hoverBackground && `responsive-container--hover-bg-${hoverBackground}`,
    
    // Modal specific classes
    modal && 'responsive-container--modal',
    modal && `responsive-container--modal-${modalSize}`,
    modal && `responsive-container--modal-${modalPosition}`,
    
    className // Additional custom classes
  ].filter(Boolean).join(' ');

  // Create inline styles for position values
  const inlineStyles = {};
  if (top !== undefined) inlineStyles.top = top;
  if (right !== undefined) inlineStyles.right = right;
  if (bottom !== undefined) inlineStyles.bottom = bottom;
  if (left !== undefined) inlineStyles.left = left;

  // Combine backdrop classes
  const backdropClasses = [
    'responsive-container__modal-backdrop',
    modalBlurBackdrop && 'responsive-container__modal-backdrop--blur'
  ].filter(Boolean).join(' ');

  // If it's a modal, render with backdrop
  if (modal) {
    if (!modalOpen) return null;
    
    return (
      <div className={backdropClasses} onClick={handleBackdropClick}>
        <div 
          className={containerClasses} 
          style={inlineStyles}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }

  // Regular container
  return (
    <div 
      className={containerClasses} 
      style={inlineStyles}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;

// // Basic centered container with padding and margin
// <ResponsiveContainer maxWidth="desktop">
//   <h1>My Content</h1>
//   <p>This container adapts to screen sizes</p>
// </ResponsiveContainer>

// // Flex layout container without padding
// <ResponsiveContainer 
//   layout="flex" 
//   gap="6" 
//   padding={false}
//   align="start"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </ResponsiveContainer>

// // Grid layout with custom gap
// <ResponsiveContainer 
//   layout="grid" 
//   gap="8" 
//   maxWidth="tablet"
// >
//   <div>Grid Item 1</div>
//   <div>Grid Item 2</div>
//   <div>Grid Item 3</div>
// </ResponsiveContainer>

// // Stack layout (default) - no gap prop needed
// <ResponsiveContainer layout="stack">
//   <section>Section 1</section>
//   <section>Section 2</section>
//   <section>Section 3</section>
// </ResponsiveContainer>

// Half width container
{/* <ResponsiveContainer width="50" maxWidth="desktop">
  Content takes 50% width with desktop max-width constraint
</ResponsiveContainer>

// Quarter width container
<ResponsiveContainer width="25" align="start">
  Content takes 25% width aligned to start
</ResponsiveContainer>

// Auto width (fits content)
<ResponsiveContainer width="auto" paddingX="8">
  Content auto-sizes with custom padding
</ResponsiveContainer>

// Full viewport width
<ResponsiveContainer width="screen" maxWidth="full">
  Content spans full viewport width
</ResponsiveContainer> */}

// Example 1: Center everything (text and elements)
{/* <ResponsiveContainer
  modal={true}
  modalOpen={isModalOpen}
  onModalClose={() => setIsModalOpen(false)}
  modalSize="sm"
  modalPosition="center"
  modalBlurBackdrop={true}
  padding={true}
  layout="flex"
  flexDirection="column"
  alignItems="center"
  textAlign="center"
  gap="4"
>
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
  <ResponsiveButton
    variant="primary"
    size="md"
    shape="rounded"
    onClick={() => setIsModalOpen(false)}
  >
    Close Modal
  </ResponsiveButton>
</ResponsiveContainer>

// Example 2: Right align everything
<ResponsiveContainer
  modal={true}
  modalOpen={isModalOpen}
  onModalClose={() => setIsModalOpen(false)}
  modalSize="sm"
  modalPosition="center"
  modalBlurBackdrop={true}
  padding={true}
  layout="flex"
  flexDirection="column"
  alignItems="end"
  textAlign="right"
  gap="4"
>
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
  <ResponsiveButton
    variant="primary"
    size="md"
    shape="rounded"
    onClick={() => setIsModalOpen(false)}
  >
    Close Modal
  </ResponsiveButton>
</ResponsiveContainer>

// Example 3: Center text but right-align button
<ResponsiveContainer
  modal={true}
  modalOpen={isModalOpen}
  onModalClose={() => setIsModalOpen(false)}
  modalSize="sm"
  modalPosition="center"
  modalBlurBackdrop={true}
  padding={true}
  layout="flex"
  flexDirection="column"
  textAlign="center"
  gap="4"
>
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
  
  <ResponsiveContainer
    layout="flex"
    justifyContent="end"
  >
    <ResponsiveButton
      variant="primary"
      size="md"
      shape="rounded"
      onClick={() => setIsModalOpen(false)}
    >
      Close Modal
    </ResponsiveButton>
  </ResponsiveContainer>
</ResponsiveContainer>

// Example 4: Space between elements (title at top, button at bottom)
<ResponsiveContainer
  modal={true}
  modalOpen={isModalOpen}
  onModalClose={() => setIsModalOpen(false)}
  modalSize="sm"
  modalPosition="center"
  modalBlurBackdrop={true}
  padding={true}
  layout="flex"
  flexDirection="column"
  justifyContent="between"
  textAlign="center"
  className="min-h-96" // Add minimum height for space-between to work
>
  <div>
    <h2>Modal Title</h2>
    <p>Modal content goes here...</p>
  </div>
  
  <ResponsiveButton
    variant="primary"
    size="md"
    shape="rounded"
    onClick={() => setIsModalOpen(false)}
  >
    Close Modal
  </ResponsiveButton>
</ResponsiveContainer> */}