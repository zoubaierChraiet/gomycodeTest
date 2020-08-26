import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import "./App.css"
import {Layout} from 'antd'

import Instructors from '../src/modules/insructor/instructorsList'
import AddInstructor from '../src/modules/insructor/addInstructor'
import EditInstructor from '../src/modules/insructor/editInstructor'


function App() {
  return (
    <div className="App">
      <Layout style={{height:"100vh"}}>
      <Router>
        <Route exact path="/" component={Instructors} /> 
        <Route exact path="/new" component={AddInstructor} /> 
        <Route exact path="/edit/:id" component={EditInstructor} /> 
      </Router>
      </Layout>
     
    </div>
  );
}

export default App;
