'use client'
export default function Header() {

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Images Gallery</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200" >
        Carrito</button>
        </header>
    );
    
}