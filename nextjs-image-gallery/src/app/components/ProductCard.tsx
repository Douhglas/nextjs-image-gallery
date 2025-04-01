
export default function ProductCard({ image, title, description, price }: { image: string; title: string; description: string; price: number }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="font-bold text-xl">${price}</span>
            </div>
        </div>
    );
}