import React, { useState, useEffect } from 'react'
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;


function RadioBoxCategory(props) {


    const [Value, setValue] = useState('');


    console.log(props.value.category)


    const renderRadioBox = () => (
        props.list &&  props.list.map((value) => (
            <h2><Radio key={value.value} value={`${value.value}`}>{value.label}</Radio></h2>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <ul>
            <Radio.Group onChange={handleChange}  value={Value}>

                {renderRadioBox()}

            </Radio.Group>
        </ul>
    )
}

export default RadioBoxCategory
