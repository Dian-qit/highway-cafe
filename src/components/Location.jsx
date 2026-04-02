import { motion } from "motion/react";

import { 
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Utensils
} from "lucide-react";

const Location = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                <div className="flex-1 p-10 md:p-20">
                    <h2 className="font-headline text-4xl text-white font-bold mb-8">
                        Find Us at the Heart of the City.
                    </h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-secondary-container shrink-0" size={24} />
                            <div>
                                <p className="text-white font-bold">Iligan City</p>
                                <p className="text-white/60 text-sm">Main Street, Lanao Del Norte, Philippines</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="text-secondary-container shrink-0" size={24} />
                            <div>
                                <p className="text-white font-bold">Opening Hours</p>
                                <p className="text-white/60 text-sm">Mon - Sun: 8:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-secondary-container shrink-0" size={24} />
                            <div>
                                <p className="text-white font-bold">Contact</p>
                                <p className="text-white/60 text-sm">+63 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                    <button className="mt-12 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all flex items-center gap-2 group">
                        Get Directions
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </div>
                <div className="flex-1 min-h-100 relative">
                    <img 
                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6dh299CaghWvZfjFMM8aQjPKW9pYJ3xf9XrsJxDtGiH0pzZfXZ4fnX0vvJuw3ylZx15aefZPSYRh-9THRkL5Jxt1IGVTrqCvvpVCnF2C2x8i3IwNRoSwi_0PrFRkOgdHfjbLZ0F0S2YnaH1o7Naj1v1rfXIlcfjU1NqRLBtKp_mNqPB8qL_TZqCektYjDTqiPT7MJnKhM5cbW9uUjaEI6YCO0N2_rtuArN2KfY5UGE3xHz7OCGBA_4OthTNjCC2vJvLqbmzZtc8" 
                        alt="Map location"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-4 rounded-full shadow-2xl"
                    >
                        <Utensils size={32} />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location
