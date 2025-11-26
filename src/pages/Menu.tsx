import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productCake from "@/assets/product-cake-1.webp";
import productCookies from "@/assets/product-cookies-1.webp";
import productCupcakes from "@/assets/product-cupcakes-1.webp";
import productTraditional from "@/assets/product-traditional-1.webp";

type Category = "all" | "cakes" | "cookies" | "cupcakes" | "traditional";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, name: "All Products" },
    { id: "cakes" as Category, name: "Cakes" },
    { id: "cookies" as Category, name: "Cookies" },
    { id: "cupcakes" as Category, name: "Cupcakes" },
    { id: "traditional" as Category, name: "Traditional Snacks" },
  ];

  const products = [
    {
      category: "cakes",
      name: "Chocolate Birthday Cake",
      description:
        "Rich chocolate cake with pink buttercream roses and sprinkles",
      price: "Rp 250,000",
      image: productCake,
      imageAlt: "Chocolate birthday cake with decorative frosting",
    },
    {
      category: "cakes",
      name: "Red Velvet Cake",
      description: "Classic red velvet with cream cheese frosting",
      price: "Rp 280,000",
      image: productCake,
      imageAlt: "Red velvet layer cake",
    },
    {
      category: "cakes",
      name: "Vanilla Celebration Cake",
      description: "Light vanilla sponge with buttercream and fresh fruits",
      price: "Rp 220,000",
      image: productCake,
      imageAlt: "Vanilla celebration cake with fruit toppings",
    },
    {
      category: "cookies",
      name: "Rainbow Macarons",
      description: "Colorful French macarons in assorted flavors",
      price: "Rp 75,000",
      image: productCookies,
      imageAlt: "Assorted rainbow colored macarons",
    },
    {
      category: "cookies",
      name: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with premium chocolate chips",
      price: "Rp 45,000",
      image: productCookies,
      imageAlt: "Chocolate chip cookies",
    },
    {
      category: "cookies",
      name: "Sugar Cookie Box",
      description: "Decorated sugar cookies perfect for any occasion",
      price: "Rp 60,000",
      image: productCookies,
      imageAlt: "Decorated sugar cookies",
    },
    {
      category: "cupcakes",
      name: "Floral Cupcakes",
      description: "Vanilla cupcakes with buttercream flowers",
      price: "Rp 45,000",
      image: productCupcakes,
      imageAlt: "Cupcakes decorated with buttercream flowers",
    },
    {
      category: "cupcakes",
      name: "Chocolate Fudge Cupcakes",
      description: "Rich chocolate cupcakes with fudge frosting",
      price: "Rp 40,000",
      image: productCupcakes,
      imageAlt: "Chocolate fudge cupcakes",
    },
    {
      category: "cupcakes",
      name: "Red Velvet Cupcakes",
      description: "Mini red velvet cakes with cream cheese frosting",
      price: "Rp 48,000",
      image: productCupcakes,
      imageAlt: "Red velvet cupcakes",
    },
    {
      category: "traditional",
      name: "Kue Lapis",
      description: "Traditional Indonesian layered cake",
      price: "Rp 65,000",
      image: productTraditional,
      imageAlt: "Traditional Indonesian layered cake",
    },
    {
      category: "traditional",
      name: "Onde-onde",
      description: "Sweet glutinous rice balls filled with mung bean paste",
      price: "Rp 35,000",
      image: productTraditional,
      imageAlt: "Traditional onde-onde snacks",
    },
    {
      category: "traditional",
      name: "Klepon",
      description: "Green rice cake balls filled with palm sugar",
      price: "Rp 30,000",
      image: productTraditional,
      imageAlt: "Traditional klepon snacks",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading text-primary mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our delicious selection of freshly baked treats
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`animate-fade-up [animation-delay:${index * 0.05}s]`}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
