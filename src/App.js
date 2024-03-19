import React from "react";
import Router2 from "./router2";
import Router3 from "./router3";
import FormSearch from "./form-search";
import FormBootstrap from "./form-bootstrap";
import FormText from "./form-text";
import FormCheck from "./form-check";
import FormValidation from "./form-validation";

export default function App(){
    return <FormValidation/>
}

//Context
import React from 'react'
import { userContext } from './context';
import Content from './context-content';

    return (
        <userContext.Provider value={'Tom Jerry'}>
            <Content/>
        </userContext.Provider>
    )

//context-header, context content
import React from 'react'
import { userContext } from './context';
import Content from './context-content';
import Header2 from './context-header2';
import Content2 from './context-content2';

export default function App(){
    let [user, setUser] = React.useState('')
    return (
        <userContext.Provider value={[user, setUser]}>
            <Header2/>
            <Content2/>
        </userContext.Provider>
    )
}

#Bootstrap
import Router2 from "./router2";
import Router3 from "./router3";
import FormSearch from "./form-search";
import FormBootstrap from "./form-bootstrap";
import FormText from "./form-text";

export default function App(){
    return <FormText/>
}
