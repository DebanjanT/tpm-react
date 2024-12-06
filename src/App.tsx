import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { COMAPNY } from "./config";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-column gap-2  mx-auto justify-content-center align-items-center mt-5">
        <div className="bg-gray-50 p-3 md:p-6 shadow-3 w-full sm:w-10 md:w-8 lg:w-6">
          <div>
            <h2 className="text-primary-500 text-3xl">T.P. MANAGER</h2>
            <p className="text-base  "> {COMAPNY}</p>
          </div>
          <Divider />

          <div className="flex flex-column gap-2">
            <InputText
              id="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-inputtext-lg"
            />

            <InputText
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-inputtext-lg"
            />
            <div className="flex justify-content-end">
              <a
                href="#forgot"
                className="text-primary-500 hover:text-primary-800"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <Button
            label="Login"
            onClick={() =>
              alert(`Username: ${username}, Password: ${password}`)
            }
            className="p-button-raised p-button w-full my-3 py-3"
          ></Button>
        </div>
        <p>
          <small>
            <a
              href="  
            https://www.primefaces.org/layouts/sapphire-react"
              className="text-primary-500 hover:text-primary-800"
            >
              Transit Pass Manager
            </a>{" "}
            - A Dibyendu Tewary Project
          </small>
        </p>
      </div>
    </>
  );
}

export default App;
