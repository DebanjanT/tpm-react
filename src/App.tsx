import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { COMAPNY } from "./config";
import tpmlogo from "./assets/tpmlogo.png";
import { Chip } from "primereact/chip";
import { Tooltip } from "primereact/tooltip";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-column gap-2  mx-auto justify-content-center align-items-end lg:pr-3 background-wallpaper-local">
        <div className="bg-gray-100 p-3 md:p-6 shadow-3 w-full sm:w-10 md:w-8 lg:w-6">
          <div>
            <img src={tpmlogo} className="w-3" />

            <Divider />
            <div className="flex justify-content-between align-items-center">
              <div className="flex justify-content-start align-items-center gap-2 text-md text-gray-500">
                {" "}
                <span>Last Logged In: </span>
                <Chip
                  className="pl-0 pr-3"
                  template={() => (
                    <>
                      <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">
                        {COMAPNY[0] || "N/A"}
                      </span>
                      <span className="ml-2 font-medium text-sm">
                        {COMAPNY}
                      </span>
                      <i
                        data-pr-tooltip="Delete last logged in from browser history ?"
                        className="delete-last-login-history ml-2 pi pi-times bg-red-100 text-red-800 p-1 border-round-md"
                      ></i>
                    </>
                  )}
                />
              </div>
              <Tooltip target=".delete-last-login-history" position="bottom" />
            </div>
          </div>
          <Divider />

          <div className="flex flex-column gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-user"></InputIcon>

              <InputText
                id="lulli"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full "
              />
            </IconField>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-key"></InputIcon>
              <InputText
                id="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full "
              />
            </IconField>

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
            className="p-button-raised p-button w-full my-3 py-3"
          ></Button>

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
      </div>
    </>
  );
}

export default App;
