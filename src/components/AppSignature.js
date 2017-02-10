import React from 'react';



class AppSignature extends React.Component {
	render() {
		const name = this.props.name;
		const type = this.props.type;
		const date = this.props.date;
		const company = this.props.company;
		const error = this.props.error;
		const reason = this.props.reason;
		const solution = this.props.solution;

		return (
			<tr className="appSignature">
				<td> {type} </td>
				<td> {name} </td>
				<td> {date.toLocaleDateString()} </td>
			</tr>
		);
	}
}

export default AppSignature;