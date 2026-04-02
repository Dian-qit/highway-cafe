import { navLinks } from '../../constants/index.js'


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm">
    <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-black text-primary uppercase tracking-tighter font-headline">
            <a href="#home">Highway Café</a>
        </div>

        <ul>
            {navLinks.map((link) => (
            <li key={link.id} className="inline-block ml-6 md:ml-10 text-primary font-headline text-lg hover:opacity-70 transition-opacity">
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
            ))}
        </ul>

        <div className="items-center">
            <button className="bg-linear-to-br from-primary to-primary-container text-on-primary px-5 md:px-6 py-2 md:py-2.5 rounded-xl font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all">
                <a href="#contact">Visit Us</a>
            </button>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar
