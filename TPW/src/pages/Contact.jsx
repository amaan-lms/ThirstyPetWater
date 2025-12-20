import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Droplets } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Unified with About & Testimonials */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-sky-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sky-600 text-xs font-bold uppercase tracking-[0.4em] mb-6">
                Get in Touch
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight tracking-tighter mb-8">
                How can we <br />
                <span className="text-sky-400 font-medium italic">help your pet?</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Have questions about our filtration science or your subscription?
                Our veterinary support team is here to ensure your dogs, cats, and birds stay
                perfectly hydrated.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Signature decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 rounded-l-[20rem] -z-0 hidden lg:block" />
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-sky-50/50 rounded-[3rem] p-8 md:p-12 border border-sky-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-sky-100 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-sky-100 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
                    Subject
                  </label>
                  <select className="w-full bg-white border border-sky-100 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-all appearance-none text-slate-600">
                    <option>General Inquiry</option>
                    <option>Subscription Help</option>
                    <option>Water Science & Lab Reports</option>
                    <option>Wholesale/Vet Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your pet's needs..."
                    className="w-full bg-white border border-sky-100 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* RIGHT: CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="grid gap-6">
                {[
                  {
                    icon: <MessageSquare size={20} />,
                    title: "Chat with Us",
                    detail: "Available Mon-Fri, 9am-6pm",
                    action: "Open Live Chat",
                  },
                  {
                    icon: <Mail size={20} />,
                    title: "Email Support",
                    detail: "hello@petpure.com",
                    action: "Send Email",
                  },
                  {
                    icon: <Clock size={20} />,
                    title: "Response Time",
                    detail: "Within 24 business hours",
                    action: "View FAQ",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-sky-50 shadow-sm 
                               flex items-start gap-4 group hover:border-sky-200 transition-all"
                  >
                    <div className="bg-sky-50 p-3 rounded-2xl text-sky-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-950 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs mb-3">
                        {item.detail}
                      </p>
                      <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest cursor-pointer hover:text-blue-700 transition-colors">
                        {item.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Location - Deep Blue Theme */}
              <div className="p-8 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="text-sky-400" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">San Francisco HQ</h4>
                <p className="text-sky-200/60 text-sm leading-relaxed mb-6">
                  123 Hydration Way, Suite 400
                  <br />
                  San Francisco, CA 94103
                </p>
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest">
                    <Droplets size={14} /> Global Distribution
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;