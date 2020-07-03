import React, { useEffect, useState } from 'react'
import { Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';
import DashboardNav from '../Dashboard/Dashboard';
import Select from 'react-select';

const { Title } = Typography;
const { TextArea } = Input;


function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [Category, setCategory] = useState([]);
    const [Brend, setBrend] = useState([]);
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [BrendValue, setBrendValue] = useState("");
    const [CategoryValue, setCategoryValue] = useState("");
    {/**const [Information, setInformationValue] = useState([]);*/}
    const [InformationValue, setInfValue] = useState([]);
    const [Images, setImages] = useState([]);
    
    useEffect( () => {
        getCategory();
        getBrend();
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


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onInformationChange = (event) => {
        setInfValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onBrendSelectChange = (event) => {
        setBrendValue(event.value);
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.value);
        {/**
         const item = Category.map(item => {
            if(item.value == event.value){
                setInformationValue(item.informations);
            }
        })
        */}
       
    }

    const onInformationValue = (event) => {
        setInfValue(event.value)
    }

    console.log(InformationValue)

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    {/**const listInformations = Information.map((inf, index) => {
        return (
            <div>
                <lable >{inf.label}</lable>
                <input type="text" id={inf.value} onChange={onInformationValue} />
            </div>
        )
    })*/}
    

    const onSubmit = async (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !BrendValue || !CategoryValue || !PriceValue || !Images) {
            return alert('что не введено ')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            informations: InformationValue,
            price: PriceValue,
            brend: BrendValue,
            category: CategoryValue,
            images: Images
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert("Удачное добавление");
                    props.history.push('/dashboard/product/get')
                } else {
                    alert("Неудачное добавление в бд");
                }
            });

    }

    return (
            <div className="row w-100">
                <div className="col-3 col-lg-3 col-md-4 col-sm-3">
                    <DashboardNav />
                </div>
                <div className="col-8 col-xl-5 col-md-5 col-sm-8 col-xl-3">
                <div >
            <div style={{ textAlign: 'center'}} className="p-5">
                <Title level={2}>Добавить продукт</Title>
            </div>


            <Form onSubmit={onSubmit} >

                <FileUpload refreshFunction={updateImages} />
                <div className="pt-4">
                <label>Название</label>
                <Input
                     onChange={onTitleChange}
                     value={TitleValue}
                />
                </div>

                <div className="pt-4">
                <label>Описание</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                </div>

                <div className="pt-4">
                <label>Характеристики</label>
                <TextArea
                    onChange={onInformationChange}
                    value={InformationValue}
                />
                </div>

                <div className="pt-4">
                <label>Цена руб</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                </div>

                <div className="pt-4">
                <label>Производитель</label>
                <Select
                    onChange={onBrendSelectChange}
                    options={Brend}
                />
                </div>

                <div className="pt-4">
                <label>Категория товара</label>
                <Select
                    onChange={onCategorySelectChange}
                    options={Category}
                />
                </div>


                <div className="pt-4">
                <Button
                    onClick={onSubmit}
                >
                    Создать
                </Button>
                </div>

                

            </Form>

        </div>
        </div>
    </div>
        
    )
}

export default UploadProductPage
