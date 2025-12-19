import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import {
  Instagram,
  Facebook,
  X,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollTop} className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg">
                <img
                  src={logo}
                  alt="Thirsty Pet Water Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-2xl font-black text-green-500 tracking-tighter">
                Thirsty<span className="text-sky-500">Pet</span>
              </span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed">
              Enhancing the lives of pets through scientifically-backed hydration.
              Because every drop counts when it comes to their health.
            </p>

            <div className="flex gap-4">
              <SocialIcon
                icon={<Instagram size={20} />}
                href="https://www.instagram.com"
              />
              <SocialIcon
                icon={<Facebook size={20} />}
                href="https://www.facebook.com"
              />
              <SocialIcon
                icon={<X size={20} />}
                href="https://x.com"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/products">Products</FooterLink></li>
              <li><FooterLink to="/testimonials">Reviews</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <Mail size={18} className="text-sky-500 shrink-0" />
                <span>support@thirstypet.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <Phone size={18} className="text-sky-500 shrink-0" />
                <span>+1 (800) PET-WATER</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <MapPin size={18} className="text-sky-500 shrink-0" />
                <span>
                  123 Hydration Way,<br />Aqua City, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
              Stay Updated
            </h3>
            <p className="text-slate-500 text-sm mb-4 font-medium">
              Get pet health tips and exclusive offers.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 pr-12"
              />
              <button className="absolute right-2 top-2 bg-sky-500 text-white p-1.5 rounded-lg hover:bg-slate-900 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex justify-center items-center">
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase text-center">
            © {new Date().getFullYear()} Thirsty Pet Water. Science of Hydration.
          </p>
        </div>

      </div>
    </footer>
  );
};

/* Helpers */
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    onClick={scrollTop}
    className="text-slate-500 hover:text-sky-500 transition-all text-sm font-medium flex items-center group"
  >
    <span className="w-0 group-hover:w-2 h-0.5 bg-sky-500 mr-0 group-hover:mr-2 transition-all rounded-full"></span>
    {children}
  </Link>
);

export default Footer;
