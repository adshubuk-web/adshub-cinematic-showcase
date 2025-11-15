import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Play, Filter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Video Editing",
    "3D Animation",
    "Motion Graphics",
    "AI Videos",
    "Graphic Design",
  ];

  const featuredVideos = [
    {
      id: "1MwQ5j17UAptLlI-cpj5f9lgtWvuTKRy3",
      title: "Featured Project 1",
    },
    {
      id: "1P-kfQjhpceXLUz6OvYpqioiNfGNb605J",
      title: "Featured Project 2",
    },
    {
      id: "1MFwVfy-Vrc_JmJhZWDFFSP1AVcE8RcpV",
      title: "Featured Project 3",
    },
    {
      id: "1CBg_PMhq0aFKnSq56GVuYvT4fp7ua2k4",
      title: "Featured Project 4",
    },
    {
      id: "1X_ELTAexZ5zqjVMcIR6eu4bN4zLN6TV3",
      title: "Featured Project 5",
    },
    {
      id: "1e27EEdyR-6_iRYg7eUc_s0JNDFzUb3cl",
      title: "Featured Project 6",
    },
  ];

  const projects = [
    {
      title: "Tech Review Channel – YouTube Edit Package",
      category: "Video Editing",
      description:
        "Clean cuts, motion graphics & sound design for a tech YouTuber.",
    },
    {
      title: "3D Logo Intro for Gaming Brand",
      category: "3D Animation",
      description: "Neon 3D logo animation for intros & livestreams.",
    },
    {
      title: "AI Reels Pack for Fitness Coach",
      category: "AI Videos",
      description: "Faceless AI reels with text overlays for Instagram growth.",
    },
    {
      title: "SaaS Explainer Motion Graphics",
      category: "Motion Graphics",
      description: "Clean explainer video for app onboarding.",
    },
    {
      title: "Podcast Thumbnail Series",
      category: "Graphic Design",
      description: "Bold thumbnail set for higher CTR.",
    },
    {
      title: "E-commerce Product Showcase",
      category: "Video Editing",
      description: "Dynamic product videos with smooth transitions.",
    },
    {
      title: "Corporate Brand Animation",
      category: "3D Animation",
      description: "Professional 3D corporate identity animation.",
    },
    {
      title: "Educational AI Content",
      category: "AI Videos",
      description: "AI-generated educational videos with voiceover.",
    },
    {
      title: "Social Media Ad Campaign",
      category: "Motion Graphics",
      description: "Engaging animated ads for social platforms.",
    },
    {
      title: "YouTube Channel Branding",
      category: "Graphic Design",
      description: "Complete channel art and thumbnail templates.",
    },
    {
      title: "Event Highlights Reel",
      category: "Video Editing",
      description: "Cinematic event coverage with color grading.",
    },
    {
      title: "Product Launch Teaser",
      category: "3D Animation",
      description: "High-impact 3D product reveal animation.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of work from Adshub Media – video edits, 3D animations,
            motion graphics, AI videos and design projects.
          </p>
        </div>
      </section>

      {/* Featured Videos Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Work</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch our recent projects in action
            </p>
          </div>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {featuredVideos.map((video, index) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className={`overflow-hidden glass-card hover-lift group stagger-${(index % 3) + 1}`}>
                      <div className="aspect-video bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
                        <iframe
                          src={`https://drive.google.com/file/d/${video.id}/preview`}
                          className="w-full h-full"
                          allow="autoplay"
                          title={video.title}
                        />
                      </div>
                      <div className="p-4 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-center group-hover:text-accent transition-colors">{video.title}</h3>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass hover-glow border-accent/30" />
            <CarouselNext className="glass hover-glow border-accent/30" />
          </Carousel>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-accent" />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border-border hover:border-accent"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                  <Play className="w-16 h-16 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-card border-accent animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  CASE STUDY – FROM SCRIPT TO AI VIDEO
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Client gave only a script. We used AI avatars, motion graphics,
                  b-roll and voiceovers to create a full HD video. Watch time and
                  course sales increased significantly.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Script-to-video workflow using AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Professional AI avatar & voiceover</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Motion graphics & dynamic b-roll</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Result: 3x increase in engagement</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium"
                >
                  See More Projects →
                </Button>
              </div>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <Play className="w-20 h-20 text-accent" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want your project here next?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Share your vision and we'll
            bring it to life.
          </p>
          <Button
            size="lg"
            className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium text-lg"
          >
            Start Your Project →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
