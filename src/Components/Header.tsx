import { MagnifyingGlass } from "@phosphor-icons/react";

const Header = ({ handleSearch }: { handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Harga Batu Alam</h1>
            <div className="flex gap-2 items-center justify-center border-2 px-2 py-1 rounded-md bg-white">
                <button>
                    <MagnifyingGlass size={32} />
                </button>
                <input onChange={handleSearch} type="text" placeholder="Search..." className="py-1 focus:outline-none focus:border-none bg-white" />
            </div>
        </>
    );
};

export default Header;
