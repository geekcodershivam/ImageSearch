import React from "react";
import "./Images.css";

function Images({ data }) {
  return (
    <div className="image" key={data.id}>
      <img
        src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}
        alt=""
        className="image__img"
      />
    </div>
  );
}

export default Images;
