import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCart } from '../../reduxFeatures/ProductCart/ProductCartSlice';


const AddToCartModal = ({ product, isOpen, onClose }) => {
    const dispatch = useDispatch();

    if (!isOpen || !product) return null;
    const handleConfirmCart = (product) => {
        dispatch(addCart(product?.id))
        onClose();
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                    ✖
                </button>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Added to Cart
                </h2>
                <div>
                    <img
                        className="w-full h-40 object-cover mb-4"
                        src={product.image}
                        alt={product.title}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {product.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300">${product.price}</p>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg"
                    >
                        Close
                    </button>
                    <button
                        className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-[#121212] dark:text-gray-200 rounded-lg"
                        onClick={() => handleConfirmCart(product)}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddToCartModal;


AddToCartModal.propTypes = {
    product: PropTypes.object,
    isOpen: PropTypes.boolean,
    onClose: PropTypes.boolean,
};