import { Navbar } from "@/components/Navbar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Leaf, Globe, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Impulsamos el turismo comunitario sostenible para conectar culturas, proteger territorios y transformar vidas
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Raíces Vivas nace del deseo de crear un puente entre viajeros responsables y comunidades guardianas del patrimonio cultural y natural de Colombia.
              Desde nuestras primeras alianzas en zonas rurales del sur del país, hemos trabajado mano a mano con líderes locales para diseñar experiencias que empoderen, inspiren y transformen.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que hacemos está guiado por el respeto, la sostenibilidad y el trabajo colectivo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft bg-muted/10 border-0 p-6">
              <CardHeader className="flex flex-col items-center">
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Empoderamiento Comunitario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Fortalecemos capacidades locales para que las comunidades sean protagonistas del turismo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft bg-muted/10 border-0 p-6">
              <CardHeader className="flex flex-col items-center">
                <Leaf className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Promovemos prácticas responsables con el entorno y la cultura local.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft bg-muted/10 border-0 p-6">
              <CardHeader className="flex flex-col items-center">
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Intercambio Cultural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Fomentamos encuentros respetuosos y enriquecedores entre visitantes y anfitriones.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft bg-muted/10 border-0 p-6">
              <CardHeader className="flex flex-col items-center">
                <HeartHandshake className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Transparencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mantenemos relaciones claras, justas y éticas con nuestras comunidades aliadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres ser parte de este movimiento?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a Raíces Vivas como proveedor local o apóyanos compartiendo nuestro mensaje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <a href="/register?type=provider">Registrarse como Proveedor</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="/contact">Contáctanos</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
