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
        }, 1000);
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
