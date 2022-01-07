import React, { useMemo } from 'react';

const TextComp = () => {
  let text = useMemo(() => {
    return 'new hello world';
  });
  return (
    <>
      <h1>Hello World</h1>
      <h2>{text}</h2>
    </>
  );
};

export { TextComp };
