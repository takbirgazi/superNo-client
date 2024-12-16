import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const OrderSummary = () => {
    const refData = useRef();

    const handlePrint = async () => {
        const currentElement = refData.current;
        if (!currentElement) {
            return;
        } else {
            const canvas = await html2canvas(currentElement, {
                scale: 3,
            });
            const data = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4"
            });
            const imageProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = ((imageProperties.height * pdfWidth) / (imageProperties.width));


            // pdf.addImage(data, "PNG", 0, 0, imageProperties?.width, imageProperties?.height);
            pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

            pdf.save("nothing.pdf")
        }
    }

    return (
        <div className="md:col-span-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700 overflow-hidden relative">

            <div ref={refData} className="p-6 dark:bg-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Order Summary
                </h2>
                <ul className="space-y-4">
                    {/* Example Cart Items */}
                    {Array.from({ length: 1 }).map((_, index) => (
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
            <div className="flex flex-col w-full items-center justify-end mt-4 p-5">
                <button onClick={handlePrint} className="absolute bottom-5 rounded-md bg-green-500 px-3 py-1">Print Invoice</button>
            </div>
        </div>
    );
};

export default OrderSummary;