import { useState, useCallback } from "react";
import { Product } from "./productLoader";

export const useProductNavigation = (products: Product[]) => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Handle wheel scroll on product images
    const handleImageWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const scrollDirection = e.deltaY > 0 ? 1 : -1;
        const currentImages = products[currentProduct]?.images || [];

        if (scrollDirection > 0) {
            // Scrolling down
            if (currentImageIndex < currentImages.length - 1) {
                // Go to next image
                setCurrentImageIndex(currentImageIndex + 1);
            } else {
                // At last image, go to next product
                if (currentProduct < products.length - 1) {
                    setCurrentProduct(currentProduct + 1);
                    setCurrentImageIndex(0);
                }
            }
        } else {
            // Scrolling up
            if (currentImageIndex > 0) {
                // Go to previous image
                setCurrentImageIndex(currentImageIndex - 1);
            } else {
                // At first image, go to previous product
                if (currentProduct > 0) {
                    setCurrentProduct(currentProduct - 1);
                    setCurrentImageIndex(products[currentProduct - 1]?.images.length - 1 || 0);
                }
            }
        }
    }, [currentProduct, currentImageIndex, products]);

    return {
        currentProduct,
        currentImageIndex,
        setCurrentProduct,
        setCurrentImageIndex,
        handleImageWheel
    };
};
