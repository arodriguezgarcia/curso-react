import React, { Suspense } from 'react';


function Ejercicio18() {
  // Importamos como lazy el Counter del ejercicio 3
  const Counter = React.lazy(() => import('./ejercicio-3/Counter'))

      return (
        <>
          <h1 className="ejercicio">18. Lazy imports</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Counter />
          </Suspense>
        </>
      )
} 

export default Ejercicio18;
