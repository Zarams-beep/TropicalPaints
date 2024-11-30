"use client";
import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";

// Create the context
export const FloatContext = createContext<{
    floatUp: number;
    pictureTracker: number;
} | null>(null);

// Define the Section type
interface Section {
    index: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

// Context Provider Component
export default function ContextProvider({ children }: { children: ReactNode }) {
    const [floatUp, setFloatUp] = useState(1);
    const [pictureTracker, setPictureTracker] = useState(0);

    // Sections configuration using useMemo to avoid re-creation on every render
    const sections: Section[] = useMemo(
        () => [
            { index: 600, setState: setFloatUp },
            { index: 800, setState: setFloatUp },
            { index: 950, setState: setFloatUp },
            { index: 1100, setState: setFloatUp },
            { index: 1300, setState: setFloatUp },
            { index: 1500, setState: setFloatUp },
            { index: 1700, setState: setFloatUp },
            { index: 1900, setState: setFloatUp },
        ],
        []
    );

    // Handle floatUp based on scroll
    useEffect(() => {
        const handleFloating = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 2000; 
            const newFloatUp = Math.max(1 - scrollTop / maxScroll, 0.6);
            setFloatUp(newFloatUp);
        };

        window.addEventListener("scroll", handleFloating);

        return () => {
            window.removeEventListener("scroll", handleFloating);
        };
    }, []); 

    // Handle sections scroll-up logic
    useEffect(() => {
        const handleSectionScrollUp = () => {
            const scrollTop = window.scrollY;
            sections.forEach((section) => {
                if (scrollTop >= section.index) {
                    section.setState(Math.max(1 - scrollTop / section.index, 0.6));
                }
            });
        };

        window.addEventListener("scroll", handleSectionScrollUp);

        return () => {
            window.removeEventListener("scroll", handleSectionScrollUp);
        };
    }, [sections]); 

    // Picture tracker interval logic
    useEffect(() => {
        const interval = setInterval(() => {
            setPictureTracker((prevTracker) => prevTracker + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Runs once to set up the interval

    // Return the context provider
    return (
        <FloatContext.Provider value={{ floatUp, pictureTracker }}>
            {children}
        </FloatContext.Provider>
    );
}
