type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-red-500 font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
