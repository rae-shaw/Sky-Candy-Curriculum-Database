import React from 'react';

export default React.createContext({
	action:[],
    age: [],
    apparatus: [],
    c_s: [],
    level: [],
    priority: [],
    currentSearch:[],
    addApparatus: () => { },
    updateSearch: () => { },
    deleteSkill: () => { },
    scroll: () => {}
})