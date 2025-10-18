import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
}

const ProductCard = ({ name, description, price, image, imageAlt }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Link to="/order" className="w-full">
          <Button className="w-full rounded-full">Order Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
