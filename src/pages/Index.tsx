import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import { ArrowRight, TrendingUp, Users, Zap, Store } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featuredProducts = mockProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-20 lg:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  Libertas Alpha Affiliate Marketplace
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Turn Your Influence Into
                <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2">
                  Profitable Revenue
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Join Libertas Alpha Affiliate Marketplace,where top affiliates connect with premium products. 
                Earn generous commissions while promoting quality solutions your audience will love.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="premium" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    Start Earning Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
              
         
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={heroBanner}
                alt="Affiliate Marketing Dashboard"
                className="relative rounded-2xl shadow-card border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Affiliate</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to succeed as an affiliate marketer, all in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Commissions</h3>
              <p className="text-muted-foreground">
                Earn up to 35% commission on every sale with our competitive rates and transparent tracking.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Setup</h3>
              <p className="text-muted-foreground">
                Get your custom affiliate page ready in minutes. No technical skills required.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Products</h3>
              <p className="text-muted-foreground">
                Access curated selection of high-converting products your audience will actually want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Featured <span className="text-primary">Products</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Top-performing products with proven conversion rates
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsales Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Bestsales <span className="text-primary">Products</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Top-performing products with proven conversion rates
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Latest <span className="text-primary">Products</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Top-performing products with proven conversion rates
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-card border-y border-border">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of successful affiliates building their income with AffiliateHub
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Store className="w-6 h-6 text-primary" />
              <span className="font-bold text-foreground">
                Affiliate<span className="text-primary">Marketing</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Libertas Affiliate Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
