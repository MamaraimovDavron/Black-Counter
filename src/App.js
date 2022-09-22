import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            count: 0,
        })
    }

    addOne = () => {
        this.setState({count: this.state.count + 1})
    }

    resetOne = () => {
        this.setState({count: this.state.count = 0})
    }

    deleteOne = () => {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div className='container'>
            <h1>Counter</h1>
                <div className='box--container'>
                    <span>{this.state.count}</span> 
                    <button onClick={this.addOne} id='plus'>+</button>
                    <button onClick={this.resetOne} id='reset'>&#x21bb;</button>
                    <button onClick={this.deleteOne} id='minus'>-</button>
                </div>
            </div>
        )
    }
}

export default App;