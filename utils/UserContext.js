import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Priya Survase",
    email: "survasepriya1999@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
