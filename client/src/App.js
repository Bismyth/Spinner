import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";

const App = () => {
    const { data, isLoading } = useQuery("test", async () => {
        var config = {
            url: `/api/test`,
            method: "get",
        };
        const { data } = await axios(config);
        return data;
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {!isLoading ? <p>{data.msg}</p> : null}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
