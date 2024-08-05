import React from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Collapsible from "react-collapsible";
import Part from "./Part";
import "../stylesheets/sidebarcategorytab.css";

/**
 * @param {String} category_name
 * @param {Array} items
 * @returns
 */
export default function SidebarCategoryTab(props) {
	const { index, category_name, items, openTab, setOpenTab, setPart, setSpecs, disabled, disabledMessage } = props;

	function toggleCategory() {
		if (!disabled) {
			openTab != index ? setOpenTab(index) : setOpenTab(null);
		}
	}

	return (
		<div className="sidebar-category-container" id={openTab == index ? 'active' : null}>
			<div className="label-container" onClick={toggleCategory}>
				{
					openTab == index 
					? 
					<FaChevronDown /> 
					: 
					<FaChevronRight />
				}
				<p className="sidebar-category-label">{ disabled == false ? category_name : disabledMessage }</p>
			</div>
			<Collapsible open={openTab == index}>
				{
					items.length > 0
					?
					items.map((item) => {
						return (
							<Part
								name={item.name}
								price={item.price}
								image_url="https://c1.neweggimages.com/ProductImage/19-118-462-01.jpg"
								setSpecs={() => setSpecs(item)}
								setPart={() => setPart(item)}
							/>
						);
					})
					:
					null
				}
			</Collapsible>
		</div>
	);
}
