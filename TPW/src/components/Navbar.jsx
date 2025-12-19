import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center space-x-2 group"
                    >
                        <div className="bg-white p-1.5 rounded-xl">
                            <img
                                src={logo}
                                alt="Thirsty Pet Water Logo"
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-green-500">
                            Thirsty<span className="text-sky-500">Pet</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
                        <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
                        <NavLink to="/products" active={location.pathname === "/products"}>Products</NavLink>
                        <NavLink to="/testimonials" active={location.pathname === "/testimonials"}>Reviews</NavLink>

                        <div className="flex items-center space-x-5 pl-6 border-l border-slate-200">
                            <Link
                                to="/contact"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-sky-500 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-slate-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden p-2 text-slate-900 hover:bg-sky-50 rounded-lg"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0">
                    <div className="px-6 py-8 space-y-6">
                        <MobileLink to="/" setOpen={setOpen}>Home</MobileLink>
                        <MobileLink to="/about" setOpen={setOpen}>About</MobileLink>
                        <MobileLink to="/products" setOpen={setOpen}>Products</MobileLink>
                        <MobileLink to="/testimonials" setOpen={setOpen}>Testimonials</MobileLink>

                        <Link
                            to="/contact"
                            onClick={() => {
                                setOpen(false);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="block w-full text-center bg-sky-500 text-white py-4 rounded-2xl font-bold"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

/* Desktop Link */
const NavLink = ({ to, children, active }) => (
    <Link
        to={to}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`relative text-sm font-bold uppercase tracking-widest transition-colors ${
            active ? "text-sky-500" : "text-slate-600 hover:text-sky-500"
        }`}
    >
        {children}
        {active && (
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-sky-500 rounded-full" />
        )}
    </Link>
);

/* Mobile Link */
const MobileLink = ({ to, children, setOpen }) => (
    <Link
        to={to}
        onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="block text-xl font-bold text-slate-900 hover:text-sky-500"
    >
        {children}
    </Link>
);

export default Navbar;
