import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar({ setQuery }: { setQuery: (query: string) => void }) {
    
    const [inputValue, setInputValue] = useState<string>("");
    const debouncedQuery = useDebounce(inputValue, 500); // 500ms debounce

    useEffect(() => {
        if (debouncedQuery) {
            setQuery(debouncedQuery);
        }
    }, [debouncedQuery]);

    return (
        <div className="flex items-center justify-center p-4 bg-gray-800 text-white">
            <input
                type="text"
                name="query"
                placeholder="Buscar imágenes..."
                className="w-full max-w-md p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}