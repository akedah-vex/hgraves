'use client';                                                           
                                                                        
import Link from "next/link";                                           
import Button from './button'                                           
import React, { useState } from 'react'; // Import React and useState   
                                                                        
export default function Navbar() {                                      
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu 
                                                                        
  // Define the navigation items array to make it easier to map over    
  const navItems = [                                                    
    { label: "Experience", href: "/experience" },                       
    { label: "Projects", href: "/projects" },                           
    { label: "Skills", href: "/skills" },                               
    { label: "Let's Connect", href: "https://www.linkedin.com/in/hjgraves/", variant: "secondary" }  
  ];                                                                    
                                                                        
  return (                                                              
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80         
dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200              
dark:border-zinc-800">                                                  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex  
items-center justify-between">                                          
        {/* Brand / Home Link */}                                       
        <Link href="/" className="text-xl font-bold tracking-tight      
bg-clip-text text-transparent bg-gradient-to-r from-blue-500            
via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300       
dark:to-pink-500">                                                      
          Henry Graves                                                  
        </Link>                                                         
                                                                        
        {/* Desktop/Mobile Toggle Container */}                         
        <div className="flex items-center space-x-4 sm:space-x-0 sm:flex
sm:items-center">                                                       
            {/* Mobile Menu Button (Hamburger) - Visible only on small  
screens */}                                                             
            <button                                                     
                className="sm:hidden p-2 text-zinc-600                  
dark:text-zinc-300 focus:outline-none"                                  
                onClick={() => setIsOpen(!isOpen)}                      
                aria-expanded={isOpen}                                  
                aria-controls="mobile-menu"                             
            >                                                           
                {/* Simple SVG for Hamburger Icon */}                   
                <svg className="w-6 h-6" fill="none"                    
stroke="currentColor" viewBox="0 0 24 24"                               
xmlns="http://www.w3.org/2000/svg">                                     
                    {isOpen ? (                                         
                        // Close icon (X)                               
                        <path strokeLinecap="round"                     
strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />      
                    ) : (                                               
                        // Hamburger icon                               
                        <path strokeLinecap="round"                     
strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />   
                    )}                                                  
                </svg>                                                  
            </button>                                                   
                                                                        
            {/* Navigation Links Container (Desktop View) */}           
            <div className="hidden sm:flex sm:items-center space-x-4">  
              {navItems.map((item) => (                                 
                <Button                                                 
                    key={item.label}                                    
                    href={item.href}                                    
                    variant={item.variant || "primary"}                 
                >                                                       
                  {item.label}                                          
                </Button>                                               
              ))}                                                       
            </div>                                                      
        </div>                                                          
                                                                        
        {/* Mobile Menu Dropdown (Hidden by default, shown when isOpen  
is true) */}                                                            
        <div                                                            
          className={`sm:hidden absolute top-16 left-0 right-0 bg-white 
dark:bg-black border-t border-zinc-200 dark:border-zinc-800 shadow-xl   
transition-all duration-300 ease-in-out ${isOpen ?                      
'max-h-[calc(100vh-64px)] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}                                                           
          id="mobile-menu"                                              
        >                                                               
            {/* The inner container now handles the content and is      
responsible for the height */}                                          
            <div className="flex flex-col p-4 gap-3">                   
                {navItems.map((item) => (                               
                    <Button                                             
                        key={`mobile-${item.label}`}                    
                        href={item.href}                                
                        variant={item.variant || "primary"}             
                    >                                                   
                      {item.label}                                      
                    </Button>                                           
                ))}                                                     
            </div>                                                      
        </div>                                                          
                                                                        
      </div >                                                           
    </nav>                                                              
  );                                                                    
}