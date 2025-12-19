import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Microscope, Users, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.4em] mb-6">Our Origins</p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tighter mb-8">
                Driven by love. <br />
                <span className="text-slate-400 font-medium italic">Defined by science.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                We started with a simple observation: pets were drinking the same chemically-treated tap water that humans often filter for themselves. We decided it was time to give our best friends the hydration their unique biology actually requires.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE STATS / PHILOSOPHY */}
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">120+</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Contaminants Filtered</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">10k+</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Happy Pets</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">0%</h3>
              <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">Chemical Additives</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "WHY" (IMAGE & TEXT) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white"
            >
             <img 
  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200" 
  alt="Laboratory research" 
  className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover"
/>

            </motion.div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Veterinary standards <br /> applied to every drop.
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed">
                <p>
                  Most tap water contains chlorine, fluoride, and heavy metals that can put unnecessary stress on a pet's renal system over time.
                </p>
                <p>
                  Our team of veterinary nutritionists and water scientists spent two years perfecting the <strong>Ion-Optimized™</strong> process. This ensures the water is not just "clean," but biologically compatible with the pH levels and mineral needs of cats and dogs.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-50 rounded-lg text-sky-500"><Microscope size={20} /></div>
                  <span className="text-xs font-bold text-slate-700 uppercase pt-1">Lab Verified</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-50 rounded-lg text-sky-500"><ShieldCheck size={20} /></div>
                  <span className="text-xs font-bold text-slate-700 uppercase pt-1">Renal Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM (MINIMALIST) */}
      <section className="py-24 bg-slate-900 rounded-t-[4rem]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">The Experts behind the bowl.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <div key={member} className="group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-sky-500 transition-all duration-500">
                  <img src={`https://i.pravatar.cc/300?img=${member + 20}`} alt="Team member" className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Dr. Sarah Miller</h4>
                <p className="text-sky-400 text-xs font-bold uppercase tracking-widest">Lead Water Scientist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIMPLE CTA (REUSED THEME) */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Join the movement.</h3>
            <p className="text-slate-500 mb-10 max-w-md mx-auto">Help us set a new standard for pet health, one drop at a time.</p>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center gap-3 mx-auto">
              Shop Solutions <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;