import { motion } from "motion/react";
import { 
  Wifi, 
  Zap,
  Leaf
} from "lucide-react";



const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 relative"
                >
                    <img 
                        className="rounded-xl shadow-lg w-full h-125 object-cover " 
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Cafe interior"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 border border-outline-variant/10">
                        <div className="bg-secondary rounded-full p-3 text-white">
                            <Wifi size={24} />
                        </div>

                        <div>

                            <p className="text-xs font-bold text-outline">
                                High-Speed Fiber
                            </p>

                            <p className="text-sm font-black text-primary">
                                VA-Friendly Workspace
                            </p>

                        </div>
                    </div>
                </motion.div>
                <div className="md:col-span-7 md:pl-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Crafted for the <br />
                        <span className="text-on-surface-variant">Modern Remote Professional.</span>
                    </motion.h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Highway Café isn't just about food; it's about the chemistry of a productive day. We've curated a space in Iligan City where high-speed internet meets high-quality ingredients. Whether you're crunching through a project or meeting a client, our warm espresso tones and ergonomic comfort provide the perfect backdrop.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-surface shadow-sm border border-outline-variant/20">
                            <Zap className="text-secondary mb-3" size={24} />
                            <h3 className="font-bold text-primary mb-1">Power Outlets</h3>
                            <p className="text-sm text-outline">Available at every table.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-surface shadow-sm border border-outline-variant/20">
                            <Leaf className="text-secondary mb-3" size={24} />
                            <h3 className="font-bold text-primary mb-1">Organic Sourcing</h3>
                            <p className="text-sm text-outline">Fresh local ingredients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
