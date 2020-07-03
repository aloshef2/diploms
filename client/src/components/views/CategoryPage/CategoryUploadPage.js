import React, { useEffect, useState, Suspense } from 'react';
import { Typography, Button, Form, message, Input, Icon, Checkbox } from 'antd';
import DashboardNav from '../Dashboard/Dashboard';
import Axios from 'axios';
import ListItems from "./ListItems"
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;


class CategoryUploadPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          label: '',
          value: '',
          items:[],
          currentItem:{
            label:'',
            value:''
          }
        }
        this.addItem = this.addItem.bind(this);
        this.handleValueInformation = this.handleValueInformation.bind(this);
        this.handleLableInformation = this.handleLableInformation.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
      addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.lable !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            label:'',
            value:''
          }
        })
        }
        console.log(this.state)
      }
      handleLableInformation(e){
        this.setState({
          currentItem:{
            label: e.target.value,
            value: this.state.currentItem.value
          }
        })
      }
      handleValueInformation(e){
        this.setState({
          currentItem:{
            label: this.state.currentItem.label,
            value: e.target.value
          }
        })
      }
      deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.value!==key);
        this.setState({
          items: filteredItems
        })
    
      }
      handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
        this.setState({ label: event.currentTarget.value })
    }
    handleChangeValue = (event) => {
        this.setState({ value: event.currentTarget.value })
    }
    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.title  ||!this.state.label || !this.state.value || !this.state.images
            || !this.state.items) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            title: this.state.title,
            label: this.state.label,
            value: this.state.value,
            
            images: this.state.images
        }

        Axios.post('/api/category/uploadCategory', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/dashboard/index')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }
   
    render(){
        return (
            <div className="row w-100">
                <div className="col-3 col-lg-3 col-md-4 col-sm-3">
                    <DashboardNav />
                </div>
                <div className="col-8 col-xl-5 col-md-5 col-sm-8 col-xl-3">
                <div >
            <div style={{ textAlign: 'center'}} className="p-5">
                <Title level={2}>Добавить категорию</Title>
            </div>


            <Form  onSubmit={this.onSubmit}>

                <FileUpload refreshFunction={this.updateFiles} />

                <br />
                <br />
                <div className="pt-4">
                <label>Название</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                </div>

                <div className="pt-4">
                <label>Значение</label>
                <Input
                onChange={this.handleChangeValue}
                value={this.state.value}
                />
                </div>
{/**
 * <div className="pt-4">
                <label>Информация о товаре</label>
                <form id="to-do-form" >
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter task" value= {this.state.currentItem.label} onChange={this.handleLableInformation} />
                    <input type="text" className="form-control" placeholder="Enter task" value= {this.state.currentItem.value} onChange={this.handleValueInformation} />
                        <div className="input-group-append">

                        <button className="btn btn-outline-secondary" onClick={this.addItem}>Add</button>
                        </div>
                    </div>
                    
                </form>
                </div>
                <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
 * 
 */}
                
                
                <Button
                    onClick={this.onSubmit}
                >
                    Создать
                </Button>

            </Form>

            </div>
        </div>
    </div>
        )
    }

    
}

export default CategoryUploadPage
