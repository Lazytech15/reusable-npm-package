import React, { useState, useEffect } from 'react';

/**
 * ResponsiveContainer - A flexible container component that adapts to different screen sizes
 * 
 * A highly customizable container component that provides responsive layout capabilities,
 * flexible sizing options, alignment controls, spacing management, and modal functionality.
 * Uses custom CSS classes instead of Tailwind CSS for maximum compatibility.
 * 
 * @param {React.ReactNode} children - Child elements to render inside the container
 * @param {string} [className=''] - Additional CSS classes to apply to the container for custom styling
 * @param {'mobile'|'tablet'|'desktop'|'full'} [maxWidth='desktop'] - Maximum width breakpoint for responsive design
 *   - mobile: Maximum width optimized for mobile devices (typically 480px)
 *   - tablet: Maximum width optimized for tablet devices (typically 768px)
 *   - desktop: Maximum width optimized for desktop devices (typically 1200px)
 *   - full: No maximum width constraint (100% of parent)
 * @param {'25'|'50'|'75'|'85'|'95'|'auto'|'screen'} [width='auto'] - Custom width of the container
 *   - 25: 25% of parent container width
 *   - 50: 50% of parent container width
 *   - 75: 75% of parent container width
 *   - 85: 85% of parent container width
 *   - 95: 95% of parent container width
 *   - auto: Width determined by content
 *   - screen: 100% of viewport width
 * @param {'start'|'center'|'end'} [align='center'] - Horizontal alignment of the container within its parent
 *   - start: Align to the left/start of parent container
 *   - center: Center horizontally within parent container
 *   - end: Align to the right/end of parent container
 * @param {boolean} [padding=true] - Whether to add responsive padding to the container
 * @param {boolean} [margin=true] - Whether to add responsive margin to the container
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [paddingX] - Custom horizontal padding override
 *   - 1: 4px horizontal padding
 *   - 2: 8px horizontal padding
 *   - 4: 16px horizontal padding
 *   - 6: 24px horizontal padding
 *   - 8: 32px horizontal padding
 *   - 12: 48px horizontal padding
 *   - 16: 64px horizontal padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [paddingY] - Custom vertical padding override
 *   - 1: 4px vertical padding
 *   - 2: 8px vertical padding
 *   - 4: 16px vertical padding
 *   - 6: 24px vertical padding
 *   - 8: 32px vertical padding
 *   - 12: 48px vertical padding
 *   - 16: 64px vertical padding
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [marginX] - Custom horizontal margin override
 *   - 1: 4px horizontal margin
 *   - 2: 8px horizontal margin
 *   - 4: 16px horizontal margin
 *   - 6: 24px horizontal margin
 *   - 8: 32px horizontal margin
 *   - 12: 48px horizontal margin
 *   - 16: 64px horizontal margin
 * @param {'1'|'2'|'4'|'6'|'8'|'12'|'16'} [marginY] - Custom vertical margin override
 *   - 1: 4px vertical margin
 *   - 2: 8px vertical margin
 *   - 4: 16px vertical margin
 *   - 6: 24px vertical margin
 *   - 8: 32px vertical margin
 *   - 12: 48px vertical margin
 *   - 16: 64px vertical margin
 * @param {'stack'|'grid'|'flex'} [layout='stack'] - Layout type for organizing child elements
 *   - stack: Vertical stacking layout (block elements, one per line)
 *   - grid: CSS Grid layout for complex 2D arrangements
 *   - flex: Flexbox layout for flexible 1D arrangements
 * @param {'1'|'2'|'4'|'6'|'8'} [gap='4'] - Gap between child elements (only applies to flex and grid layouts)
 *   - 1: 4px gap between elements
 *   - 2: 8px gap between elements
 *   - 4: 16px gap between elements
 *   - 6: 24px gap between elements
 *   - 8: 32px gap between elements
 * @param {'left'|'center'|'right'|'justify'} [textAlign='left'] - Text alignment for child elements
 *   - left: Align text to the left
 *   - center: Center text horizontally
 *   - right: Align text to the right
 *   - justify: Justify text (spread evenly across width)
 * @param {'start'|'center'|'end'|'stretch'|'baseline'} [alignItems='start'] - Flex align-items property (for flex layout)
 *   - start: Align items to the start of the cross axis
 *   - center: Center items on the cross axis
 *   - end: Align items to the end of the cross axis
 *   - stretch: Stretch items to fill the cross axis
 *   - baseline: Align items along their baseline
 * @param {'start'|'center'|'end'|'between'|'around'|'evenly'} [justifyContent='start'] - Flex justify-content property (for flex layout)
 *   - start: Pack items at the start of the main axis
 *   - center: Center items along the main axis
 *   - end: Pack items at the end of the main axis
 *   - between: Distribute items with equal space between them
 *   - around: Distribute items with equal space around them
 *   - evenly: Distribute items with equal space between and around them
 * @param {'row'|'column'|'row-reverse'|'column-reverse'} [flexDirection='row'] - Flex direction (for flex layout)
 *   - row: Arrange items horizontally from left to right
 *   - column: Arrange items vertically from top to bottom
 *   - row-reverse: Arrange items horizontally from right to left
 *   - column-reverse: Arrange items vertically from bottom to top
 * @param {'nowrap'|'wrap'|'wrap-reverse'} [flexWrap='nowrap'] - Flex wrap property (for flex layout)
 *   - nowrap: Items stay on one line (may overflow)
 *   - wrap: Items wrap to new lines as needed
 *   - wrap-reverse: Items wrap to new lines in reverse order
 * @param {boolean} [darkBackground=false] - Whether to use dark mode background variants
 * @param {boolean} [modal=false] - Whether to render the container as a modal overlay
 * @param {boolean} [modalOpen] - Whether the modal is currently open (required if modal=true)
 * @param {Function} [onModalClose] - Callback function when modal should close (required if modal=true)
 *   - Receives no parameters
 *   - Called when user clicks backdrop, presses Escape, or triggers close action
 * @param {boolean} [modalCloseOnBackdrop=true] - Whether clicking the backdrop closes the modal
 * @param {boolean} [modalCloseOnEscape=true] - Whether pressing the Escape key closes the modal
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [modalSize='md'] - Modal size variant when rendered as modal
 *   - sm: Small modal (max-width: 400px)
 *   - md: Medium modal (max-width: 600px)
 *   - lg: Large modal (max-width: 800px)
 *   - xl: Extra large modal (max-width: 1200px)
 *   - full: Full screen modal (100% viewport dimensions)
 * @param {'center'|'top'|'bottom'} [modalPosition='center'] - Modal position on screen when rendered as modal
 *   - center: Vertically and horizontally centered
 *   - top: Positioned at the top of the viewport
 *   - bottom: Positioned at the bottom of the viewport
 * @param {boolean} [modalBlurBackdrop=false] - Whether to apply blur effect to the backdrop behind the modal
 * @param {...Object} props - Additional HTML div attributes passed through to the container element
 * 
 * @returns {React.ReactElement} The rendered container component
 * 
 * @example
 * // Basic responsive container
 * <ResponsiveContainer maxWidth="desktop">
 *   <h1>Welcome to our site</h1>
 *   <p>This content will be responsive across devices.</p>
 * </ResponsiveContainer>
 * 
 * @example
 * // Flexbox layout with custom spacing
 * <ResponsiveContainer 
 *   layout="flex" 
 *   flexDirection="row" 
 *   justifyContent="between"
 *   gap="4"
 * >
 *   <button>Cancel</button>
 *   <button>Save</button>
 * </ResponsiveContainer>
 * 
 * @example
 * // Modal container
 * <ResponsiveContainer
 *   modal={true}
 *   modalOpen={isModalOpen}
 *   onModalClose={() => setIsModalOpen(false)}
 *   modalSize="lg"
 *   modalPosition="center"
 *   modalBlurBackdrop={true}
 * >
 *   <h2>Modal Content</h2>
 *   <p>This is displayed in a modal overlay.</p>
 * </ResponsiveContainer>
 * 
 * @example
 * // Grid layout with dark background
 * <ResponsiveContainer
 *   layout="grid"
 *   darkBackground={true}
 *   paddingX="8"
 *   paddingY="6"
 *   gap="6"
 * >
 *   <div>Grid Item 1</div>
 *   <div>Grid Item 2</div>
 *   <div>Grid Item 3</div>
 * </ResponsiveContainer>
 * 
 * @example
 * // Centered content with custom width
 * <ResponsiveContainer
 *   width="75"
 *   align="center"
 *   textAlign="center"
 *   paddingY="12"
 * >
 *   <h1>Centered Content</h1>
 *   <p>This content is centered and takes up 75% width.</p>
 * </ResponsiveContainer>
 */
