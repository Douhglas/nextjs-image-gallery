

export default function SearchBar({ setQuery }: { setQuery: (query: string) => void }) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setQuery(query);
    }
    return (
        <div className="flex items-center justify-center p-4 bg-gray-800 text-white">
            <input
                type="text"
                name="query"
                placeholder="Buscar imágenes..."
                className="w-full max-w-md p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
                onClick={() => setQuery((document.querySelector('input[name="query"]') as HTMLInputElement)?.value || "")}>
                Buscar
            </button>
        </div>
    )
}