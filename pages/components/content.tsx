import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import contentVariants from "./animation/contentVariants";

export default function Content({ children }: { children: any }) {
    return (
        <AnimatePresence>
            <motion.div variants={contentVariants} initial="hidden" animate="visible">
                <div className="font-light overflow-hidden flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center ">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}