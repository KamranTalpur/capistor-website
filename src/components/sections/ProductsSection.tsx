import { motion } from "framer-motion";
import { Product } from "../../utils/productLoader";
import ProductImage from "../ui/ProductImage";

interface ProductsSectionProps {
    products: Product[];
    currentProduct: number;
    currentImageIndex: number;
    onImageWheel: (e: React.WheelEvent) => void;
    onImageIndexChange: (index: number) => void;
}

export default function ProductsSection({
    products,
    currentProduct,
    currentImageIndex,
    onImageWheel,
    onImageIndexChange
}: ProductsSectionProps) {
    const product = products[currentProduct];

    if (!product) return null;

    return (
        <section className="products-section min-h-[300vh] relative z-10">
            <div className="sticky top-0 h-screen bg-kindofwhite">
                <div className="flex h-full">
                    {/* Left side - Product info */}
                    <div className="w-1/2 p-8 lg:p-16 flex flex-col">
                        <motion.h2
                            className="text-4xl lg:text-6xl font-helvetica font-bold text-sexyblue mb-8"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Products
                        </motion.h2>
                        <div className="flex-1">
                            <div className="bg-sexyblue/5 p-2 rounded-2xl border-2 border-indigo-80 ">
                                <motion.h4
                                    className="text-xl lg:text-3xl font-domine font- font-bold text-sexyblue mb-4"
                                    key={`${currentProduct}-name`}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {product.name}
                                </motion.h4>

                                <motion.p
                                    className="text-lg text-sexyblue/80 font-domine"
                                    key={`${currentProduct}-${currentImageIndex}-detail`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {product.images[currentImageIndex]?.detail}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Product images */}
                    <div className="w-1/2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sexyblue/5 to-sexyblue/15 flex items-center justify-center">
                            <ProductImage
                                image={product.images[currentImageIndex]}
                                productIndex={currentProduct}
                                imageIndex={currentImageIndex}
                                onWheel={onImageWheel}
                            />
                        </div>

                        {/* Image navigation dots */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => onImageIndexChange(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? 'bg-sexyblue scale-125 shadow-lg shadow-sexyblue/50'
                                        : 'bg-sexyblue/30 hover:bg-sexyblue/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer sections for scrolling */}
            {products.map((_, index) => (
                <div key={index} className="h-screen" />
            ))}
        </section>
    );
}
