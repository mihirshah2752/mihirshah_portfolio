import React from "react";
import "./SectionHeader.scss";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="section-header">
        <span>{subtitle}</span>
      </div>
    </>
  );
};

export default SectionHeader;
