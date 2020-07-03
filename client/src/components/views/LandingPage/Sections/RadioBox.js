import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;


function RadioBox(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        props.list &&  props.list.map((value) => (
            <h2><Radio key={value._id} value={`${value._id}`}>{value.name}</Radio></h2>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <ul>
            <Radio.Group onChange={handleChange} value={Value}>

                {renderRadioBox()}

            </Radio.Group>
        </ul>
    )
}

export default RadioBox
