import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div className="log">
      <p className="prg">You must log in to view the page at {from.pathname}</p>
      
<Button
    variant="contained"
    color="primary"
    style={{ textAlign: "center", margin: " 20px 90px"}}
  
    endIcon={<Icon></Icon>}
    onClick={login}
  >
    log in
  </Button>
    </div>
    
  );
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};
