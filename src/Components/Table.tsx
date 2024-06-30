import { Pricelist } from "../libs/typeAnnotation";

const Table = ({ data }: { data: Pricelist[] }) => {
    return (
        <table className="w-full bg-slate-800 text-white px-5 font-bold text-sm md:text-base">
            <thead className="border-b-2 border-slate-900 bg-teal-500 md:text-2xl">
                <tr>
                    <th className="py-3">
                        <span className={` border-2 border-slate-900 w-10 h-7 flex items-center ml-5 justify-center rounded-md shadow-[3px_3px_0px_white]`}>#</span>
                    </th>
                    <th className="py-3 text-start pl-10">Jenis</th>
                    <th className="py-3 text-start">Motif</th>
                    <th className="py-3 text-start">Ukuran</th>
                    <th className="py-3 text-start">Harga</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    const price = item.harga;

                    const andesitPrice = 5000;
                    const newAndesitPrice = item.jenis.toLowerCase() === "andesit" ? price + andesitPrice : price;

                    const formatPrice = new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                    }).format(newAndesitPrice);

                    return (
                        <tr key={item.id} className={`${item.id % 2 === 0 ? "bg-slate-500 text-black" : "bg-slate-700"}`}>
                            <td className="py-3">
                                <span className={` border-2 border-slate-900 w-10 h-7 flex items-center ml-1 md:ml-5 justify-center rounded-md shadow-[3px_3px_0px_white]`}>{item.id}</span>
                            </td>
                            <td className="py-3 text-start pl-10">{item.jenis}</td>
                            <td className="py-3 text-start lowercase">
                                <span className="capitalize">{item.motif}</span>
                            </td>
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
