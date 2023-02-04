import React from 'react'

function Alerts(props) {
    return (
        <div className="" style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                <div>
                    {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}

export default Alerts
