import React from 'react';

const Validate = ( props ) => {
   let ValidateMes = ' Text is long enough '

    props.inputLength <= 5 ? 
    ValidateMes = 'Text is too short':
    ValidateMes = 'Text is long enough'

    return(
     <div>
       {ValidateMes}
     </div>
 );
}

export default Validate;