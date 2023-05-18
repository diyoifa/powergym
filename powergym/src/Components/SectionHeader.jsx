import React from 'react'

const SectionHeader = ({icon, title, className, icon2}) => {
    return (
        <div className={`section__head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
            <span>{icon2}</span>

        </div>
    )
}

export default SectionHeader
