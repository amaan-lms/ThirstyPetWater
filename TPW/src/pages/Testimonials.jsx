import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ArrowRight, Droplets } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Anonymous",
      role: "Veterinary Nephrologist",
      text: "As a specialist in pet kidney health, I've seen a measurable difference in hydration levels in dogs and cats using this water. It’s a game-changer for long-term renal support.",
      rating: 5,
      initials: "VN"
    },
    {
      name: "Anonymous",
      role: "Golden Retriever Parent",
      text: "Cooper used to be a picky drinker. Now he actually waits for us to refill his container. His coat shine has noticeably improved in just three weeks.",
      rating: 5,
      initials: "GR"
    },
    {
      name: "Anonymous",
      role: "Avian Specialist",
      text: "Finally, a water source I can trust for delicate exotic birds. The mineral balance is perfect for preventing heavy metal toxicity in smaller species.",
      rating: 5,
      initials: "AS"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Matches About Page Style */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-sky-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sky-600 text-xs font-bold uppercase tracking-[0.4em] mb-6">Real Results</p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight tracking-tighter mb-8">
                Trusted by Experts. <br />
                <span className="text-sky-400 font-medium italic">Loved by Pets.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join a community of over 10,000 pet parents and veterinary professionals who have made the switch to biological-grade hydration for their dogs, cats, and birds.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Matching decorative element from About Hero */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 rounded-l-[20rem] -z-0 hidden lg:block" />
      </section>

      {/* 2. TESTIMONIAL GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[3rem] bg-sky-50/50 border border-sky-100 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-sky-500 text-sky-500" />
                  ))}
                </div>

                <div className="relative mb-8">
                  <Quote size={40} className="absolute -top-4 -left-2 text-sky-200/50 -z-0" />
                  <p className="relative z-10 text-slate-600 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-sky-100">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600 flex items-center justify-center text-white font-bold shadow-lg shadow-sky-100">
                    {review.initials}
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-900 text-sm flex items-center gap-1">
                      {review.name} <CheckCircle size={14} className="text-sky-500 fill-sky-50" />
                    </h4>
                    <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. CALL TO ACTION BOX - Unified with Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-blue-950 rounded-[4rem] p-12 text-center text-white relative overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="mb-6 flex justify-center relative z-10">
               <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm ring-1 ring-white/20">
                <Droplets className="text-sky-400 w-8 h-8" />
               </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Start their success story today.</h2>
            <p className="text-sky-200/70 max-w-lg mx-auto mb-10 relative z-10 text-lg">
              Every drop is a step toward better renal health and a more vibrant life for your companions.
            </p>

            <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 mx-auto relative z-10 shadow-xl shadow-blue-900/50">
              Get Started Now <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;