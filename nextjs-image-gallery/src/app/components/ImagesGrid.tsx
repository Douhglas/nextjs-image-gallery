
import ProductCard from "./ProductCard";
import { Photo } from "./ProductCard"; // Ensure Photo is a type or interface with the correct structure


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