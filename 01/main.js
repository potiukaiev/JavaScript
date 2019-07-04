
	const chickenCal = 1.9;
	const beefCal = 2.5;
	const vanillaIcecreamCal = 2.07;
	const breadCal = 2.64;
	const salmonCal = 2.08;

	countButton.onclick = () => {
		
		if(foodType.value == "chicken" && amountOfFood.value > 0) {
			result.value = amountOfFood.value * chickenCal;
		}
		else if(foodType.value == "beef" && amountOfFood.value > 0) {
			result.value = amountOfFood.value * beefCal;
		}
		else if(foodType.value == "vanilla-icecream" && amountOfFood.value > 0) {
			result.value = amountOfFood.value * vanillaIcecreamCal;
		}
		else if(foodType.value == "bread" && amountOfFood.value > 0) {
			result.value = amountOfFood.value * breadCal;
		}
		else if(foodType.value == "salmon" && amountOfFood.value > 0) {
			result.value = amountOfFood.value * salmonCal;
		}
	}


