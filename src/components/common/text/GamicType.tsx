import React, { useEffect } from 'react';
import Typewriter from 'components/common/text/Typewiter';

const GamicType = () => {
  let element: HTMLElement = document.querySelector('type') as HTMLElement;
  const typerwiter = new Typewriter(element, {
    loop: false,
    typingSpeed: 10,
    deleteSpeed: 10,
  });
  useEffect(() => {}, []);
  typerwiter.typeString('바이').typeString('하이').start();
  console.log(typerwiter);
  return <div className="type"></div>;
};

export default GamicType;
