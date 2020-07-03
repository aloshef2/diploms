import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';



function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <p>
            <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value.value)}
                type="checkbox"
                checked={Checked.indexOf(value.value) === -1 ? false : true}
            />
            <span className="pl-2">{value.label}</span>
        </React.Fragment>
        </p>
        
    ))

    return (
        <ul>
            {renderCheckboxLists()}
        </ul>
    )
}

export default CheckBox
