import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="z-10 order-2 md:order-1"
            >
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                    Iligan City's Finest
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8 tracking-tighter">
                    The Alchemist’s <br />
                    <span className="text-secondary italic font-normal">Perfect Brew.</span>
                </h1>
                <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                    Where artisan coffee is brewed to perfection. A haven for remote workers, foodies, and modern alchemists seeking the perfect balance of work and flavor.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-linear-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <a href="#about">About Us</a>
                    </button>
                    <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-dim hover:-translate-y-1 transition-all">
                        <a href="#contact">Visit Us</a>
                    </button>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative order-1 md:order-2"
            >
                <div className="relative aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl z-20">
                    <img 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                        src="https://images.unsplash.com/photo-1556742400-b5b7c5121f99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Glazed baby back ribs"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl z-0"></div>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-12 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-[12px] border-background shadow-xl z-30 hidden lg:block -rotate-6"
                >
                <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Artisan latte"
                    referrerPolicy="no-referrer"
                />
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
