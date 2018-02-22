import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0,
            homelink: props.initiallinkname
        };

        setTimeout(() => {
            this.setState ({
                status: 1
            });
        }, 2000);

        console.log("Constructor");
    }

    componentWillMount () {  // execute once
        console.log("Component will mount");
    }

    componentDidMount () { // execute once
        console.log("Component did mount");
    }

    componentWillReceiveProps (newProps) {
        console.log("Component will receive props ", newProps);
    }

    // return false to prevent rendering
    // run before rendering, after receiving new props or state
    shouldComponentUpdate (nextProps, nextState) {
        console.log("should compoenent update ",nextProps, nextState);
        if (nextState.status === 1) {
            // return false;
        }
        return true;
    }

    // run when 'shouldComponentUpdate' return true
    // run before rendering, after receiving new props or state
    componentWillUpdate (nextProps, nextState) {
        console.log("component will update ",nextProps, nextState);
    }

    // run after rendering
    // after compoenet's updates are flushed to DOM
    componentDidUpdate (prevProps, prevState) {
        console.log("component did update ",prevProps, prevState);
    }

    // run immediately before removing component from DOM 
    componentWillUnmount () {
        console.log("Component will unmount");
    }

    onMakeOlder () {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homelink);
    }

    onHandleChange (event) {
        // event : default event javascript object
        this.setState({
            homelink: event.target.value
        });
    }

    render () {
        return (
             <div>
                <p> In a Component </p>
                <p>Your name is : {this.props.name}</p>
                <p>Your age is : {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className='btn btn-primary'>Make me older</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homelink}
                    onChange={(event) => this.onHandleChange(event)} />

                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
             </div>
        );
    }
}

// prop definition
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initiallinkname: PropTypes.string
};
