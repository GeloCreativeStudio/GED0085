# Navigation Component Implementation Guide

## Overview
This document details the implementation of the responsive navigation component used in the GED0085 Advocacy Campaign website. The navigation features a modern, responsive design with mobile support, animations, and clean state management.

## Dependencies
```json
{
  "next": "latest",
  "framer-motion": "latest",
  "tailwindcss": "latest",
  "@heroicons/react": "latest",
  "tailwind-merge": "latest"
}
```

## Component Structure

### Navigation Items
The navigation items are defined as a constant array of objects, making it easy to modify or extend:

```typescript
const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  { name: 'Issues', href: '/issues', icon: NewspaperIcon },
  { name: 'Campaigns', href: '/campaigns', icon: AcademicCapIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
];
```

### State Management
The component uses React hooks for state management:
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname(); // For active link detection
```

## Key Features

### 1. Desktop Navigation
- Horizontal layout with consistent spacing
- Active link highlighting with bottom border
- Hover effects for better user interaction
- Icon + text combination
- Fixed position with optional background blur on scroll

#### Desktop Link Styling
```typescript
<Link
  href={item.href}
  className={`inline-flex items-center px-1 pt-1 text-sm nav:text-base font-medium
    ${
      pathname === item.href
        ? 'text-[#1C5310] border-b-2 border-[#1C5310]'
        : 'text-gray-500 hover:text-[#1C5310] hover:border-b-2 hover:border-[#1C5310]/50'
    }
    transition-colors duration-200
  `}
>
```

### 2. Mobile Navigation
- Hamburger menu toggle
- Animated slide-in menu
- Vertical stack layout
- Left border for active state
- Full-width touch targets

#### Mobile Menu Animation
```typescript
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="nav:hidden bg-white border-t border-gray-200"
    >
```

## Styling Guide

### Colors
- Primary Brand Color: `#1C5310` (Forest Green)
- Text Colors:
  - Primary: Gray-500 (`text-gray-500`)
  - Active: Brand Color (`text-[#1C5310]`)
  - Hover: Brand Color with opacity

### Typography
- Base text size: `text-sm` (mobile), `text-base` (desktop)
- Font: System font stack with Della Robbia for brand text
- Font weights: `font-medium` for navigation items

### Spacing
- Desktop nav spacing: `space-x-8`
- Mobile padding: `px-4 py-2`
- Container max width: `max-w-7xl`

## Responsive Design

### Breakpoints
Custom `nav` breakpoint for navigation-specific responsive design:
```typescript
// Tailwind config suggestion
module.exports = {
  theme: {
    screens: {
      'nav': '768px', // Customize this value based on your needs
    }
  }
}
```

### Mobile-First Approach
- Base styles for mobile
- `nav:` prefix for desktop styles
- Hidden/visible classes: `nav:hidden` and `nav:flex`

## Accessibility Features
- Semantic HTML with `nav` element
- ARIA labels for mobile menu button
- Keyboard navigation support
- Sufficient color contrast
- Interactive elements have hover/focus states

## Implementation Steps

1. **Setup Dependencies**
   - Install required npm packages
   - Configure Tailwind CSS
   - Import necessary icons

2. **Create Navigation Component**
   - Create `Navigation.tsx` in components directory
   - Import required dependencies
   - Define navigation items

3. **Implement Desktop Navigation**
   - Create fixed header
   - Add logo/brand
   - Implement horizontal navigation links
   - Add active state styling

4. **Add Mobile Navigation**
   - Create hamburger menu button
   - Implement mobile menu
   - Add animations
   - Style mobile links

5. **Add Responsive Behavior**
   - Configure breakpoints
   - Add responsive classes
   - Test across different screen sizes

## Best Practices

1. **Performance**
   - Use `next/link` for client-side navigation
   - Implement proper code splitting
   - Optimize animations for performance

2. **Maintainability**
   - Keep navigation items in a separate constant
   - Use consistent naming conventions
   - Comment complex logic
   - Use TypeScript for better type safety

3. **Accessibility**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast

## Common Customizations

### Changing Colors
```typescript
// Example of color customization
const customColors = {
  primary: '#YOUR_COLOR',
  hover: '#YOUR_HOVER_COLOR',
  active: '#YOUR_ACTIVE_COLOR',
};
```

### Adding New Navigation Items
```typescript
// Add to navigationItems array
{
  name: 'New Page',
  href: '/new-page',
  icon: YourIcon,
}
```

### Modifying Animations
```typescript
// Custom animation variants
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};
```

## Troubleshooting

### Common Issues
1. Mobile menu not showing
   - Check z-index values
   - Verify state management
   - Check breakpoint configuration

2. Animations not working
   - Ensure Framer Motion is properly installed
   - Check AnimatePresence implementation
   - Verify animation properties

3. Active states not updating
   - Check pathname comparison
   - Verify Next.js routing setup
   - Check class conditional logic

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
