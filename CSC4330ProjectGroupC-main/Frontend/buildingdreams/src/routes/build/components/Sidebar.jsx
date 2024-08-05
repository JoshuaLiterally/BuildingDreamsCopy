import React, { useEffect, useState } from 'react';
import { getValidCPUCoolers, getValidCPUs, getValidCases, getValidGPUs, getValidMotherboards, getValidPowerSupplys, getValidRAM, getValidStorage } from '../../../api/firebaseDB';
import Searchbar from './Searchbar';
import SidebarCategoryTab from './SidebarCategoryTab';
import '../stylesheets/sidebar.css';

const GPUs = await getValidGPUs();
const Motherboards = await getValidMotherboards();
const RAMs = await getValidRAM();
const Storages = await getValidStorage();
const Power_Supplys = await getValidPowerSupplys();
const Fans = await getValidCPUCoolers();
const Cases = await getValidCases();

/**
 * @returns
 */
export default function Sidebar(props) {
    const { setSpecs, setCPU, setGPU, setMotherboard, addRam, setStorage, setPower, setFan, setCase } = props;
    const { ramDisabled, cpuDisabled, cpuType } = props;

    const [searchQuery, setSearchQuery] = useState("");
    const [openTab, setOpenTab] = useState(null);

    const [CPUs, setCPUs] = useState([]);

    async function getCPUS() {
        try {
            const cpus = await getValidCPUs(cpuType);
            setCPUs(cpus);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCPUS()
    }, [cpuType])

    const categories = [
        {
            name: "Motherboards",
            items: Motherboards,
            setPart: setMotherboard,
            disabled: false,
        },
        {
            name: "CPUs",
            items: CPUs,
            setPart: setCPU,
            disabled: cpuDisabled,
            disabledMessage: "CPU (Select motherboard first)"
        },
        {
            name: "GPUs",
            items: GPUs,
            setPart: setGPU,
            disabled: false,
        },
        {
            name: "RAM",
            items: RAMs,
            setPart: addRam,
            disabled: ramDisabled,
            disabledMessage: "RAM (Select motherboard first)"
        },
        {
            name: "Storage",
            items: Storages,
            setPart: setStorage,
            disabled: false,
        },
        {
            name: "Power Supply",
            items: Power_Supplys,
            setPart: setPower,
            disabled: false,
        },
        {
            name: "Cooling",
            items: Fans,
            setPart: setFan,
            disabled: false,
        },
        {
            name: "Cases",
            items: Cases,
            setPart: setCase,
            disabled: false,
        },
    ]

    return (
        <div className="editor-sidebar">
            <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="editor-sidebar-category-container">
                {
                    categories.map((category, index) => {
                        return (
                            <SidebarCategoryTab
                                category_name={category.name}
                                items={category.items}
                                setPart={category.setPart}
                                setSpecs={setSpecs}
                                index={index}
                                openTab={openTab}
                                setOpenTab={setOpenTab}
                                disabled={category.disabled}
                                disabledMessage={category.disabledMessage}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}