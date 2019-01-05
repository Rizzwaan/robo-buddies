import React,{Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './app.css'

import { setSearchField} from '../actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchfield
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
     onSearchChange: (event) => dispatch(setSearchField(event.target.value))

  }
}
 
class App extends Component {
    constructor() {
    	super()
    	this.state = {
			robots: [],
			 
      }
    }
    

      componentDidMount() {
      	fetch('https://jsonplaceholder.typicode.com/users')
      	.then(response=> {
      		return response.json();
      	})
      	.then(users=> {
        this.setState({robots: users})

      	})
      }

     

	render() {
		const {robots} = this.state;
    const { searchfield, onSearchChange } =this.props;
		const filterRobots = robots.filter(robot => {
      		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      	})
      	if(robots.length === 0) {
      		return <h1>Loading....</h1>
      	}else 
      		return(
		<div className='tc'>
		<h1 className='f1 '>ROBO BUDDIES</h1>
		<SearchBox searchChange = {onSearchChange}/>
		<Scroll>
		 <ErrorBoundry>
			<CardList robots={filterRobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>
		);
  }
		
	}
	


export default connect(mapStateToProps, mapDispatchToProps)(App);
