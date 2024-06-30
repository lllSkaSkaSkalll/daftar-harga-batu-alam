import { priceChange } from "../libs/allNewPrice";
import { newPrice } from "../libs/newPrice";
import { Pricelist } from "../libs/typeAnnotation";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ data }: { data: Pricelist[] }) => {
    return (
        <table className="w-full bg-slate-800 text-white px-5 font-bold text-sm md:text-base">
            <thead className="border-b-2 border-slate-900 bg-teal-500 md:text-2xl">
                <TableHead />
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const price = item.harga;

                    const increment = priceChange[item.jenis.toLowerCase() as keyof typeof priceChange];
                    const newPriceCount = newPrice(price, item, item.jenis.toLowerCase(), increment, "+", null);

                    const formatPrice = new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                    }).format(newPriceCount);

                    return <TableBody key={item.id} index={index} item={item} formatPrice={formatPrice} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;
