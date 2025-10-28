import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Share2, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AffiliatePage = () => {
  const { affiliateId } = useParams();

  const handleSharePage = () => {
    const shareUrl = `${window.location.origin}/affiliate/${affiliateId}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Your affiliate page link copied!", {
      description: "Share this link to earn commissions"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Affiliate Header */}
      <section className="gradient-hero py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="font-semibold">Affiliate Marketer</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Affiliate ID: {affiliateId}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Discover premium products curated by this affiliate marketer. 
              Every purchase through this page supports their work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Earn up to 35% commission on sales</span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={handleSharePage}
                className="gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share My Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Products</h2>
            <p className="text-muted-foreground">
              Premium products available through this affiliate marketer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                affiliateId={affiliateId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
           Libertas Affiliate  marketing  program
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AffiliatePage;
