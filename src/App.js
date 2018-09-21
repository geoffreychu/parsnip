import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TaskPage from './components/TaskPage';

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks}/>
      </div>
    );
  }
}

function  mapStateToProps (state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App);
