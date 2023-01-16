import { useState } from "react";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(19);
  const [color, setColor] = useState('black');

  const Subir = () => {
    temperatura >=36 ? setTemperatura(36): setTemperatura(temperatura + 1);
    if(temperatura !== 20 && temperatura >21){
      setColor('hot');
    }else{
      setColor('cold');
    }

  };
  const Bajar = () => {
    temperatura <=16 ? setTemperatura(16) : setTemperatura(temperatura - 1);
    if(temperatura !== 20 && temperatura >21){
      setColor('hot');
    }else{
      setColor('cold');
    }

  };

  return (
    <>  
      <div className="container">
        <h1 className={`titleApp ${color}`}>{temperatura}°C</h1>
        <p id={'state'}>{ temperatura > 21 ? 'Esta haciendo calor': temperatura < 21 ? 'Esta haciendo frio' : 'Esta haciendo calor'}</p>
        <div className="button-container">
          <p className="button-action" onClick={Subir}>+</p>
          <p className="button-action" onClick={Bajar}>-</p>
        </div>
      </div>
    </>
  );
};

export default Temperatura;
