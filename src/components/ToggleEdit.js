import React from 'react'
import withToggle from '../HOC'

const ToggleEdit = ({toggle, toggleStatus, title}) => {
  return (
    <div>
        {toggleStatus ? <input value={title} /> : <p>{title}</p> }

        <button onClick={toggle}>
            {toggleStatus ? 'Cancel' : "Edit"}
        </button>
    </div>
  )
}

export default withToggle(ToggleEdit)