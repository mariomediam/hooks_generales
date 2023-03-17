import React from "react";

export const Small = React.memo(({ counter }) => {
  console.log("Se renderizo Small");
  return <small> {counter}</small>;
});
