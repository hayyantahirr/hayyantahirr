import React from "react";
import PropTypes from "prop-types";

function ReviewCard({ content, name, imgSrc, company, classes }) {
  const ratings = new Array(5);
  ratings.fill({
    icon: "star",
    style: { fontVariationSettings: '"FILL"1' },
  });
  console.log(ratings);

  return (
    <>
      <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
        <div className=" flex items-center gap-1 mb-3">
          {ratings.map((item, key) => (
            <span
              key={key}
              className="material-symbols-rounded text-yellow-300 text-[18px]"
              style={item.style}
            >
              {item.icon}
            </span>
          ))}
        </div>
        <p className="text-zinc-400 mb-8 ">{content}</p>
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg ">
            <img
              src={imgSrc}
              alt={name}
              className="img-cover"
              loading="lazy"
              width={44}
              height={44}
            />
          </figure>
          <div>
            <p>{name}</p>
            <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
          </div>
        </div>
      </div>
    </>
  );
}
ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
export default ReviewCard;
