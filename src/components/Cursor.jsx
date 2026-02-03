import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.bannerIcon') ||
                target.closest('.resumeLi');

            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-designColor rounded-full pointer-events-none z-[99999] hidden md:block"
                style={{ x: position.x, y: position.y, translateX: '-50%', translateY: '-50%' }}
            />

            <motion.div
                className="fixed top-0 left-0 border border-designColor rounded-full pointer-events-none z-[99999] hidden md:block"
                animate={{
                    x: position.x,
                    y: position.y,
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                    backgroundColor: isHovering ? "rgba(255, 1, 79, 0.1)" : "transparent",
                }}
                style={{ translateX: '-50%', translateY: '-50%' }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
        </>
    );
};

export default Cursor;
