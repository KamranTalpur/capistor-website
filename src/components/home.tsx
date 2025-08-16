import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFallbackProducts, loadProducts, Product } from "../utils/productLoader";
import { useScrollLogic } from "../utils/useScrollLogic";
import { useProductNavigation } from "../utils/useProductNavigation";
import CircuitBackground from "./ui/CircuitBackground";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import NavigationArrow from "./ui/NavigationArrow";

export default function Home() {
    const containerRef = useRef(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [showDownArrow, setShowDownArrow] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [displayText, setDisplayText] = useState("Capistor");
    const [logoScale, setLogoScale] = useState(1);



    // Load products on mount
    useEffect(() => {
        const initProducts = async () => {
            try {
                const loadedProducts = await loadProducts();
                console.log('Loaded products:', loadedProducts);
                setProducts(loadedProducts);
            } catch (error) {
                console.warn("Failed to load products from folders, using fallback:", error);
                const fallbackProducts = getFallbackProducts();
                console.log('Fallback products:', fallbackProducts);
                setProducts(fallbackProducts);
            }
        };
        initProducts();
    }, []);

    // Product navigation logic
    const {
        currentProduct,
        currentImageIndex,
        setCurrentProduct,
        setCurrentImageIndex,
        handleImageWheel
    } = useProductNavigation(products);

    // Scroll logic and triggers
    const { scrollToProducts, scrollToTop } = useScrollLogic({
        setLogoScale,
        setDisplayText,
        setShowDownArrow,
        setShowBackToTop,
        setCurrentProduct
    });

    // Don't render until products are loaded
    if (products.length === 0) {
        return (
            <div className="bg-kindofwhite min-h-screen flex items-center justify-center">
                <div className="text-sexyblue font-domine text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="bg-kindofwhite relative">
            <CircuitBackground />

            {/* Navigation Header */}
            <nav className="fixed top-4 right-4 z-50 flex gap-3">
                <Link
                    to="/cv"
                    className="
                    bg-sexyblue/10 
                    backdrop-blur-sm 
                    text-sexyblue px-4 py-2 
                    rounded-full 
                    hover:bg-sexyblue/20 t
                    ransition-all 
                    duration-300 font-domine"
                >
                    CV
                </Link>
            </nav>
            <HeroSection
                displayText={displayText}
                logoScale={logoScale}
                showDownArrow={showDownArrow}
                onScrollToProducts={scrollToProducts}
            />

            <ProductsSection
                products={products}
                currentProduct={currentProduct}
                currentImageIndex={currentImageIndex}
                onImageWheel={handleImageWheel}
                onImageIndexChange={setCurrentImageIndex}
            />

            {/* Back to Top Button */}
            <NavigationArrow
                direction="up"
                show={showBackToTop}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-30"
            />

        </div>
    );
}