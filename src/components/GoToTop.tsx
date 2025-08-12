import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Or any icon you like

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } bg-brand-600 hover:bg-brand-700 text-white`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
