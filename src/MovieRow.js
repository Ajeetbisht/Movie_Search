import React from 'react';

class MoviesRow extends React.Component{
	render(){
		return <table key={this.props.movies.id}>
		<tbody>
		    <tr>
		    <td>
		        <img alt="image" width="100" src={this.movies.movies.poster}/>
		    </td>
		    <td>
		        {this.props.movies.title}
		        <p>{this.props.movies.overview}</p>
		    </td>
		    </tr>
		</tbody>
		</table>
	}
}

export default MoviesRow;