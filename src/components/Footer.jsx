


const Footer = () => {
  return (
    <footer className="bg-surface-container-highest w-full border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12 py-16 max-w-7xl mx-auto">
            <div className="text-center md:text-left">
                <div className="font-headline font-bold text-primary text-2xl mb-4">
                    Highway Café
                </div>
                <p className="text-outline text-sm tracking-wide leading-relaxed max-w-xs mx-auto md:mx-0">
                Elevating the café experience through the science of flavor and the art of productivity.
                </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <h4 className="text-primary font-bold text-sm mb-2">Connect With Us</h4>
                <a href="#" className="text-outline hover:text-primary text-sm flex items-center gap-2 transition-colors">
                Facebook
                </a>
                <a href="#" className="text-outline hover:text-primary text-sm flex items-center gap-2 transition-colors">
                Instagram
                </a>
                <a href="#" className="text-outline hover:text-primary text-sm flex items-center gap-2 transition-colors">
                Contact Us
                </a>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <h4 className="text-primary font-bold text-sm mb-2">Legal</h4>
                <a href="#" className="text-outline hover:text-primary text-sm transition-colors">Privacy Policy</a>
                <div className="mt-auto pt-8 border-t border-outline-variant/30 w-full text-center md:text-left">
                    <p className="text-outline font-body text-[10px] uppercase tracking-widest">
                        © 2026 Pretty Duck Studios. 
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
