import BillingInfo from "./BillingInfo";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
    return (
        <section className="bg-gray-50 dark:bg-[#121212] px-4 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Summary */}
                <OrderSummary />

                {/* Billing/Shipping Form */}
                <BillingInfo />
            </div>
        </section>
    );
};

export default Checkout;