import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


interface InfoPillProps {
  label: string;
  value: string;
  indicatorColor: string;
  animated?: boolean;
  align?: 'left' | 'right';
}


const ANIMATION_CLASSES = {
  fadeInUp: (isVisible: boolean) =>
    `transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`,
  fadeInScale: (isVisible: boolean) =>
    `transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`,
  slideUp: (isVisible: boolean) =>
    `transition-transform duration-1000 delay-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`,
} as const;


const InfoPill: React.FC<InfoPillProps> = ({ label, value, indicatorColor, animated = false, align = 'left' }) => (
  <div className={`flex flex-col gap-1 ${align === 'right' ? 'items-end' : ''}`}>
    <span className="font-mono text-[10px] text-neutral-500 uppercase">{label}</span>
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${indicatorColor} ${animated ? 'animate-pulse' : ''}`} />
      <span className="font-sans text-sm">{value}</span>
    </div>
  </div>
);

const CircularGraphic: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div className={`absolute bottom-[15vh] ${ANIMATION_CLASSES.fadeInScale(isVisible)}`}>
    <div className="relative w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-full flex items-center justify-center">
      <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-spin-slow" />
      <div className="w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  </div>
);

const ScrollIndicator: React.FC = () => (
  <div className="absolute bottom-8 flex flex-col items-center gap-2 mix-blend-difference">
    <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">Scroll</span>
    <div className="w-px h-12 bg-linear-to-b from-cyan-300 to-transparent opacity-50" />
  </div>
);

const AmbientLight: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow" />
  </div>
);


export const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={elementRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <AmbientLight />

      <div className={`relative z-10 flex flex-col items-center ${ANIMATION_CLASSES.fadeInUp(isVisible)}`}>
        <h1 className="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[140px] 2xl:text-[180px] max-w-[1400px] leading-[0.9] text-center tracking-tighter mix-blend-screen text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
          BRENO
          <br />
          BATTAGLIN
        </h1>

        <div className="mt-8 md:mt-12 overflow-hidden">
          <p className={`font-mono text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase text-neutral-400 ${ANIMATION_CLASSES.slideUp(isVisible)}`}>
            Software Engineer
          </p>
        </div>
      </div>

      <CircularGraphic isVisible={isVisible} />
      <ScrollIndicator />

      <div className="absolute bottom-8 left-6 md:left-12 hidden md:block">
        <InfoPill label="Location" value="Brazil" indicatorColor="bg-cyan-300" />
      </div>
    </section>
  );
};