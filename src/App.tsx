import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Pricelist } from "./libs/typeAnnotation";
import Table from "./Components/Table";
import { useDebounce } from "./libs/useDebounce";

function App() {
    const [data, setData] = useState<Pricelist[]>([]);
    const [formatedData, setFormatedData] = useState<Pricelist[]>([]);
    const [search, setSearch] = useState<string>("");

    const searchTerm = useDebounce(search, 500);

    useEffect(() => {
        if (searchTerm) {
            const fillteredData = data.filter((item) => {
                return item.jenis.toLowerCase().includes(searchTerm.toLowerCase());
            });

            setFormatedData(fillteredData);
        } else {
            setFormatedData(data);
        }
    }, [searchTerm, data]);

    const fetchData = async () => {
        const response = await fetch("./listprice.json");
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setFormatedData(data);
    }, [data]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <main className="min-h-screen max-w-[1200px] mx-auto px-5">
            <header className="py-5 flex items-center justify-between border-b-2 border-black">
                <h1 className="text-3xl font-bold underline">Harga Batu Alam</h1>
                <div className="flex gap-2 items-center justify-center border-2 px-2 py-1 rounded-md bg-white">
                    <button>
                        <MagnifyingGlass size={32} />
                    </button>
                    <input onChange={handleSearch} type="text" placeholder="Search..." className="py-1 focus:outline-none focus:border-none " />
                </div>
            </header>
            <section className="py-5">
                <Table data={formatedData} />
            </section>
        </main>
    );
}

export default App;
