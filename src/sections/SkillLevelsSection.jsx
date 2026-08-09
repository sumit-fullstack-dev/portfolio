import { SKILL_LEVELS } from "../constants/portfolioData";

export function SkillLevelsSection() {
  return (
    <section className="bg-[#19182d] px-[5.5vw] py-14 text-white max-md:px-4 max-md:py-10" id="skill-levels">
      <div className="mx-auto mb-9 max-w-[820px] text-center">
        <span className="text-xs font-black uppercase tracking-[0.22em] text-[#ff7a64]">
          Technical Expertise
        </span>

        <h2 className="mx-auto mt-4 max-w-[720px] text-[clamp(28px,3.3vw,40px)] font-black leading-tight tracking-normal">
          Full-stack engineering skills built through real-world enterprise systems
        </h2>

        <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-white/65">
          From Java and Spring Boot microservices to Kafka, AWS, React, and
          Generative AI, these skills reflect hands-on experience building
          scalable, distributed, cloud-native, and intelligent applications.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {SKILL_LEVELS.map((skill) => (
          <article
            className="rounded-[16px] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
            key={skill.name}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <strong className="text-base font-black">
                {skill.name}
              </strong>

              <span
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-black"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </span>
            </div>

            <div
              className="relative h-3 overflow-hidden rounded-full bg-white/10"
              role="meter"
              aria-label={`${skill.name} skill level`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.level}
            >
              <span
                className="skill-live-fill absolute left-0 top-0 h-full rounded-full"
                style={{
                  "--level": `${skill.level}%`,
                  "--accent": skill.color,
                }}
              />

              <span
                className="skill-shine absolute top-0 h-full w-20"
                style={{
                  "--accent": skill.color,
                }}
              />
            </div>

            <small className="mt-3 block text-sm font-bold text-white/45">
              {100 - skill.level}% growth space
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}