import { Pricelist } from "../libs/typeAnnotation";

const TableBody = ({ item, formatPrice }: { item: Pricelist; formatPrice: string }) => {
    return (
        <tr className={`${item.id % 2 === 0 ? "bg-slate-500 text-black" : "bg-slate-700"}`}>
            <td className="py-3">
                <span className={` border-2 border-slate-900 w-10 h-7 flex items-center ml-1 md:ml-5 justify-center rounded-md shadow-[3px_3px_0px_white]`}>{item.id}</span>
            </td>
            <td className="py-3 text-start pl-2 md:pl-10">{item.jenis}</td>
            <td className="py-3 text-start uppercase">{item.motif}</td>
            <td className="py-3 text-start uppercase">{item.ukuran}</td>
            <td className="py-3 text-start">{formatPrice}</td>
        </tr>
    );
};

export default TableBody;
