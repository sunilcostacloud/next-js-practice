"use client"
import Script from 'next/script';

const LoadExternalScripts = () => {
    return (
        <div>
            <Script
                src='/location.jsx'
                onLoad={() => {
                    console.log("file loaded")
                }}
            />
            <h1>Load External Scripts</h1>
        </div>
    )
}

export default LoadExternalScripts