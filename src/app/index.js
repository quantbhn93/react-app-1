import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Game from "./components/TicTacToe";

class App extends React.Component {
    render() {
        return (
            <Game />
        );
    }
}

render(<App/>, window.document.getElementById('app'));
