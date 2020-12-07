import React from 'react';

const Main = (props) => {
  const style = {
    backgroundColor: '#99ccff',
  }

  let mainBlock = null;
  if (props.loggedIn) {
    mainBlock =
      <div>
        <p>Hier gaat het allemaal gebeuren!</p>
        <p><button onClick={props.click} style={style}>Log uit</button></p>
      </div>
  }

  return (
    <div style={style}>
      {mainBlock}
    </div>
  );
}

export default Main;
