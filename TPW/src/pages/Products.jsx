import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ShieldCheck, Droplets, Info, Recycle, Lock, BellRing,MessageCircle, } from 'lucide-react';
import product from '../assets/product.jpg';

const Products = () => {
    const [selectedSize, setSelectedSize] = useState('6-Pack');
    const [email, setEmail] = useState('');

    const productDetails = {
        "3-Pack": { 
            price: "$19.00", 
            volume: "Portable", 
            desc: "Ideal for weekend trips and short travel." 
        },
        "6-Pack": { 
            price: "$27.00", 
            volume: "Value Set", 
            desc: "The most popular choice for consistent daily hydration." 
        }
    };

   
    // Replace '#contact' with your actual route or scroll ID
    const handleConnect = () => {
        window.location.href = '/contact';
    };
    return (
        <div className="bg-white pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT: PRODUCT IMAGE PREVIEW */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden aspect-square relative">
                            <img
                                src={product}
                                alt="Ion-Optimized Water Container"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            />
                            {/* COMING SOON OVERLAY */}
                            <div className="absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
                                Coming Soon
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: PRODUCT INFO & WAITLIST */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <p className="text-sky-600 text-xs font-bold uppercase tracking-[0.4em] mb-4">New Release</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-6 tracking-tighter">
                            Small Pet <br />
                            <span className="text-sky-500 italic font-medium">{selectedSize}</span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl font-black text-blue-950">{productDetails[selectedSize].price}</span>
                            <div className="h-8 w-px bg-sky-100"></div>
                            <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                <BellRing size={14} /> Launching Soon
                            </span>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            The ultimate hydration solution is almost here. Connect with us to be the first to grab these <strong>100% recyclable, sealable, re-usable</strong> portable pet water bowls.
                        </p>

                        {/* SIZE SELECTION (Disabled style but still interactive for preview) */}
                        <div className="mb-10">
                            <p className="text-sm font-bold text-blue-950 uppercase tracking-widest mb-4">Preview Bundles</p>
                            <div className="grid grid-cols-2 gap-6">
                                {Object.keys(productDetails).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-6 rounded-3xl border-2 transition-all flex flex-col items-center justify-center relative overflow-hidden ${selectedSize === size
                                            ? "border-blue-600 bg-blue-50 text-blue-600 shadow-xl shadow-blue-100"
                                            : "border-slate-100 bg-white text-slate-400 hover:border-sky-200"
                                            }`}
                                    >
                                        <span className="font-black text-xl">{size}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
                                            {productDetails[size].price} Est.
                                        </span>
                                        {selectedSize === size && (
                                            <div className="absolute top-2 right-2">
                                                <CheckCircle2 size={16} className="text-blue-600" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CONNECT / WAITLIST FORM */}
                        {/* CENTRAL CONTACT ACTION */}
                        <div className="flex flex-col gap-4 mb-12 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
                            <button 
                                onClick={handleConnect}
                                className="w-full bg-blue-600 text-white py-6 rounded-[1.5rem] font-bold flex flex-col items-center justify-center gap-1 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 group"
                            >
                                <div className="flex items-center gap-3">
                                    <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" /> 
                                    <span className="text-lg">Connect to Grab This Product</span>
                                </div>
                                <span className="text-xs font-normal opacity-80">Be the first to know when we launch</span>
                            </button>
                        </div>

                        {/* TRUST FACTORS */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-10 border-t border-sky-100">
                            {[
                                { icon: <Recycle size={20} className="text-sky-500" />, text: "100% Recyclable" },
                                { icon: <Lock size={20} className="text-sky-500" />, text: "Leak-Proof Seal" },
                                { icon: <ShieldCheck size={20} className="text-sky-500" />, text: "BPA Free Material" },
                                { icon: <Droplets size={20} className="text-sky-500" />, text: "Ion-Optimized" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-2 bg-sky-50 rounded-lg">{item.icon}</div>
                                    <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest leading-tight">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Products;