import React from "react";
import Style from "./LoginButton.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@nextui-org/react';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button bordered color="gradient" auto className={Style.LoginButton}onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;