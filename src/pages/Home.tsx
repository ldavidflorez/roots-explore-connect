import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Users, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-tourism.jpg";

const Home = () => {
  const featuredExperiences = [
    {
      id: 1,
      title: "Caminata por el Café Ancestral",
      location: "Huila, Colombia",
      price: "$45.000",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Naturaleza"
    },
    {
      id: 2,
      title: "Tejido Tradicional Wayuu",
      location: "La Guajira, Colombia",
      price: "$60.000",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Cultura"
    },
    {
      id: 3,
      title: "Avistamiento de Aves Andinas",
      location: "Cundinamarca, Colombia",
      price: "$35.000",
      rating: 4.7,
      image: "/placeholder.svg",
      category: "Naturaleza"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubre las <span className="text-accent">Raíces Vivas</span> de Colombia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Conecta con comunidades locales y vive experiencias auténticas de turismo sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/experiences">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                <Search className="h-5 w-5 mr-2" />
                Explorar Experiencias
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                Comenzar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Raíces Vivas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos comprometemos con el turismo responsable que beneficia a las comunidades locales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Comunidades Auténticas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conecta directamente con comunidades locales y conoce sus tradiciones ancestrales
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Turismo Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todas nuestras experiencias respetan el medio ambiente y apoyan el desarrollo local
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Experiencias Únicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vive aventuras que no encontrarás en ningún otro lugar, diseñadas por expertos locales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experiencias Destacadas
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre las aventuras más populares de nuestras comunidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{experience.category}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{experience.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{experience.price}</span>
                    <Link to={`/experience/${experience.id}`}>
                      <Button variant="default" size="sm">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/experiences">
              <Button variant="nature" size="lg">
                Ver Todas las Experiencias
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Eres un proveedor local?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a nuestra comunidad y comparte tus experiencias únicas con viajeros de todo el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?type=provider">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Registrarse como Proveedor
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Conoce Más
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;