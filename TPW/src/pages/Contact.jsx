import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              How can we <br className="hidden md:block" />
              <span className="text-slate-400 font-medium italic">
                help your pet?
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Have questions about our filtration science or your subscription?
              Our veterinary support team is here to ensure your pet stays
              perfectly hydrated.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                  Subject
                </label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Subscription Help</option>
                  <option>Water Science & Lab Reports</option>
                  <option>Wholesale/Vet Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-sky-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick Contact Cards */}
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
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm 
                             flex items-start gap-4 group hover:border-sky-200 transition-all"
                >
                  <div
                    className="bg-sky-50 p-3 rounded-xl text-sky-500 
                               group-hover:bg-sky-500 group-hover:text-white 
                               transition-all"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mb-3">
                      {item.detail}
                    </p>
                    <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest cursor-pointer hover:underline">
                      {item.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Location */}
            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
              <MapPin className="text-sky-500 mb-4" size={24} />
              <h4 className="text-xl font-bold mb-2">San Francisco HQ</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                123 Hydration Way, Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
