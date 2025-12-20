import React from 'react';
import {
  Droplets, Heart, ShieldCheck, Target, Eye, ArrowRight,
  Truck, Zap, FlaskConical, LifeBuoy, Gift, RotateCcw, Star, Quote, Milk, Waves
} from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';






const Home = () => {
  const petServices = [
    {
      title: "Pure Water Containers",
      desc: "Fresh, multi-stage filtered drinking water delivered in bulk containers. The perfect pH-balanced hydration for home bowls serving dogs, cats, and birds.",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800", // Dog drinking from bowl
      icon: <Droplets className="w-6 h-6" />,
      tag: "Home Delivery"
    },
    {
      title: "On-the-Go Pet Water",
      desc: "Pure mineral water supplied in travel-sized portions. Ensures your pets have access to safe, contaminant-free drinking water during walks and travel.",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800", // Dog drinking on a walk
      icon: <Waves className="w-6 h-6" />,
      tag: "Travel Supply"
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-100">

      {/* 1. REDESIGNED HERO SECTION (Cinematic Wide Layout) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#f8fafb] to-[#c7e0ec] pt-24 pb-16">        {/* Background Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.06)_0%,rgba(255,255,255,0)_100%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Left Content: Spans 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.2em]">Vet-Approved Formula</span>
              </div> */}

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950 tracking-tight mb-6">
                The Purest Drop for Your <span className="text-sky-500">Best Friend.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Advanced <span className="text-sky-600 font-medium">multi-stage filtration</span> designed for the specific biological needs of pets. No chemicals, just pure hydration.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-slate-900 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-3 text-sm">
                    Get Started <ArrowRight size={18} />
                  </button>
                </Link>

                <Link to="/products">
                  <button className="bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-500 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all text-sm">
                    Our Product
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content: Spans 3 columns (Makes it Wider) */}
            <motion.div
              className="lg:col-span-3 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* WIDE Image Container */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden  shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group aspect-[16/10] md:aspect-[3/2]">
                <img
                  src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=1200"
                  alt="Wide cinematic pet hydration"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />


              </div>



              {/* Background Blur Blobs */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
              <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (NEW) */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Soft blue decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">
              Premium Hydration for Every Pet
            </h2>
            <div className="flex items-center justify-center gap-4 text-blue-600 font-semibold uppercase tracking-widest text-xs">
              <span>Dogs</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span>Cats</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span>Birds</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span>All Pets</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {petServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100 border border-blue-50 flex flex-col"
              >
                {/* Pet Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-10">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="h-1 w-12 bg-sky-200 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="py-16 pt-10 ">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              About Us
            </h2>
            <div className="h-1 w-12 bg-sky-200 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: Image Grid */}
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400"
                  className="rounded-[2rem] shadow-xl mt-12"
                  alt="Pet care"
                />
                <motion.img
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
                  className="rounded-[2rem] shadow-xl border-4 border-white"
                  alt="Water quality"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block border border-blue-50">
                <p className="text-3xl font-bold text-sky-500">99.9%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Purity Rating</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Built by Pet Lovers, <br />
                <span className="text-sky-500">Backed by Science</span>
              </h2>

              <p className="text-slate-500 mb-8 text-md leading-relaxed italic border-l-4 border-sky-100 pl-6">
                We noticed that most tap water contains trace chemicals that can irritate a pet's digestive system over time. We set out to change that with a science-first approach.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <ShieldCheck className="text-sky-500" size={20} />,
                    title: "pH Balanced Optimization",
                    desc: "Specifically tuned for canine and feline biology to prevent kidney stones."
                  },
                  {
                    icon: <Droplets className="text-sky-500" size={20} />,
                    title: "Triple-Stage Filtration",
                    desc: "Removing chlorine, lead, and 99.9% of harmful microplastics."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all"
                  >
                    <div className="shrink-0 bg-sky-50 p-2 h-fit rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION: REDESIGNED LAYOUT */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div className="max-w-md">
                <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Core Values</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
                  Why we do what we do.
                </h2>
              </div>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Founded on the principle that every pet deserves water as pure as their love.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-300 shadow-2xl shadow-sky-100/20">

              {/* Mission Column */}
              <motion.div
                whileHover={{ backgroundColor: '#f8fafc' }}
                className="bg-white p-10 md:p-16 transition-colors duration-500 group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8 w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    <Target size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    Our Mission
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </h3>

                  <p className="text-slate-500 text-md leading-relaxed flex-grow">
                    To revolutionize pet wellness by providing accessible, <span className="text-sky-600 font-medium">ultra-pure hydration solutions</span>. We aim to prevent kidney issues and improve the longevity of every pet through biological precision.
                  </p>


                </div>
              </motion.div>

              {/* Vision Column */}
              <motion.div
                whileHover={{ backgroundColor: '#f0f9ff' }}
                className="bg-white p-10 md:p-16 transition-colors duration-500 group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <Eye size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    Our Vision
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </h3>

                  <p className="text-slate-500 text-md leading-relaxed flex-grow">
                    To become the global gold standard in pet nutrition, where every pet owner understands that <span className="text-slate-900 font-semibold italic underline decoration-sky-300 underline-offset-4">true health starts</span> with a single drop of clean, balanced water.
                  </p>


                </div>
              </motion.div>
            </div>


          </div>
        </div>
      </section>


      {/* 4.5 MINI TESTIMONIALS SECTION (NEW) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="max-w-md">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Trusted by those who <br />
                <span className="text-sky-500">know them best.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
                Join 10k+ owners
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Review */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-sky-200 opacity-50" size={40} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-sky-500 text-sky-500" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">
                  "The specific mineral balance in this water is exactly what I recommend for senior cats. I've seen a noticeable decrease in renal stress markers across my patients."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">AN</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Anonymous </h4>
                    <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">Veterinary Specialist</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Parent Review */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-sky-50/50 border border-sky-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-sky-200 opacity-50" size={40} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-sky-500 text-sky-500" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">
                  "Luna used to be so picky with her water bowl. Now she actually waits for the delivery! Her coat is shinier, and she has so much more energy during our morning walks."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">AN</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Anonymous </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Pet Parent</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 5. CTA SECTION */}
      {/* SIMPLE & PROFESSIONAL CTA */}
      <section className="py-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-slate-100 border border-slate-100 p-6 md:p-10 text-center relative overflow-hidden">

            {/* Very subtle background texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10">
              <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                The Purest Choice
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                Better hydration for a <br />
                <span className="text-sky-500 italic font-medium">longer, happier life.</span>
              </h2>

              <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join <span className="text-slate-900 font-semibold">100+ pet parents</span> who have upgraded their pets' water to laboratory standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="w-full sm:w-auto bg-slate-900 hover:bg-sky-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                  Start Subscription
                </button>

                <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 hover:border-sky-500 hover:text-sky-500 px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Gift size={18} />
                  Gift a Box
                </button>
              </div>

              {/* Minimalist Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-40 grayscale">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Lab Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;