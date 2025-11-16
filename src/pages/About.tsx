import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Target, Users, Clock, CheckCircle, Sparkles } from "lucide-react";
import teamSanjeev from "@/assets/team-sanjeev.png";
import teamGourab from "@/assets/team-gourab.png";
const About = () => {
  const values = [{
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every project gets our full attention to detail."
  }, {
    icon: Users,
    title: "Clear Communication",
    description: "Regular updates and transparent communication throughout the project."
  }, {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on time, every time."
  }, {
    icon: Sparkles,
    title: "Long-Term Partnerships",
    description: "Building lasting relationships with clients based on trust and results."
  }];
  const tools = [{
    name: "Adobe Premiere Pro",
    category: "Video Editing"
  }, {
    name: "After Effects",
    category: "Motion Graphics"
  }, {
    name: "Blender",
    category: "3D Animation"
  }, {
    name: "Photoshop",
    category: "Design"
  }, {
    name: "Illustrator",
    category: "Design"
  }, {
    name: "DaVinci Resolve",
    category: "Color Grading"
  }, {
    name: "Cinema 4D",
    category: "3D Animation"
  }, {
    name: "AI Video Tools",
    category: "AI Production"
  }, {
    name: "AI Voice Tools",
    category: "AI Production"
  }];
  const clientTypes = ["Content Creators & YouTubers", "Educational Institutions", "E-commerce Brands", "Marketing Agencies", "Tech Startups", "Small Businesses"];
  const team = [{
    name: "Gourab Sarkar",
    role: "Founder",
    description: "He creates high-level cinematic edits and powerful scripts that turn ideas into engaging, high-retention videos. His blend of storytelling, editing mastery and creativity makes every project shine.",
    image: teamGourab
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Adshub Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your creative partner for professional video editing, 3D animation,
            and AI-powered video production.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                CREATIVE VIDEO & AI STUDIO
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Adshub Media ek creative studio hai jo video editing, 3D
                animation, motion graphics aur AI-powered videos banata hai. Hum
                creators, brands aur businesses ke liye premium visuals create
                karte hain.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We combine traditional video production expertise with
                cutting-edge AI technology to deliver content that stands out.
                Our team is passionate about storytelling and committed to
                helping you achieve your vision.
              </p>
              <p className="text-lg text-muted-foreground">
                From YouTube videos to corporate presentations, from product
                launches to educational content – we transform ideas into
                compelling visual stories.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-accent/30 animate-fade-in">
              <Target className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-center">
                To empower brands and creators with cinematic visuals and
                AI-powered video solutions that drive engagement and deliver
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-card border-accent animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p>
                Adshub Media started with a simple goal: to make professional
                video production accessible to everyone. What began as a small
                team of passionate video editors has grown into a full-service
                creative studio.
              </p>
              <p>
                We recognized the power of combining traditional video editing
                skills with emerging AI technology. This unique approach allows
                us to deliver faster turnarounds without compromising on quality.
              </p>
              <p>
                Today, we work with content creators, brands, and businesses
                across industries, helping them tell their stories through
                powerful visuals and innovative AI-powered content.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Meet The Team
          </h2>
          <div className="flex justify-center max-w-2xl mx-auto">
            {team.map((member, index) => <Card key={index} className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-accent/20 hover:border-accent transition-all duration-300 bg-muted">
                    <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <value.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Tools We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => <Card key={index} className="p-4 bg-card border-border hover:border-accent transition-all duration-300 text-center animate-slide-up" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <div className="font-bold mb-1">{tool.name}</div>
                <div className="text-sm text-accent">{tool.category}</div>
              </Card>)}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Industry-standard tools combined with cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clientTypes.map((client, index) => <Card key={index} className="p-6 bg-card border-border hover:border-accent transition-all duration-300 animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{client}</span>
                </div>
              </Card>)}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg max-w-3xl mx-auto">
            We work with creators, educators, brands, agencies, and startups to
            create content that resonates with their audience and achieves their
            goals.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S BUILD YOUR NEXT VIDEO
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring
            your vision to life.
          </p>
          <Button size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium text-lg">
            Contact Adshub Media →
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;