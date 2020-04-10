import React from 'react';
import '../style/App.css';
import 'whatwg-fetch';
import 'es6-promise';
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            name:null,
            id:null,
        } 

    }
    componentDidMount() {
        const url="order/getOder?id=12";
        fetch(url).then(res=>{
            res.json().then((data)=>{

                debugger
                console.log(data);
                this.setState({name:data.name,id:data.id});
            })
        })
       
    }


    increment  = () => {
        this.setState({count:this.state.count+1})
    }
    decrement = () => {
        this.setState({count:this.state.count-1})
    }
    render(){
        // const style={
        //     marginLeft:'50px',
        //     marginTop:'50px'
        // }
        // const item = {
        //     margin:'auto 5px'
        // }
        return (
          
        <div className="box">
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <span>当前点击次数</span>
            <span>{this.state.count}</span>
            <p></p>
            <span>{this.state.name}</span>
            <h3>{this.state.id}</h3>
        </div>
        )
    }
}
export default App;
