import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const portfolioVideos = [
    { id: "1MwQ5j17UAptLlI-cpj5f9lgtWvuTKRy3" },
    { id: "1P-kfQjhpceXLUz6OvYpqioiNfGNb605J" },
    { id: "1MFwVfy-Vrc_JmJhZWDFFSP1AVcE8RcpV" },
    { id: "1GcNfh-3hCRQQz5OEQ1C59WWPUx9X3Npi" },
    { id: "1CBg_PMhq0aFKnSq56GVuYvT4fp7ua2k4" },
    { id: "1X_ELTAexZ5zqjVMcIR6eu4bN4zLN6TV3" },
    { id: "1e27EEdyR-6_iRYg7eUc_s0JNDFzUb3cl" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional video editing, 3D animation & AI-powered videos for brands and creators
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {portfolioVideos.map((video, index) => (
              <Card 
                key={video.id} 
                className="overflow-hidden glass-card hover-lift animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-black flex items-center justify-center">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="w-full h-full"
                    allow="autoplay"
                    title={`Portfolio Video ${index + 1}`}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Share your vision and we'll bring it to life.
          </p>
          <Button
            size="lg"
            className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium text-lg hover-glow"
          >
            Get a Quote →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
