import { useEffect, useState } from "react";
import { Pricelist } from "./libs/typeAnnotation";
import Table from "./Components/Table";
import { useDebounce } from "./libs/useDebounce";
import Header from "./Components/Header";

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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <main className="min-h-screen max-w-[1200px] mx-auto">
            <header className="py-5 md:px-0 flex items-center justify-between px-5 flex-wrap gap-5 border-b-2 border-black">
                <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />
            </header>
            <section className="py-5">
                <Table data={formatedData} />
            </section>
        </main>
    );
}

export default App;
