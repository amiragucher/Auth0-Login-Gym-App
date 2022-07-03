import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, styled } from "@nextui-org/react";
import Style from "./LogOutButton.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className = {Style.LogOutButton}
      bordered
      color="gradient"
      auto
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};
console.log("you are now logedout");

export default LogoutButton;
