import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"4vh"}}>
        {props.alert &&  <div>
            
           <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                <div>
                   <strong>{props.alert.message}</strong> 
                </div>
            </div>
        </div>}
        </div>
    )
}
