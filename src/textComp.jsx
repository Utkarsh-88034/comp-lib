import React from 'react';

const TextComp = () => {
  let text;
  useEffect(() => {
    text = 'Hello New World';
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <h2>{text}</h2>
    </>
  );
};

export { TextComp };
