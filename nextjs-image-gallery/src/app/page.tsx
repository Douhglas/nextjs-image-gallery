'use client'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ImagesGrid from "./components/ImagesGrid";
import { useEffect, useState } from "react";


interface Photo {
    id: number;
    url: string;
    photographer: string;
    src: string; // URL de la imagen
}

export default function Home() {
    const[photos, setPhotos] = useState<Photo[]>([]);
    const [query, setQuery] = useState<string>("nature");
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
            }catch(err: any){
                setError(err.message);
            }finally{
                setLoading(false);
            }

        };
        fetchPhotos();
    }, [query]);
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <ImagesGrid products={photos} />
            </main>
        </>
    );
}