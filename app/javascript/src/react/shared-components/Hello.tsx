import React from "react";

interface HelloProps {
  test: string
}

const Hello = ({test}: HelloProps) => {
  return <div>{test}</div>
};
console.log("RUNNING HATDOG")

export default Hello
