//importing just react straight since we are not extending or using react component
import React from 'react';

const Intro = props => {
  //unlike in video where he left keyword 'return', mine required it else didn't complie
  return (
    <p>
      {/* changing string to property */}
      {props.message}
    </p>
  );
};

export default Intro;
