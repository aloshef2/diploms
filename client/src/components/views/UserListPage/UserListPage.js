import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function UserListPage(props) {



    const [Users, setUsers] = useState([])

    useEffect(() => {


        getUsers()

    }, [])

    console.log(Users);

    const getUsers = () => {
        Axios.get('/api/users/getUsers')
            .then(response => {
                if (response.data.success) {
                    setUsers([...Users, ...response.data.users])
                } else {
                    alert('Failed to fectch product datas')
                }
            });
    }

    const deleteProduct = async (id) => {
        Axios.delete("/api/product/delete_by_id/"+id)
    }


    const columns = [
        {
            dataField: "_id" , text: "ID"
        },
        {
            dataField: "email" , text: "email"
        },
        {
            dataField: "firstName" , text: "Имя"
        },
        {
            dataField: "lastName" , text: "Фамилия"
        },
        {
            dataField: "phone" , text: "Телефон"
        },
        {
            header: "delete and edit",
            formatter: (cellContent, row) => {
              return (
                  <div>
                    <button className="btn" onClick={() => {
                        deleteProduct(row._id);
                    }}>
                      Удалить
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
               <h1>Список пользователей</h1>
            </div>

                <BootstrapTable
                classes="text-break"
                keyField="title"
                pagination={paginationFactory()}
                data={Users}
                columns={columns}
                />

            </div>
        </div>
    </div>

    )
}

export default UserListPage
