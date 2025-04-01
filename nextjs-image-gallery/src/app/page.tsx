import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ImagesGrid from "./components/ImagesGrid";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function Home() {
    const products: Product[] = [
        {
            id: 1,
            name: "Producto 1",
            price: 100,
            image: "https://via.placeholder.com/150",
            description: "Descripción del producto 1",
        },
        {
            id: 2,
            name: "Producto 2",
            price: 200,
            image: "https://via.placeholder.com/150",
            description: "Descripción del producto 2",
        },
    ];

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold mb-6">Productos</h1>
                <ImagesGrid products={products} />
            </main>
        </>
    );
}