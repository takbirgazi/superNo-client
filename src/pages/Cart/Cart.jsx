import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../reduxFeatures/ProductCart/ProductCartSlice";

const Cart = () => {
    const allCart = useSelector(state => state.cart?.items);
    const allProducts = useSelector(state => state.products?.products);
    const dispatch = useDispatch();

    // Filter products
    // const cartProducts = allProducts.filter(product => allCart.includes(product?.id));
    // Filter products based on cart items step by step
    const cartProducts = allCart?.map(item => allProducts.find(product => product?.id === item.id));
    // Remove item from cart
    const removeItem = (id) => {
        const removerCart = allCart.filter((item) => item.id !== id);
        console.log(removerCart)
        dispatch(removeCart(removerCart))
    };

    // Update quantity
    const updateQuantity = (id, newQuantity) => {
        const updatedCart = allCart.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, newQuantity) }
                : item
        );
        console.log(updatedCart)
    };

    // Total Amount Calculation
    const calculateTotal = () => {
        if (!cartProducts || cartProducts.length === 0) return "0.00";

        const total = cartProducts.reduce((acc, item) => {
            const quantity = item?.quantity || 1;
            return acc + item?.price * quantity;
        }, 0);

        return total.toFixed(2);
    };

    return (
        <main>
            <Helmet>
                <title>Cart - {import.meta.env.VITE_project_name}</title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-[#121212] min-h-screen px-4 pt-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Your Cart
                    </h1>

                    {cartProducts?.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Your cart is empty.
                        </p>
                    ) : (
                        <div>
                            <div className="space-y-3">
                                {cartProducts?.map((item, ind) => (
                                    <div
                                        key={ind}
                                        className="flex items-center justify-between bg-white dark:bg-[#121212] rounded-lg shadow-md p-4 border dark:border-[#494949]"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={item?.image}
                                                alt={item?.title}
                                                className="w-20 h-20 rounded-md object-cover"
                                            />
                                            <div>
                                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                                    {item?.title}
                                                </h2>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    ${item?.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue={1}
                                                onChange={(e) =>
                                                    updateQuantity(item.id, parseInt(e.target.value, 10))
                                                }
                                                className="w-16 text-center bg-gray-50 border border-gray-300 text-[#121212] rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                                            />
                                            <button
                                                onClick={() => removeItem(item?.id)}
                                                className="text-red-600 dark:text-red-400 text-2xl"
                                            >
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-white dark:bg-[#121212] rounded-lg shadow-md border dark:border-[#494949]">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium text-[#121212] dark:text-white">
                                        Total:
                                    </span>
                                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                                        ${calculateTotal()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    className="my-5 py-1 px-4 border dark:border-[#494949] rounded-md"
                                    onClick={() => alert("Proceeding to checkout...")}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Cart;