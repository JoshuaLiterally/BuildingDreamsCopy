//import java.util.*;
//import java.io.*;
		
 class CompMatching {

	
	
	
	/* public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
	//function for 	
		
		
		
		
	}
*/


/**
 * Checks the compatibility of a set of computer components.
 * Compatibility is determined by calling individual compatibility check functions for each component.
 *
 * @param {Object} components - The components to check. This should be an object with properties for each component, including 'chassis', 'motherboard', 'cpu', 'caseFans', 'memory', 'storage', 'powerSupply', and 'gpu'.
 * @returns {Array} - Returns an array of objects, each containing a 'component' property (the name of the component) and a 'compatible' property (a boolean indicating whether the component is compatible).
 */
function checkCompatibility(components)  {
    const {
      chassis,
      motherboard,
      cpu,
      caseFans,
      memory,
      storage,
      powerSupply,
      gpu,
    } = components;
  

 // Initialize an empty array to store the results of each compatibility check
 let compatibilityResults = [];

 // Call individual compatibility check functions and store the results
 compatibilityResults.push({
   component: "CPU",
   compatible: checkCpuCompatibility(cpu, motherboard),
 });
 compatibilityResults.push({
   component: "RAM",
   compatible: checkRamCompatibility(memory, motherboard),
 });
 compatibilityResults.push({
   component: "PSU",
   compatible: checkPsuCompatibility(powerSupply, motherboard),
 });
 compatibilityResults.push({
   component: "Case",
   compatible: checkCaseCompatibility(chassis, motherboard),
 });
 compatibilityResults.push({
   component: "Storage",
   compatible: checkStorageCompatibility(storage, motherboard),
 });
 compatibilityResults.push({
   component: "CPU Cooler",
   compatible: checkCpuCoolerCompatibility(cpuCooler, cpu),
 });
 compatibilityResults.push({
   component: "Case Fans",
   compatible: checkCaseFansCompatibility(caseFans, chassis),
 });

 // Filter the results to get only the incompatible components
 let incompatibleComponents = compatibilityResults.filter(
   (result) => !result.compatible
 );

 // If there are no incompatible components, return a success message
 if (incompatibleComponents.length === 0) {
   return {
     success: true,
     message: "All components are compatible.",
   };
 }

 // Otherwise, return a list of the incompatible components
 return {
   success: false,
   message:
     "The following components are incompatible: " +
     incompatibleComponents.map((result) => result.component).join(", "),
 };
    

	
	function checkCpuCompatibility ( socket1 , socket2) {
		
		var num1=0, num2=0;
		
		const socketType=  [ ];
		
		socketType [0]=socket1;
		socketType [1]= socket2;
		
		if (socketType[0].substring(0,2) == "LGA") {num1=1;}
		if (socketType[0].substring(0,2) == "PGA") {num1=2;}
		if (socketType[0] == "option3") {num1=3;}
		if (socketType[0] == "option4") {num1=4;}
		
		if (socketType[1].substring(0,2) == "LGA") {num2=1;}
		if (socketType[1].substring(0,2) == "PGA") {num2=2;}
		if (socketType[1] == "option3") {num2=3;}
		if (socketType[1] == "option4") {num2=4;}
		
		var yes = false;
		if (num1 == num2){
			yes=true;
		}
		return yes;
	}
	
	function  checkRamCompatibility ( mem1,  mem2,  slots1, slots2) {
			
		var yes=false;
		var yes2=false;

        //
			
		//check memory space for ram
		//8GB, 16GB, 24GB.....128GB
		for (let i=8; i<129; i++) {
			//check if memory for baseline val is reached
			if (mem1 == i) {
				//if memory available exceeds baseline val then set a positive value
				if(mem2 >=i) {yes=true;}
				//break loop since info needed was attained
				break;
			}
			//couldn't incriment by 8 directly, add 7 then another will be added at end of loop
			i+=7;
			
		}
		
		//check for memory slots
		for (let i=1; i<5; i++) {
			//check if baseline for slots is reached
			if (slots1 == i) {
				//if slots available exceeds baseline then set a positive value
				if(slots2 >=i) {yes=true;}
				//break loop since info needed was attained
				break;
			}
			
		}
		//return if both are compatable
			return yes && yes2;
		}
	


	//Motherboard and Power Supply (PSU)
	//Type: Check if the motherboard form factor matches the PSU type.
	function checkPsuCompatibility( psu,  motherboard) {
	// ... logic to check if PSU is compatible with motherboard ...
		var num1=0, num2=0;
		
        //firebase has listed under "form_factor" for motherboard
        //firebase has listed under "type" for PSU


		const formFactor=  [ ];
		
		formFactor [0]=motherboard;
		formFactor [1]= psu;
		
		if (formFactor[0] == "ATX") {num1=1;}
		if (formFactor[0] == "SFX") {num1=2;}
		if (formFactor[0] == "Micro ATX") {num1=3;}
		if (formFactor[0] == "Mini ITX") {num1=4;}
        if (formFactor[0] == "EATX") {num1=5;}
		
		if (formFactor[1] == "ATX") {num2=1;}
		if (formFactor[1] == "SFX") {num2=2;}
		if (formFactor[1] == "Micro ATX") {num2=3;}
		if (formFactor[1] == "Mini ITX") {num2=4;}
        if (formFactor[1] == "EATX") {num2=5;}
		
		var yes = false;
		if (num1 == num2){
			yes=true;
		}
		return yes;
	
		
		
		//motherboard options: ATX, Micro ATX, Mini ITX, EATX
	
	}
	
	//Motherboard and Case
	//Type: Check if the motherboard form factor matches the case’s supported form factors.
	function checkCaseCompatibility( chassis,  motherboard) {
	// ... logic to check if motherboard is compatible with case ...
	
		var num1=0, num2=0;
		
		const formFactor= [ ];
		
		formFactor [0]=motherboard;
		formFactor [1]= chassis;
		
		if (formFactor[0] == "ATX") {num1=1;}
		if (formFactor[0] == "SFX") {num1=2;}
		if (formFactor[0] == "Micro ATX") {num1=3;}
		if (formFactor[0] == "Mini ITX") {num1=4;}
        if (formFactor[0] == "EATX") {num1=5;}
		
		if (formFactor[1] == "ATX") {num2=1;}
		if (formFactor[1] == "SFX") {num2=2;}
		if (formFactor[1] == "Micro ATX") {num2=3;}
		if (formFactor[1] == "Mini ITX") {num2=4;}
        if (formFactor[1] == "EATX") {num2=5;}
		
		var yes = false;
		if (num1 == num2){
			yes=true;
		}
		return yes;
	
	}
	
	//Motherboard and Storage
	//Internal 3.5 Bays: Check if the case has enough bays for the storage devices.
	function checkStorageCompatibility( storage,  motherboard) {
	// ... logic to check if storage is compatible with motherboard ...
	
		var yes=false;
		
		//check for memory slots
				for (let i=1; i<5; i++) {
					//check if baseline for slots is reached
					if (storage == i) {
						//if slots available exceeds baseline then set a positive value
						//recheck sign of comp
                        if(motherboard <=i) {yes=true;}
						//break loop since info needed was attained
						break;
					}
				
				}
				//return if both are compatable
					return yes;
				}
	
	
	//CPU and CPU Cooler
	function checkCpuCoolerCompatibility( cpuCooler, cpu) {
	// ... logic to check if CPU cooler is compatible with CPU ...
	
var num1=0, num2=0;
		
		const formFactor= [ ];
		
		formFactor [0]=cpu;
		formFactor [1]= cpuCooler;
		
		if (formFactor[0] == "option1") {num1=1;}
		if (formFactor[0] == "option2") {num1=2;}
		if (formFactor[0] == "option3") {num1=3;}
		if (formFactor[0] == "option4") {num1=4;}
		
		if (formFactor[1] == "option1") {num2=1;}
		if (formFactor[1] == "option2") {num2=2;}
		if (formFactor[1] == "option3") {num2=3;}
		if (formFactor[1] == "option4") {num2=4;}
		
		var yes = false;
		if (num1 == num2){
			yes=true;
		}
		return yes;
	//Options: air(U type, C type, Low Profile), liquid (all in one, custom loops)
	}
	
	//Case and Case Fans
	function checkCaseFansCompatibility( caseFans, chassis) {
	// ... logic to check if case fans are compatible with case ...
	
var num1=0, num2=0;
		
		const formFactor= [ ];
		
		formFactor [0]=chassis;
		formFactor [1]= caseFans;
		
		if (formFactor[0] == "option1") {num1=1;}
		if (formFactor[0] == "option2") {num1=2;}
		if (formFactor[0] == "option3") {num1=3;}
		if (formFactor[0] == "option4") {num1=4;}
		
		if (formFactor[1] == "option1") {num2=1;}
		if (formFactor[1] == "option2") {num2=2;}
		if (formFactor[1] == "option3") {num2=3;}
		if (formFactor[1] == "option4") {num2=4;}
		
		var yes = false;
		if (num1 == num2){
			yes=true;
		}
		return yes;
	
		//Options: axial, centrifugal
		//specification: size, airflow, noise level, fan speed, bearing type, RGB lighting
	}
 }

