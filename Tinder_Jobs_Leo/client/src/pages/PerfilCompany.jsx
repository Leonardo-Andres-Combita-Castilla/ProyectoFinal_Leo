import React from 'react';
import { useParams } from 'react-router-dom';

import ComponentePerfilCompany from '../Components/CompanyComponents/ComponentePerfilCompany';
import CompanyMatch from '../Components/CompanyComponents/ComponenteMatchCompany';

const PerfilCompany = () => {
    const { id } = useParams();
  
    return (
      <div>
        <ComponentePerfilCompany />
        <CompanyMatch id={id} />
      </div>
    );
  };
  
  export default PerfilCompany;