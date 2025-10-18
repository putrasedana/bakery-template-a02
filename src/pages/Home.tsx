import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroBakery from "@/assets/hero-bakery.webp";
import productCake from "@/assets/product-cake-1.webp";
import productCookies from "@/assets/product-cookies-1.webp";
import productCupcakes from "@/assets/product-cupcakes-1.webp";
import { ArrowRight, Heart, Award, Clock } from "lucide-react";

const Home = () => {
  const featuredProducts = [
    {
      name: "Chocolate Birthday Cake",
      description: "Rich chocolate cake with pink buttercream roses",
      price: "Rp 250,000",
      image: productCake,
      imageAlt: "Delicious chocolate birthday cake with pink frosting",
    },
    {
      name: "Rainbow Macarons",
      description: "Colorful French macarons in assorted flavors",
      price: "Rp 75,000",
      image: productCookies,
      imageAlt: "Assorted colorful macarons",
    },
    {
      name: "Floral Cupcakes",
      description: "Vanilla cupcakes with buttercream flowers",
      price: "Rp 45,000",
      image: productCupcakes,
      imageAlt: "Beautiful cupcakes with floral decorations",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every treat is handcrafted with care and passion",
    },
    {
      icon: Award,
      title: "Fresh Ingredients",
      description: "Only the finest quality ingredients in every recipe",
    },
    {
      icon: Clock,
      title: "Baked Daily",
      description: "Fresh from the oven every single day",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <picture>
          <source srcSet={heroBakery} type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Hero"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-background/50" />

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-primary mb-6 leading-tight">
              Welcome to Dapoer Manis
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-light">
              Homemade treats baked fresh every day!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-8 w-full sm:w-auto"
                >
                  See Our Menu
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/order">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8 w-full sm:w-auto"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-3xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved treats, made fresh daily with premium
              ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="rounded-full">
                View Full Menu
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Treat yourself or someone special to our delicious homemade
              goodies!
            </p>
            <Link to="/order">
              <Button size="lg" className="rounded-full text-lg px-10">
                Place Your Order
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
