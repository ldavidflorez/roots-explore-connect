import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { 
  ArrowLeft, MapPin, Star, Calendar, Users, Clock, 
  Shield, Leaf, Heart, Share2, MessageCircle, Camera,
  CheckCircle, Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [participants, setParticipants] = useState(2);
  const [isBooking, setIsBooking] = useState(false);

  // Mock data - in real app, this would be fetched based on id
  const experience = {
    id: parseInt(id || "1"),
    title: "Caminata por el Café Ancestral",
    location: "Huila, Colombia",
    price: 45000,
    rating: 4.8,
    reviews: 24,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "Naturaleza",
    duration: "4 horas",
    maxPeople: 8,
    minAge: 12,
    difficulty: "Moderada",
    language: "Español",
    provider: {
      name: "Cooperativa San Agustín",
      rating: 4.9,
      verified: true,
      experience: "5 años"
    },
    description: `Descubre los secretos del café cultivado por generaciones en las montañas del Huila. 
    Esta experiencia te llevará a través de plantaciones tradicionales donde aprenderás sobre el proceso 
    completo del café, desde la semilla hasta la taza, mientras conoces las historias y tradiciones de 
    las familias caficultoras locales.`,
    highlights: [
      "Recorrido por plantaciones de café ancestral",
      "Proceso completo del café: siembra, cosecha y tostado",
      "Degustación de diferentes variedades locales",
      "Interacción con familias caficultoras",
      "Vista panorámica de las montañas del Huila",
      "Almuerzo tradicional incluido"
    ],
    includes: [
      "Guía especializado local",
      "Transporte desde el punto de encuentro",
      "Degustación de café",
      "Almuerzo tradicional",
      "Seguro de accidentes",
      "Certificado de participación"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Encuentro en el punto de partida",
        description: "Reunión con el guía y presentación del grupo"
      },
      {
        time: "8:30 AM",
        activity: "Traslado a la finca",
        description: "Viaje en transporte local hacia las plantaciones"
      },
      {
        time: "9:00 AM",
        activity: "Recorrido por las plantaciones",
        description: "Conoce el proceso de cultivo del café ancestral"
      },
      {
        time: "11:00 AM",
        activity: "Proceso de beneficio",
        description: "Aprende sobre el despulpado, fermentado y secado"
      },
      {
        time: "12:30 PM",
        activity: "Almuerzo tradicional",
        description: "Comida típica de la región con la familia anfitriona"
      },
      {
        time: "1:30 PM",
        activity: "Degustación de café",
        description: "Prueba diferentes variedades y métodos de preparación"
      },
      {
        time: "2:30 PM",
        activity: "Regreso",
        description: "Vuelta al punto de encuentro inicial"
      }
    ],
    availability: [
      "2024-01-15",
      "2024-01-16",
      "2024-01-18",
      "2024-01-22",
      "2024-01-23",
      "2024-01-25",
      "2024-01-29",
      "2024-01-30"
    ],
    userReviews: [
      {
        id: 1,
        name: "María González",
        rating: 5,
        date: "2024-01-10",
        comment: "Una experiencia increíble. Aprendí mucho sobre el café y la cultura local. La familia anfitriona fue muy acogedora.",
        verified: true
      },
      {
        id: 2,
        name: "Carlos Rodríguez",
        rating: 5,
        date: "2024-01-08",
        comment: "Excelente recorrido, muy bien organizado. El café que probamos era excepcional. Definitivamente recomendado.",
        verified: true
      },
      {
        id: 3,
        name: "Ana Martínez",
        rating: 4,
        date: "2024-01-05",
        comment: "Muy buena experiencia, aunque el transporte podría mejorar. Los paisajes son hermosos y el guía muy conocedor.",
        verified: true
      }
    ]
  };

  const handleBooking = async () => {
    if (!selectedDate) {
      toast({
        title: "Fecha requerida",
        description: "Por favor selecciona una fecha para tu experiencia.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      toast({
        title: "¡Solicitud de reserva enviada!",
        description: "Te contactaremos pronto para confirmar tu reserva.",
      });
      navigate("/dashboard");
      setIsBooking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a experiencias
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={experience.images[0]}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  {experience.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="outline" size="icon" className="bg-white/90 backdrop-blur-sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/90 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {experience.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Vista ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Title and Basic Info */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {experience.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{experience.rating}</span>
                        <span className="text-muted-foreground ml-1">({experience.userReviews.length} reseñas)</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Máx. {experience.maxPeople} personas</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                {experience.provider.verified && (
                  <Badge variant="secondary" className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    Verificado
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center">
                  <Leaf className="h-3 w-3 mr-1" />
                  Sostenible
                </Badge>
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerario</TabsTrigger>
                <TabsTrigger value="includes">Incluye</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card className="border-0 shadow-soft bg-gradient-card">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    <h3 className="text-lg font-semibold mb-4">Lo más destacado</h3>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="itinerary" className="mt-6">
                <Card className="border-0 shadow-soft bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {experience.itinerary.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-20 text-sm font-medium text-primary">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{item.activity}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="includes" className="mt-6">
                <Card className="border-0 shadow-soft bg-gradient-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">¿Qué incluye?</h3>
                    <ul className="space-y-2 mb-6">
                      {experience.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <h4 className="font-medium mb-2">Información adicional</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Edad mínima: {experience.minAge} años</div>
                          <div>Dificultad: {experience.difficulty}</div>
                          <div>Idioma: {experience.language}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">¿Qué llevar?</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Ropa cómoda y zapatos cerrados</div>
                          <div>Protector solar</div>
                          <div>Cámara fotográfica</div>
                          <div>Botella de agua</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card className="border-0 shadow-soft bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Reseñas de usuarios</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                        <span className="font-medium">{experience.rating}</span>
                        <span className="text-muted-foreground ml-1">({experience.userReviews.length} reseñas)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {experience.userReviews.map((review) => (
                        <div key={review.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">{review.name}</span>
                                {review.verified && (
                                  <Badge variant="secondary" className="ml-2 text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verificado
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-elevated border-0 bg-gradient-card">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">
                    ${experience.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">COP por persona</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Fecha</label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    >
                      <option value="">Selecciona una fecha</option>
                      {experience.availability.map((date) => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Participantes</label>
                    <div className="flex items-center justify-between border border-border rounded-md px-3 py-2 bg-background">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setParticipants(Math.max(1, participants - 1))}
                        disabled={participants <= 1}
                      >
                        -
                      </Button>
                      <span className="font-medium">{participants}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setParticipants(Math.min(experience.maxPeople, participants + 1))}
                        disabled={participants >= experience.maxPeople}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>Precio por persona</span>
                    <span>${experience.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Participantes</span>
                    <span>x {participants}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(experience.price * participants).toLocaleString()} COP</span>
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  disabled={isBooking || !selectedDate}
                  className="w-full mb-4"
                  variant="nature"
                >
                  {isBooking ? "Procesando..." : "Solicitar Reserva"}
                </Button>

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contactar Proveedor
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-muted-foreground">
                      Tu reserva será confirmada por el proveedor. Te contactaremos dentro de 24 horas para proceder con el pago.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Provider Info */}
            <Card className="mt-6 shadow-soft border-0 bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Proveedor</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {experience.provider.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{experience.provider.name}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      {experience.provider.rating} • {experience.provider.experience} de experiencia
                    </div>
                  </div>
                </div>
                {experience.provider.verified && (
                  <div className="flex items-center text-sm text-accent">
                    <Shield className="h-4 w-4 mr-1" />
                    Proveedor verificado
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;