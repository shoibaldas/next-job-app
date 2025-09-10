# Button Component

A comprehensive, customizable button component with support for multiple variants, sizes, icons, and states.

## Features

- ✅ Multiple variants (primary, secondary, outline, ghost, danger, success)
- ✅ Different sizes (xs, sm, md, lg, xl)
- ✅ Icon support (left, right, or icon-only)
- ✅ Loading states with spinner
- ✅ Disabled states
- ✅ Hover effects and animations
- ✅ Uses your global CSS variables for consistent theming
- ✅ Fully accessible with proper focus states

## Basic Usage

```jsx
import Button from '@/components/ui/Button';
import { FiPlus } from 'react-icons/fi';

// Basic button
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Button</Button>

// With icon
<Button icon={<FiPlus />}>Add Item</Button>

// Icon only
<Button icon={<FiPlus />} iconOnly />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'success'` | `'primary'` | Button style variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `icon` | `ReactElement` | - | Icon element to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of icon relative to text |
| `iconOnly` | `boolean` | `false` | Whether to show only the icon |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Whether to show loading spinner |
| `className` | `string` | - | Additional CSS classes |
| `...props` | - | - | All standard button props |

## Variants

### Primary (Default)
```jsx
<Button variant="primary">Primary Button</Button>
```
- Blue background with white text
- Darker blue on hover with subtle animation

### Secondary
```jsx
<Button variant="secondary">Secondary Button</Button>
```
- Amber/orange background with white text
- Darker amber on hover

### Outline
```jsx
<Button variant="outline">Outline Button</Button>
```
- Transparent background with colored border and text
- Fills with color on hover

### Ghost
```jsx
<Button variant="ghost">Ghost Button</Button>
```
- Transparent background and border
- Subtle background on hover

### Danger
```jsx
<Button variant="danger">Delete</Button>
```
- Red background for destructive actions

### Success
```jsx
<Button variant="success">Confirm</Button>
```
- Green background for positive actions

## Sizes

```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## Icons

### Icon with Text
```jsx
import { FiPlus, FiArrowRight } from 'react-icons/fi';

// Icon on the left (default)
<Button icon={<FiPlus />}>Add Item</Button>

// Icon on the right
<Button icon={<FiArrowRight />} iconPosition="right">
  Continue
</Button>
```

### Icon Only
```jsx
<Button icon={<FiPlus />} iconOnly />
<Button icon={<FiSettings />} iconOnly size="lg" />
<Button icon={<FiTrash2 />} iconOnly variant="danger" />
```

## States

### Loading State
```jsx
<Button loading>Loading...</Button>
<Button loading icon={<FiDownload />}>Downloading...</Button>
<Button loading iconOnly icon={<FiSettings />} />
```

### Disabled State
```jsx
<Button disabled>Disabled Button</Button>
<Button disabled icon={<FiPlus />}>Disabled with Icon</Button>
```

## Real-world Examples

### Search Bar
```jsx
<div className="flex gap-2">
  <input 
    type="text" 
    placeholder="Search..." 
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
  />
  <Button icon={<FiSearch />} iconOnly />
</div>
```

### Action Buttons
```jsx
<div className="flex gap-2">
  <Button variant="primary" icon={<FiPlus />}>
    Create New
  </Button>
  <Button variant="outline" icon={<FiDownload />}>
    Export
  </Button>
  <Button variant="ghost" icon={<FiSettings />}>
    Settings
  </Button>
</div>
```

### Card Actions
```jsx
<div className="border p-4 rounded-lg">
  <h3 className="font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600 mb-4">Card description...</p>
  <div className="flex gap-2">
    <Button size="sm" variant="primary" icon={<FiHeart />}>
      Like
    </Button>
    <Button size="sm" variant="outline" icon={<FiMail />}>
      Share
    </Button>
    <Button size="sm" variant="ghost" icon={<FiSettings />} iconOnly />
  </div>
</div>
```

## Styling

The Button component uses your global CSS variables for consistent theming:

- Colors: `--color-primary`, `--color-secondary`, etc.
- Typography: `--font-family-primary`
- Spacing: `--spacing-xs`, `--spacing-sm`, etc.
- Shadows: `--shadow-md`

You can customize these variables in your `globals.css` file to change the appearance globally.

## Accessibility

- Proper focus states with ring indicators
- Disabled state handling
- Loading state announcements
- Keyboard navigation support
- Screen reader friendly

## Dependencies

- `clsx` - For conditional class names
- `tailwind-merge` - For merging Tailwind classes
- `react-icons/fi` - For icons (or any other icon library) 