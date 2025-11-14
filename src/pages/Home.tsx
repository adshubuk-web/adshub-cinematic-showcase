import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Video,
  Box,
  Sparkles,
  Palette,
  Bot,
  Play,
  Rocket,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-editing-room.jpg";

const Home = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description:
        "YouTube videos, reels, shorts, cinematic edits, corporate & event videos.",
    },
    {
      icon: Box,
      title: "3D Animation",
      description: "Product shots, logo intros, 3D scenes & camera moves.",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Explainer videos, animated titles, infographic animations.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Thumbnails, posters, channel art, social media creatives.",
    },
    {
      icon: Bot,
      title: "AI Video Editing",
      description:
        "AI avatar videos, faceless reels, script-to-video, multi-language AI voiceovers.",
    },
  ];

  const features = [
    "Clean, modern & cinematic edits",
    "AI + traditional workflow = faster delivery",
    "Custom solutions for creators, brands & agencies",
    "200+ edited videos, 50+ clients",
    "Industry-standard tools (Premiere Pro, After Effects, Blender, AI tools)",
  ];

  const stats = [
    { number: "200+", label: "Edited Videos" },
    { number: "50+", label: "Clients" },
    { number: "24-48hrs", label: "Express Delivery" },
  ];

  const featuredWork = [
    { title: "YouTube Edit – Tech Channel", category: "Video Editing" },
    { title: "3D Logo Animation – Brand Intro", category: "3D Animation" },
    { title: "AI Reels Pack – Fitness Coach", category: "AI Videos" },
    { title: "Motion Graphics Explainer – SaaS", category: "Motion Graphics" },
    { title: "Promo Video – Local Business", category: "Video Editing" },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Share Your Idea",
      description: "Brief, references & goals.",
    },
    {
      number: "02",
      title: "We Plan & Edit",
      description: "Structure, design, AI + visuals.",
    },
    {
      number: "03",
      title: "Review & Revisions",
      description: "Based on your feedback.",
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "High-quality exports for all platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 18, 20, 0.85), rgba(10, 26, 47, 0.9)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Adshub Media
          </h1>
          <p className="text-3xl md:text-4xl font-bold mb-4 text-accent">
            Professional Video Editing, 3D Animation & AI-Powered Videos
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We help brands, creators and businesses tell their stories with
            cinematic visuals and smart AI videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-card text-card-foreground hover:bg-card/80 border border-accent font-medium text-lg"
              >
                <Play className="mr-2" size={20} />
                Watch Portfolio
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium text-lg"
            >
              <Rocket className="mr-2" size={20} />
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT WE DO</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end video production, design and AI video services for your
              brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
              >
                View Portfolio →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Video Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI VIDEO STUDIO
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Record karna mushkil lagta hai? Hum AI tools ke through script
                se hi ready-to-publish videos bana dete hain – avatar, voiceover
                aur visuals ke saath.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">
                    AI spokesperson / avatar videos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Faceless AI reels & shorts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">
                    Multi-language AI voiceovers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">Script to video in one workflow</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium"
              >
                Learn More About AI Videos →
              </Button>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-accent/30 animate-fade-in">
              <Bot className="w-24 h-24 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">
                AI-Powered Creation
              </h3>
              <p className="text-muted-foreground text-center">
                Transform scripts into professional videos with AI avatars,
                natural voiceovers, and dynamic visuals - no camera needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            WHY WORK WITH ADSHUB MEDIA?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 animate-fade-in">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-accent text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              FEATURED WORK
            </h2>
            <p className="text-xl text-muted-foreground">
              A quick look at some of our recent projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredWork.map((work, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-accent text-sm">{work.category}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium"
              >
                Open Full Portfolio →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            HOW WE WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-accent mb-4 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S CREATE SOMETHING AMAZING
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Got a video idea, product or brand story to share? Message us –
            we'll turn it into powerful visuals and AI-powered content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium text-lg"
            >
              Contact Now
            </Button>
            <Button
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/80 border border-accent font-medium text-lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
