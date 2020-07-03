import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ChartPie from "./Component/CghartPie";
import ChartLine from "./Component/ChartLine";




function GetBrendPage(props) {

  const [Brend, setBrend] = useState([]);
  const [Products, setProducts] = useState([])
  const [Users, setUsers] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)

  
  console.log(Products)

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
  }

      getBrend();
      getProducts(variables);
      getUsers()

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

const columnsUsers = [
  {
      dataField: "email" , text: "email"
  },
  {
      dataField: "firstName" , text: "Имя"
  },
  {
      dataField: "lastName" , text: "Фамилия"
  },
  
]

const columnsProduct = [
  {
      dataField: "title" , text: "Название"
  },
  {
      dataField: "price" , text: "Цена",
  },
  {
      dataField: "brend" , text: "Производитель",
  }
  
]  


    return (
    
    <div class="main-content-wrapper d-flex clearfix">
        <DashboardNav />
        <div class="products-catagories-area clearfix p-5 w-100">
            <div class=" ">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Главная страница</h1>
                    <div></div>
                </div>
                <div class="row">

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Количество пользователей</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{Users.length}</div>
                                </div>
                                <div class="col-auto">
                                <i class="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Количество партнеров</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{Brend.length}</div>
                                </div>
                                <div class="col-auto">
                                <i class="fas fa-address-book fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Количество роботов в магазине</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{Products.length}</div>
                                </div>
                                <div class="col-auto">
                                <i class="fas fa-box fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>


            <div class="row w-100">

            <div class="col-7 col-md-12 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">График посещений</h6>
                  
                </div>
                <div class="card-body">
                  <div class="chart-area" style={{height: "400px"}}>
                    <ChartLine />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-5 col-md-12 col-lg-5">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Продажи</h6>
                  
                </div>
                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2">
                    <ChartPie />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary"><a href="/dashboard/product/get">Товар на складе</a></h6>
                  
                </div>
                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2" style={{height: "450px", overflowX: "hidden", overflowY: "scroll"}}>
                  <BootstrapTable
                    classes="text-break"
                    keyField="title"
                    data={Products}
                    columns={columnsProduct}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-6">
            <div class="card shadow mb-4" >
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary"><a href="/dashboard/users/getUsers">Пользователи</a></h6>
                  
                </div>
                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2" style={{height: "450px", overflowX: "hidden", overflowY: "scroll"}}>
                  <BootstrapTable
                    classes="text-break"
                    keyField="title"
                    data={Users}
                    columns={columnsUsers}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default GetBrendPage
