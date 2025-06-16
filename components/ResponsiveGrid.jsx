import React from 'react';
import '../style.css'
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
const ResponsiveGrid = ({
  children,
  className = '',
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  gap = '4',
  alignItems = 'start',
  justifyItems = 'start',
  autoFit = false,
  autoFitSize = 'md',
  ...props
}) => {
  // Combine all classes
  const gridClasses = [
    'responsive-grid', // Base class
    // Auto-fit classes
    autoFit && `responsive-grid--auto-fit${autoFitSize !== 'md' ? `-${autoFitSize}` : ''}`,
    // Column classes (only if not using auto-fit)
    !autoFit && `responsive-grid--cols-${cols}`,
    !autoFit && smCols && `responsive-grid--sm-cols-${smCols}`,
    !autoFit && mdCols && `responsive-grid--md-cols-${mdCols}`,
    !autoFit && lgCols && `responsive-grid--lg-cols-${lgCols}`,
    !autoFit && xlCols && `responsive-grid--xl-cols-${xlCols}`,
    // Gap class
    `responsive-grid--gap-${gap}`,
    // Alignment classes
    `responsive-grid--items-${alignItems}`,
    `responsive-grid--justify-${justifyItems}`,
    // Additional custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={gridClasses}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;

// // Basic responsive grid
// <ResponsiveGrid cols={1} mdCols={2} lgCols={3} gap="6">
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </ResponsiveGrid>

// // Auto-fit grid with large minimum width
// <ResponsiveGrid autoFit autoFitSize="lg" gap="8">
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </ResponsiveGrid>

// // Centered items with custom alignment
// <ResponsiveGrid 
//   cols={2} 
//   lgCols={4} 
//   alignItems="center" 
//   justifyItems="center"
//   gap="4"
// >
//   <div>Centered Item 1</div>
//   <div>Centered Item 2</div>
// </ResponsiveGrid>