import { MENULINKS, SKILLS, SKILLS_MAP } from '../../constants';
import Image from 'next/image';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { gsap, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SKILL_STYLES = {
  SECTION: 'w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center',
  SKILL_TITLE: 'section-title-sm mb-4 seq'
};

const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 mt-1 px-[0.8rem] py-[0.4rem] bg-white text-gray-800 !text-sm rounded-full shadow-lg border border-gray-200 whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {SKILLS_MAP[text as keyof typeof SKILLS_MAP] || text}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
      </div>
    </div>
  );
};
const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (targetSection: MutableRefObject<HTMLDivElement>): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(targetSection.current.querySelectorAll('.seq'), { opacity: 0, duration: 0.5, stagger: 0.5 }, '<');

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector('.skills-wrapper'),
      start: '100px bottom',
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive)
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        I like to take responsibility to craft aesthetic user experience using modern frontend architecture.{' '}
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image src="/pattern-r.svg" loading="lazy" height={700} width={320} alt="pattern" />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image src="/pattern-l.svg" loading="lazy" height={335} width={140} alt="pattern" />
      </div>
    </>
  );

  const renderSkillColumn = (title: string, skills: string[]): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div className={`flex flex-wrap seq ${willChange ? 'will-change-opacity' : ''}`}>
        {skills.map((skill) => (
          <Tooltip key={skill} text={skill}>
            <Image key={skill} src={`/skills/${skill}.svg`} alt={skill} width={76} height={76} className="skill" />
          </Tooltip>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div className={SKILL_STYLES.SECTION} id={MENULINKS[2].ref} ref={targetSection}>
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">{renderSkillColumn('BACKEND DEVELOPMENT', SKILLS.backend)}</div>
          <div className="mt-10">{renderSkillColumn('FRONTEND DEVELOPMENT', SKILLS.frontend)}</div>
          <div className="mt-10">{renderSkillColumn('DATABASES', SKILLS.database)}</div>
          <div className="mt-10">{renderSkillColumn('3rd Party Integration', SKILLS.integration)}</div>
          <div className="mt-10">{renderSkillColumn('Other Skills', SKILLS.other)}</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
