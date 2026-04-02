import { motion } from "motion/react";
import { 
  Star
} from "lucide-react";
import { reviews } from '../../constants/index.js'

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-surface-container-highest overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 ">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-xl">
                    <div className="flex items-center gap-1 mb-4 ">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 font-bold text-primary">5.0 Rating</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                        Voices of Our <br />
                        <span className="italic">Modern Alchemists.</span>
                    </h2>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-transform ${review.offset ? "md:translate-y-12" : ""}`}
                    >
                        <p className="text-on-surface-variant italic mb-8 leading-relaxed">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full overflow-hidden ${review.color} flex items-center justify-center text-primary font-bold`}>
                                {review.initials}
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">{review.name}</h4>
                                <p className="text-xs text-outline">{review.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Reviews
