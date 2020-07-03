import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

function GetBrendPage(props) {

    const [Brend, setBrend] = useState([]);


    useEffect(() => {
        getBrend();
    }, []);

    const getBrend = () => {
        Axios.get('/api/brend/getBrend')
            .then(response => {
                if (response.data.success) {
                    
                        setBrend(response.data.brend)
                } else {
                    alert('Failed to fectch product datas')
                }
            });
    }

    const deleteBrend = (id) => {
        Axios.delete("/api/brend/delete_by_id/"+id)
    }


    const columns = [
        {
            dataField: "value" , text: "Значение"
        },
        {
            dataField: "label" , text: "Название"
        },
        {
            header: "delete and edit",
            formatter: (cellContent, row) => {
              return (
                  <div>
                    <button className="btn" onClick={() => {
                        deleteBrend(row._id);
                    }}>
                      Delete
                  </button>
                  </div>
                  
              );
            }
          },
    ]
     

    return (
            <div className="row w-100">
                <div className="col-3 col-md-5 col-sm-3">
                    <DashboardNav />
                </div>
                <div className="col-8 col-xl-5 col-md-5 col-sm-8 col-xl-3">
                <div >
            <div style={{ textAlign: 'center'}}>
               <h1>Все брренды</h1>
            </div>

                <BootstrapTable
                classes="text-break"
                keyField="title"
                data={Brend}
                columns={columns}
                pagination={paginationFactory()}
                />

            </div>
        </div>
    </div>

    )
}

export default GetBrendPage
