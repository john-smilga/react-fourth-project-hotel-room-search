import React from "react";

export default function Title({ title }) {
  return (
    <section className="section-title">
      <h1>{title}</h1>
      <div className="section-title__underline" />
    </section>
  );
}
