import React from "react";
import "./Section.module.css";

const Section = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

export default Section;
