import { useCallback } from "react";

export const useHttp = () => {
    const request = async(url, method = "GET", body = null, headers = {"Content-type": "application/json"}) => {
        try{
            const response = await fetch(url, {method, body, headers})
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data;
        }
        catch(e) {
            throw new Error(e); 
        }
    }
    return {request};
}