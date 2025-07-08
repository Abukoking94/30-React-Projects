export const menus = [
  {
    label: "Home",
    to: "/",
    key: "1",
  },
  {
    label: "Profile",
    to: "/profile",
    key: "2",

    children: [
      {
        label: "Details",
        to: "details",
        key: "3",

        children: [
          {
            label: "Location",
            to: "location",
            key: "4",

            children: [
              {
                label: "City",
                to: "city",
                key: "5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    key: "6",

    children: [
      {
        label: "Account",
        to: "account",
        key: "7",
      },
      {
        label: "Security",
        to: "security",
        key: "8",

        children: [
          {
            label: "Login",
            to: "login",
            key: "9",
          },
          {
            label: "Register",
            to: "register",
            key: "10",

            children: [
              {
                label: "Random data",
                to: "",
                key: "11",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
