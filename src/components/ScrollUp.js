import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });

    return (
        <div
            className={`fixed right-10 bottom-10 z-50 cursor-pointer w-12 h-12 bg-[#141518] rounded-full border-[1px] border-designColor text-designColor flex justify-center items-center hover:bg-designColor hover:text-white duration-300 transition-all ${showScroll ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-5"
                }`}
            onClick={scrollTop}
        >
            <HiArrowUp className="text-xl font-bold" />
        </div>
    );
};

export default ScrollUp;
