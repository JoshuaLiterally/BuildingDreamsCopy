import React, { useState, useRef, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import "../stylesheets/part.css";

/**
 * @param {String} image_url
 * @param {String} name
 * @param {Number} price
 * @returns
 */
export default function Part(props) {
	const { image_url, name, price, setPart, setSpecs } = props;

	function displaySpecs() {
		setSpecs();
	}

	function handleAdd() {
		setPart(name);
		displaySpecs();
	};

	return (
		<div className="pc-part-container" onClick={displaySpecs}>
			<div className="pc-part-info-container">
				<p className="pc-part-name">{name}</p>
				<p className="pc-part-price">${price}</p>
			</div>
			<div className="pc-part-add" onClick={handleAdd}>
				<IoMdAddCircle color="#CC3009" size={32} />
			</div>
		</div>
	);
}
