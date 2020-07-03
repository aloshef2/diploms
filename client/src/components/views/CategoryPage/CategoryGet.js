import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function CategoryGet(props) {


    const [Category, setCategory] = useState([])

    useEffect(() => {


        getCategory()

    }, [])

    const getCategory = () => {
        Axios.post('/api/category/getCategory')
            .then(response => {
                if (response.data.success) {
                        setCategory(response.data.category)
                } else {
                    alert('Failed to fectch product datas')
                }
            });
    }

    const deleteCategory = (id) => {
        console.log(id)
        Axios.delete("/api/category/delete_by_id/"+id)
    }


    const columns = [
        {
            dataField: "_id" , text: "ID"
        },
        {
            dataField: "title" , text: "Название"
        },
        {
            header: "delete and edit",
            formatter: (cellContent, row) => {
              return (
                  <div>
                    <button className="btn" onClick={() => {
                        deleteCategory(row._id);
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
                <div className="col-3 col-lg-3 col-md-4 col-sm-3">
                    <DashboardNav />
                </div>
                <div className="col-8 col-lg-7 col-md-7 col-sm-7">
                <div >
            <div style={{ textAlign: 'center'}}>
               <h1>Все продукты</h1>
            </div>

                <BootstrapTable
                classes="text-break"
                keyField="title"
                data={Category}
                columns={columns}
                />

            </div>
        </div>
    </div>

    )
}

export default CategoryGet
