import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    useEffect(() => {
        setCartItems([
            {
                id: 1,
                name: "Product 1",
                price: 49.99,
                quantity: 1,
                image: "https://via.placeholder.com/150",
            },
            {
                id: 2,
                name: "Product 2",
                price: 89.99,
                quantity: 2,
                image: "https://via.placeholder.com/150",
            }
        ])
    }, [])

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

                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Your cart is empty.
                        </p>
                    ) : (
                        <div>
                            <div className="space-y-3">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between bg-white dark:bg-[#121212] rounded-lg shadow-md p-4 border dark:border-[#494949]"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-md object-cover"
                                            />
                                            <div>
                                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                                    {item.name}
                                                </h2>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue={item.quantity}
                                                onChange={(e) =>
                                                    updateQuantity(item.id, parseInt(e.target.value, 10))
                                                }
                                                className="w-16 text-center bg-gray-50 border border-gray-300 text-[#121212] rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                                            />
                                            <button
                                                onClick={() => removeItem(item.id)}
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