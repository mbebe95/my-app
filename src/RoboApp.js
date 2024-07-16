import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';





class RoboApp extends Component {
    constructor(){
        super()
         this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        
    }
    
    
    
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='tc'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
    
}

export default RoboApp;