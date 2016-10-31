import React from 'react';
//import {Table, Column, Cell} from 'fixed-data-table';

class CharacterSelect extends React.Component {

	render() {
		return (
				<option>{this.props.option}</option>
			);
	}
}

class FrameDataTableHeader extends React.Component {
	render() {
		return (
			<thead className="category-container">
				<tr>
					<th className="category">Notation</th>
					<th className="category">Hit Level</th>
					<th className="category">Damage</th>
					<th className="category">Speed</th>
					<th className="category">On Block</th>
					<th className="category">On Hit</th>
					<th className="category">On CH</th>
				</tr>
			</thead>
			)
	}
}


class FrameDataTable extends React.Component {
	render() {
		return (
			<tbody>
				<tr className="attack-data">
					<td className="move-item">{this.props.notation}</td>
					<td className="move-item">{this.props.hitLevel}</td>
					<td className="move-item">{this.props.damage}</td>
					<td className="move-item">{this.props.speed}</td>
					<td className="move-item">{this.props.onBlock}</td>
					<td className="move-item">{this.props.onHit}</td>
					<td className="move-item">{this.props.onCH}</td>
				</tr>
			</tbody>
			);
	}
}

export default class FrameData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selectedCharacter: 'alisa'}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({selectedCharacter: event.target.value});
		console.log(this.state);
	}

	render() {
		let selected = this.state.selectedCharacter;
		const { frameData } = this.props;

		return( 
			<div className="frame-data-container container text-center">
			<h2>Frame Data</h2>
			<select onChange={this.handleChange}>
				<option defaultValue="Select Character">Select Character</option>
			{
				Object.keys(frameData).map((name, key) => {
					return (
						<CharacterSelect
							key={key}
							option={name}
						/>
						)
				})	
			}
			</select>
			<table>
			<FrameDataTableHeader />
			{
				frameData[selected].moves.map((move, key) => {
					return (
						<FrameDataTable 
							key={key}
							notation={move.notation}
							hitLevel={move.hit_level}
							damage={move.damage}
							speed={move.speed}
							onBlock={move.on_block}
							onHit={move.on_hit}
							onCH={move.on_ch}
						/>
					);
				})
			}
			</table>
			</div>
		)
	}
 }