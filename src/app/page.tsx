"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ExpertiseCard from "./components/ExpertiseCard";
import TerminalSkills from "./components/TerminalSkills";
import ProjectVideoCard from "./components/ProjectVideoCard";
import { 
  animateFadeUp, 
  animateFromLeft, 
  animateFromRight 
} from "./animation/animationVariants";
import { FaMusic, FaSeedling, FaCamera, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background" />
        </div>
        
        <div className="max-w-5xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 items-center z-10">
          <motion.div
            variants={animateFromLeft}
            custom={0.2}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6 tracking-widest uppercase">
              BBC Affiliated Journalist
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Telling Stories That <span className="text-gradient">Matter.</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-md leading-relaxed">
              Award-winning Journalist, Documentary Filmmaker, and Agropreneur. Dedicated to impactful storytelling across global platforms.
            </p>
            <div className="flex gap-3 mt-8 max-w-sm">
              <a href="#about" className="flex-1 text-center bg-accent text-background px-4 py-3 rounded-full font-bold hover:scale-105 transition-transform text-sm md:text-base">
                Explore Portfolio
              </a>
              <a href="https://www.linkedin.com/in/seun-idowu-6415462a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-foreground/20 px-4 py-3 rounded-full font-bold hover:bg-foreground/5 transition-colors text-sm md:text-base whitespace-nowrap">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={animateFromRight}
            custom={0.4}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
            className="relative w-full max-w-sm mx-auto md:ml-auto"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/seun-idowu-sharp-v2.png"
                  alt="Seun Idowu Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Partners / Trusted By Section - Revamped with Infinite Scroll */}
      <section className="py-20 border-y border-white/5 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Strategic <span className="text-accent">Partners.</span></h2>
            <p className="text-foreground/60 max-w-lg mx-auto">Global organizations and industry leaders I've had the privilege to work with.</p>
          </motion.div>
        </div>

        <div className="relative flex overflow-hidden py-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap gap-8 items-center px-8 py-4"
          >
            {/* Duplicate the array to create the infinite loop effect */}
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                {[
                  { name: "BBC", logo: "/sponsors/BBC.png", scale: "scale-150" },
                  { name: "Sahel Consulting", logo: "/sponsors/Sahel Consuling.webp", scale: "scale-125" },
                  { name: "Mitimeth", logo: "/sponsors/Mitimeth.png", scale: "scale-100" },
                  { name: "Proxylogics", logo: "/sponsors/Proxylogics.png", scale: "scale-100" },
                  { name: "XEM Consulting", logo: "/sponsors/XEM Consulting.webp", scale: "scale-100" },
                  { name: "MG Vow Gas", logo: "/sponsors/MG Vow Gas.png", scale: "scale-75" }
                ].map((partner, pIdx) => (
                  <div 
                    key={`${idx}-${pIdx}`} 
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="group relative flex items-center justify-center h-24 w-48 bg-white rounded-xl shadow-xl hover:shadow-white/5 transition-all duration-500 hover:-translate-y-2">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        width={180}
                        height={90}
                        className={`max-h-[80%] w-auto object-contain transition-transform duration-500 ${partner.scale}`}
                      />
                    </div>
                    <span className="text-white/60 font-medium text-xs uppercase tracking-[0.2em]">{partner.name}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sm:py-24 py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={animateFadeUp}
            custom={0.2}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0, margin: "0px 0px -50px 0px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About <span className="text-accent">Seun</span></h2>
            <p className="text-lg md:text-2xl text-foreground/80 leading-relaxed mb-12">
              With a career spanning journalism, music, and agriculture, I bring a unique multi-disciplinary perspective to every project. My work with the <span className="text-white font-bold">BBC</span> focuses on human-centric stories that resonate globally.
            </p>
            
            <div className="mb-20">
              <TerminalSkills />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Documentaries</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">BBC</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Global Partner</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">Lagos</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Nigeria Base</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Career <span className="text-accent">Timeline.</span></h2>
            <p className="text-foreground/60 max-w-lg mx-auto">A decade of excellence in media, music, and business.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
            {[
              {
                year: "2020 - Present",
                title: "Journalist & Documentarian",
                company: "BBC World Service",
                desc: "Producing high-impact documentaries and news reports focused on West African socio-economic issues."
              },
              {
                year: "2018 - Present",
                title: "Founder & Lead Consultant",
                company: "AgroGrowth Ventures",
                desc: "Pioneering sustainable agricultural practices and consulting for emerging agropreneurs in Nigeria."
              },
              {
                year: "2015 - Present",
                title: "Professional Musician & Tutor",
                company: "Independent",
                desc: "Mentoring over 200+ students in classical and contemporary piano while performing globally."
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                variants={animateFadeUp}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                className="w-full flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 glass rounded-3xl border border-white/5"
              >
                <div className="md:w-1/4 text-accent font-bold text-lg md:text-xl shrink-0">{exp.year}</div>
                <div className="md:w-3/4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-accent/60 mb-3 font-medium text-sm md:text-base">{exp.company}</p>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured BBC Work */}
      <section className="py-24 overflow-hidden bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Featured <span className="text-accent">BBC Work.</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Selected documentary and journalism projects that have reached millions worldwide.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 justify-items-center max-w-6xl mx-auto">
            {[
              {
                title: "The Heart of Lagos",
                role: "Lead Documentarian",
                year: "2024",
                desc: "An in-depth look at the bustling economy and cultural resilience of Africa's largest city. Featured on BBC World Service."
              },
              {
                title: "Sustainable Africa",
                role: "Executive Producer",
                year: "2023",
                desc: "Exploring the intersection of technology and traditional farming in West Africa. A digital-first series for BBC Africa."
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full glass p-8 rounded-3xl border-l-4 border-accent group cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-foreground/40">{project.role}</p>
                  </div>
                  <span className="text-accent font-mono text-sm">{project.year}</span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-8 flex items-center text-accent font-bold text-sm uppercase tracking-widest">
                  Watch Project <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Projects Section */}
      <section id="projects" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Project <span className="text-accent">Archives.</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">A visual journey through my latest documentaries, music tutorials, and agropreneurial insights.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "ALDDN - AI Documentary",
                youtubeId: "F5RkwsYEtnY",
                description: "Digitalizing Nigerian livelihoods through data-driven innovation and economic empowerment."
              },
              {
                title: "MitiMeth Artisan Enterprise",
                youtubeId: "7vZsaNT_JF0",
                description: "Transforming invasive aquatic weeds into handcrafted home décor and sustainable community wealth."
              },
              {
                title: "Cassava Value Chain",
                youtubeId: "-2OjR-pGCYs",
                description: "Revolutionizing food security by bridging the gap in processing and exports for Nigeria's largest crop."
              },
              {
                title: "The Adamawa Shoemaker",
                youtubeId: "g8y9ikflB5M",
                description: "Empowering thousands of youth in North Eastern Nigeria through vocational mastery and financial resilience."
              },
              {
                title: "The Blind Mechanic",
                youtubeId: "ATckDsKm7o8",
                description: "A testament to human resilience: Murtala Shuaibu's extraordinary mechanical journey in Abuja."
              },
              {
                title: "Eco-Friendly Innovation",
                youtubeId: "8kfA9m0BbzI",
                description: "Turning scrap tyres into durable flooring, addressing environmental waste with entrepreneurial grit."
              }
            ].map((project, i) => (
              <ProjectVideoCard 
                key={i}
                title={project.title}
                youtubeId={project.youtubeId}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Diverse <span className="text-accent">Expertise.</span></h2>
            <p className="text-foreground/60 max-w-lg mx-auto">Bridging multiple industries with excellence and innovation.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                title: "Journalism & Filmmaking",
                desc: "Crafting compelling narratives for global audiences. Specialist in documentary filmmaking and broadcast journalism with the BBC.",
                image: "/journalism.png",
                icon: <FaCamera />
              },
              {
                title: "Music & Piano Education",
                desc: "Professional musician and piano tutor. Sharing the gift of music through performance and dedicated teaching programs.",
                image: "/music.png",
                icon: <FaMusic />
              },
              {
                title: "Agropreneurship",
                desc: "Innovating in the agricultural sector. Driving sustainable growth and food security through entrepreneurial ventures.",
                image: "/agro.png",
                icon: <FaSeedling />
              }
            ].map((expertise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                className="w-full max-w-sm"
              >
                <ExpertiseCard
                  title={expertise.title}
                  description={expertise.desc}
                  image={expertise.image}
                  icon={expertise.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Professional <span className="text-accent">Services.</span></h2>
            <p className="text-foreground/60 max-w-lg mx-auto">Specialized consulting and creative services tailored for global impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {[
              { title: "Media Production", desc: "Full-scale documentary and TV production services." },
              { title: "Music Mentorship", desc: "One-on-one piano tutoring for all skill levels." },
              { title: "Agro Consulting", desc: "Business strategy for sustainable agricultural startups." },
              { title: "Public Speaking", desc: "Keynote sessions on journalism and entrepreneurship." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -10 }}
                className="w-full max-w-xs p-8 glass rounded-2xl border border-white/5 hover:border-accent/20 transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-sm text-foreground/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Let's <span className="text-gradient">Collaborate.</span></h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Interested in hiring me for a contract, a documentary project, or music consultation? Let's connect.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="mailto:hello@seunidowu.com" className="flex items-center space-x-2 bg-accent text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                <FaEnvelope /> <span>Send Email</span>
              </a>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/seun-idowu-6415462a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
                <a href="#" className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:text-accent transition-colors"><FaTwitter /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="py-12 border-t border-white/5"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-foreground/40 text-sm">
          <p>© 2026 Seun Idowu. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
