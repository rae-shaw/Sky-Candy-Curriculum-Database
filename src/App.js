import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.js';
import SearchPage from './SearchPage/SearchPage.js';
import NotFound from './NotFound/NotFound.js';
import AddNewSkill from './AddNewSkill/AddNewSkill.js';
import LandingPage from './LandingPage/LandingPage.js';
import APIconfigure from './APIconfigure.js';
import APIContext from './APIContext.js';

export default class App extends React.Component {
    state = {
        action: [],
        age: [],
        apparatus: [],
        c_s: [],
        level: [],
        priority: []
    };
    componentDidMount(){

    const apiActionRequest = fetch(`${APIconfigure.API_END}/action`).then(function(response){ 
        return response.json()
    });
    const apiAgeRequest = fetch(`${APIconfigure.API_END}/age`).then(function(response){
        return response.json()
    });
    const apiApparatusRequest = fetch(`${APIconfigure.API_END}/apparatus`).then(function(response){ 
        return response.json()
    });
    const apiClassRequest = fetch(`${APIconfigure.API_END}/class`).then(function(response){
        return response.json()
    });
    const apiLevelRequest = fetch(`${APIconfigure.API_END}/level`).then(function(response){ 
        return response.json()
    });
    const apiPriorityRequest = fetch(`${APIconfigure.API_END}/priority`).then(function(response){
        return response.json()
    });
    const combinedData = { "apiActionRequest":{},"apiAgeRequest":{}, "apiApparatusRequest":{}, "apiClassRequest":{}, "apiLevelRequest":{},"apiPriorityRequest":{} };
    Promise.all([ apiActionRequest, apiAgeRequest, apiApparatusRequest, apiClassRequest, apiLevelRequest, apiPriorityRequest]).then(function(values){
        combinedData["apiActionRequest"] = values[0];
        combinedData["apiAgeRequest"] = values[1];
        combinedData["apiApparatusRequest"] = values[2];
        combinedData["apiClassRequest"] = values[3];
        combinedData["apiLevelRequest"] = values[4];
        combinedData["apiPriorityRequest"] = values[5];
        console.log('************ combinedData', combinedData)
        return combinedData;
    })
    .then((combinedData) => {
        console.log(combinedData['apiAgeRequest'])
        this.setState({ 
            action: combinedData['apiActionRequest'], 
            age: combinedData['apiAgeRequest'],
            apparatus: combinedData['apiApparatusRequest'],
            c_s: combinedData['apiClassRequest'],
            level: combinedData['apiLevelRequest'],
            priority: combinedData['apiPriorityRequest'] 
        })
    })
    .catch(error => {
            console.error({error});
    });
        // Promise.all([
        //     fetch(`${APIconfigure.API_END}/action`),
        //     fetch(`${APIconfigure.API_END}/age`),
        //     fetch(`${APIconfigure.API_END}/apparatus`),
        //     fetch(`${APIconfigure.API_END}/class`),
        //     fetch(`${APIconfigure.API_END}/level`),
        //     fetch(`${APIconfigure.API_END}/priority`)
        // ])
        // .then(([actionResults, ageResults, apparatusResults, c_sResults, levelResults, priorityResults]) => { 
        //     console.log('*******ageResults', ageResults.json().then(data => console.log(data)))
        //     let action
        //     let age
        //     let apparatus
        //     let c_s
        //     let level
        //     let priority
        //     // if (actionResults.ok)
        //     //     return action = actionResults.json();
        //     if (ageResults.ok)
        //        age = ageResults.json();
        //         return age
        //     // if (apparatusResults.ok)
        //     //     return apparatus = apparatusResults.json();
        //     // if (c_sResults.ok)
        //     //     return c_s = c_sResults.json();
        //     // if (levelResults.ok)
        //     //     return level = levelResults.json();
        //     // if (priorityResults.ok)
        //     //     return priority = priorityResults.json();
        //     //return Promise.all([ageResults.json(), actionResults.json(), apparatusResults.json(), c_sResults.json(), levelResults.json(), priorityResults.json()]);
        // })
        // .then((age) => {
        //     console.log('************** age', age)
        //     this.setState(age);
        // })
       
    }

  render() {
    const contextValue ={
        action: this.state.action,
        age: this.state.age,
        apparatus: this.state.apparatus,
        c_s: this.state.c_s,
        level: this.state.level,
        priority: this.state.priority
      
    }
    console.log('AGE ARRAY', this.state.age)
    return (
         <APIContext.Provider value={contextValue}>
        <main className='App'>
        	<section className='sidebar'>
                <Switch>
                	<Route exact path='/' component = {LoginPage} /> 
                	<Route path = '/main' component = {LandingPage} />
                    <Route path='/search' component={SearchPage} />
                    <Route path='/newskill' component = {AddNewSkill} />
                    <Route component={NotFound} />
                </Switch>
            </section>
        </main>
        </APIContext.Provider>
    );
  }
}
