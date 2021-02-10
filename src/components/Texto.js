import React, { useState } from 'react';

const Texto = ({ nombre, pos }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  return (
    <>
      <p>
        {pos}: {nombre} (cantidad: {contador})
      </p>
      <input type="button" value="Click" onClick={incrementar} />
    </>
  );
};

export default Texto;
