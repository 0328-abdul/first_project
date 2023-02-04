import React from 'react'

function Alerts(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
            <div>
                {props.alert.msg}
            </div>
        </div>
    )
}

export default Alerts
