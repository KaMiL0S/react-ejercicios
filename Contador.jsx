import { useState, useEffect } from 'react';

const Contador = () => {
    // 1. Inicializamos el estado leyendo directamente de localStorage
    const [Contador, setContador] = useState(() => {
        const numGuardado = localStorage.getItem('contador');
        return numGuardado !== null ? parseInt(numGuardado) : 0;
    });

    // 2. Solo necesitamos un useEffect para guardar cuando el valor cambie
    useEffect(() => {
        localStorage.setItem('contador', Contador);
    }, [Contador]);

    const sumar = () => {
        setContador(Contador + 1);
    };

    return (
        <>
            <p>contador {Contador}</p>
            <button className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="incremento" onClick={sumar}>+</button>
        </>
    );
};

export default Contador;
