export interface Photo {
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
    };
    alt: string;
}

interface ProductCardProps {
    photo: Photo;
    addToCart: (product: Photo) => void;
}

export default function ProductCard({ photo, addToCart }: ProductCardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-60 object-cover" src={photo.src.original} alt={photo.id.toFixed()} />
            <div className="px-6 py-10">
                <div className="font-bold text-xl mb-2">{photo.photographer}</div>
                <p className="text-gray-700 text-base">
                    {photo.alt}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                <span className="font-bold text-xl">${1234}</span>
                <button
                    onClick={() => addToCart(photo)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}