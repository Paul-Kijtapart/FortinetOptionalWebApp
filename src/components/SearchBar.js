import React from 'react';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onSearchInput(event.target.value);
	}

	render() {
		return (
			<div className="searchBar">
				<input 
					onChange={this.handleChange}
					value={this.props.targetName}
					type="text" 
					placeholder="Search..."> 
				</input>
			</div>
		);
	}
};


export default SearchBar;