import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  const activeExperience = EXPERIENCE[activeExperienceIndex];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#19182d] px-6 py-20 text-white"
    >
      {/* =========================
          HEADER
      ========================== */}
      <div className="mx-auto mb-20 max-w-[1200px] text-center">
        <h2 className="text-[clamp(38px,5vw,64px)] font-black leading-none tracking-[-0.04em]">
          Industry Experience
        </h2>

        <p className="mx-auto mt-4 max-w-[680px] text-sm leading-6 text-white/45">
          A journey across enterprise software, telecom, banking,
          compliance, analytics, cloud, and AI engineering.
        </p>
      </div>

      {/* =========================
          DESKTOP TIMELINE
      ========================== */}
      <div className="relative mx-auto max-w-[1300px] max-[760px]:hidden">
        {/* Main horizontal line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            h-[3px]
            -translate-y-1/2
            bg-gradient-to-r
            from-[#7f5cff]
            via-[#ff654d]
            to-[#25c99c]
          "
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-1/2
            h-8
            -translate-y-1/2
            bg-gradient-to-r
            from-[#7f5cff]/10
            via-[#ff654d]/10
            to-[#25c99c]/10
            blur-xl
          "
        />

        {/* =========================
            4 EXPERIENCE ITEMS
        ========================== */}
        <div className="relative grid grid-cols-4 gap-6">
          {EXPERIENCE.map((job, index) => {
            const isActive = activeExperienceIndex === index;
            const isAbove = index % 2 === 0;

            return (
              <div
                key={job.company}
                className="relative h-[460px]"
              >
                {/* =====================
                    COMPANY CARD
                ====================== */}
                <button
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() =>
                    setActiveExperienceIndex(index)
                  }
                  onFocus={() =>
                    setActiveExperienceIndex(index)
                  }
                  onClick={() =>
                    setActiveExperienceIndex(index)
                  }
                  className={`
                    absolute
                    left-1/2
                    z-20
                    w-[190px]
                    -translate-x-1/2
                    rounded-2xl
                    border
                    bg-white
                    px-5
                    py-5
                    text-center
                    text-[#19182d]
                    shadow-[0_20px_50px_rgba(0,0,0,0.22)]
                    transition-all
                    duration-300

                    ${
                      isAbove
                        ? "bottom-[calc(50%+45px)]"
                        : "top-[calc(50%+45px)]"
                    }

                    ${
                      isActive
                        ? "scale-[1.04] border-[var(--accent)] shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_0_4px_rgba(255,102,77,0.12)]"
                        : "border-transparent"
                    }
                  `}
                  style={{
                    "--accent": job.color,
                  }}
                >
                  {/* Logo / Mark */}
                  <span
                    className="
                      mx-auto
                      mb-3
                      grid
                      h-12
                      w-12
                      place-items-center
                      rounded-xl
                      bg-[#f7f8fb]
                      text-sm
                      font-black
                    "
                    style={{
                      color: job.color,
                    }}
                  >
                    {job.mark}
                  </span>

                  {/* Company */}
                  <h3 className="text-[14px] font-black leading-tight">
                    {job.company}
                  </h3>

                  {/* Role */}
                  {job.role && (
                    <p className="mt-2 text-[10px] font-bold leading-tight text-[#6b7280]">
                      {job.role}
                    </p>
                  )}

                  {/* Period */}
                  <p className="mt-2 text-[9px] font-extrabold uppercase tracking-[0.06em] text-[#9aa3b3]">
                    {job.period}
                  </p>

                  {/* Current */}
                  {job.current && (
                    <span
                      className="
                        mt-2
                        inline-flex
                        rounded-full
                        bg-[#fff2ed]
                        px-2.5
                        py-1
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-[#ff654d]
                      "
                    >
                      Current
                    </span>
                  )}

                  {/* Year */}
                  <strong
                    className="mt-2 block text-[13px]"
                    style={{
                      color: job.color,
                    }}
                  >
                    {job.year}
                  </strong>
                </button>

                {/* =====================
                    CONNECTOR
                ====================== */}
                <div
                  className={`
                    absolute
                    left-1/2
                    z-10
                    w-[2px]
                    -translate-x-1/2
                    ${
                      isAbove
                        ? "bottom-1/2 h-[72px]"
                        : "top-1/2 h-[72px]"
                    }
                  `}
                  style={{
                    backgroundColor: job.color,
                    opacity: isActive ? 1 : 0.65,
                  }}
                />

                {/* =====================
                    TIMELINE DOT
                ====================== */}
                <span
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    grid
                    h-8
                    w-8
                    -translate-x-1/2
                    -translate-y-1/2
                    place-items-center
                    rounded-full
                    border-4
                    border-white
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "scale-125"
                        : "scale-100"
                    }
                  `}
                  style={{
                    backgroundColor: job.color,
                    boxShadow: isActive
                      ? `0 0 0 12px ${job.color}22, 0 0 30px ${job.color}66`
                      : `0 0 0 9px ${job.color}18`,
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
          MOBILE EXPERIENCE
      ========================== */}
      <div className="mx-auto grid max-w-[500px] gap-5 min-[761px]:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive =
            activeExperienceIndex === index;

          return (
            <button
              key={job.company}
              type="button"
              onMouseEnter={() =>
                setActiveExperienceIndex(index)
              }
              onFocus={() =>
                setActiveExperienceIndex(index)
              }
              onClick={() =>
                setActiveExperienceIndex(index)
              }
              className={`
                rounded-2xl
                border
                bg-white
                p-5
                text-left
                text-[#19182d]
                transition-all
                duration-300
                ${
                  isActive
                    ? "scale-[1.02] border-[var(--accent)] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                    : "border-transparent"
                }
              `}
              style={{
                "--accent": job.color,
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="
                    grid
                    h-12
                    w-12
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-[#f7f8fb]
                    text-sm
                    font-black
                  "
                  style={{
                    color: job.color,
                  }}
                >
                  {job.mark}
                </span>

                <div className="min-w-0">
                  <h3 className="text-[15px] font-black">
                    {job.company}
                  </h3>

                  <p className="mt-1 text-[11px] font-bold text-[#6b7280]">
                    {job.role}
                  </p>

                  <p className="mt-2 text-[9px] font-extrabold uppercase tracking-[0.06em] text-[#9aa3b3]">
                    {job.period}
                  </p>

                  {job.current && (
                    <span className="mt-2 inline-flex rounded-full bg-[#fff2ed] px-2.5 py-1 text-[8px] font-black uppercase text-[#ff654d]">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================
          ACTIVE EXPERIENCE DETAILS
      ========================== */}
      <div
        className="
          relative
          mx-auto
          mt-20
          max-w-[1080px]
          rounded-[18px]
          border
          border-white/10
          bg-white/[0.035]
          p-8
          shadow-[0_22px_60px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          max-[760px]:mt-12
          max-[620px]:p-6
        "
      >
        {/* Accent bar */}
        <div
          className="absolute bottom-0 left-0 top-0 w-1 rounded-l-[18px]"
          style={{
            backgroundColor: activeExperience.color,
          }}
        />

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-[22px] font-black">
              {activeExperience.company}
            </h3>

            <p
              className="mt-1 text-sm font-bold"
              style={{
                color: activeExperience.color,
              }}
            >
              {activeExperience.role}
            </p>
          </div>

          <span
            className="rounded-full border px-3 py-1.5 text-xs font-black"
            style={{
              color: activeExperience.color,
              borderColor: `${activeExperience.color}55`,
              backgroundColor: `${activeExperience.color}10`,
            }}
          >
            {activeExperience.period}
          </span>
        </div>

        <ul className="grid gap-3 pl-5 text-base leading-[1.6] text-white/70">
          {activeExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {/* Technologies */}
        {activeExperience.technologies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {activeExperience.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/60"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}