import React from 'react'

function RenderAssets(props) {
    const {assets} = props
    return (
        <div>
            {JSON.stringify(assets)}
        </div>
    )
}

export default RenderAssets
