import React from 'react';

const Texto = ({ nombre, pos, contador }) => {
  return (
    <>
      <p>
        {pos}: {nombre} (cantidad: {contador})
      </p>
    </>
  );
};

export default Texto;
