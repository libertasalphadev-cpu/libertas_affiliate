import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/mockProducts";
import { ArrowLeft, Share2, TrendingUp, ShoppingCart, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id, affiliateId } = useParams();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-dark">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild variant="premium">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const shareUrl = affiliateId 
      ? `${window.location.origin}/affiliate/${affiliateId}/product/${product.id}`
      : window.location.href;
    
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!", {
      description: "Share this link to earn commissions"
    });
  };

  const handleOrder = () => {
    toast.success("Order initiated!", {
      description: "Proceeding to checkout..."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to={affiliateId ? `/affiliate/${affiliateId}` : "/"} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </Button>

        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              {product.featured && (
                <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground text-base px-4 py-2">
                  Featured Product
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.commission && (
                  <span className="text-accent flex items-center gap-1 text-lg font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    {product.commission}% commission
                  </span>
                )}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="space-y-3 border-t border-border pt-6">
              <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
              <div className="space-y-2">
                {[
                  "Professional-grade quality",
                  "24/7 customer support included",
                  "Regular updates and improvements",
                  "30-day money-back guarantee",
                  "Instant access after purchase"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-6">
              <Button 
                size="lg" 
                variant="premium" 
                className="w-full text-lg h-14"
                onClick={handleOrder}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              
              {affiliateId && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share & Earn {product.commission}%
                </Button>
              )}
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5k+</div>
                <div className="text-sm text-muted-foreground">Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 bg-card p-8 rounded-2xl shadow-card border border-border">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              This premium solution is designed for professionals who demand excellence. 
              With cutting-edge features and intuitive design, it delivers exceptional value 
              while maintaining ease of use. Perfect for businesses looking to scale their 
              operations and maximize efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Backed by our industry-leading support team and comprehensive documentation, 
              you'll have everything you need to succeed. Join thousands of satisfied customers 
              who have transformed their workflow with this powerful tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
