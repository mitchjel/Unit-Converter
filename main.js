
// Get user input
document.querySelector('#inputValue').addEventListener('input', convert);

// Get User selected Unit
document.querySelector('#unit').addEventListener('input', convert);

// Function Implementation
function convert(e){

	// Get user input value
	var input = document.querySelector('#inputValue').value
	

	// Get user choice
	var unit = document.querySelector('#unit').value;

	// Using switch to check the unit value
	switch(unit){
		case 'lbs':
			convertLbs(input);
			break;
		case 'grams':
			convertGrams(input);
			break;
		case 'kilograms':
			convertKilograms(input);
			break;
		case 'meters':
			convertMeters(input);
			break;
	}

}

function convertLbs(num) {
	console.log('Value is: ' + num);
	document.querySelector('#output').innerHTML =
			// Convert to Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Grams:</h4>' +
					'<div>' + num * 453.592 +'</div>' +
				'</div>' +
			'</div>' +
			// Convert to Kilograms
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Kilograms:</h4>' +
					'<div>'+ num * 453.592 / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Convert to Ounces
			'<div class="card bg-danger">' +
				'<div class="card-header">' +
					'<h4>Ounces:</h4>' +
					'<div>' + num * 16 +'</div>' +
				'</div>' +
			'</div>' 
}

function convertGrams(num) {
	document.querySelector('#output').innerHTML =
			// Convert to Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Pounds:</h4>' +
						'<div>' + num * 0.00220462 +'</div>' +
				'</div>' +
			'</div>' +
			//Convert to Kilograms
			'<div class="card bg-success mb-2">' +
					'<div class="card-header">' +
						'<h4>Kilograms:</h4>' +
							'<div>'+ num / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Convert to Ounces
			'<div class="card bg-danger">' +
					'<div class="card-header">' +
						'<h4>Ounces:</h4>' +
							'<div>' + num * 0.035274 +'</div>' +
				'</div>' +
			'</div>' 
}

function convertMeters(num){
	document.querySelector('#output').innerHTML =
			// Convert to Miles
			'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
						'<h4>Miles:</h4>' +
								'<div>' + num * 0.000621371 +'</div>' +
				'</div>' +
			'</div>' +
			// Convert to Inches
			'<div class="card bg-success mb-2">' +
					'<div class="card-header">' +
						'<h4>Inches:</h4>' +
							'<div>'+ num * 39.370066559999998 +'</div>' +
				'</div>' +
			'</div>'
}