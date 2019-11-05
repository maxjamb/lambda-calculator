import React from "react";
import NumberButton from './NumberButton';
import {numbers} from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  // const [number, setNumber] = useState(numbers) (not needed)
  return (
    <div>
      {numbers.map(character => <NumberButton numberChar= {character} click={props.clickHandler}/>)
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       }
    </div>
  );

};

export default Numbers;

//this is the parent component? why?