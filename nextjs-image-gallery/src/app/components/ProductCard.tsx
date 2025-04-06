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

export default function ProductCard({id,url,photographer,src}: Photo) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={src.original} alt={id.toFixed()} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{photographer}</div>
                <p className="text-gray-700 text-base">
                    {photographer}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="font-bold text-xl">${1234}</span>
            </div>
        </div>
    );
}