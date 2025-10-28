import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { TrendingUp } from "lucide-react";

interface ProductCardProps {
  product: Product;
  affiliateId?: string;
}

export const ProductCard = ({ product, affiliateId }: ProductCardProps) => {
  const productUrl = affiliateId 
    ? `/affiliate/${affiliateId}/product/${product.id}`
    : `/product/${product.id}`;

  return (
    <Card className="group overflow-hidden bg-card shadow-card hover:shadow-glow transition-smooth border-border">
      <Link to={productUrl}>
        <div className="relative overflow-hidden aspect-video">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-6">
        <Link to={productUrl}>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-smooth line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.commission && (
              <span className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                {product.commission}% commission
              </span>
            )}
          </div>
          <Badge variant="outline" className="text-muted-foreground">
            {product.category}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={productUrl} className="w-full">
          <Button className="w-full" variant="premium">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
