import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentePerfilDev from '../Components/ComponentePerfilDev';
import DevMatch from '../Components/ComponenteMatchDev';

const PerfilDev = () => {
  const { id } = useParams();

  return (
    <div>
      <ComponentePerfilDev />
      <DevMatch id={id} />
    </div>
  );
};

export default PerfilDev;
