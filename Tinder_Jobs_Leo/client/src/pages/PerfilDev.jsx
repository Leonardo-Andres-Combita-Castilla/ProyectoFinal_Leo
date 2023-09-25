import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentePerfilDev from '../Components/DevComponents/ComponentePerfilDev';
import DevMatch from '../Components/DevComponents/ComponenteMatchDev';

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
