import React from 'react'
import Button from './Button'
import Text from "./Text";
import Checkbox from "./Checkbox";

const ListTask = ({item, onClick, onChange}) => {
  return (
    <div className="list-task">
      <Checkbox checked={item} checkClass="checkbox-btn" onChange={onChange} />
      <Text value={item.title} />
      <Button btnText="DELETE" textClass='delete-btn' onClick={onClick}></Button>
    </div>
  )
}

export default ListTask