const ResponsiveButton = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  width = 'auto',
  justify = 'start',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  type = 'button',
  onClick,
  shadow = false,
  uppercase = false,
  align = 'center',
  darkMode = false,
  loadingText,
  actionType = 'default',
  successMessage,
  errorMessage,
  feedbackDuration = 3000,
  onActionComplete,
  showSuccess = false,
  showError = false,
  position = 'static',
  placement,
  top,
  right,
  bottom,
  left,
  zIndex,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  ...props
}) => {
  const [currentVariant, setCurrentVariant] = useState(variant);
  const [currentContent, setCurrentContent] = useState(children);
  const [isShowingFeedback, setIsShowingFeedback] = useState(false);

  // Reset states when variant prop changes
  useEffect(() => {
    if (!isShowingFeedback) {
      setCurrentVariant(variant);
      setCurrentContent(children);
    }
  }, [variant, children, isShowingFeedback]);

  // Handle success state trigger
  useEffect(() => {
    if (showSuccess && !disabled && !isShowingFeedback) {
      handleSuccess();
    }
  }, [showSuccess]);

  // Handle error state trigger
  useEffect(() => {
    if (showError && !disabled && !isShowingFeedback) {
      handleError();
    }
  }, [showError]);

  // Handle success state
  const handleSuccess = () => {
    if (disabled) return;
    
    setIsShowingFeedback(true);
    setCurrentVariant('success');
    if (successMessage) {
      setCurrentContent(successMessage);
    }

    setTimeout(() => {
      setCurrentVariant(variant);
      setCurrentContent(children);
      setIsShowingFeedback(false);
      if (onActionComplete) {
        onActionComplete('success');
      }
    }, feedbackDuration);
  };

  // Handle error state
  const handleError = () => {
    if (disabled) return;
    
    setIsShowingFeedback(true);
    setCurrentVariant('danger');
    if (errorMessage) {
      setCurrentContent(errorMessage);
    }

    setTimeout(() => {
      setCurrentVariant(variant);
      setCurrentContent(children);
      setIsShowingFeedback(false);
      if (onActionComplete) {
        onActionComplete('error');
      }
    }, feedbackDuration);
  };

  // Handle click events
  const handleClick = (e) => {
    if (disabled || loading || isShowingFeedback) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Get action-specific icons
  const getActionIcon = () => {
    if (loading) return null;
    if (leftIcon) return leftIcon;
    
    switch (actionType) {
      case 'send':
        return <SendIcon />;
      case 'upload':
        return <UploadIcon />;
      case 'delete':
        return <DeleteIcon />;
      case 'edit':
        return <EditIcon />;
      case 'save':
        return <SaveIcon />;
      default:
        return null;
    }
  };

  // Build positioning styles
  const getPositionStyles = () => {
    const styles = {};
    
    // Set position
    if (position !== 'static') {
      styles.position = position;
    }

    // Handle predefined placements for absolute/fixed positioned elements
    if ((position === 'absolute' || position === 'fixed') && placement && placement !== 'custom') {
      switch (placement) {
        case 'top-left':
          styles.top = top || 0;
          styles.left = left || 0;
          break;
        case 'top-center':
          styles.top = top || 0;
          styles.left = left || '50%';
          styles.transform = 'translateX(-50%)';
          break;
        case 'top-right':
          styles.top = top || 0;
          styles.right = right || 0;
          break;
        case 'center-left':
          styles.top = top || '50%';
          styles.left = left || 0;
          styles.transform = 'translateY(-50%)';
          break;
        case 'center':
          styles.top = top || '50%';
          styles.left = left || '50%';
          styles.transform = 'translate(-50%, -50%)';
          break;
        case 'center-right':
          styles.top = top || '50%';
          styles.right = right || 0;
          styles.transform = 'translateY(-50%)';
          break;
        case 'bottom-left':
          styles.bottom = bottom || 0;
          styles.left = left || 0;
          break;
        case 'bottom-center':
          styles.bottom = bottom || 0;
          styles.left = left || '50%';
          styles.transform = 'translateX(-50%)';
          break;
        case 'bottom-right':
          styles.bottom = bottom || 0;
          styles.right = right || 0;
          break;
      }
    } else {
      // Handle custom positioning
      if (top !== undefined) styles.top = typeof top === 'number' ? `${top}px` : top;
      if (right !== undefined) styles.right = typeof right === 'number' ? `${right}px` : right;
      if (bottom !== undefined) styles.bottom = typeof bottom === 'number' ? `${bottom}px` : bottom;
      if (left !== undefined) styles.left = typeof left === 'number' ? `${left}px` : left;
    }

    // Set z-index
    if (zIndex !== undefined) {
      styles.zIndex = zIndex;
    }

    // Handle margins
    if (margin !== undefined) {
      styles.margin = typeof margin === 'number' ? `${margin}px` : margin;
    } else {
      // Handle individual margin properties
      if (marginTop !== undefined) styles.marginTop = typeof marginTop === 'number' ? `${marginTop}px` : marginTop;
      if (marginRight !== undefined) styles.marginRight = typeof marginRight === 'number' ? `${marginRight}px` : marginRight;
      if (marginBottom !== undefined) styles.marginBottom = typeof marginBottom === 'number' ? `${marginBottom}px` : marginBottom;
      if (marginLeft !== undefined) styles.marginLeft = typeof marginLeft === 'number' ? `${marginLeft}px` : marginLeft;
      
      // Handle axis-based margins (will override individual margins if both are set)
      if (marginX !== undefined) {
        const marginXValue = typeof marginX === 'number' ? `${marginX}px` : marginX;
        styles.marginLeft = marginXValue;
        styles.marginRight = marginXValue;
      }
      if (marginY !== undefined) {
        const marginYValue = typeof marginY === 'number' ? `${marginY}px` : marginY;
        styles.marginTop = marginYValue;
        styles.marginBottom = marginYValue;
      }
    }

    return styles;
  };

  // Build container styles for width="container"
  const getContainerStyles = () => {
    const styles = {
      width: '100%',
      display: 'flex'
    };

    // Set justify-content based on justify prop
    switch (justify) {
      case 'start':
        styles.justifyContent = 'flex-start';
        break;
      case 'end':
        styles.justifyContent = 'flex-end';
        break;
      case 'center':
        styles.justifyContent = 'center';
        break;
      case 'space-between':
        styles.justifyContent = 'space-between';
        break;
      case 'space-around':
        styles.justifyContent = 'space-around';
        break;
      case 'space-evenly':
        styles.justifyContent = 'space-evenly';
        break;
      default:
        styles.justifyContent = 'flex-start';
    }

    return styles;
  };

  // Build CSS classes
  const buttonClasses = [
    'button',
    `button--variant-${currentVariant}`,
    `button--size-${size}`,
    `button--shape-${shape}`,
    `button--width-${width}`,
    `button--align-${align}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
    shadow && 'button--shadow',
    uppercase && 'button--uppercase',
    darkMode && `button--dark`,
    isShowingFeedback && 'button--feedback',
    position !== 'static' && `button--position-${position}`,
    placement && `button--placement-${placement}`,
    className
  ].filter(Boolean).join(' ');

  // Render button content
  const buttonContent = (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled || loading || isShowingFeedback}
      onClick={handleClick}
      style={getPositionStyles()}
      {...props}
    >
      {loading && (
        <span className="button__spinner" aria-hidden="true">
          <span className="button__spinner-circle"></span>
        </span>
      )}
      
      {!loading && (leftIcon || getActionIcon()) && (
        <span className="button__icon button__icon--left" aria-hidden="true">
          {leftIcon || getActionIcon()}
        </span>
      )}
      
      <span className={`button__content ${loading ? 'button__content--loading' : ''}`}>
        {loading && loadingText ? loadingText : currentContent}
      </span>
      
      {rightIcon && !loading && (
        <span className="button__icon button__icon--right" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );

  // If width is 'container', wrap in a container div
  if (width === 'container') {
    return (
      <div 
        className={`button-container button-container--justify-${justify}`}
        style={getContainerStyles()}
      >
        {buttonContent}
      </div>
    );
  }

  // Otherwise, return the button directly
  return buttonContent;
};

// Simple icon components for demonstration
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22,2 15,22 11,13 2,9"></polygon>
  </svg>
);

const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,5 17,10"></polyline>
    <line x1="12" y1="5" x2="12" y2="15"></line>
  </svg>
);

const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6"></polyline>
    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
  </svg>
);

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const SaveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17,21 17,13 7,13 7,21"></polyline>
    <polyline points="7,3 7,8 15,8"></polyline>
  </svg>
);

export default ResponsiveButton;

/* ========================================
   COMPREHENSIVE USAGE EXAMPLES
   ======================================== */

/* 
// ===== BASIC USAGE =====
// Simple button with click handler
<ResponsiveButton onClick={handleClick}>
  Click Me
</ResponsiveButton>

// Button with custom styling
<ResponsiveButton 
  className="my-custom-class"
  onClick={handleSubmit}
>
  Submit
</ResponsiveButton>


// ===== BUTTON VARIANTS =====
// Different visual styles for various contexts
<ResponsiveButton variant="primary">Primary Action</ResponsiveButton>
<ResponsiveButton variant="secondary">Secondary Action</ResponsiveButton>
<ResponsiveButton variant="tertiary">Subtle Action</ResponsiveButton>
<ResponsiveButton variant="danger">Delete Item</ResponsiveButton>
<ResponsiveButton variant="success">Confirm</ResponsiveButton>
<ResponsiveButton variant="warning">Proceed with Caution</ResponsiveButton>
<ResponsiveButton variant="ghost">Minimal Style</ResponsiveButton>
<ResponsiveButton variant="outline">Bordered</ResponsiveButton>


// ===== SIZES AND SHAPES =====
// Different button sizes
<ResponsiveButton size="xs">Extra Small</ResponsiveButton>
<ResponsiveButton size="sm">Small</ResponsiveButton>
<ResponsiveButton size="md">Medium (Default)</ResponsiveButton>
<ResponsiveButton size="lg">Large</ResponsiveButton>
<ResponsiveButton size="xl">Extra Large</ResponsiveButton>

// Different shapes
<ResponsiveButton shape="square">Square Corners</ResponsiveButton>
<ResponsiveButton shape="rounded">Rounded (Default)</ResponsiveButton>
<ResponsiveButton shape="pill">Pill Shaped</ResponsiveButton>

// Combination of size and shape
<ResponsiveButton size="lg" shape="pill">Large Pill Button</ResponsiveButton>


// ===== WIDTH AND ALIGNMENT =====
// Width control
<ResponsiveButton width="auto">Auto Width</ResponsiveButton>
<ResponsiveButton width="fit">Fit Content</ResponsiveButton>
<ResponsiveButton width="full">Full Width</ResponsiveButton>

// Container width with justification
<ResponsiveButton width="container" justify="start">Left Aligned</ResponsiveButton>
<ResponsiveButton width="container" justify="center">Centered</ResponsiveButton>
<ResponsiveButton width="container" justify="end">Right Aligned</ResponsiveButton>
<ResponsiveButton width="container" justify="space-between">Space Between</ResponsiveButton>


// ===== LOADING STATES =====
// Loading button with default spinner
<ResponsiveButton loading={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</ResponsiveButton>

// Loading with custom text
<ResponsiveButton 
  loading={isSubmitting}
  loadingText="Saving your changes..."
  onClick={handleSave}
>
  Save Document
</ResponsiveButton>

// Disabled during loading
<ResponsiveButton 
  loading={isProcessing}
  disabled={isProcessing}
  loadingText="Processing..."
>
  Process Data
</ResponsiveButton>


// ===== SUCCESS/ERROR FEEDBACK =====
// Basic feedback states
<ResponsiveButton
  onClick={handleSave}
  successMessage="Saved successfully!"
  errorMessage="Failed to save"
  showSuccess={saveSuccess}
  showError={saveError}
>
  Save Document
</ResponsiveButton>

// Feedback with custom duration and callback
<ResponsiveButton
  onClick={handleDelete}
  successMessage="Item deleted"
  errorMessage="Delete failed"
  feedbackDuration={2000}
  onActionComplete={(result) => {
    if (result === 'success') {
      console.log('Delete completed successfully');
    } else {
      console.log('Delete failed');
    }
  }}
  showSuccess={deleteSuccess}
  showError={deleteError}
>
  Delete Item
</ResponsiveButton>


// ===== ICONS AND ACTION TYPES =====
// Custom icons
<ResponsiveButton leftIcon={<CustomIcon />}>
  With Left Icon
</ResponsiveButton>

<ResponsiveButton rightIcon={<ArrowIcon />}>
  With Right Icon
</ResponsiveButton>

<ResponsiveButton 
  leftIcon={<UserIcon />}
  rightIcon={<ChevronIcon />}
>
  Both Icons
</ResponsiveButton>

// Predefined action types (includes built-in icons)
<ResponsiveButton actionType="send">Send Message</ResponsiveButton>
<ResponsiveButton actionType="upload">Upload File</ResponsiveButton>
<ResponsiveButton actionType="delete" variant="danger">Delete</ResponsiveButton>
<ResponsiveButton actionType="edit">Edit Item</ResponsiveButton>
<ResponsiveButton actionType="save" variant="success">Save</ResponsiveButton>


// ===== POSITIONING =====
// Static positioning (default)
<ResponsiveButton position="static">
  Normal Button
</ResponsiveButton>

// Fixed positioning with predefined placements
<ResponsiveButton 
  position="fixed" 
  placement="top-right"
  zIndex={1000}
>
  Fixed Top Right
</ResponsiveButton>

<ResponsiveButton 
  position="fixed" 
  placement="bottom-center"
  bottom={20}
>
  Fixed Bottom Center
</ResponsiveButton>

// Absolute positioning with custom coordinates
<ResponsiveButton 
  position="absolute"
  top={100}
  left={200}
  zIndex={500}
>
  Custom Position
</ResponsiveButton>

// Sticky positioning
<ResponsiveButton 
  position="sticky"
  top={0}
  zIndex={100}
>
  Sticky Button
</ResponsiveButton>


// ===== MARGINS AND SPACING =====
// Uniform margins
<ResponsiveButton margin={16}>All Sides Margin</ResponsiveButton>
<ResponsiveButton margin="1rem">CSS Margin</ResponsiveButton>

// Individual margins
<ResponsiveButton 
  marginTop={8}
  marginBottom={16}
  marginLeft={12}
  marginRight={12}
>
  Individual Margins
</ResponsiveButton>

// Axis-based margins
<ResponsiveButton marginX={20} marginY={10}>
  Horizontal and Vertical Margins
</ResponsiveButton>


// ===== FORM INTEGRATION =====
// Form submission button
<form onSubmit={handleFormSubmit}>
  <ResponsiveButton 
    type="submit"
    loading={isSubmitting}
    loadingText="Submitting..."
    disabled={!isFormValid}
  >
    Submit Form
  </ResponsiveButton>
</form>

// Form reset button
<ResponsiveButton 
  type="reset"
  variant="secondary"
  onClick={() => setFormData(initialData)}
>
  Reset Form
</ResponsiveButton>


// ===== DARK MODE =====
// Dark mode support
<ResponsiveButton darkMode={isDarkMode}>
  Theme-Aware Button
</ResponsiveButton>

<ResponsiveButton 
  darkMode={isDarkMode}
  variant="primary"
  size="lg"
>
  Dark Mode Primary
</ResponsiveButton>


// ===== ADVANCED STYLING =====
// Button with shadow and uppercase text
<ResponsiveButton 
  shadow
  uppercase
  variant="primary"
  size="lg"
>
  Elevated Button
</ResponsiveButton>

// Text alignment
<ResponsiveButton 
  width="full"
  align="left"
  leftIcon={<MenuIcon />}
>
  Left Aligned Text
</ResponsiveButton>

<ResponsiveButton 
  width="full"
  align="right"
  rightIcon={<ArrowIcon />}
>
  Right Aligned Text
</ResponsiveButton>


// ===== COMPLEX COMBINATIONS =====
// Feature-rich button example
<ResponsiveButton
  variant="primary"
  size="lg"
  shape="pill"
  width="full"
  leftIcon={<SaveIcon />}
  loading={isSaving}
  loadingText="Saving..."
  successMessage="Saved!"
  errorMessage="Save failed"
  showSuccess={saveSuccess}
  showError={saveError}
  feedbackDuration={2500}
  onActionComplete={handleSaveComplete}
  shadow
  darkMode={theme === 'dark'}
  marginY={12}
  onClick={handleSave}
>
  Save Document
</ResponsiveButton>

// Positioned action button
<ResponsiveButton
  variant="success"
  size="xl"
  shape="pill"
  position="fixed"
  placement="bottom-right"
  bottom={24}
  right={24}
  zIndex={1000}
  shadow
  leftIcon={<PlusIcon />}
  onClick={handleCreate}
>
  Create New
</ResponsiveButton>

// Container layout with multiple buttons
<div>
  <ResponsiveButton 
    width="container" 
    justify="space-between"
    variant="secondary"
    onClick={handleCancel}
  >
    Cancel
  </ResponsiveButton>
  
  <ResponsiveButton 
    variant="primary"
    loading={isProcessing}
    onClick={handleConfirm}
  >
    Confirm
  </ResponsiveButton>
</div>


// ===== ACCESSIBILITY AND SEMANTIC USAGE =====
// Accessible buttons with proper ARIA attributes
<ResponsiveButton
  onClick={handleToggle}
  aria-label="Toggle navigation menu"
  aria-expanded={isMenuOpen}
>
  Menu
</ResponsiveButton>

<ResponsiveButton
  variant="danger"
  onClick={handleDelete}
  aria-describedby="delete-warning"
>
  Delete Account
</ResponsiveButton>
*/