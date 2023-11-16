import { API_BASE_URL } from "@/config/constants";
import React from "react";

const EnvironmentVariables = () => {
    return (
        <div>
            <h1>Environment Variables</h1>
            {process.env.NODE_ENV === "development"
                ? <h1>development mode</h1>
                : <h1>production mode</h1>}
            {process.env.SERVER_PASSWORD}
            <br />
            {API_BASE_URL}

        </div>
    );
};

export default EnvironmentVariables;
