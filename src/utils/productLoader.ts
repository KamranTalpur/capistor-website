export interface ProductImage {
    url: string;
    alt: string;
    thought: string;
    detail: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    images: ProductImage[];
}

// Static product data for now - in a real app, this would scan the public/products folder
export const loadProducts = async (): Promise<Product[]> => {
    // Since we're using fallback products that work, just return those
    // This ensures images load correctly from /product_images/ folder
    return getFallbackProducts();
};

// Manual product configuration - Add your products here
export const getFallbackProducts = (): Product[] => [
    {
        id: 1,
        name: "Laser Projector",
        category: "Laser",
        images: [
            {
                url: "/product_images/laser_holder.jpeg",
                alt: "Laser Holder",
                thought: "Fine control of Laser",
                detail: "Laser holder provides fine control of the laser beam for precise targeting."
            },
        ]
    },
];