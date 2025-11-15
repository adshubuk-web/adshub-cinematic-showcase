import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
                className="overflow-hidden glass-card hover-lift animate-fade-in cursor-pointer group" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelectedVideo(video.id);
                  setIsLoading(true);
                }}
              >
                <div className="aspect-video bg-black relative">
                  <img
                    src={`https://drive.google.com/thumbnail?id=${video.id}&sz=w1000`}
                    alt={`Portfolio Video ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog 
        open={!!selectedVideo} 
        onOpenChange={(open) => {
          if (!open) {
            setSelectedVideo(null);
            setIsLoading(false);
          }
        }}
      >
        <DialogContent className="max-w-6xl p-0 bg-black border-none">
          <DialogTitle className="sr-only">Portfolio Video Player</DialogTitle>
          <DialogDescription className="sr-only">
            Video showcase of our portfolio work
          </DialogDescription>
          <div className="aspect-video w-full relative">
            {selectedVideo && (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <iframe
                  key={selectedVideo}
                  src={`https://drive.google.com/file/d/${selectedVideo}/preview`}
                  className="w-full h-full"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Portfolio Video"
                  onLoad={() => setIsLoading(false)}
                />
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
