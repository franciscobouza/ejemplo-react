import React, { useState, useEffect } from 'react';

const Texto = ({ nombre, pos }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('ARRANCANDONGA!');
  }, []);

  useEffect(() => {
    console.log('OTA VE?!');
  });

  useEffect(() => {
    console.log('OTA VE?! CAMBIO CONTADOR');
  }, [contador]);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => setContador(contador - 2);

  return (
    <>
      <p>
        {pos}: {nombre} (cantidad: {contador})
      </p>
      <input type="button" value="Sumar" onClick={incrementar} />
      <input type="button" value="Restar" onClick={decrementar} />
    </>
  );
};

export default Texto;
