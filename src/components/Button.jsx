import React from "react";
import PropTypes from "prop-types";
function ButtonPrimary({ href, target = "_self", label, icon, classes }) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary"}
        download="Hayyan_Tahir_Resume.pdf"
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <>
        <button className={"btn btn-primary"}>
          {label}{" "}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </button>
      </>
    );
  }
}
ButtonPrimary.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

function ButtonOutline({ href, target = "_self", label, icon }) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline"}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <>
        <button className={"btn btn-outline"}>
          {label}{" "}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </button>
      </>
    );
  }
}
ButtonOutline.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};
export { ButtonPrimary, ButtonOutline };
