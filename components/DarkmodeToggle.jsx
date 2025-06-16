import { useState, useEffect } from 'react';
import '../style.css'

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
export const DarkModeToggle = ({ 
  isDarkMode, 
  onToggle, 
  className = '', 
  variant = 'switch',
  size = 'medium',
  disabled = false,
  showLabels = true,
  lightIcon = '☀️',
  darkIcon = '🌙',
  lightLabel = 'Light',
  darkLabel = 'Dark',
  animate = true,
  alignment = 'center',
  onToggleStart,
  onToggleComplete,
  customStyles = {},
  ariaLabel,
  id,
  dataAttributes = {}
}) => {
  // Handle toggle with callbacks
  const handleToggle = async () => {
    if (disabled) return;
    
    if (onToggleStart) {
      onToggleStart(!isDarkMode);
    }
    
    onToggle();
    
    // Simulate animation completion
    if (animate && onToggleComplete) {
      setTimeout(() => {
        onToggleComplete(!isDarkMode);
      }, 300);
    } else if (onToggleComplete) {
      onToggleComplete(!isDarkMode);
    }
  };

  // Generate data attributes
  const dataProps = Object.entries(dataAttributes).reduce((acc, [key, value]) => {
    acc[`data-${key}`] = value;
    return acc;
  }, {});

  // Generate size and animation classes
  const sizeClass = `dark-mode-toggle--${size}`;
  const animateClass = animate ? 'dark-mode-toggle--animated' : 'dark-mode-toggle--no-animation';
  const disabledClass = disabled ? 'dark-mode-toggle--disabled' : '';

  // Default aria label
  const defaultAriaLabel = `Switch to ${isDarkMode ? 'light' : 'dark'} mode`;

  if (variant === 'switch') {
    return (
      <div 
        className={`dark-mode-switch-container ${sizeClass} ${animateClass} ${disabledClass} ${className}`}
        style={customStyles}
        id={id}
        {...dataProps}
      >
        {showLabels && (
          <span className="dark-mode-switch-label dark-mode-switch-label--sun">
            {lightIcon}
          </span>
        )}
        <button
          className={`dark-mode-switch ${isDarkMode ? 'dark-mode-switch--active' : ''}`}
          onClick={handleToggle}
          disabled={disabled}
          aria-label={ariaLabel || defaultAriaLabel}
          aria-pressed={isDarkMode}
          role="switch"
        >
          <div className="dark-mode-switch-slider">
            <div className="dark-mode-switch-thumb">
              <span className="dark-mode-switch-icon">
                {isDarkMode ? darkIcon : lightIcon}
              </span>
            </div>
          </div>
        </button>
        {showLabels && (
          <span className="dark-mode-switch-label dark-mode-switch-label--moon">
            {darkIcon}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <button
        className={`dark-mode-icon-toggle ${sizeClass} ${animateClass} ${disabledClass} ${className}`}
        onClick={handleToggle}
        disabled={disabled}
        aria-label={ariaLabel || defaultAriaLabel}
        aria-pressed={isDarkMode}
        style={customStyles}
        id={id}
        {...dataProps}
      >
        <div className="dark-mode-icon-container">
          <span className={`dark-mode-icon dark-mode-icon--sun ${!isDarkMode ? 'active' : ''}`}>
            {lightIcon}
          </span>
          <span className={`dark-mode-icon dark-mode-icon--moon ${isDarkMode ? 'active' : ''}`}>
            {darkIcon}
          </span>
        </div>
      </button>
    );
  }

  // Default button variant with enhanced design
  return (
    <button
      className={`dark-mode-toggle dark-mode-toggle--enhanced dark-mode-toggle--${alignment} ${sizeClass} ${animateClass} ${disabledClass} ${className}`}
      onClick={handleToggle}
      disabled={disabled}
      aria-label={ariaLabel || defaultAriaLabel}
      aria-pressed={isDarkMode}
      style={customStyles}
      id={id}
      {...dataProps}
    >
      <div className="dark-mode-toggle-content">
        <span className="dark-mode-toggle-icon">
          {isDarkMode ? lightIcon : darkIcon}
        </span>
        <span className="dark-mode-toggle-text">
          {isDarkMode ? lightLabel : darkLabel} Mode
        </span>
      </div>
      <div className="dark-mode-toggle-bg"></div>
    </button>
  );
};

/**
 * useDarkMode - Custom hook for managing dark mode state
 * Note: Uses in-memory storage instead of localStorage for Claude.ai compatibility
 * 
 * BACKWARD COMPATIBLE VERSION - Returns array for destructuring: [isDarkMode, toggleDarkMode]
 * 
 * @param {boolean} defaultValue - Default dark mode state
 * @returns {[boolean, function]} - [isDarkMode, toggleDarkMode]
 */
export const useDarkMode = (defaultValue = false) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      // Fall back to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return defaultValue;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('auto-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('auto-dark');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setIsDarkMode(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

/**
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
export const useDarkModeAdvanced = ({
  defaultValue = false,
  respectSystemPreference = true,
  watchSystemChanges = true,
  onChange,
  documentClass = 'dark',
  lightClass = 'auto-dark',
  applyToBody = false,
  customClasses = {}
} = {}) => {
  // Initialize state with system preference or default
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && respectSystemPreference) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return defaultValue;
  });

  // Track system preference separately
  const [systemPreference, setSystemPreference] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Apply dark mode classes to document/body
  useEffect(() => {
    const applyClasses = (element, isDark) => {
      const darkClass = customClasses.dark || documentClass;
      const lightClassToUse = customClasses.light || lightClass;

      if (isDark) {
        element.classList.add(darkClass);
        if (lightClassToUse) {
          element.classList.remove(lightClassToUse);
        }
      } else {
        element.classList.remove(darkClass);
        if (lightClassToUse) {
          element.classList.add(lightClassToUse);
        }
      }
    };

    // Apply to document element
    applyClasses(document.documentElement, isDarkMode);
    
    // Apply to body if requested
    if (applyToBody) {
      applyClasses(document.body, isDarkMode);
    }

    // Fire onChange callback
    if (onChange) {
      onChange(isDarkMode);
    }
  }, [isDarkMode, documentClass, lightClass, applyToBody, customClasses, onChange]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined' && watchSystemChanges) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        const newSystemPreference = e.matches ? 'dark' : 'light';
        setSystemPreference(newSystemPreference);
        
        if (respectSystemPreference) {
          setIsDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [respectSystemPreference, watchSystemChanges]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const setDarkMode = (value) => {
    setIsDarkMode(Boolean(value));
  };

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
    systemPreference
  };
};

// const { isDarkMode, toggleDarkMode, setDarkMode, systemPreference } = useDarkModeAdvanced({
//   defaultValue: false,
//   respectSystemPreference: true,
//   onChange: (isDark) => console.log('Theme changed:', isDark),
//   customClasses: { dark: 'my-dark-theme', light: 'my-light-theme' }
// });