import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textboxValue: "",
        isLoaded: false,
        error: null,
        data: [],
      };
  
      this.handleAddButtonPress = this.handleAddButtonPress.bind(this);
      this.handleTextboxChange = this.handleTextboxChange.bind(this);
      this.handleTodoToggle = this.handleTodoToggle.bind(this);
      this.handleTodoDelete = this.handleTodoDelete.bind(this);
    }

    componentDidMount(){
      //Part 1: Remove this hardcoded stuff and retrieve the data
      //from your Task API
      //- if loading succeeds make sure you set isLoaded to true in the state
      //- if loading fails set isLoaded to true AND error to true in the state

      let newData = [
        { id: 1, title: "Take out the trash", completed: false },
        { id: 2, title: "Walk the dog", completed: true },
        { id: 3, title: "Drink coffee", completed: true },
        { id: 4, title: "Grade HW", completed: false }
      ];

      this.setState(function(state){
        return { data: newData, isLoaded: true };
      })
    }
  
    handleAddButtonPress() {
      //Part 2:
      //- Add a new task to the local copy of the data
      //- Add it to the API via AJAX call
      //- if an error occurs set error to true in the state
    }
  
    handleTextboxChange(event){
      this.setState(
        function(state){
          return { textboxValue: event.target.value };
        }
      )
    }

    handleTodoToggle(id){
        //Part 3: 
        //- Modify the local copy of the data
        //- Toggle the data on the server via API call
        //- if an error occurs set error to true in the state
    }

    handleTodoDelete(id){
        //Part 4:
        //- Modify the local copy of the data
        //- Delete the todo from the API
        //- if an error occurs set error to true in the state
    }
  
    render() {
      let error = this.state.error;
      let isLoaded = this.state.isLoaded;

      if(error){
        return <div>Sorry, an error occurred.</div>
      }else if(!isLoaded){
        return <div>Loading...</div>
      }else{
        let handleTodoToggle = this.handleTodoToggle;
        let handleTodoDelete = this.handleTodoDelete;
        let todoList = this.state.data.map(function (todo) {
          return <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handleTodoToggle={ handleTodoToggle } handleTodoDelete={ handleTodoDelete }></Todo>
        });
    
        return (
          <div>
            <h3>Todo List</h3>
            <input type="text" value={ this.state.textboxValue } onChange={ this.handleTextboxChange }></input>
            <button onClick={this.handleAddButtonPress}>Add</button>
            { todoList}
          </div>
        );
      }
    }
  }

export default TodoList;