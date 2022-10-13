import { useState } from "react";
import ReactSlider from "react-slider";
// import React, {createContext} from "react";
import Image from "next/image";

// const Year = createContext()

const CustomSlider = () => {

  let [currentValue, setCurrentValue] = useState();
  
  if (currentValue === undefined) {
    currentValue = 30
  }
  let source = 1992 + currentValue


  return (
      <> 
       <Image src={`/${source}.png`} alt='missing' width='400' height='400' />

        <ReactSlider
          renderThumb={(props, state) => <div {...props}>{state.valueNow + 1992}</div>}
          className="customSlider"
          thumbClassName="customSlider-thumb"
          trackClassName="customSlider-track"
          markClassName="customSlider-mark"
          marks={1}
          min={0}
          max={80}
          defaultValue={30}
          value={currentValue}
          onChange={(value) => setCurrentValue(value)}
          
        />
    </>
  );
};

export default CustomSlider;
