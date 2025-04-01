// filepath: c:\Users\Usuario\Desktop\nextjs-image-gallery\nextjs-image-gallery\src\app\components\ImagesGrid.tsx
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

interface ProductGridProps {
    products: Product[];
}

export default function ImagesGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        price={product.price}
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