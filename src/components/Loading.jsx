import { useState, useEffect } from "react";

export const LoadingSection = () => {
  const fullText = "(this screen is mostly just here for the plot)";
  const loadingText = "Loading...";

  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const onLoad = () => {
      setIsLoaded(true);
      setText(""); 
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [isLoaded]);

  return (
    <div className="fixed inset-0 z-50 bg-[#DC97A5] text-white flex flex-col items-center justify-center">
      {/* Spinner */}
      <div className="w-24 h-24 border-8 border-white border-t-transparent rounded-full animate-spin" />

      {/* Loading... text */}
      <div className="mt-6 text-5xl font-extrabold font-mono">
        Loading...
      </div>

      {isLoaded && (
        <div className="mt-12 text-lg font-mono tracking-wide max-w-xs text-center">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>
      )}
    </div>
  );
};
