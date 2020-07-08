import React from 'react';

const Marker = ({text}) => <div style={{fontSize:12, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  <i style={{color: 'red', fontSize:30}}className="material-icons">place</i>
  {text}
</div>;

export default Marker;
