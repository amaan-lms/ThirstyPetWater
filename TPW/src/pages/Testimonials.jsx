import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Anonymous",
      role: "Veterinary Nephrologist",
      text: "As a specialist in pet kidney health, I've seen a measurable difference in hydration levels in pets using this Ion-Optimized water. It’s a game-changer for long-term renal support.",
      rating: 5,
    },
    {
      name: "Anonymousn",
      role: "Golden Retriever Parent",
      text: "Cooper used to be a picky drinker. Now he actually waits for us to refill his container. His coat shine has noticeably improved in just three weeks.",
      rating: 5,
    },
    {
      name: "Anonymous",
      role: "Feline Behaviorist",
      text: "The 7.2 pH balance is exactly what cats need. My senior cat is much more active and clearly feels better hydrated. Highly recommend to all my clients.",
      rating: 5,
    }
  ];

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="container mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">Real Results</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
              Trusted by Experts. <br />
              <span className="text-slate-400 font-medium italic">Loved by Pets.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Join a community of over 10,000 pet parents and veterinary professionals who have made the switch to biological-grade hydration.
            </p>
          </motion.div>
        </div>

        {/* FEATURED TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
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

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold">AN</div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                    {review.name} <CheckCircle size={12} className="text-sky-500" />
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Start their success story today.</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 relative z-10">
            Every drop is a step toward better renal health and a more vibrant life for your companion.
          </p>

          <button className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto relative z-10">
            Shop the Ion-Optimized Series <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;