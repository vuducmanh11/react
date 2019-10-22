import React, {Component} from 'react';

class Home extends Component {
    render() {
        return(
            <div style ={{'background-color': 'blue'}}>
                {this.props.content}
            </div>
        );
    }
}

export default Home;