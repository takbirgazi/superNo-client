import { useEffect, useState } from "react";
import AddToCartModal from "../../components/AddToCartModal/AddToCartModal";


const Marketplace = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Product selected for modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-gray-50 dark:bg-[#121212] px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                        Marketplace
                    </h1>
                    {/* Filter and Sort */}
                    <div className="flex space-x-4">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-2">
                            <option value="">Sort by</option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-2">
                            <option value="">Filter</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Living</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                        >
                            <img
                                className="w-full h-40 object-cover"
                                src={product?.image}
                                alt={product?.title}
                            />
                            <div className="p-4 flex flex-col justify-between items-start gap-2">
                                <h2 className="font-bold text-gray-900 dark:text-white">
                                    {product?.title.slice(0, 25)}
                                    {product?.title.length > 25 && "..."}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">${product?.price}</p>
                                <button
                                    className="bg-primary-600 hover:bg-primary-700 text-[#121212] dark:text-gray-200 font-medium py-2 px-4 rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 border"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Add to Cart */}
            {isModalOpen && (
                <AddToCartModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
};

export default Marketplace;