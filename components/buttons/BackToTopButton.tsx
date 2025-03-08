import { useState, useEffect } from "react";    
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackToTopButton = () => { 


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { 
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);


    return () => window.removeEventListener('scroll', toggleVisibility);

    }, []);
    
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
 };


    return (
        <>
        {isVisible && (
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="fixed bottom-8 right-8 p-3 rounded-full bg-white text-black shadow-lg hover:bg-white transition-all duration-500 z-50"
            >
                <ChevronUpIcon className="h-6 w-6" />
            </button>
        )}
        
        
        </>
    );



};

export default BackToTopButton;