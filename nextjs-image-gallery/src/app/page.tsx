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
    const [cartItems, setCartItems] = useState<Photo[]>([]); // Estado para manejar los productos en el carrito
    const [isOpen, setIsOpen] = useState<boolean>(false); // Estado para manejar el carrito
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    const addToCart = (product:Photo) => {
        if(cartItems.some((item) => item.id === product.id)){
            alert("El producto ya está en el carrito");
            return;
        }
        const newCartItems =[...cartItems,product];
        setCartItems(newCartItems);
    }
    const removeFromCart = (productId: number) => {
        const newList = cartItems.filter((item) => item.id !== productId);
        setCartItems(newList);
    }
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
            <header className="w-full bg-gray-800 text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Galería de Imágenes</h1>
                    <div className="flex items-center gap-4">
                        <SearchBar />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setIsOpen(true)}
                        >
                            Carrito de compras
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">

                <ImagesGrid products={photos} addToCart={(product:Photo) => addToCart(product)}/>
                <CartDrawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    cartItems={cartItems}
                    removeFromCart={(productId: number) => removeFromCart(productId)}
                />
            </main>
        </>
    );
}