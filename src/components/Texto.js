import React from 'react';

const Texto = ({ nombre, pos }) => {
  return (
    <>
      <p>
        {pos}: {nombre}
      </p>
      <input type="button" value="Click" />
    </>
  );
};

export default Texto;
