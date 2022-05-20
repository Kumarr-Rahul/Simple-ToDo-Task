import ReactDOM, { render } from 'react-dom';
import React from 'react';
import './index.css'

class AddTask extends React.Component {
    render() {
        return (
            <form>
                <input typr="text"/>
                <input type="button" value="Add Task" />
            </form>
        );
    }
}

// probs is way of transfering information from parent component to child component
class TaskList extends React.Component {      //Child component
    render () {
        return (
           <div>
                <div className={this.props.forStyling}>{this.props.purpose}</div> 
           </div>
        )
    }
}

class App extends React.Component {         //Parent component
    render() {  //We can't give other name to render
        return (   //all these going into root inside index.html
            <>
                <div className="add-task">
                    <AddTask />
                </div>

                <div className='task-lists'>
                    <TaskList purpose="Todo" forStyling="todo" />
                    <TaskList purpose="Finished" forStyling="finished" />
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); // root is present inside public/index.html
