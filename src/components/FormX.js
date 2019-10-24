import React, {Component} from 'react'

class FormX extends Component {
    render() {
        return(
            <form className="form-inline">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group">
                <select className="form-control">
                    <option>12</option>
                    <option>12</option>
                    <option>12</option>
                </select>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-default">Cancel</button>
            </form>
        )
    }
}

export default FormX;