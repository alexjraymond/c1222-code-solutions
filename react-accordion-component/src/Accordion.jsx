import React, { useState } from 'react';

export default function Accordion({ prop }) {
  const [open, setOpen] = useState();

  const handleOpen = (accord) => {
    if (open?.id === accord.id) {
      setOpen(undefined);
    } else {
      setOpen(accord);
    }
  };

  return (
    <div>
      {prop.map((accord) =>
        <AccordionItem
          key={accord.id}
          accord={accord}
          isOpen={accord.id === open?.id}
          onClick={handleOpen} />
      )}
    </div>
  );
}

function AccordionItem({ accord, isOpen, onClick }) {
  return (
    <>
      <div onClick={() => onClick(accord)} className="accordion-title">
        <h3>{accord.title}</h3>
      </div>
      {isOpen && <div className="accordion-content">
        {accord.content}
      </div>
      }
    </>
  );
}
