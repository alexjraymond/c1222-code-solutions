import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [show, setShow] = useState();

  const handleImg = (image) => {
    if (show?.id === image.id) {
      setShow(undefined);
    } else {
      setShow(image);
    }
  };

  return (
    <div className='carousel-container'>
      <i className="fa-solid fa-chevron-left caro-chevrons" />
      {images.map((image) =>
        <SingleImage
          key={image.id}
          image={image}
          isShow={image.id === show?.id}
        />
      )}
      <i className="fa-solid fa-chevron-right caro-chevrons" onClick={handleImg} />

      <div className='bottom-dots-nav'>
        {images.map((image) => <i className='fa-sharp fa-solid fa-circle bottom-dots' key={image.id} />)}
      </div>
    </div>
  );
}

function SingleImage({ image, isShow, onClick }) {
  return (
    <>
      { isShow && <img
        src={image.src} />}
    </>
  );
}

// need to have a check for if the img is selected, maybe reference image.id for circles and make it match one for caro img
