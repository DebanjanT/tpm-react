/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { MenuItem } from "primereact/menuitem";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";
import logo from "../assets/tpmlogo.png";
import { useRef } from "react";
import { Divider } from "primereact/divider";

export default function Navbar() {
  const op = useRef<OverlayPanel>(null);

  const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2 flex-shrink-0">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
    },

    {
      label: "Transit Pass ",
      icon: "pi pi-search",
      items: [
        {
          label: "Add TP",
          icon: "pi pi-plus",
          template: itemRenderer,
        },
        {
          label: "View All",
          icon: "pi pi-list",

          template: itemRenderer,
        },
        {
          label: "Add Transaction",
          icon: "pi pi-pencil",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Search",
          icon: "pi pi-search",
          items: [
            {
              label: "By ID",
              icon: "pi pi-search",

              template: itemRenderer,
            },
            {
              label: "By Items",
              icon: "pi pi-search",

              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      //@ts-expect-error - badge is available in MenuItem

      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search TP..."
        type="text"
        className="w-8rem sm:w-auto"
      />
      <div>
        <Avatar
          image="https://randomuser.me/api/portraits/men/75.jpg"
          shape="circle"
          size="large"
          style={{ cursor: "pointer" }}
          onClick={(e) => op.current?.toggle(e)}
        />

        <OverlayPanel ref={op} className="p-3">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className="hover:underline hover:text-primary-500 cursor-pointer">
              Profile
            </li>
            <Divider />
            <li className="hover:underline hover:text-primary-500 cursor-pointer">
              Settings
            </li>
            <Divider />
            <li className="hover:underline hover:text-primary-500 cursor-pointer">
              Logout
            </li>
          </ul>
        </OverlayPanel>
      </div>
    </div>
  );

  return (
    <Menubar
      model={items}
      start={start}
      end={end}
      className="light-grad-bg shadow-1"
    />
  );
}
