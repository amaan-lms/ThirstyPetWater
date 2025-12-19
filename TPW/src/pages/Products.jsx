import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2, ShieldCheck, Droplets, Info } from 'lucide-react';
import product from '../assets/product.jpg';

const Products = () => {
    const [selectedSize, setSelectedSize] = useState('Medium');

    const productDetails = {
        Small: { price: "$12.00", volume: "500ml", desc: "Perfect for cats and toy breeds." },
        Medium: { price: "$18.00", volume: "1L", desc: "Ideal for active medium-sized dogs." },
        Large: { price: "$28.00", volume: "2.5L", desc: "Designed for large breeds or multi-pet homes." }
    };

    return (
        <div className="bg-white pt-30 pb-20">
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
                        <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Pure Hydration</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Ion-Optimized™ <br />Pet Container
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-black text-slate-900">{productDetails[selectedSize].price}</span>
                            <div className="h-6 w-px bg-slate-200"></div>
                            <span className="text-slate-500 font-medium">Subscription available</span>
                        </div>

                        <p className="text-slate-500 leading-relaxed mb-10">
                            Our signature container features 5-stage Ion-Optimization technology. It balances pH levels and eliminates 120+ tap water contaminants that stress a pet's renal system.
                        </p>

                        {/* SIZE SELECTION */}
                        <div className="mb-10">
                            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Select Capacity</p>
                            <div className="grid grid-cols-3 gap-4">
                                {Object.keys(productDetails).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${selectedSize === size
                                            ? "border-sky-500 bg-sky-50 text-sky-600 shadow-md"
                                            : "border-slate-100 bg-white text-slate-400 hover:border-slate-200"
                                            }`}
                                    >
                                        <span className="font-bold">{size}</span>
                                        <span className="text-[10px] opacity-70 uppercase tracking-tighter">{productDetails[size].volume}</span>
                                    </button>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-slate-400 flex items-center gap-2 italic">
                                <Info size={14} /> {productDetails[selectedSize].desc}
                            </p>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col gap-4 mb-12">
                            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-sky-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                                <ShoppingCart size={20} /> Add to Subscription
                            </button>
                            <button className="w-full bg-white border border-slate-200 text-slate-900 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                                One-time Purchase
                            </button>
                        </div>

                        {/* TRUST FACTORS */}
                        <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-slate-100">
                            {[
                                { icon: <ShieldCheck size={20} className="text-sky-500" />, text: "Renal Health Approved" },
                                { icon: <Droplets size={20} className="text-sky-500" />, text: "pH Balanced 7.2" },
                                { icon: <CheckCircle2 size={20} className="text-sky-500" />, text: "Eco-Friendly Recyclable" },
                                { icon: <ShoppingCart size={20} className="text-sky-500" />, text: "Fast Insured Shipping" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.text}</span>
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