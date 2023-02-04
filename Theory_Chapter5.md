**1. What is the difference between named export, default export and \* as export?**

We can export only one component by default export from components file.
To import a export default Header component, we use **import Header from "./Header.js"**

We can export multiple components from a single file using named export.
export const Header()=>{}, To import this we use **import { Header } from "./Header.js"**. To import multiple components **import { Header, Title } from "./Header.js"**

When we use \* as export, all the components in the files are exported in a single object.
Let's say we our header.js file has two components Title and Header. If we import it as **import \* as XYZ from "./Header.js"**, we can access individual components as if they are object properties. i.e <XYZ.Title/> and <XYZ.Header/>

**2. What is the importance of config.js file?**

Config.js file is used to store all the hardcoded values used in the application.

**3. What are React Hooks?**

React Hooks are javascript functions. Each Hook performs a specific function.

**4. Why do we need a useState Hook?**

useState() Hook is used to create local state variables.

React cannot track normal JS variables. If these normal variables are updated, react wont know where it is updated and hence this value will not be updated in DOM. So, in order to keep variables and DOM in sync with each other we need local state variables which can be tracked by React.
