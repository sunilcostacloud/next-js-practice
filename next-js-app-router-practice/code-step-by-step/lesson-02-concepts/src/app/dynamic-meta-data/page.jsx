import React from 'react'

const DynamicMetaData = () => {
    return (
        <div>DynamicMetaData</div>
    )
}

export default DynamicMetaData

export function generateMetadata() {
    return {
        title: "Dynamic Meta Data",
        description: "Dynamic MetaData description"
    }
}