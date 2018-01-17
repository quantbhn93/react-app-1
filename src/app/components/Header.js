import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#"> Home </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
