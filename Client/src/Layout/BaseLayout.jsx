import React, { useState } from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footerpage/Footer";

export default function BaseLayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                {children}
                <Footer />
            </div>
        </>
    );
}
