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
        name: "Smart IoT Controller",
        category: "IoT Solutions",
        images: [
            {
                url: "/product_images/iphone.jpg",
                alt: "Smart IoT Controller Interface",
                thought: "Seamless control at your fingertips",
                detail: "Our IoT controller provides intuitive touch-based control for all your smart devices with real-time status monitoring."
            },
            {
                url: "/product_images/iphone2.jpg",
                alt: "IoT Controller Dashboard",
                thought: "Complete system overview",
                detail: "Advanced dashboard showing comprehensive device analytics, energy consumption, and automated scheduling features."
            }
        ]
    },
    {
        id: 2,
        name: "Automation Dashboard",
        category: "Automation",
        images: [
            {
                url: "/product_images/chicken.jpg",
                alt: "Automation Dashboard Interface",
                thought: "Smart automation made simple",
                detail: "Revolutionary dashboard that learns your patterns and automates your daily routines for maximum efficiency and comfort."
            }
        ]
    },
    {
        id: 3,
        name: "Smart Hardware",
        category: "Hardware Solutions",
        images: [
            {
                url: "/product_images/iphone.jpg",
                alt: "Smart Hardware Device",
                thought: "Next-gen connectivity",
                detail: "Cutting-edge hardware platform designed for seamless integration with existing systems and future-proof scalability."
            },
            {
                url: "/product_images/chicken.jpg",
                alt: "Hardware Components",
                thought: "Modular design philosophy",
                detail: "Our modular approach allows for custom configurations tailored to your specific automation and connectivity needs."
            },
            {
                url: "/product_images/iphone2.jpg",
                alt: "Smart Hardware Interface",
                thought: "Intelligent interactions",
                detail: "Advanced AI-powered interface that adapts to user behavior and provides predictive automation suggestions."
            }
        ]
    }
];