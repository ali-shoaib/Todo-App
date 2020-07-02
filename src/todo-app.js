import React, { Component } from 'react';


  class Todo extends Component{
    constructor(props){
      super(props);
      
      this.state={
        newItem: "",
        list: []
      }
    }

    updateInput(key, value){
      this.setState({
        [key]: value
      })
    }

    addItem(){
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      const list=[...this.state.list];

      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      })
    }

    deleteItem(id){
      const list =[...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }

    //Styling
    css = {
        marginTop:150
    }

    css2 = {
        textAlign: "center"
    }

    css3 = {
        marginLeft: 30
    }

    css4 = {
        marginBottom: 20
    }

    
  render(){
  return (  
    <div className="container" style={this.css}>
      <h1 style={this.css2}>Todo App by <b color="green">Ali Shoaib</b></h1>
      <div className="jumbotron ">
      <div className="form-group">
      <label htmlFor="usr">Name:</label>
      <input type="text" className="form-control" id="usr" onChange={e => this.updateInput("newItem",e.target.value)} 
      value={this.state.newItem}/>
      </div>
      <button className="btn btn-primary" onClick={()=>this.addItem()} style={this.css4}>Add</button>
      <br/>
      <ul className="list-group">
        {this.state.list.map(item => {
          return(
          <li key={item.id} className="list-group-item">{item.value}
          <button onClick={() => this.deleteItem(item.id)} className="btn btn-danger" style={this.css3}>Remove</button>
          </li>
          )
        }
        )}
      </ul>
      </div>
    </div>
  );
  }
}

export default Todo;
