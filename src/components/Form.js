import React, {Component} from 'react';

class Form extends Component {
  renderLevel = () => {
    let {arrayLevel} = this.props;
    return arrayLevel.map((level, index) => {
      switch (level) {
        case 0:
          return <option key={index} value={level}>Low</option>
        case 1:
          return <option key={index} value={level}>Medium</option>
        default:
          return <option key={index} value={level}>High</option>
      }
    });
  }
  render() {
    if (this.props.showForm === false) return null;
    return(
      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Item Name" />
        </div>
        <div className="form-group">
          <select className="form-control">
            {this.renderLevel()}
          </select>
        </div>
        <button type="button" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default">Cancel</button>
      </form>
    )
  }
}

export default Form;