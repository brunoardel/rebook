import React from "react";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create our App
const Clip = () => (
  <div>
    <FontAwesomeIcon icon={faHome} />
  </div>
);

// render to #root
render(<Clip />, document.getElementById("root"));