import React, { useEffect } from 'react';
import '../style.css'

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
  // New alignment props
  textAlign,
  alignItems,
  justifyContent,
  flexDirection = 'column',
  flexWrap = 'nowrap',
  darkBackground = false,
  modal = false,
  modalOpen = false,
  onModalClose,
  modalCloseOnBackdrop = true,
  modalCloseOnEscape = true,
  modalSize = 'md',
  modalPosition = 'center',
  modalBlurBackdrop = false,
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
    // Use custom padding/margin if provided, otherwise use default responsive padding/margin
    paddingX && `responsive-container--padding-x-${paddingX}`,
    paddingY && `responsive-container--padding-y-${paddingY}`,
    marginX && `responsive-container--margin-x-${marginX}`,
    marginY && `responsive-container--margin-y-${marginY}`,
    // Only apply default padding/margin if custom ones aren't specified
    (!paddingX && !paddingY && padding) && 'responsive-container--padding',
    (!marginX && !marginY && margin && !modal) && 'responsive-container--margin', // No default margin for modal
    `responsive-container--${layout}`, // Layout type
    // Gap class (only for flex and grid layouts)
    (layout === 'flex' || layout === 'grid') && `responsive-container--gap-${gap}`,
    // Text alignment
    textAlign && `responsive-container--text-${textAlign}`,
    // Flex alignment properties (only for flex layout)
    layout === 'flex' && alignItems && `responsive-container--align-items-${alignItems}`,
    layout === 'flex' && justifyContent && `responsive-container--justify-${justifyContent}`,
    layout === 'flex' && flexDirection && `responsive-container--flex-${flexDirection}`,
    layout === 'flex' && flexWrap && `responsive-container--flex-wrap-${flexWrap}`,
    darkBackground && 'responsive-container--dark-bg', // Dark background variant
    // Modal specific classes
    modal && 'responsive-container--modal',
    modal && `responsive-container--modal-${modalSize}`,
    modal && `responsive-container--modal-${modalPosition}`,
    className // Additional custom classes
  ].filter(Boolean).join(' ');

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
        <div className={containerClasses} {...props}>
          {children}
        </div>
      </div>
    );
  }

  // Regular container
  return (
    <div className={containerClasses} {...props}>
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