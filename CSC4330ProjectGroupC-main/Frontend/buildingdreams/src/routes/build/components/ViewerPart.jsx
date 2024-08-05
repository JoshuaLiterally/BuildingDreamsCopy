import React, { useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

export default function Part(props) {
	const { title, part, setSpecs, setPart } = props;

	if (title == 'RAM') {
		return (
			<div className="viewer-part-container">
				<h4 className="viewer-part-type">{title}</h4>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem'}}>
					{
						part.map((rams, index) => {
							return (
								<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
									<p className="viewer-part-name">{rams?.name ?? ""}</p>
									<div className="viewer-part-button" onClick={() => setSpecs(rams)}><FaInfoCircle color="white"/></div>
									<div className="viewer-part-button"onClick={() => setPart(index)}><MdRemoveCircle color="white"/></div>
								</div>
							)
						})
					}
				</div>
		</div>
		)
	} else {
		return (
			<div className="viewer-part-container">
				<h4 className="viewer-part-type">{title}</h4>
				<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
					<p className="viewer-part-name">{part?.name ?? ""}</p>
					{
						part
						?
						<>
							<div className="viewer-part-button" onClick={() => setSpecs(part)}><FaInfoCircle color="white"/></div>
							<div className="viewer-part-button" onClick={() => setPart(null)}><MdRemoveCircle color="white"/></div>
						</>
						:
						null
					}
				</div>
			</div>
		);
	}
}
