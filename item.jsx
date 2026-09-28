import { useState } from 'react'

const Item = () => {
    const [esActivo, inActivo] = useState(true)
    const [visible,setVisible] = useState(true)

    const mostrar = () => {
        setVisible(!visible);    
    }

    return (
        <>
            <div>
                <p>{esActivo ? 'Activo' : 'Inactivo'}</p>
                <button onClick={() => inActivo(!esActivo)}>activar</button>
            </div>
            <div>
                <button onClick={mostrar}>visible</button>
                {visible && <p>Visible</p>}
            </div>
        </>
    );
}

export default Item