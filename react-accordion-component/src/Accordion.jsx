import React, { useState } from 'react';

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleClick} className="accordion-title">{title}</div>
      {open && <div className="accordion-content">{content}</div>}
    </>
  );
}
