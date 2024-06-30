import { MagnifyingGlass } from "@phosphor-icons/react";

const Header = ({ handleSearch, setSearch, search }: { handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void; setSearch: React.Dispatch<React.SetStateAction<string>>; search: string }) => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Harga Batu Alam</h1>
            <div className="flex items-center justify-center rounded-xl bg-white overflow-hidden">
                <div className="px-3 md:py-2 py-1 rounded-l-[inherit] bg-slate-500 border-2 border-black flex gap-2 items-center">
                    <MagnifyingGlass size={32} className="text-white" />
                    <p className="text-2xl text-white hidden md:inline">Search</p>
                </div>
                <div className="relative h-full border-2 rounded-r-xl border-slate-800 border-l-0 overflow-hidden w-full">
                    <input onChange={handleSearch} type="text" value={search} placeholder="Search..." className="py-2 px-2 w-96 focus:outline-none focus:border-none bg-white" />
                    <button
                        onClick={() => setSearch("")}
                        className="absolute right-1 px-1 rounded-md top-[2px] font-bold text-2xl text-slate-500 hover:text-red-700 focus:text-red-700 active:text-red-700 focus:border-none focus:outline-none focus:scale-105 duration-300"
                    >
                        X
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
