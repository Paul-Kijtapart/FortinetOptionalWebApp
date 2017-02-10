import React from 'react';

// Components
import MainContent from './MainContent.js';
import Header from './Header.js';

class FortinetWebApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			targetName: "",
			companySelected: new Set(),
			typeSelected: new Set()
		};

		this.setTargetName = this.setTargetName.bind(this);
		this.addSelectedCompany = this.addSelectedCompany.bind(this);
		this.addSelectedType = this.addSelectedType.bind(this);
		this.removeSelectedCompany = this.removeSelectedCompany.bind(this);
		this.removeSelectedType = this.removeSelectedType.bind(this);
		this.onCompanyNavClick = this.onCompanyNavClick.bind(this);
		this.onTypeNavClick = this.onTypeNavClick.bind(this);
	}

	setTargetName(value) {
		this.setState({
			targetName: value
		});
	}

	addSelectedCompany(company_name) {
		this.setState(function(prevState) {
			var updatedCompanySelected = prevState.companySelected;
			updatedCompanySelected.add(company_name);
			return {
				companySelected: updatedCompanySelected
			};
		});
	}

	removeSelectedCompany(company_name) {
		this.setState(function(prevState) {
			var updatedCompanySelected = prevState.companySelected;
			updatedCompanySelected.delete(company_name);
			return {
				companySelected: updatedCompanySelected
			};
		});
	}

	addSelectedType(type) {
		this.setState(function(prevState) {
			var updatedTypeSelected = prevState.typeSelected;
			updatedTypeSelected.add(type);
			return {
				typeSelected: updatedTypeSelected
			};
		});
	}

	removeSelectedType(type) {
		this.setState(function(prevState) {
			var updatedTypeSelected = prevState.typeSelected;
			updatedTypeSelected.delete(type);
			return {
				typeSelected: updatedTypeSelected
			};
		});
	}

	/* Toggle Company Navigation option */
	onCompanyNavClick(company_name) {
		if (this.state.companySelected.has(company_name)) {
			this.removeSelectedCompany(company_name);
		} else {
			this.addSelectedCompany(company_name);
		}
	}

	/* Toggle Type Navigation option */
	onTypeNavClick(type) {
		if (this.state.typeSelected.has(type)) {
			this.removeSelectedType(type);
		} else {
			this.addSelectedType(type);
		}
	}

	render() {

		const appSignatureListDetail = this.props.appSignatureListDetail;
		return (
			<div className="fortinetWebApp">
				<Header 
					onSearchInput={this.setTargetName}
					targetName={this.state.targetName}
				/>
				<MainContent 
					appSignatureListDetail={appSignatureListDetail}
					targetName={this.state.targetName}
					onCompanyNavClick={this.onCompanyNavClick}
					onTypeNavClick={this.onTypeNavClick}
					companySelected={this.state.companySelected}
					typeSelected={this.state.typeSelected}
				/>
			</div>
		);
	}
};

export default FortinetWebApp;