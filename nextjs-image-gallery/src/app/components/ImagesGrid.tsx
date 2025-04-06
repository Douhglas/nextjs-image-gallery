
import ProductCard from "./ProductCard";

interface Photo {
    id: number;
    url: string;
    photographer: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    }; // Asegúrate de que "src" sea un objeto con estas propiedades
}

interface ProductGridProps {
    products: Photo[];
}

export default function ImagesGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key = {product.id}
                        id = {product.id}
                        url = {product.url}
                        photographer = {product.photographer}  
                        src = {product.src} 
                    />
                ))
            ) : (
                <div className="col-span-full text-center py-10">
                    <p className="text-lg text-muted-foreground">No se encontraron productos</p>
                </div>
            )}
        </div>
    );
}