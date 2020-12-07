import React from 'react';

const Login = (props) => {
  const style = {
    backgroundColor: '#99ccff',
  }

  let loginBlock = null;
  if (!props.loggedIn) {
    loginBlock =
      <div>
        <table>
          <tbody>
            <tr>
              <td>Gebruiker:</td>
              <td><input name="user" type="text" defaultValue="Henk"></input></td>
            </tr>
            <tr>
              <td>Wachtwoord:</td>
              <td><input name="password" type="password"></input></td>
            </tr>
          </tbody>
        </table>
        <p><button onClick={props.click} style={style}>Log in</button></p>
      </div>
  }
  return (
    <div style={style}>
      {loginBlock}
    </div>
  );
}

export default Login;
