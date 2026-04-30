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
              Award-winning Journalist, Documentary Filmmaker, and Agropreneur with over 20 years of experience. Dedicated to impactful storytelling across global platforms.
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
          {/* Gradient Masks - Moved here to only affect the carousel */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-background to-transparent" />
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-background to-transparent" />
          </div>

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
                  { name: "Kucheza Gaming", logo: "/sponsors/Kucheza Gaming.png", scale: "scale-110" },
                  { name: "CCK Entertainment", logo: "text-CCK", scale: "scale-100" },
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
                      {partner.logo === "text-CCK" ? (
                        <span className="text-black font-black text-2xl italic tracking-tighter">CCK <span className="text-accent">ENT.</span></span>
                      ) : (
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          width={180}
                          height={90}
                          className={`max-h-[80%] w-auto object-contain transition-transform duration-500 ${partner.scale}`}
                        />
                      )}
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
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">350+</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Stories Filmed</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-4xl font-bold text-accent mb-2">BBC</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest">Lead Researcher</div>
              </div>
              <div className="p-6 glass rounded-2xl flex flex-col justify-center">
                <div className="text-xl font-bold text-accent mb-1 leading-tight">9 Major Hubs</div>
                <div className="text-[10px] text-foreground/40 uppercase tracking-widest leading-tight">Lagos, Abuja, Kano +</div>
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
                year: "2018 - Present",
                title: "Journalism Researcher",
                company: "BBC Africa / Channels TV Partnership",
                desc: "Lead researcher for 'Gist Nigeria'. Pitching stories, conducting interviews with 300+ contributors, and producing high-impact TV/digital packages."
              },
              {
                year: "2012 - 2018",
                title: "Regional Researcher",
                company: "Television Continental (TVC) News",
                desc: "Coordinating news gathering across Sub-Saharan Africa. Mentoring interns and sustaining partnerships with Reuters, AFP, and AP."
              },
              {
                year: "2011 - 2012",
                title: "Freelance Project Manager",
                company: "Repertoire Productions",
                desc: "Driving grassroots awareness through science and tech reporting in indigenous languages (Yoruba)."
              },
              {
                year: "2010 - 2011",
                title: "Programmes Producer (NYSC)",
                company: "Niger State Broadcasting Corporation",
                desc: "Anchoring and producing radio programmes during the National Youth Service year."
              },
              {
                year: "2006 - 2007",
                title: "Freelance Radio Broadcaster",
                company: "Osun State Broadcasting Corp (OSBC)",
                desc: "Story research, translation, and presentation. Composing songs for jingles and managing media sponsorships."
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

      {/* Education & Professional Memberships */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Academic <span className="text-accent">Foundation.</span></h2>
              <div className="space-y-8">
                <div className="glass p-6 rounded-2xl border-l-4 border-accent">
                  <h3 className="text-xl font-bold mb-2">Master of Arts in Communication and Language Arts</h3>
                  <p className="text-accent/60 mb-2">University of Ibadan, Nigeria</p>
                  <p className="text-sm text-foreground/70">Specialized in Market Intelligence, Media Production Management, and Communication Strategies.</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-accent">
                  <h3 className="text-xl font-bold mb-2">Bachelor of Arts in Music</h3>
                  <p className="text-accent/60 mb-2">Obafemi Awolowo University, Ile-Ife, Nigeria</p>
                  <p className="text-sm text-foreground/70">Focused on African Music and the role of music in public awareness creation.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Professional <span className="text-accent">Network.</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent text-2xl font-bold">L</div>
                  <div>
                    <h3 className="text-lg font-bold">Lagos Journalists’ League</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">Collaborating with over 200+ journalists across Nigeria to analyze burning issues and deliver objective news.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent text-2xl font-bold">A</div>
                  <div>
                    <h3 className="text-lg font-bold">Afro Nexus</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">A Pan-African journalists’ group focused on cross-border collaboration and socio-political insights across Sub-Saharan Africa.</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">BBC <span className="text-accent">Reports.</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">A selection of my 350+ stories, interviews, and documentaries produced for Gist Nigeria and BBC Africa.</p>
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
                title: "CCK Entertainment",
                youtubeId: "jNDG2vvyeYw",
                description: "Showcasing creative excellence and media production for CCK Entertainment Ltd."
              }
            ].map((project, i) => (
              <ProjectVideoCard 
                key={i}
                title={project.title}
                youtubeId={project.youtubeId}
                description={project.description}
                useExternalLink={project.title === "CCK Entertainment"}
              />
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
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Gist Nigeria <span className="text-accent">Highlights.</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Special reports and documentaries from the BBC & Channels TV co-production.</p>
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

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Visual <span className="text-accent">Gallery.</span></h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Behind the scenes and captured moments from various professional engagements and field work.</p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              "/gallery/20240516_141602.jpg.jpeg",
              "/gallery/20241129_080435.jpg.jpeg",
              "/gallery/20240518_154016.jpg.jpeg",
              "/gallery/20241129_080437.jpg.jpeg",
              "/gallery/3.jpg.jpeg",
              "/gallery/20241129_080441.jpg.jpeg",
              "/gallery/IMG_4761.jpg.jpeg",
              "/gallery/5.jpg.jpeg",
              "/gallery/20241129_080450.jpg.jpeg",
              "/gallery/IMG_4890.jpg.jpeg",
              "/gallery/IMG_5285.jpg.jpeg",
              "/gallery/Screenshot 2026-04-28 190003.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative break-inside-avoid rounded-3xl overflow-hidden glass border border-white/5 group"
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${i + 1}`}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm font-medium tracking-wider">Field Engagement #{i + 1}</p>
                </div>
              </motion.div>
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
