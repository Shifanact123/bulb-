import React,{useState} from 'react'


function Bulb() {

    const [isOn, setIsOn] = useState(false);

    const toggleBulb = () => {
        setIsOn(!isOn);
    };

  return (
     
    <div className="bulb-container">
    <img src={isOn ? require('./assets/depositphotos_23575953-stock-photo-light-bulb.jpg'): require('./assets/led-light-bulb.jpg')} alt="Bulb"  className="bulb-image"/>
    <button onClick={toggleBulb}>
        {isOn ? 'Turn Off' : 'Turn On'}
    </button>
</div>
);
};

export default Bulb
