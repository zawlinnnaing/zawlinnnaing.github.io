import { capitalize, first, isEmpty } from "lodash";
import React from "react";
import PropTypes from "prop-types";

function TextAvatar({ text, size, shape }) {
  if (isEmpty(text)) {
    return <></>;
  }
  return (
    <div>
      <div
        className={`${
          shape === "circle" ? "rounded" : ""
        } bg-green-500 text-2xl font-bold text-white justify-center items-center align-middle flex mx-auto`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {capitalize(first(text) || "")}
      </div>
    </div>
  );
}

export default function Avatar({
  text = "",
  src = "",
  size = 50,
  shape,
  alt = "avatar",
}) {
  if (!isEmpty(text)) {
    return <TextAvatar shape={shape} size={size} text={text} />;
  }
  return (
    <>
      <img
        className={`${shape === "circle" ? "rounded" : ""}`}
        alt={alt}
        src={src}
        height={size}
        width={size}
      />
    </>
  );
}

Avatar.defaultProps = {
  src: "",
  text: "",
  alt: "avatar",
  shape: "square",
  size: 50,
};

Avatar.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
  shape: PropTypes.oneOf(["square", "circle"]),
  size: PropTypes.number,
};
