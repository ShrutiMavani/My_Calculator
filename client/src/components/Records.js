import React, { Component } from "react";
import { Table } from "reactstrap";

class Records extends Component {
	render() {
		const records = this.props.records;
		let i = 1;
		return (
			<div> 
				<br></br>
				<h2 style={{textAlign: "left"}}>Latest 10 Calculations Records:</h2>
				<br></br>
				<Table striped>
					<tbody>
						{records.map((record) => (
							<tr key={i}>
								<th key={i++}>{record}</th>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Records;
