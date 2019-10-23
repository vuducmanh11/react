import React, { Component } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import Item from './components/Item';
import Items from './mockdata/Items';
import ItemEdit from './components/ItemEdit';

// Import packages
import SweetAlert from 'sweetalert-react';
import './../node_modules/sweetalert/dist/sweetalert.css';
class App extends Component {
    constructor(props) {
        super(props);
        let arrayLevel = [];
        if(Items.length > 0) {
            for(let i = 0; i < Items.length; i++) {
                if(arrayLevel.indexOf(Items[i].level) === -1) {
                    arrayLevel.push(Items[i].level);
                }
            }
        }arrayLevel.sort(function(a, b) {return a - b});
        this.state = {
            items: Items,
            showAlert: false,
            showForm: false,
            arrayLevel: arrayLevel,
            fpro_name: '',
            fpro_id: '',
            fpro_edit_index: 0,
            fpro_edit_id: '',
            fpro_edit_name: '',
            fpro_edit_level: 0,

        }
    }
    renderItem = () => {
        // return(111);
        let {items, fpro_edit_index, fpro_edit_id, fpro_edit_name, fpro_edit_level, arrayLevel} = this.state;
        if(items.length === 0) {
            return <Item item={0} />
        }
        // return mapld(items,(item,index) => { ????
        return items.map((item, index) => {
            if(item.id === fpro_edit_id) {
                return (
                    <ItemEdit 
                        key={index} index={fpro_edit_index} name={fpro_edit_name} level={fpro_edit_level}
                        arrayLevel={arrayLevel} handleEditClickCancel={this.handleEditClickCancel}
                        handleEditInputChange={this.handleEditInputChange}
                        handleEditSelectChange={this.handleEditSelectChange}
                        handleSaveChange={this.handleSaveChange}
                    />
                )
            }
            return (
                <Item index={index+1} item={item} key={item.id} 
                  handleShowAlert={this.handleShowAlert}
                  handleEditItem={this.handleEditItem}
                />
            )
            // console.log(item);
        });
    }

    handleShowAlert = (item) => {
        // console.log(item);
        this.setState({
            showAlert: true,
            fpro_name: item.name,
            fpro_id: item.id
        })
    }
    handleDeleteItem = () => {
        let {fpro_id, items} = this.state;
        if(items.length > 0) {
            for(let i = 0; i < items.length; i++) {
                if(items[i].id === fpro_id) {
                    items.splice(i, 1);
                    break;
                }
            }
        }
        this.setState({
            showAlert: false
        })
    }
    handleEditItem = (index, item) => {
        // console.log(index, item);
        this.setState({
            fpro_edit_index: index,
            fpro_edit_id: item.id,
            fpro_edit_name: item.name,
            fpro_edit_level: item.level
        });
    }
    handleEditClickCancel = () => {
        this.setState({
            fpro_edit_id:  ''
        })
    }
    handleEditInputChange = (value) => {
        this.setState({
            fpro_edit_name: value
        })
    }
    handleEditSelectChange = (value) => {
        this.setState({
            fpro_edit_level: value
        })
    }
    handleSaveChange = () => {
        let {items, fpro_edit_id, fpro_edit_name, fpro_edit_level} = this.state;
        if (items.length > 0) {
            for(let i = 0; i < items.length; i++) {
                if (items[i].id === fpro_edit_id) {
                    items[i].name = fpro_edit_name;
                    items[i].level = +fpro_edit_level;
                    break;
                }    
            }
            
        }
        this.setState({
            fpro_edit_id: ''
        });
    }
    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    render() {
        return (
            <div className="container">
                <button onClick={()=>this.setState({ showAlert: true })}>Alert</button>
                <SweetAlert
                    show={this.state.showAlert}
                    title="Demo"
                    text={this.state.fpro_name}
                    showCancelButton
                    onOutsideClick  ={()  => this.setState({  showAlert: false})  }
                    onEscapeKey     ={()  => this.setState({  showAlert: false})  }
                    onCancel        ={()  => this.setState({  showAlert: false})  }
                    onConfirm       ={()  => this.handleDeleteItem()  }
                />
                <Title />
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10" onClick={this.handleShowForm} >
                        { (this.state.showForm) ? 'Close Item' : 'Add Item'}
                        </button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form 
                            showForm={this.state.showForm}
                            arrayLevel={this.state.arrayLevel}
                        />
                    </div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderItem()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;