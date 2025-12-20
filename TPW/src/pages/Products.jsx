import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2, ShieldCheck, Droplets, Info, Recycle, Lock } from 'lucide-react';
import product from '../assets/product.jpg';

const Products = () => {
    // Matches the "Small Pet 6-Pack" and "3-Pack" from your request
    const [selectedSize, setSelectedSize] = useState('6-Pack');

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
                       <div className="rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden aspect-square">
  <img
    src={product}
    alt="Ion-Optimized Water Container"
    className="w-full h-full object-cover mix-blend-multiply"
  />
</div>

                    </motion.div>

                    {/* RIGHT: PRODUCT INFO & BUY OPTIONS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <p className="text-sky-600 text-xs font-bold uppercase tracking-[0.4em] mb-4">On-The-Go Hydration</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-6 tracking-tighter">
                            Small Pet <br />
                            <span className="text-sky-500 italic font-medium">{selectedSize}</span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl font-black text-blue-950">{productDetails[selectedSize].price}</span>
                            <div className="h-8 w-px bg-sky-100"></div>
                            <span className="text-slate-500 font-medium bg-sky-50 px-3 py-1 rounded-full text-sm">In Stock & Ready</span>
                        </div>

                        {/* CONTENT FROM SCREENSHOT */}
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            You’ll finally be able to give your trusting pet <strong>pure, fresh water</strong>, wherever you go with these <span className="text-blue-900 font-semibold underline decoration-sky-300">100% recyclable, sealable, re-usable</span> portable pet water bowls.
                        </p>

                        {/* SIZE SELECTION */}
                        <div className="mb-10">
                            <p className="text-sm font-bold text-blue-950 uppercase tracking-widest mb-4">Select Bundle</p>
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
                                            {productDetails[size].price} Total
                                        </span>
                                        {selectedSize === size && (
                                            <div className="absolute top-2 right-2">
                                                <CheckCircle2 size={16} className="text-blue-600" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-6 text-xs text-slate-500 flex items-center gap-2 italic bg-slate-50 p-4 rounded-2xl">
                                <Info size={16} className="text-sky-500" /> {productDetails[selectedSize].desc}
                            </p>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col gap-4 mb-12">
                            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 group">
                                <ShoppingCart size={20} className="group-hover:translate-x-1 transition-transform" /> 
                                Add to Cart
                            </button>
                            <button className="w-full bg-white border-2 border-blue-950 text-blue-950 py-5 rounded-2xl font-bold hover:bg-blue-950 hover:text-white transition-all">
                                One-time Purchase
                            </button>
                        </div>

                        {/* TRUST FACTORS REDESIGNED */}
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