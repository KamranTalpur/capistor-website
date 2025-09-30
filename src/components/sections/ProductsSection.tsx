import { motion } from "framer-motion";
import { Product } from "../../utils/productLoader";
import ProductImage from "../ui/ProductImage";

interface ProductsSectionProps {
  products: Product[];
  currentProduct: number;
  currentImageIndex: number;
  setCurrentProduct: (index: number) => void;
  setCurrentImageIndex: (index: number) => void;
  nextProduct: () => void;
  previousProduct: () => void;
}

export default function ProductsSection({
  products,
  currentProduct,
  currentImageIndex,
  setCurrentProduct,
  setCurrentImageIndex,
  nextProduct,
  previousProduct,
}: ProductsSectionProps) {
  if (!products || products.length === 0) {
    return (
      <section className="products-section min-h-screen relative z-10">
        <div className="sticky top-0 h-screen bg-kindofwhite flex items-center justify-center">
          <div className="text-sexyblue font-domine text-xl">
            Loading products...
          </div>
        </div>
      </section>
    );
  }

  const product = products[currentProduct];

  if (!product || !product.images || product.images.length === 0) {
    return (
      <section className="products-section min-h-screen relative z-10">
        <div className="sticky top-0 h-screen bg-kindofwhite flex items-center justify-center">
          <div className="text-sexyblue font-domine text-xl">
            No valid product data available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products-section min-h-screen relative z-10">
      <div className="sticky top-0 h-screen bg-kindofwhite">
        <div className="flex h-full justify-center">
          <div className="w-5/12 p-8 lg:p-12 flex flex-col items-center justify-start text-center">
            <motion.h2
              className="text-4xl lg:text-4xl font-helvetica font-bold text-sexyblue mt-20 mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {product.name}
            </motion.h2>
            <motion.div
              className="bg-kindofwhite p-6 rounded-2xl border-2 border-capistor-300/20 max-w-md shadow-lg"
              key={`${currentProduct}-info`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.p
                className="text-lg text-sexyblue/90 font-fransisco font-normal leading-8 text-justify"
                key={`${currentProduct}-${currentImageIndex}-detail`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {product.images[currentImageIndex]?.detail || "No description available"}
              </motion.p>
            </motion.div>
          </div>
          <div className="w-5/12 relative overflow-visible flex flex-col items-center justify-center">
            <motion.div
              className="w-full flex-1 flex items-center justify-center pt-20 relative group"
              key={`${currentProduct}-image`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProductImage
                image={product.images[currentImageIndex]}
                productIndex={currentProduct}
                imageIndex={currentImageIndex}
              />
              {product.images.length > 1 && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex - 1 + product.images.length) % product.images.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-sexyblue/75 text-kindofwhite shadow hover:bg-sexyblue transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((currentImageIndex + 1) % product.images.length)
                    }
                    aria-label="Next image"
                    className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-sexyblue/75 text-kindofwhite shadow hover:bg-sexyblue transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
            <div className="w-full flex justify-center py-8 gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-sexyblue scale-125 shadow-lg shadow-sexyblue/50"
                      : "bg-sexyblue/30 hover:bg-sexyblue/60"
                  }`}
                  aria-label={`Select image ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-4 mb-8">
              <button
                onClick={previousProduct}
                className="w-48 py-2 bg-sexyblue text-kindofwhite rounded-lg font-domine text-lg hover:bg-capistor-600 transition-colors duration-200"
                aria-label="Go to previous product"
              >
                Previous
              </button>
              <button
                onClick={nextProduct}
                className="w-48 py-2 bg-sexyblue text-kindofwhite rounded-lg font-domine text-lg hover:bg-capistor-600 transition-colors duration-200"
                aria-label="Go to next product"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}