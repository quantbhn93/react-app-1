import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    render () {
        let content = "";
        if (true) {
            content =  <p>Hello</p>;
        }

        return (
             <div>
                <p> In a Component </p>
                <span>{content}</span>
                <p>Your name is : {this.props.name}</p>
                <p>Your age is : {this.props.age}</p>
                <p>Address : {this.props.address}</p>
                <p>User object => Name: {this.props.user.name}</p>
                <div>
                  <h4>Hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby, i) => <li key={'hob' + i}>{hobby}</li>)}
                  </ul>
                </div>
                <hr/>
                {this.props.children}
             </div>
        );
    }
}

// prop definition
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};

// Specifies the default values for props:
Home.defaultProps = {
  address: 'Ha Noi'
};
