import React from 'react';
import ReactDOM from 'react-dom';

// Components
import FortinetWebApp from './components/FortinetWebApp.js';

// Class
import Application from './models/Application.js'

const serverURL = "../src/test.json";

var fetchData = function() {
	const request = new Request(serverURL);
	return fetch(request.url)
		.then(function(response) {
			if (response.status == 200) return response.json();
			else throw new Error('Something went wrong on api server!');
		})
		.catch(function(reason) {
			console.log('parsing failed', reason);
		});
};

var sortedByFreqeuncy = function(counter) {
	return function(item_a, item_b) {
		return counter[item_b] - counter[item_a];
	};
};

/**
 * Retrieve Set of companies, Set of types, and list of signatures
 */
var getAppSignatureListDetail = function(app_sig_list) {
	var companyCounter = {};
	var typeCounter = {};
	var signatures = [];

	for (let appSig of app_sig_list) {
		const company_name = appSig[6] && appSig[6].trim();
		const type_name = appSig[1] && appSig[1].trim();

		// Update company counter
		if (company_name in companyCounter) {
			companyCounter[company_name]++;
		} else {
			companyCounter[company_name] = 1;
		}

		// Update type counter
		if (type_name in typeCounter) {
			typeCounter[type_name]++;
		} else {
			typeCounter[type_name] = 1;
		}


		let newAppSig =
			new Application(appSig[0] && appSig[0].trim(),
				type_name,
				appSig[5],
				company_name,
				appSig[8], appSig[9],
				appSig[12]);
		signatures.push(newAppSig);
	};

	// Sort both companies and types by Frequency
	var companies = Object.keys(companyCounter);
	var types = Object.keys(typeCounter);
	companies.sort(sortedByFreqeuncy(companyCounter));
	types.sort(sortedByFreqeuncy(typeCounter));


	return {
		companies: companies,
		types: types,
		signatures: signatures
	};
};

/* Main Run */
window.onload = function() {
	fetchData().then(function(app_sig_list) {
		const appSignatureListDetail = getAppSignatureListDetail(app_sig_list);
		ReactDOM.render(
			<FortinetWebApp appSignatureListDetail={appSignatureListDetail} />,
			document.getElementById('root'));
	});
};