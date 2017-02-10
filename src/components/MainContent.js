import React from 'react';

// Components
import AppSignatureList from './AppSignatureList.js';
import Navigation from './Navigation.js';

class MainContent extends React.Component {
	render() {
		const appSignatureListDetail = this.props.appSignatureListDetail;
		return (
			<div className='mainContent'>
				<Navigation 
					companies={appSignatureListDetail.companies}
					types={appSignatureListDetail.types}
					onCompanyNavClick={this.props.onCompanyNavClick}
					onTypeNavClick={this.props.onTypeNavClick}
					typeSelected={this.props.typeSelected}
					companySelected={this.props.companySelected}
				/>
				<AppSignatureList 
					app_sig_list={appSignatureListDetail.signatures}
					targetName ={this.props.targetName}
					typeSelected={this.props.typeSelected}
					companySelected={this.props.companySelected}
				/>
			</div>
		);
	}
};

export default MainContent;