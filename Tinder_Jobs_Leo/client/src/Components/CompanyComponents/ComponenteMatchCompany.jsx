import React, { useState } from 'react';

const CompanyMatch = ({ id }) => {
    const [match, setMatch] = useState(null);

    const handleBusquedaClick = () => {
        fetch(`http://localhost:3001/api/companies/${id}/match`)        
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error en la solicitud');
            }
            return response.json();
          })
          .then((data) => {
            setMatch(data);
          })
          .catch((error) => console.error('Error:', error));
      };

    return(
        <div>
            <button onClick={handleBusquedaClick}>Búsqueda</button>
            {match && (
                <div>
                    <h2>!! Devs que te buscan !!</h2>
                    {match.devs.map((dev, index) => (
                        <div key={index}>
                            {/* <h3>Empresa {index + 1}</h3> */}
                            <p>Nombre: {dev.nombres}</p>
                            <p>Email: {dev.email}</p>
                            <h4>Ofertas de Empleo:</h4>
                        </div>
                ))}
        </div>
      )}
    </div>
    )

}

export default CompanyMatch