//components/Navbar.tsx


export default function Navbar(){
    return(
        <nav className="sticky top-0 z-50  bg-white/80 backdrop-blur-md border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#about" className="hover:text-blue-600 transition-colors">About us</a>
                    <a href="#events" className="hover:text-blue-600 transition-colors">Events</a>
                    <a href="#team" className="hover:text-blue-600 transition-colors">The team members</a>
                </div>
            </div>
        </nav>
    );
    
}