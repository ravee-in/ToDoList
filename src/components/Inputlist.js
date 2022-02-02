import React from 'react';

function Inputlist(props) {
    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.data}
        <button className="btn btn-danger"  onClick={() => {props.onSelect(props.id)}} type="button"><i className="bi bi-x"></i></button>
      </li>   
          )
}

export default Inputlist;
