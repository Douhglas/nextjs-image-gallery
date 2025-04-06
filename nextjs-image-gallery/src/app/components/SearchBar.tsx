

export default function SearchBar() {
    return (
        <div className="flex items-center justify-center p-4 bg-gray-800 text-white">
          <input
                type="text"
                name="query"
                placeholder="Buscar imágenes..."
                className="w-full max-w-md p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    )
}