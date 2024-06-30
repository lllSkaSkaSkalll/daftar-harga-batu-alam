import { priceChange } from "../libs/allNewPrice";
import { newPrice } from "../libs/newPrice";
import { Pricelist } from "../libs/typeAnnotation";
import TableHead from "./TableHead";

const Table = ({ data }: { data: Pricelist[] }) => {
    return (
        <table className="w-full bg-slate-800 text-white px-5 font-bold text-sm md:text-base">
            <thead className="border-b-2 border-slate-900 bg-teal-500 md:text-2xl">
                <TableHead />
            </thead>
            <tbody>
                {data.map((item) => {
                    const price = item.harga;

                    const increment = priceChange[item.jenis.toLowerCase() as keyof typeof priceChange];
                    const newPriceCount = newPrice(price, item, item.jenis.toLowerCase(), increment, "+");

                    const formatPrice = new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                    }).format(newPriceCount);

                    return (
                        <tr key={item.id} className={`${item.id % 2 === 0 ? "bg-slate-500 text-black" : "bg-slate-700"}`}>
                            <td className="py-3">
                                <span className={` border-2 border-slate-900 w-10 h-7 flex items-center ml-1 md:ml-5 justify-center rounded-md shadow-[3px_3px_0px_white]`}>{item.id}</span>
                            </td>
                            <td className="py-3 text-start pl-2 md:pl-10">{item.jenis}</td>
                            <td className="py-3 text-start uppercase">{item.motif}</td>
                            <td className="py-3 text-start uppercase">{item.ukuran}</td>
                            <td className="py-3 text-start">{formatPrice}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
