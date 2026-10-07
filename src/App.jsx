import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ParquesCard from './componentes/cardParques';
import { parquesService } from './service/parquesService';



function App() {
  const [parques, setParques] = useState([]);

  useEffect(() => {
    parquesService()
    .then(parques => setParques(parques))
    .catch((err) => {
      console.log(err.message);
    });
  }, []);
  return (
    <>
      <div class="container shadow p-0  ">
        <header>
          <div class="bg-secondary-subtle w-100 text-center py-4"><h1>Parques nacionales</h1></div>
        </header>
        <main>
          <div class="row p-3">
            {parques.map((parque) => {
              return (
                <ParquesCard key={parque.id} nombre={parque.nombre} imagen={parque.imagen} descripcion={parque.descripcion}></ParquesCard>
              );
            })}
          </div>
        </main>
        <footer className='bg-success-subtle'>
          <h2 class="text-center h-100">Marcos Ipiña</h2>
        </footer>
      </div>
    </>
  )
}

export default App
