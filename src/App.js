import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import NotFound from './NotFound/NotFound.js';
import AddNewSkill from './AddNewSkill/AddNewSkill.js';
import LandingPage from './LandingPage/LandingPage.js';
import APIconfigure from './APIconfigure.js';
import APIContext from './APIContext.js';
import FullSkill from './FullSkill/FullSkill.js';
import UpdateSkill from './UpdateSkill/UpdateSkill.js';
import './App.css'

export default class App extends React.Component {
    state = {
        action: [],
        age: [],
        apparatus: [],
        c_s: [],
        level: [],
        priority: [],
        currentSearch: []
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
            return combinedData;
        })
        .then((combinedData) => {
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
    }

    handleAddApparatus = apparatus => {
        this.setState({
            apparatus: [
                ...this.state.apparatus,
                apparatus
            ]
        })
    }

    updateSearch = skill => {
        this.setState({
            currentSearch: skill
        })
    }

    handleDeleteSkill = skillId =>{
        this.setState({
            currentSearch: this.state.currentSearch.filter(skill => skill.id !== skillId)
        });
    }

    handleScroll = () => {
        const ref = React.createRef();
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    render() {
        const contextValue ={
            action: this.state.action,
            age: this.state.age,
            apparatus: this.state.apparatus,
            c_s: this.state.c_s,
            level: this.state.level,
            priority: this.state.priority,
            currentSearch: this.state.currentSearch,
            addApparatus: this.handleAddApparatus,
            updateSearch: this.updateSearch,
            deleteSkill: this.handleDeleteSkill,
            scroll: this.handleScroll 
        }
        return (
             <APIContext.Provider value={contextValue}>
            <main className='App'>
            	<section className='routes'>
                    <Switch>
                    	<Route exact path = '/' component = {LandingPage} />
                        <Route path='/search' component={SearchPage} />
                        <Route path='/newskill' component = {AddNewSkill} />
                        <Route path='/full-skill/:skillId' component = {FullSkill} />
                        <Route path='/update-skill/:updateSkill' component = {UpdateSkill} />
                        <Route component={NotFound} />
                    </Switch>
                </section>
            </main>
            </APIContext.Provider>
        );
      }
}
