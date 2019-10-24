import React, { Component } from 'react';
import Form from './components/FormX';

class Request extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false,
        }
    }
    // UNSAFE_componentWillMount() {
    //     this.getData()
    // }
    getListCloud = () => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8600/clouds')
        xhr.send()
        xhr.onreadystatechange = (e) => {
            console.log(xhr.responseText);
        }
    }

    registerCloud = () => {
    }
    handleShowForm = () => {
        this.setState({
            showForm: true
        });
    }
    render() {
        return(
            <div>
                <div>
                    <button type="button" className="btn btn-default btn-sm" 
                    onClick={this.getListCloud} >Get list clouds</button>
                </div>
                <div>
                    <button type="button" className="btn btn-default btn-sm" 
                    onClick={this.handleShowForm} >Register cloud</button>    
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form 
                            showForm={this.state.showForm}
                            // arrayLevel={this.state.arrayLevel}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Request;