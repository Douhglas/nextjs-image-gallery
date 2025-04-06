'use client'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ImagesGrid from "./components/ImagesGrid";
import { useEffect, useState } from "react";
import { Photo } from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";


export default function Home() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [query, setQuery] = useState<string>("nature");
    const [isOpen, setIsOpen] = useState<boolean>(false); // Estado para manejar el carrito
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/products?query=${query}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setPhotos(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }

        };
        fetchPhotos();
    }, [query]);
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="">
                    <h1 className="text-2xl font-bold">Galería de Imágenes</h1>
                    <SearchBar />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 " onClick={() => setIsOpen(true)}>Carrito de compras</button>
                </div>
                <ImagesGrid products={photos} />
                <CartDrawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    cartItems={photos}
                    removeFromCart={(productId: number) => {
                        setPhotos((prev) => prev.filter((item) => item.id !== productId));
                    }
                    }
                />
            </main>
        </>
    );
}