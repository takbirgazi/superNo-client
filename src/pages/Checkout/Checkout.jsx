
const Checkout = () => {
    return (
        <section className="bg-gray-50 dark:bg-[#121212] px-4 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Summary */}
                <div className="md:col-span-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700 p-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Order Summary
                    </h2>
                    <ul className="space-y-4">
                        {/* Example Cart Items */}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center border-b border-gray-200 pb-2 dark:border-gray-700"
                            >
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                                        Product {index + 1}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        $49.99
                                    </p>
                                </div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    1
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Subtotal
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                $149.97
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Shipping
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                $10.00
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold mt-4">
                            <span className="text-gray-900 dark:text-white">Total</span>
                            <span className="text-primary-600 dark:text-primary-500">
                                $159.97
                            </span>
                        </div>
                    </div>
                </div>

                {/* Billing/Shipping Form */}
                <div className="md:col-span-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700 p-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                        Billing & Shipping
                    </h2>
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="full-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        {/* Address */}
                        <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Address
                            </label>
                            <textarea
                                id="address"
                                rows="3"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123 Main St, City, Country"
                                required
                            ></textarea>
                        </div>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="+1234567890"
                                required
                            />
                        </div>
                        {/* Payment Method */}
                        <div>
                            <label
                                htmlFor="payment"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Payment Method
                            </label>
                            <select
                                id="payment"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="">Select Payment Method</option>
                                <option value="credit">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="text-[#121212] dark:text-gray-200 bg-primary-600 hover:bg-primary-700 border dark:border-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;