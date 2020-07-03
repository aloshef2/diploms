import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function GetBrendPage(props) {



    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
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
            dataField: "title" , text: "Название"
        },
        {
            dataField: "price" , text: "Цена",
        },
        {
            dataField: "brend" , text: "Производитель",
        },
        {
            dataField: "category" , text: "Категория",
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
               <h1>Все продукты</h1>
            </div>

                <BootstrapTable
                classes="text-break"
                keyField="title"
                pagination={paginationFactory()}
                data={Products}
                columns={columns}
                />

            </div>
        </div>
    </div>

    )
}

export default GetBrendPage
