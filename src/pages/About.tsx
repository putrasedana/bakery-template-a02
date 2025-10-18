import aboutBakery from "@/assets/about-bakery.webp";
import { Heart, Users, Star } from "lucide-react";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spreading happiness through every bite, one homemade treat at a time
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-up">
            <img
              src={aboutBakery}
              alt="Inside Dapoer Manis bakery kitchen"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="animate-fade-up lg:animate-delay-200">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Dapoer Manis Began
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dapoer Manis started as a dream in a small home kitchen, where
                our founder discovered the joy of baking and sharing sweet
                moments with family and friends.
              </p>
              <p>
                What began as a hobby quickly grew into a passion. Friends and
                neighbors couldn't get enough of our homemade cakes and cookies,
                encouraging us to turn our love for baking into a small
                business.
              </p>
              <p>
                Today, Dapoer Manis has become a beloved local bakery, serving
                the community with the same dedication to quality and love that
                started it all. Every cake, cookie, and pastry is still made by
                hand, using only the freshest ingredients and traditional
                recipes passed down through generations.
              </p>
              <p className="font-semibold text-foreground">
                We believe that food made with love tastes better, and that's
                what we put into every single creation that leaves our kitchen.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 mb-20 animate-fade-up">
          <h2 className="text-3xl font-heading text-primary text-center mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To bring joy and sweetness into people's lives through handcrafted
            baked goods made with the finest ingredients, time-honored recipes,
            and a whole lot of heart. We're committed to quality, authenticity,
            and making every customer feel like family.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
          <div className="text-center p-8 bg-card rounded-3xl shadow-sm border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
            <p className="text-muted-foreground">
              Every treat is carefully crafted by hand with passion and
              dedication to perfection.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-3xl shadow-sm border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <Star size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              We use only premium, fresh ingredients to ensure every bite is
              delicious and memorable.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-3xl shadow-sm border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Users size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
            <p className="text-muted-foreground">
              We're proud to serve our local community and be part of your
              special moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
