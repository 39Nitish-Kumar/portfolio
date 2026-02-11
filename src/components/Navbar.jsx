import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Minimalist dark theme Navbar - Tokyo Night
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isOpen ? 'bg-[#1a1b26]' : 'bg-[#1a1b26]/80 backdrop-blur-md border-b border-[#414868]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer group">
            <span className="text-xl font-bold text-[#c0caf5] tracking-tight group-hover:text-[#7aa2f7] transition-colors">
              Nitish<span className="text-[#7aa2f7]">.dev</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group px-1 py-2 text-sm font-medium text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#7aa2f7] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#a9b1d6] hover:text-[#c0caf5] hover:bg-[#24283b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#24283b] focus:ring-[#c0caf5] transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1a1b26] border-b border-[#414868]">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#a9b1d6] hover:text-[#7aa2f7] hover:bg-[#24283b] block px-3 py-2 rounded-md text-base font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
