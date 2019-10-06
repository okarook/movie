import React from "react"
import DevTools from "./containers/DevTools";
import App from "./containers/App";

const Setup = () => [
	<App key="id-App"/>,
  <DevTools key="id-DevTools"/>
];

export default Setup
