import React from 'react';

class CompanyNavigationRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onCompanyNavClick(event.target.textContent);
	}

	render() {
		const company_name = this.props.company_name;
		const companySelected = this.props.companySelected;
		const isActive = companySelected.has(company_name);

		return (
			<li 
			onClick={this.handleClick}
			className={isActive? 'companyNavigationRowOn': 'companyNavigationRowOff'}
		>
			{company_name} 
		</li>
		);
	}
};

class TypeNavigationRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onTypeNavClick(event.target.textContent);
	}

	render() {
		const type_name = this.props.type_name;
		const typeSelected = this.props.typeSelected;
		const isActive = typeSelected.has(type_name);
		return (
			<li 
				onClick={this.handleClick}
				className={ isActive ? 'typeNavigationRowOn': 'typeNavigationRowOff'}
			>
				{type_name}
			</li>
		);
	}
};

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var companies = this.props.companies;
		var displayComapnies = [];
		for (let company_name of companies) {
			if (company_name) {
				displayComapnies.push(
					<CompanyNavigationRow
						key={company_name}
						company_name = {company_name}
						onCompanyNavClick = {this.props.onCompanyNavClick}
						companySelected={this.props.companySelected}
					/>
				);
			}
		}

		var types = this.props.types;
		var displayTypes = [];
		for (let type_name of types) {
			if (type_name) {
				displayTypes.push(
					<TypeNavigationRow
						key={type_name}
						type_name={type_name}
						onTypeNavClick={this.props.onTypeNavClick}
						typeSelected={this.props.typeSelected}
					/>);
			}
		}

		return (
			<ul className='navigation'>
				<li className="navigationTitle"> Company </li>
				{displayComapnies.slice(0,10)}
				<li className="navigationTitle"> Types </li>
				{displayTypes.slice(0,10)}
			</ul>
		);
	}
};

export default Navigation;