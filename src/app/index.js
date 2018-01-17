import React from 'react';
import { render } from 'react-dom';

import {Header} from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

        var user = {
            name: "Quan",
            hobbies: ["coffee" , "reading"]
        };

        return (
            <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                    <Header />
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Max"} age={25} user={user}>
                        <p>This is a paragraph</p>
                    </Home>
                  </div>
              </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));
