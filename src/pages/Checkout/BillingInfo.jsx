
const BillingInfo = () => {
    return (
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
    );
};

export default BillingInfo;