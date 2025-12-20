import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Microscope, Bird, ArrowRight, Droplets } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Unified Sky Blue Tone */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-sky-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sky-600 text-xs font-bold uppercase tracking-[0.4em] mb-6">Our Origins</p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight tracking-tighter mb-8">
                Driven by love. <br />
                <span className="text-sky-400 font-medium italic">Defined by science.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                We started with a simple observation: our dogs, cats, and birds were drinking tap water we wouldn't drink ourselves. We decided it was time to provide hydration tailored to their unique biological needs.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Subtle decorative water drop shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 rounded-l-[20rem] -z-0 hidden lg:block" />
      </section>

      {/* 2. CORE STATS - Professional Blue */}
      <section className="py-20 border-b border-sky-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-4xl font-black text-blue-900 mb-2">100%</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Contaminant Free</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-blue-900 mb-2">10k+</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Healthy Pets</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-blue-900 mb-2">PH+</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Species Balanced</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "WHY" - Multi-Pet Representation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image: Dog and Cat */}
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-sky-100">
                <img
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200"
                  alt="Dog and Cat friends"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Secondary Floating Image: Bird */}
              <div className="absolute -bottom-10 -right-8 w-44 h-44 rounded-3xl border-8 border-white shadow-2xl overflow-hidden hidden md:block">
                <img 
                  src="https://www.thesprucepets.com/thmb/-lO2z_KblaxzXt3WHAQ5WljGAiM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/popular-small-bird-species-390926-hero-d3d0af7bb6ed4947b0c3c5afb4784456.jpg" 
                  alt="Pet Bird" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 leading-tight">
                Veterinary standards <br /> applied to every drop.
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed">
                <p>
                  Most tap water contains chlorine and heavy metals that can strain a bird's delicate system or a dog’s renal health.
                </p>
                <p>
                  Our team perfected the <strong>Aqua-Pure™</strong> process. This ensures the water is not just "clean," but biologically compatible with the pH levels and mineral needs of cats, dogs, and birds alike.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-100 rounded-lg text-sky-600"><Microscope size={20} /></div>
                  <span className="text-xs font-bold text-blue-900 uppercase pt-1">Lab Verified</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-100 rounded-lg text-sky-600"><Bird size={20} /></div>
                  <span className="text-xs font-bold text-blue-900 uppercase pt-1">Species Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM - Single Expert Focus */}
      <section className="py-24 bg-blue-950 rounded-t-[4rem]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">Expertise You Can Trust</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">The Expert behind the bowl.</h2>
          
          <div className="max-w-md mx-auto group">
            <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-sky-500/30 group-hover:border-sky-400 transition-all duration-500 shadow-2xl shadow-sky-500/20">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
                alt="Dr. Chris Nero" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Dr. Chris Nero</h4>
            <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-6">Lead Veterinary Scientist</p>
            <p className="text-blue-100/60 text-sm leading-relaxed">
              With over 15 years in pet nutrition, Dr. Nero leads our research into renal health and biological hydration.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA - Clean Blue Finish */}
      <section className="py-24 bg-blue-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 text-center shadow-2xl">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-sky-50 rounded-full"><Droplets className="text-sky-500 w-8 h-8" /></div>
            </div>
            <h3 className="text-3xl font-bold text-blue-950 mb-6">Join the movement.</h3>
            <p className="text-slate-500 mb-10 max-w-md mx-auto">Help us set a new standard for pet health for every dog, cat, and bird, one drop at a time.</p>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center gap-3 mx-auto shadow-lg shadow-blue-100">
              Shop Solutions <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;