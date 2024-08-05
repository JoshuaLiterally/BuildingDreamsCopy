import React from "react";
import ViewerPart from "./ViewerPart";
import '../stylesheets/viewer.css'

/**
 * @TODO Replace with actual parts instead of placeholders
 * @TODO
 * @param {Object} CPU
 * @param {Object} GPU
 * @param {Object} RAM
 * @param {Object} Storage
 * @param {Object} PSU
 * @param {Object} Motherboard
 * @param {Object} Case
 * @param {Object} CaseFans
 * @returns
 */

export default function Viewcanvas(props) {
  	const { setSpecs, cpu, gpu, ram, storage, power, motherboard, case_, fan } = props;
	const { setCPU, setGPU, setMotherboard, removeRam, setStorage, setPower, setFan, setCase } = props;

	const info = [
		{
			title: "Motherboard",
			part: motherboard,
			setPart: setMotherboard
		},
		{
			title: "CPU",
			part: cpu,
			setPart: setCPU
		},
		{
			title: "GPU",
			part: gpu,
			setPart: setGPU
		},
		{
			title: "RAM",
			part: ram,
			setPart: removeRam
		},
		{
			title: "Storage",
			part: storage,
			setPart: setStorage
		},
		{
			title: "Power Supply",
			part: power,
			setPart: setPower
		},
		{
			title: "Cooling",
			part: fan,
			setPart: setFan
		},
		{
			title: "Case",
			part: case_,
			setPart: setCase
		},
	]

	return (
		<div className="viewcanvas">
			{
				info.map((part) => {
					return (
						<ViewerPart
							title={part.title}
							part={part.part}
							setPart={part.setPart}
							setSpecs={setSpecs}
						/>
					)
				})
			}
		</div>
	);
}
