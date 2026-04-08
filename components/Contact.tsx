import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { MailIcon } from './icons/MailIcon';

const ANIMATION_CLASSES = {
  fadeInUp: (isVisible: boolean) =>
    `transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`,
  fadeInScale: (isVisible: boolean) =>
    `transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
} as const;

const LINKEDIN_URL = 'https://www.linkedin.com/in/brenobattaglin';
const EMAIL_ADDRESS = 'contato@breno.simplelogin.com';

const AmbientBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-app-text/5 rounded-full blur-[100px]" />
  </div>
);

const ProfileAvatar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div className={`mb-8 ${ANIMATION_CLASSES.fadeInScale(isVisible)}`}>
    <div className="relative group">
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-neutral-500/10 to-app-text/10 blur-md group-hover:blur-lg transition-all duration-500" />
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-app-text/10 group-hover:border-app-text/30 transition-all duration-500">
        <img
          src="/images/profile.jpg"
          alt="Breno Battaglin profile photo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const LinkedInButton: React.FC = () => (
  <a
    href={LINKEDIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden min-w-[280px]"
  >
    <div className="absolute inset-0 bg-app-text/5 rounded-full border border-app-text/10 group-hover:border-app-text/30 transition-all duration-300" />
    <div className="absolute inset-0 bg-linear-to-r from-app-text/0 via-app-text/5 to-app-text/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
    <span className="relative z-10 text-app-text group-hover:text-neutral-500 transition-colors duration-300">
      Connect on LinkedIn
    </span>
    <BriefcaseIcon className="relative z-10 w-4 h-4 text-app-text/50 transform group-hover:translate-x-1 transition-transform duration-300" />
  </a>
);

const EmailButton: React.FC = () => (
  <a
    href={`mailto:${EMAIL_ADDRESS}`}
    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden min-w-[280px]"
  >
    <div className="absolute inset-0 bg-app-text/5 rounded-full border border-app-text/10 group-hover:border-app-text/30 transition-all duration-300" />
    <div className="absolute inset-0 bg-linear-to-r from-app-text/0 via-app-text/5 to-app-text/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
    <span className="relative z-10 text-app-text group-hover:text-neutral-500 transition-colors duration-300">
      Send Message
    </span>
    <MailIcon className="relative z-10 w-4 h-4 text-app-text/50 transform group-hover:translate-x-1 transition-transform duration-300" />
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

      <div
        className={`relative z-10 flex flex-col items-center max-w-2xl ${ANIMATION_CLASSES.fadeInUp(isVisible)}`}
      >
        <ProfileAvatar isVisible={isVisible} />

        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
            Available for new projects
          </span>
        </div>

        <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-6 text-app-text">
          Contact Me
        </h2>

        <p className="font-mono text-sm  text-center text-neutral-400 mb-8 leading-relaxed max-w-lg">
          Always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex flex-col gap-4">
          <EmailButton />
          <LinkedInButton />
        </div>
      </div>
    </section>
  );
};
