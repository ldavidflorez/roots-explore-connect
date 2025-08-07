import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { 
  Plus, Calendar, MapPin, Star, Users, Edit, 
  Trash2, Eye, Clock, CheckCircle, AlertCircle,
  Upload, X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock user data - in real app, this would come from auth context
  const user = {
    name: "María González",
    email: "maria@example.com",
    type: "provider", // or "tourist"
    location: "Huila, Colombia",
    organization: "Cooperativa San Agustín"
  };

  const [newExperience, setNewExperience] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    maxPeople: "",
    category: "",
    highlights: [""],
    images: []
  });

  // Mock data
  const myExperiences = [
    {
      id: 1,
      title: "Caminata por el Café Ancestral",
      location: "Huila, Colombia",
      price: 45000,
      rating: 4.8,
      reviews: 24,
      status: "approved",
      image: "/placeholder.svg",
      bookings: 47,
      revenue: 2115000
    },
    {
      id: 2,
      title: "Proceso de Tostado Tradicional",
      location: "Huila, Colombia", 
      price: 35000,
      rating: 4.6,
      reviews: 12,
      status: "pending",
      image: "/placeholder.svg",
      bookings: 0,
      revenue: 0
    }
  ];

  const myBookings = [
    {
      id: 1,
      experienceTitle: "Caminata por el Café Ancestral",
      date: "2024-01-20",
      participants: 4,
      status: "confirmed",
      total: 180000,
      provider: "Cooperativa San Agustín"
    },
    {
      id: 2,
      experienceTitle: "Tejido Tradicional Wayuu",
      date: "2024-01-25",
      participants: 2,
      status: "pending",
      total: 120000,
      provider: "Mujeres Wayuu Unidos"
    }
  ];

  const handlePublishExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    
    setTimeout(() => {
      toast({
        title: "¡Experiencia publicada!",
        description: "Tu experiencia está siendo revisada y será visible pronto.",
      });
      setNewExperience({
        title: "",
        description: "",
        location: "",
        price: "",
        duration: "",
        maxPeople: "",
        category: "",
        highlights: [""],
        images: []
      });
      setIsPublishing(false);
      setActiveTab("experiences");
    }, 1500);
  };

  const addHighlight = () => {
    setNewExperience({
      ...newExperience,
      highlights: [...newExperience.highlights, ""]
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...newExperience.highlights];
    newHighlights[index] = value;
    setNewExperience({
      ...newExperience,
      highlights: newHighlights
    });
  };

  const removeHighlight = (index: number) => {
    const newHighlights = newExperience.highlights.filter((_, i) => i !== index);
    setNewExperience({
      ...newExperience,
      highlights: newHighlights
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Aprobada</Badge>;
      case "pending":
        return <Badge variant="secondary">Pendiente</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rechazada</Badge>;
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmada</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            ¡Hola, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            {user.type === "provider" 
              ? "Gestiona tus experiencias y reservas desde aquí"
              : "Explora tus reservas y descubre nuevas experiencias"
            }
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            {user.type === "provider" && (
              <>
                <TabsTrigger value="experiences">Mis Experiencias</TabsTrigger>
                <TabsTrigger value="publish">Publicar</TabsTrigger>
              </>
            )}
            <TabsTrigger value="bookings">
              {user.type === "provider" ? "Reservas Recibidas" : "Mis Reservas"}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {user.type === "provider" ? (
                <>
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Experiencias</p>
                          <p className="text-2xl font-bold text-primary">{myExperiences.length}</p>
                        </div>
                        <Eye className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Reservas Totales</p>
                          <p className="text-2xl font-bold text-primary">
                            {myExperiences.reduce((acc, exp) => acc + exp.bookings, 0)}
                          </p>
                        </div>
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Ingresos</p>
                          <p className="text-2xl font-bold text-primary">
                            ${myExperiences.reduce((acc, exp) => acc + exp.revenue, 0).toLocaleString()}
                          </p>
                        </div>
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Calificación Promedio</p>
                          <p className="text-2xl font-bold text-primary">
                            {(myExperiences.reduce((acc, exp) => acc + exp.rating, 0) / myExperiences.length).toFixed(1)}
                          </p>
                        </div>
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Reservas</p>
                          <p className="text-2xl font-bold text-primary">{myBookings.length}</p>
                        </div>
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Experiencias Vividas</p>
                          <p className="text-2xl font-bold text-primary">
                            {myBookings.filter(b => b.status === "confirmed").length}
                          </p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Próximas</p>
                          <p className="text-2xl font-bold text-primary">
                            {myBookings.filter(b => new Date(b.date) > new Date()).length}
                          </p>
                        </div>
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft border-0 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Gastado</p>
                          <p className="text-2xl font-bold text-primary">
                            ${myBookings.reduce((acc, booking) => acc + booking.total, 0).toLocaleString()}
                          </p>
                        </div>
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
                <CardDescription>
                  {user.type === "provider" 
                    ? "Gestiona tu negocio de turismo comunitario"
                    : "Descubre nuevas experiencias auténticas"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {user.type === "provider" ? (
                    <>
                      <Button 
                        className="h-20 flex-col space-y-2" 
                        variant="outline"
                        onClick={() => setActiveTab("publish")}
                      >
                        <Plus className="h-6 w-6" />
                        <span>Nueva Experiencia</span>
                      </Button>
                      <Button 
                        className="h-20 flex-col space-y-2" 
                        variant="outline"
                        onClick={() => setActiveTab("bookings")}
                      >
                        <Calendar className="h-6 w-6" />
                        <span>Ver Reservas</span>
                      </Button>
                      <Button 
                        className="h-20 flex-col space-y-2" 
                        variant="outline"
                        onClick={() => setActiveTab("experiences")}
                      >
                        <Eye className="h-6 w-6" />
                        <span>Mis Experiencias</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/experiences">
                        <Button className="h-20 w-full flex-col space-y-2" variant="outline">
                          <MapPin className="h-6 w-6" />
                          <span>Explorar Experiencias</span>
                        </Button>
                      </Link>
                      <Button 
                        className="h-20 flex-col space-y-2" 
                        variant="outline"
                        onClick={() => setActiveTab("bookings")}
                      >
                        <Calendar className="h-6 w-6" />
                        <span>Mis Reservas</span>
                      </Button>
                      <Link to="/register?type=provider">
                        <Button className="h-20 w-full flex-col space-y-2" variant="outline">
                          <Plus className="h-6 w-6" />
                          <span>Ser Proveedor</span>
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Experiences Tab (Provider only) */}
          {user.type === "provider" && (
            <TabsContent value="experiences" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Mis Experiencias</h2>
                <Button onClick={() => setActiveTab("publish")} variant="nature">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Experiencia
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myExperiences.map((experience) => (
                  <Card key={experience.id} className="overflow-hidden shadow-soft border-0 bg-gradient-card">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        {getStatusBadge(experience.status)}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{experience.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-primary">
                          ${experience.price.toLocaleString()}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm">{experience.rating}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        <div>Reservas: {experience.bookings}</div>
                        <div>Ingresos: ${experience.revenue.toLocaleString()}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/experience/${experience.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          {/* Publish Experience Tab (Provider only) */}
          {user.type === "provider" && (
            <TabsContent value="publish" className="mt-6">
              <Card className="max-w-4xl mx-auto shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>Publicar Nueva Experiencia</CardTitle>
                  <CardDescription>
                    Comparte tu conocimiento y cultura con viajeros de todo el mundo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePublishExperience} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título de la experiencia</Label>
                        <Input
                          id="title"
                          value={newExperience.title}
                          onChange={(e) => setNewExperience({...newExperience, title: e.target.value})}
                          placeholder="Ej: Caminata por el Café Ancestral"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Ubicación</Label>
                        <Input
                          id="location"
                          value={newExperience.location}
                          onChange={(e) => setNewExperience({...newExperience, location: e.target.value})}
                          placeholder="Ciudad, Departamento"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        value={newExperience.description}
                        onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
                        placeholder="Describe tu experiencia en detalle..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Precio (COP)</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newExperience.price}
                          onChange={(e) => setNewExperience({...newExperience, price: e.target.value})}
                          placeholder="45000"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duración</Label>
                        <Input
                          id="duration"
                          value={newExperience.duration}
                          onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})}
                          placeholder="4 horas"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="maxPeople">Máximo personas</Label>
                        <Input
                          id="maxPeople"
                          type="number"
                          value={newExperience.maxPeople}
                          onChange={(e) => setNewExperience({...newExperience, maxPeople: e.target.value})}
                          placeholder="8"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Categoría</Label>
                      <select
                        id="category"
                        value={newExperience.category}
                        onChange={(e) => setNewExperience({...newExperience, category: e.target.value})}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                        required
                      >
                        <option value="">Selecciona una categoría</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Cultura">Cultura</option>
                        <option value="Gastronomía">Gastronomía</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Bienestar">Bienestar</option>
                        <option value="Arte">Arte y Artesanías</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <Label>Puntos destacados</Label>
                      {newExperience.highlights.map((highlight, index) => (
                        <div key={index} className="flex space-x-2">
                          <Input
                            value={highlight}
                            onChange={(e) => updateHighlight(index, e.target.value)}
                            placeholder="Describe algo destacado de tu experiencia"
                          />
                          {newExperience.highlights.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => removeHighlight(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addHighlight}
                        className="w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar punto destacado
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label>Imágenes</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Arrastra y suelta imágenes aquí, o haz clic para seleccionar
                        </p>
                        <input type="file" multiple accept="image/*" className="hidden" />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isPublishing}
                      className="w-full"
                      variant="nature"
                    >
                      {isPublishing ? "Publicando..." : "Publicar Experiencia"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {user.type === "provider" ? "Reservas Recibidas" : "Mis Reservas"}
              </h2>
              <p className="text-muted-foreground">
                {user.type === "provider" 
                  ? "Gestiona las reservas de tus experiencias"
                  : "Revisa tus próximas aventuras"
                }
              </p>
            </div>

            <div className="space-y-4">
              {myBookings.map((booking) => (
                <Card key={booking.id} className="shadow-soft border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {booking.experienceTitle}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>
                              {new Date(booking.date).toLocaleDateString('es-ES', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{booking.participants} participantes</span>
                          </div>
                          {user.type === "tourist" && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{booking.provider}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(booking.status)}
                        <div className="text-lg font-bold text-primary mt-2">
                          ${booking.total.toLocaleString()} COP
                        </div>
                      </div>
                    </div>
                    
                    {user.type === "provider" && booking.status === "pending" && (
                      <div className="flex space-x-2 mt-4 pt-4 border-t border-border">
                        <Button variant="nature" size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Confirmar
                        </Button>
                        <Button variant="outline" size="sm">
                          <X className="h-4 w-4 mr-1" />
                          Rechazar
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;