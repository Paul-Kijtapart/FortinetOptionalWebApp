import React from 'react';

// Components
import SearchBar from './SearchBar.js';

class Header extends React.Component {

	render() {
		return (
			<div className="header">
				<h3 className="fortinetIcon" > FortinetWebApp </h3>
				<SearchBar {...this.props} />
			</div>);
	}
};

export default Header;