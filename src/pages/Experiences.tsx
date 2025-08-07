import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Star, Filter, Calendar, Users } from "lucide-react";

const Experiences = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const experiences = [
    {
      id: 1,
      title: "Caminata por el Café Ancestral",
      location: "San Vicente del Caguán, Caquetá",
      price: 45000,
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg",
      category: "Naturaleza",
      duration: "4 horas",
      maxPeople: 8,
      description: "Descubre los secretos del café cultivado por generaciones en las montañas del piedemonte amazónico.",
      provider: "Cooperativa Campesina del Caguán",
      features: ["Degustación", "Guía local", "Transporte incluido"]
    },
    {
      id: 2,
      title: "Tejido Tradicional Inga",
      location: "Mocoa, Putumayo",
      price: 60000,
      rating: 4.9,
      reviews: 18,
      image: "/placeholder.svg",
      category: "Cultura",
      duration: "6 horas",
      maxPeople: 6,
      description: "Aprende la técnica ancestral del tejido Inga con artesanas expertas de la comunidad.",
      provider: "Mujeres Tejedoras Inga",
      features: ["Material incluido", "Producto final", "Certificado"]
    },
    {
      id: 3,
      title: "Avistamiento de Aves del Piedemonte",
      location: "Florencia, Caquetá",
      price: 35000,
      rating: 4.7,
      reviews: 31,
      image: "/placeholder.svg",
      category: "Naturaleza",
      duration: "3 horas",
      maxPeople: 12,
      description: "Observa especies endémicas del piedemonte amazónico en su hábitat natural con guías locales.",
      provider: "EcoTurismo Caquetá",
      features: ["Binoculares", "Guía ornitólogo", "Desayuno rural"]
    },
    {
      id: 4,
      title: "Cocina Tradicional Amazónica",
      location: "Puerto Asís, Putumayo",
      price: 55000,
      rating: 4.8,
      reviews: 15,
      image: "/placeholder.svg",
      category: "Gastronomía",
      duration: "5 horas",
      maxPeople: 10,
      description: "Prepara platos ancestrales con ingredientes de la selva amazónica del Putumayo.",
      provider: "Comunidad Cofán",
      features: ["Ingredientes locales", "Receta tradicional", "Almuerzo incluido"]
    },
    {
      id: 5,
      title: "Navegación por el Río Caquetá",
      location: "Puerto Leguízamo, Putumayo",
      price: 40000,
      rating: 4.6,
      reviews: 22,
      image: "/placeholder.svg",
      category: "Aventura",
      duration: "4 horas",
      maxPeople: 8,
      description: "Navega por el majestuoso río Caquetá en canoas construidas por comunidades locales.",
      provider: "Navegantes del Caquetá",
      features: ["Chaleco salvavidas", "Guía local", "Refrigerio"]
    },
    {
      id: 6,
      title: "Rituales de Sanación Ancestral",
      location: "Valle de Sibundoy, Putumayo",
      price: 80000,
      rating: 4.9,
      reviews: 12,
      image: "/placeholder.svg",
      category: "Bienestar",
      duration: "8 horas",
      maxPeople: 4,
      description: "Participa en ceremonia de sanación con plantas medicinales ancestrales del Valle de Sibundoy.",
      provider: "Taitas del Putumayo",
      features: ["Ceremonia completa", "Medicina tradicional", "Acompañamiento"]
    }
  ];

  const categories = [
    { id: "all", name: "Todas", count: experiences.length },
    { id: "Naturaleza", name: "Naturaleza", count: experiences.filter(e => e.category === "Naturaleza").length },
    { id: "Cultura", name: "Cultura", count: experiences.filter(e => e.category === "Cultura").length },
    { id: "Gastronomía", name: "Gastronomía", count: experiences.filter(e => e.category === "Gastronomía").length },
    { id: "Aventura", name: "Aventura", count: experiences.filter(e => e.category === "Aventura").length },
    { id: "Bienestar", name: "Bienestar", count: experiences.filter(e => e.category === "Bienestar").length },
  ];

  const filteredExperiences = experiences.filter(experience => {
    const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         experience.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         experience.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || experience.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-nature py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiencias Auténticas
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre aventuras únicas diseñadas por comunidades locales que celebran la riqueza cultural de Colombia
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre, ubicación o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="shadow-soft bg-gradient-card border-0 sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Filtros</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Categorías</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{category.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {filteredExperiences.length} experiencia{filteredExperiences.length !== 1 ? 's' : ''} encontrada{filteredExperiences.length !== 1 ? 's' : ''}
              </h2>
              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Más populares</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Mejor valoradas</option>
              </select>
            </div>

            {/* Experiences Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredExperiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer group border-0 bg-gradient-card">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground">
                        {experience.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                        <span className="text-xs font-medium">{experience.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {experience.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground mb-3">
                      Por {experience.provider}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        <span>Máx. {experience.maxPeople}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          ${experience.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">COP</span>
                      </div>
                      <Link to={`/experience/${experience.id}`}>
                        <Button variant="default" size="sm" className="shadow-soft">
                          Ver Detalles
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="text-xs text-muted-foreground mt-2">
                      {experience.reviews} reseñas
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredExperiences.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No se encontraron experiencias
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Intenta ajustar tus filtros o buscar con términos diferentes.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Experiences;