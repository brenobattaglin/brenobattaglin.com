import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ANIMATION_CLASSES = {
    fadeInUp: (isVisible: boolean) =>
        `transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`,
    fadeInScale: (isVisible: boolean) =>
        `transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
} as const;

const LINKEDIN_URL = 'https://www.linkedin.com/in/brenobattaglin';

const AmbientBackground: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />
    </div>
);

const ProfileAvatar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
    <div className={`mb-8 ${ANIMATION_CLASSES.fadeInScale(isVisible)}`}>
        <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-gray-500/20 to-cyan-500/20 blur-md group-hover:blur-lg transition-all duration-500" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
                <img
                    src="/images/profile.jpg"
                    alt="Breno Battaglin profile photo"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
);

const ArrowIcon: React.FC = () => (
    <svg
        className="relative z-10 w-4 h-4 text-cyan-500 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const LinkedInButton: React.FC = () => (
    <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden"
    >
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-gray-500/30 group-hover:border-cyan-500/60 transition-all duration-300" />
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        <span className="relative z-10 text-white group-hover:text-cyan-300 transition-colors duration-300">
            Connect on LinkedIn
        </span>
        <ArrowIcon />
    </a>
);

export const Contact: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section
            id="contact"
            ref={elementRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20"
        >
            <AmbientBackground />

            <div className={`relative z-10 flex flex-col items-center max-w-2xl ${ANIMATION_CLASSES.fadeInUp(isVisible)}`}>
                <ProfileAvatar isVisible={isVisible} />

                <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-6 text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
                    Contact Me
                </h2>

                <p className="font-mono text-sm  text-center text-neutral-400 mb-8 leading-relaxed max-w-lg">
                    Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <LinkedInButton />
            </div>
        </section>
    );
};
