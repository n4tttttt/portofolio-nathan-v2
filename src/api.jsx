import {Button, InputNumber, Typography} from 'antd'
import { useState } from 'react'
import axios from 'axios';
const {Title, Paragraph} = Typography
//const URL = 'https://jsonplaceholder.typicode.com/users'
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    timeout: 60000, 
    headers: {
        'Content-Type': 'application/json'
    }
});
export default function api(){

const [id, setId] = useState(1)
const [loading, setLoading] = useState(false)

async function getData() {
  setLoading(true)
  try {
    const response = await apiClient.get(`/${id}`);
    setLoading(false)
    const status = response.status;
    const messages = {
            200: 'OK',
            201: 'Created',
            202: 'Accepted',
            204: 'No Content',
            205: 'Reset Content',
            206: 'Partial Content',

        };
        const message = messages[status] || 'unknown status';
    alert(`HTTP ${response.status}: ${message}\n${JSON.stringify(response.data, null, 2)}`);
    
  } catch (error) {
    setLoading(false)
    if (error.response) {
        const status = error.response.status;
        const errorMessages = {
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Too Early",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            510: "Not Extended",
            511: "Network Authentication Required",
        };
      const message = errorMessages[status] || 'Unknown Server Error';
      alert(`HTTP ${status}: ${message}`);
    } else if (error.code === "ECONNABORTED") {
      alert(`HTTP 408: Request Timeout`);
    }
  }
}

    return (<>
    <div style={{minHeight: '85vh', margin: '0 10px'}}>
        <Title>HTTP Requests with Axios</Title>
        <InputNumber value={id} onChange={(value) => setId(value || 0)}/>
        <Button type='primary' onClick={getData}>fetch data</Button><br/>
        {loading && <Paragraph>Fetching data, Please wait until the server responds...</Paragraph>}
        </div>
    </>)
}