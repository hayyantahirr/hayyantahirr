import React from "react";
import PropTypes from "prop-types";

const ProjectCards = React.forwardRef(
  (
    {
      imgSrc,
      title,
      tags,
      projectLink,
      projectDesc,
      index = 0,
      leftRef,
      rightRef,
      classes = "",
      style,
    },
    ref
  ) => {
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
      <div
        ref={ref}
        style={style}
        className={
          "w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-stretch " +
          classes
        }
      >
        {/* Left Part: Description (top) + Tags (bottom) */}
        <div
          ref={leftRef}
          className="flex flex-col justify-between space-y-3 sm:space-y-4 transform-gpu"
        >
          {/* Project Description Box */}
          <div className="bg-zinc-900/90 backdrop-blur-2xl border border-zinc-700/60 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex-1 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-rose-400 tracking-widest bg-rose-400/10 border border-rose-400/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase">
                  PROJECT {formattedIndex}
                </span>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mt-1 mb-2 sm:mb-3 tracking-tight">
                {title}
              </h3>
            </div>

            <div className="border-l-2 border-rose-400/80 pl-3 sm:pl-4 py-0.5 my-1 sm:my-2">
              <p className="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                {projectDesc ||
                  "A modern web application built with cutting-edge technologies to deliver seamless performance and user experience."}
              </p>
            </div>
          </div>

          {/* Tags Box */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
            <p className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 sm:mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-rose-300 bg-zinc-900/80 border border-zinc-700/50 rounded-lg shadow-sm hover:border-rose-400/30 transition-colors"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Part: Image (top) + Visit Project Button (bottom) */}
        <div
          ref={rightRef}
          className="flex flex-col justify-between space-y-3 sm:space-y-4 transform-gpu"
        >
          {/* Image Box */}
          <div className="bg-zinc-900/90 backdrop-blur-2xl border border-zinc-700/60 p-2 sm:p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden aspect-[16/7] sm:aspect-[16/9] flex-1 group">
            <figure className="w-full h-full rounded-xl overflow-hidden shadow-inner relative">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
          </div>

          {/* Visit Project Button Box */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500 hover:from-rose-400 hover:to-rose-300 active:from-rose-600 active:to-rose-500 text-zinc-950 font-bold rounded-xl shadow-[0_10px_25px_rgba(244,63,94,0.25)] hover:shadow-[0_15px_35px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-base tracking-wide z-30"
          >
            <span>Visit Project</span>
            <span className="material-symbols-rounded text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    );
  }
);

ProjectCards.displayName = "ProjectCards";

ProjectCards.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  projectDesc: PropTypes.string,
  index: PropTypes.number,
  leftRef: PropTypes.any,
  rightRef: PropTypes.any,
  classes: PropTypes.string,
  style: PropTypes.object,
};

export default ProjectCards;
