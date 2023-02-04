import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
    return (
        <div className="card-footer text-center" style={{ marginTop: "6.5rem" }}>
            <small className={props.mode === 'light' ? 'text-muted' : 'text-light'}><b>Made with ❤️ by Abdul Aleem</b></small>
        </div>
    )
}
