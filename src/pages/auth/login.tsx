import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { BASE_SERVER_URL } from "../../config";
import tpmlogo from "../../assets/tpmlogo.png";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import Client from "../../utils/http";
import { Toast } from "primereact/toast";
import { useLoggedInStore } from "../../store/loggedInStore";
import { OverlayPanel } from "primereact/overlaypanel";

function Login() {
  const toast = useRef<Toast>(null);
  const confirmLogoutPopup = useRef<OverlayPanel>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // store
  const setUserLogin = useLoggedInStore((state) => state.setUser);
  const user = useLoggedInStore((state) => state.user);

  const http = new Client({
    baseUrl: BASE_SERVER_URL,
  });

  const login = async () => {
    console.log(username, password);
    if (!username || !password) {
      toast.current?.show({
        severity: "error",
        summary: "Incomplete Data",
        detail: "Please enter username and password",
        life: 3000,
      });

      return;
    }
    try {
      setLoading(true);
      const response = await http.login(username, password);

      toast.current?.show({
        severity: "success",
        summary: "Login Success",
        detail: "Welcome to Transit Pass Manager",
        life: 3000,
      });
      console.log(response);
      setLoading(false);
      setUserLogin({
        email: response.user.email,
        username: response.user.username,
        token: response.token,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.current?.show({
        severity: "error",
        summary: "Login Failed",
        detail: error.message,
        life: 3000,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-column gap-2  mx-auto justify-content-center align-items-end lg:pr-3 background-wallpaper-local">
        <div className="light-grad-bg p-3 md:p-6 shadow-3 w-full sm:w-10 md:w-8 lg:w-6 overflow-scroll hide-scrollbar md:border-round-2xl">
          <div>
            <img src={tpmlogo} className="w-3" />

            <Divider />
          </div>

          {user?.token ? (
            <div className="flex flex-column md:flex-row justify-content-between align-items-center w-full gap-3">
              <p className="flex-shrink-0">
                You are already logged in as{" "}
                <span className="font-semibold font-italic">{user.email}</span>
              </p>
              <Button
                label="Log Out"
                icon="pi pi-sign-out"
                severity="danger"
                // onClick={() => {
                //   const confirm = window.confirm(
                //     "Are you sure you want to logout ?"
                //   );
                //   if (confirm) {
                //     useLoggedInStore.getState().logout();
                //   }
                // }}
                onClick={(e) => confirmLogoutPopup.current?.toggle(e)}
              ></Button>
              <OverlayPanel
                ref={confirmLogoutPopup}
                className="bg-gray-200 border-round-2xl"
              >
                <p>Are you sure you want to logout ?</p>
                <div className="flex flex-column justify-content-end md:flex-row gap-1 align-items-center">
                  <Button
                    onClick={(e) => confirmLogoutPopup.current?.toggle(e)}
                    className="w-full"
                    rounded
                    text
                    raised
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => useLoggedInStore.getState().logout()}
                    className="w-full"
                    rounded
                    severity="danger"
                  >
                    Confirm
                  </Button>
                </div>
              </OverlayPanel>
            </div>
          ) : (
            <>
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
                loading={loading}
                disabled={loading}
                onClick={login}
                icon="pi pi-sign-in"
                className="p-button-raised p-button w-full my-3 py-3 shadow-none"
              ></Button>
            </>
          )}

          <p className="text-center">
            <small>
              <a
                href="  
            https://www.primefaces.org/layouts/sapphire-react"
                className="text-primary-500 hover:text-primary-800 no-underline hover:underline"
              >
                Transit Pass Manager
              </a>{" "}
              - A Dibyendu Tewary Open Source Project{" "}
            </small>
          </p>
          <p className="digital-india-text text-center font-semibold">
            <i className="pi pi-heart"></i> A little contribution to
            <span className=""> Digital India !</span>
          </p>
        </div>
      </div>

      <Toast ref={toast} />
    </>
  );
}

export default Login;
