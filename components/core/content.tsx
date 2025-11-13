import { AnimatePresence, motion } from 'motion/react';

export default function Content({ children }: { children: any }) {
  return (
        <div className="font-light flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
          {children}
        </div>
  );
}
