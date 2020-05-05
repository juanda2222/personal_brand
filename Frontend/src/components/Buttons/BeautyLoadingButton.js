
import React from "react"

import "./BeautyLoadingButton.css"

import ReactLoading from 'react-loading';

const BeautyLoadingButton = (props) =>{
	var new_props;
	var loading_icon;
	if (props.is_loading){
		new_props = {
			...props,
			className:"loading-action-button loading animate blue",
		}
		delete new_props.is_loading
		loading_icon = <ReactLoading type="bars" color={"#ffffff"} height={20} width={25} />
	} else{
		new_props = {
			...props,
			className:"loading-action-button animate blue",
		}
		delete new_props.is_loading
		loading_icon = null;
	}
	//console.log(" Loading prop: ", props.is_loading)
	return (
		<a {...new_props} >
			{loading_icon}
			{props.children}
		</a>
	);
}

export default BeautyLoadingButton;