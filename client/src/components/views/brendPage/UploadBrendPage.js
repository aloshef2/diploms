import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';

const { Title } = Typography;

function UploadBrendPage(props) {

    const [Lable, setLable ] = useState("")
    const [Value, setValue] = useState("")


    const onValueChange = (event) => {
        setValue(event.currentTarget.value)
    }

    const onLableChange = (event) => {
        setLable(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();


        if (!Lable && !Value ) {
            return alert('fill all the fields first!')
        }

        const variables = {
            value: Value,
            label: Lable
        }

        Axios.post('/api/brend/uploadBrend', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/dashboard/brend/get')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
            <div className="row w-100">
                <div className="col-3 col-md-5 col-sm-3">
                    <DashboardNav />
                </div>
                <div className="col-8 col-xl-5 col-md-5 col-sm-8 col-xl-3">
                <div >
            <div style={{ textAlign: 'center'}} className="pt-5">
                <Title level={2}> Добавить производителя</Title>
            </div>


            <Form onSubmit={onSubmit} >

                
                
                <div className="pt-4">
                <label>Значение</label>
                <Input
                    onChange={onValueChange}
                    value={Value}
                />
                </div>

                <div className="pt-4">
                <label>Название</label>
                <Input
                    onChange={onLableChange}
                    value={Lable}
                />
                </div>
                

                
                <div className="pt-4">
                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>
                </div>
                
                

            </Form>

            </div>
        </div>
    </div>

    )
}

export default UploadBrendPage
