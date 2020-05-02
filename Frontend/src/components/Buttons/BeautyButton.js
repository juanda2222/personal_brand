
import React from "react"

import "./BeautyButton.css"

const BeautyButton = (props) =>{
	const new_props = {
		...props,
		className:"action-button animate blue",
	}
	return (
		<a {...new_props} >{props.children}</a>
	);
}

export default BeautyButton;