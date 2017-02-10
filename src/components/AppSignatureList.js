import React from 'react';
import AppSignature from './AppSignature.js';

/**
 * Re-arrange the data into its own category
 */
class AppSignatureList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const app_sig_list = this.props.app_sig_list;
		const typeSelected = this.props.typeSelected;
		const companySelected = this.props.companySelected;
		const targetName = this.props.targetName;

		const appSigList = [];
		if (typeSelected.size !== 0 ||
			companySelected.size !== 0 ||
			targetName) {

		}

		// Apply Category selected
		for (let appSig of app_sig_list) {
			if ((typeSelected.size !== 0 && !typeSelected.has(appSig.type)) ||
				(companySelected.size !== 0 && !companySelected.has(appSig.company)) ||
				(targetName && appSig.name.search(new RegExp(targetName, 'i')) === -1)) {
				continue;
			}
			appSigList.push(
				<AppSignature
					key={appSig.name}
					name={appSig.name}
					type={appSig.type}
					date={appSig.date}
					company={appSig.company}
					error={appSig.error}
					reason={appSig.reason}
					solution={appSig.solution}
				/>);
		}

		return (
			<table className="appSignatureList">
				<thead>
					<tr>
						<th> Company </th>
						<th> Name </th>
						<th 
							onClick={this.filterDate}
						> Date 
						</th>
					</tr>
				</thead>
				<tbody>
					{appSigList.slice(0,100)}
				</tbody>
			</table>
		);
	}
}

export default AppSignatureList;