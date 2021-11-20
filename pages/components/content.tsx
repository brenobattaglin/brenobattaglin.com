import { AnimatePresence, motion } from "framer-motion";

const contentVariants = {
    hidden: {
        y: 240,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2,
        }
    },
};

export default function Content({ children }: { children: any }) {
    return (
        <AnimatePresence>
            <motion.div variants={contentVariants} initial="hidden" animate="visible">
                <div className="font-light flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}