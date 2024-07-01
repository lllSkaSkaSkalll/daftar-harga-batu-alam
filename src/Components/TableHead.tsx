const TableHead = ({ length }: { length: number }) => {
    return (
        <tr>
            <th className="py-3">
                <span className={` border-2 border-slate-900 w-10 h-7 flex items-center text-base ml-1 md:ml-5 justify-center rounded-md shadow-[3px_3px_0px_white]`}>{length}</span>
            </th>
            <th className="py-3 text-start pl-2 md:pl-10">Jenis</th>
            <th className="py-3 text-start">Motif</th>
            <th className="py-3 text-start">Ukuran</th>
            <th className="py-3 text-start">Harga</th>
        </tr>
    );
};

export default TableHead;
