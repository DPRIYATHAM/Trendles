import React, { useEffect, useState } from 'react';
import './style.css';

let idCounter = 0;

const ImageSlideShow = ({ slides }) => {
  const [counter, setCounter] = useState(1);
  const name = `radio-btn-${idCounter++}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter === 4 ? 1 : prevCounter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
      <input type="radio" name={name} id={`${name}-1`} checked={counter === 1} onChange={() => setCounter(1)} />
      <input type="radio" name={name} id={`${name}-2`} checked={counter === 2} onChange={() => setCounter(2)} />
      <input type="radio" name={name} id={`${name}-3`} checked={counter === 3} onChange={() => setCounter(3)} />
      <input type="radio" name={name} id={`${name}-4`} checked={counter === 4} onChange={() => setCounter(4)} />
        {slides.map((image, index) => (
          <div className={`slide ${index === 0 ? 'first' : ''}`}>
            <img src={image} alt="" />
          </div>
        ))}

        <div className="navigation-auto">
          <div className={`auto-btn1 ${counter === 1 ? 'active' : ''}`}></div>
          <div className={`auto-btn2 ${counter === 2 ? 'active' : ''}`}></div>
          <div className={`auto-btn3 ${counter === 3 ? 'active' : ''}`}></div>
          <div className={`auto-btn4 ${counter === 4 ? 'active' : ''}`}></div>
        </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor={`${name}-1`} className="manual-btn"></label>
        <label htmlFor={`${name}-2`} className="manual-btn"></label>
        <label htmlFor={`${name}-3`} className="manual-btn"></label>
        <label htmlFor={`${name}-4`} className="manual-btn"></label>
      </div>
    </div>
  );
};

export default ImageSlideShow;