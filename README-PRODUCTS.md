# Product Management System

## Adding New Products

To add new products to your website, follow this simple folder structure:

### 1. Create Product Folder

Create a new folder in `/public/products/` with your product name:

```
/public/products/Your Product Name/
```

### 2. Add Product Images

Place your product images in the product folder:

```
/public/products/Your Product Name/
  ├── image1.jpg
  ├── image2.png
  └── image3.webp
```

### 3. Configure Product Details

Edit `/src/utils/productLoader.ts` and add your product configuration:

```typescript
{
    folderName: "Your Product Name", // Must match folder name exactly
    category: "Your Category", // e.g., "Embedded Systems", "UI/UX Design"
    images: [
        {
            filename: "image1.jpg", // Must match file in folder
            alt: "Image description",
            thought: "💡 Thought bubble text",
            detail: "Detailed description shown on left side"
        },
        // Add more images...
    ]
}
```

## Current Structure

```
src/
├── components/
│   ├── home.tsx              # Main page component
|   ├── Mheader.tsx
|   ├── Navbar.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero section with logo and text
│   │   └── ProductsSection.tsx # Products display section
│   └── ui/
│       ├── CircuitBackground.tsx # Animated circuit background
│       ├── NavigationArrow.tsx   # Scroll arrows
│       ├── ProductImage.tsx      # Individual product image with effects
│       └── ThoughtBubble.tsx     # Hover thought bubbles
└── utils/
    ├── productLoader.ts      # Product data management
    ├── useProductNavigation.ts # Product navigation logic
    └── useScrollLogic.ts     # Scroll and animation logic


## Features

- **Automatic Product Loading**: Products are loaded from the folder structure
- **Mouse Wheel Navigation**: Scroll on images to navigate between products
- **Thought Bubbles**: Hover over images to see interactive thoughts
- **Smooth Scrolling**: Lenis + GSAP for buttery smooth animations
- **Modular Components**: Easy to maintain and extend
- **Responsive Design**: Works on all device sizes

## Development

Each component is self-contained and handles its own logic:

- `HeroSection`: Landing section with animated logo
- `ProductsSection`: Product display with image cycling
- `CircuitBackground`: Animated background effects
- Product navigation through custom hooks

## Future Enhancements

For true dynamic loading, you could:

1. Create a Node.js script to scan `/public/products/` folders
2. Generate a `products.json` file automatically
3. Load product data from the JSON file at runtime

This would eliminate the need to manually edit `productLoader.ts` for each new product.
```
