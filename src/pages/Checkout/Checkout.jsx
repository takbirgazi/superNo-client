import { Helmet } from "react-helmet-async";
import BillingInfo from "./BillingInfo";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
    return (
        <main>
            <Helmet>
                <title>Checkout - {import.meta.env.VITE_project_name}</title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-[#121212] px-4 py-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Order Summary */}
                    <OrderSummary />

                    {/* Billing/Shipping Form */}
                    <BillingInfo />
                </div>
            </section>
        </main>
    );
};

export default Checkout;