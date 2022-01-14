import React, { useMemo } from 'react';

const TextComp = () => {
  let text = useMemo(() => {
    return 'new hello world';
  });
  console.log(text);
  return (
    <>
      <h1>Hello World</h1>
      <h2>{text && 'notext'}</h2>
    </>
  );
};

export { TextComp };
