﻿# Responsive Reusable Package (RNP)

[![npm version](https://badge.fury.io/js/responsive-reusable-package.svg)](https://badge.fury.io/js/responsive-reusable-package)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A comprehensive collection of highly customizable, responsive React components designed for modern web applications. Built with performance and developer experience in mind, these components provide flexible layout solutions, responsive design patterns, and accessibility features out of the box.

## 🚀 Features

- **📱 Fully Responsive** - Components adapt seamlessly across all device sizes
- **🎨 Highly Customizable** - Extensive prop APIs for maximum flexibility
- **♿ Accessible** - Built with accessibility best practices
- **🌙 Dark Mode Support** - Comprehensive dark mode integration
- **📦 Zero Dependencies** - Only requires React and lucide-react
- **💨 Lightweight** - Minimal bundle size impact
- **🎯 TypeScript Ready** - Full TypeScript support with detailed prop types
- **🔧 CSS Agnostic** - Uses custom CSS classes, no framework lock-in

## 📦 Installation

```bash
npm install responsive-reusable-package
```

```bash
yarn add responsive-reusable-package
```

```bash
pnpm add responsive-reusable-package
```

## 🛠️ Setup

Import the CSS styles in your main application file:

```javascript
import 'responsive-reusable-package/styles';
```

Or import individual components:

```javascript
import { ResponsiveContainer, ResponsiveGrid, ResponsiveText, DarkModeToggle } from 'responsive-reusable-package';
```

## 📋 Components

### ResponsiveContainer

A flexible container component that adapts to different screen sizes with comprehensive layout options.

```jsx
import { ResponsiveContainer } from 'responsive-reusable-package';

// Basic usage
<ResponsiveContainer maxWidth="desktop">
  <h1>Welcome to our site</h1>
  <p>This content will be responsive across devices.</p>
</ResponsiveContainer>

// Advanced usage with flexbox
<ResponsiveContainer 
  layout="flex" 
  flexDirection="row" 
  justifyContent="between"
  gap="4"
  paddingX="8"
>
  <button>Cancel</button>
  <button>Save</button>
</ResponsiveContainer>

// Modal usage
<ResponsiveContainer
  modal={true}
  modalOpen={isModalOpen}
  onModalClose={() => setIsModalOpen(false)}
  modalSize="lg"
  modalBlurBackdrop={true}
>
  <h2>Modal Content</h2>
  <p>This is displayed in a modal overlay.</p>
</ResponsiveContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Child elements to render |
| `className` | `string` | `''` | Additional CSS classes |
| `maxWidth` | `'mobile'│'tablet'│'desktop'│'full'` | `'desktop'` | Maximum width breakpoint |
| `width` | `'25'│'50'│'75'│'85'│'95'│'auto'│'screen'` | `'auto'` | Custom width percentage |
| `align` | `'start'│'center'│'end'` | `'center'` | Horizontal alignment |
| `layout` | `'stack'│'grid'│'flex'` | `'stack'` | Layout type for children |
| `modal` | `boolean` | `false` | Render as modal overlay |
| `modalSize` | `'sm'│'md'│'lg'│'xl'│'full'` | `'md'` | Modal size variant |

[View full props documentation](#responsive-container-full-props)

### ResponsiveGrid

A flexible grid component that automatically adapts columns based on screen size.

```jsx
import { ResponsiveGrid } from 'responsive-reusable-package';

// Responsive grid with breakpoints
<ResponsiveGrid 
  cols={1} 
  smCols={2} 
  mdCols={3} 
  lgCols={4}
  gap="4"
>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
  <div>Grid Item 4</div>
</ResponsiveGrid>

// Auto-fit grid
<ResponsiveGrid 
  autoFit={true}
  autoFitSize="md"
  gap="6"
>
  <div>Auto-sized Item 1</div>
  <div>Auto-sized Item 2</div>
</ResponsiveGrid>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Grid items to render |
| `cols` | `number` | `1` | Default columns (1-12) |
| `smCols` | `number` | - | Columns on small screens |
| `mdCols` | `number` | - | Columns on medium screens |
| `lgCols` | `number` | - | Columns on large screens |
| `xlCols` | `number` | - | Columns on XL screens |
| `gap` | `'1'│'2'│'4'│'6'│'8'│'10'│'12'` | `'4'` | Gap between items |
| `autoFit` | `boolean` | `false` | Use auto-fit layout |
| `autoFitSize` | `'sm'│'md'│'lg'` | `'md'` | Auto-fit item size |

### ResponsiveText

A text component that scales typography responsively across different screen sizes.

```jsx
import { ResponsiveText } from 'responsive-reusable-package';

// Responsive heading
<ResponsiveText 
  as="h1"
  size="2xl"
  mdSize="4xl"
  lgSize="6xl"
  weight="bold"
  align="center"
>
  Responsive Heading
</ResponsiveText>

// Responsive paragraph
<ResponsiveText 
  as="p"
  size="sm"
  mdSize="md"
  color="gray-600"
  darkColor="gray-300"
  leading="relaxed"
>
  This text adapts its size and color based on screen size and theme.
</ResponsiveText>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Text content |
| `as` | `'h1'│'h2'│'h3'│'h4'│'h5'│'h6'│'p'│'span'│'div'` | `'p'` | HTML element |
| `size` | `'xs'│'sm'│'md'│'lg'│'xl'│'2xl'│'3xl'│'4xl'│'5xl'│'6xl'` | `'md'` | Base text size |
| `weight` | `'thin'│'light'│'normal'│'medium'│'semibold'│'bold'│'extrabold'│'black'` | `'normal'` | Font weight |
| `align` | `'left'│'center'│'right'│'justify'` | `'left'` | Text alignment |
| `color` | `string` | `'black'` | Text color |
| `darkColor` | `string` | - | Dark mode text color |

### DarkModeToggle

A sleek, animated toggle component for dark mode switching.

```jsx
import { DarkModeToggle } from 'responsive-reusable-package';

// Switch variant (default)
<DarkModeToggle
  isDarkMode={darkMode}
  onToggle={setDarkMode}
  variant="switch"
  size="medium"
/>

// Button variant
<DarkModeToggle
  isDarkMode={darkMode}
  onToggle={setDarkMode}
  variant="button"
  lightLabel="Light Mode"
  darkLabel="Dark Mode"
/>

// Icon only variant
<DarkModeToggle
  isDarkMode={darkMode}
  onToggle={setDarkMode}
  variant="icon"
  size="large"
  animate={true}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isDarkMode` | `boolean` | - | Current dark mode state |
| `onToggle` | `function` | - | Toggle callback function |
| `variant` | `'switch'│'button'│'icon'` | `'switch'` | Toggle style variant |
| `size` | `'small'│'medium'│'large'` | `'medium'` | Component size |
| `disabled` | `boolean` | `false` | Disable the toggle |
| `animate` | `boolean` | `true` | Enable animations |
| `lightIcon` | `string` | `'☀️'` | Light mode icon |
| `darkIcon` | `string` | `'🌙'` | Dark mode icon |

## 🎨 Styling

The package includes a comprehensive CSS file with all necessary styles. The components use semantic class names that can be easily customized:

```css
/* Override default styles */
.rnp-container {
  /* Your custom container styles */
}

.rnp-grid {
  /* Your custom grid styles */
}

.rnp-text {
  /* Your custom text styles */
}
```

## 🌙 Dark Mode

All components support dark mode out of the box. Simply toggle the `dark` class on your root element:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

Or use the included `DarkModeToggle` component for a complete solution.

## 📱 Responsive Breakpoints

The components use the following breakpoint system:

- **Mobile**: < 640px
- **Small (sm)**: ≥ 640px
- **Medium (md)**: ≥ 768px
- **Large (lg)**: ≥ 1024px
- **Extra Large (xl)**: ≥ 1280px

## 🔧 Advanced Usage

### Custom Modal Implementation

```jsx
import { useState } from 'react';
import { ResponsiveContainer, DarkModeToggle } from 'responsive-reusable-package';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <DarkModeToggle isDarkMode={darkMode} onToggle={setDarkMode} />
      
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <ResponsiveContainer
        modal={true}
        modalOpen={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
        modalSize="lg"
        modalPosition="center"
        modalBlurBackdrop={true}
        layout="flex"
        flexDirection="column"
        gap="4"
      >
        <h2>Confirmation</h2>
        <p>Are you sure you want to continue?</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button onClick={() => setIsModalOpen(false)}>Confirm</button>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
```

### Complex Layout Example

```jsx
<ResponsiveContainer maxWidth="full" darkBackground={true}>
  <ResponsiveContainer maxWidth="desktop" paddingY="12">
    <ResponsiveText 
      as="h1" 
      size="3xl" 
      lgSize="6xl" 
      weight="bold" 
      align="center"
      marginY="8"
    >
      Our Services
    </ResponsiveText>
    
    <ResponsiveGrid 
      cols={1} 
      mdCols={2} 
      lgCols={3} 
      gap="6"
      className="service-grid"
    >
      <div className="service-card">Service 1</div>
      <div className="service-card">Service 2</div>
      <div className="service-card">Service 3</div>
    </ResponsiveGrid>
  </ResponsiveContainer>
</ResponsiveContainer>
```

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Android (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/Lazytech15/reusable-npm-package)
- [NPM Package](https://www.npmjs.com/package/responsive-reusable-package)
- [Issues](https://github.com/Lazytech15/reusable-npm-package/issues)

## 📋 ResponsiveContainer Full Props

<details>
<summary>Click to expand full props table</summary>

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Child elements to render inside the container |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `maxWidth` | `'mobile'│'tablet'│'desktop'│'full'` | `'desktop'` | Maximum width breakpoint |
| `width` | `'25'│'50'│'75'│'85'│'95'│'auto'│'screen'` | `'auto'` | Custom width of the container |
| `align` | `'start'│'center'│'end'` | `'center'` | Horizontal alignment of the container |
| `padding` | `boolean` | `true` | Whether to add responsive padding |
| `margin` | `boolean` | `true` | Whether to add responsive margin |
| `paddingX` | `'1'│'2'│'4'│'6'│'8'│'12'│'16'` | - | Custom horizontal padding override |
| `paddingY` | `'1'│'2'│'4'│'6'│'8'│'12'│'16'` | - | Custom vertical padding override |
| `marginX` | `'1'│'2'│'4'│'6'│'8'│'12'│'16'` | - | Custom horizontal margin override |
| `marginY` | `'1'│'2'│'4'│'6'│'8'│'12'│'16'` | - | Custom vertical margin override |
| `layout` | `'stack'│'grid'│'flex'` | `'stack'` | Layout type for organizing child elements |
| `gap` | `'1'│'2'│'4'│'6'│'8'` | `'4'` | Gap between child elements |
| `textAlign` | `'left'│'center'│'right'│'justify'` | `'left'` | Text alignment for child elements |
| `alignItems` | `'start'│'center'│'end'│'stretch'│'baseline'` | `'start'` | Flex align-items property |
| `justifyContent` | `'start'│'center'│'end'│'between'│'around'│'evenly'` | `'start'` | Flex justify-content property |
| `flexDirection` | `'row'│'column'│'row-reverse'│'column-reverse'` | `'row'` | Flex direction |
| `flexWrap` | `'nowrap'│'wrap'│'wrap-reverse'` | `'nowrap'` | Flex wrap property |
| `darkBackground` | `boolean` | `false` | Whether to use dark mode background variants |
| `modal` | `boolean` | `false` | Whether to render the container as a modal overlay |
| `modalOpen` | `boolean` | - | Whether the modal is currently open (required if modal=true) |
| `onModalClose` | `function` | - | Callback function when modal should close (required if modal=true) |
| `modalCloseOnBackdrop` | `boolean` | `true` | Whether clicking the backdrop closes the modal |
| `modalCloseOnEscape` | `boolean` | `true` | Whether pressing the Escape key closes the modal |
| `modalSize` | `'sm'│'md'│'lg'│'xl'│'full'` | `'md'` | Modal size variant when rendered as modal |
| `modalPosition` | `'center'│'top'│'bottom'` | `'center'` | Modal position on screen |
| `modalBlurBackdrop` | `boolean` | `false` | Whether to apply blur effect to the backdrop |

</details>

---

Made with ❤️ by [necroHunger_15](https://github.com/Lazytech15)
