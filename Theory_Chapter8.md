**1. How do you create nested routes react-router-dom configuration?**

Nested Routes can be created by addind children property for the children in route configuration array.

The path specified must be relevant path. i.e. path:"{path}" for "/parentpath/{path}"

These children can be rendered throught {<Outlet/>} component which is imported from react-router-dom.

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile name={"Priya"} xyz={"abc"} />,
          },
        ],
      },
    ]
    }])
```

**2. What is the order of lifecycle method calls in class based components?**

The order of lifecycle methods is
constructor() --> render() --> componentDidMount() --> componentDidUpdate()

**3. Why do we use componentDidMount?**

Whenever we have to perform some action after initial render like API call, we can use componentDidMount. This method is called once after initial render.

**4. Why do we use componentWillUnmount?**

componentWillUnmount method removes all the components from the DOM and can be used to perform cleanup operations while leaving the page.

**5. Why so we use super(props) in constructor?**

super() method calls the parent class's constructor.

By calling super(props), you are calling the constructor of React.Component. When you pass props to super, the props get assigned to 'this'. [Read More](https://dev.to/voralagas/super-props-in-react-5h7i#:~:text=By%20calling%20super%20%28props%29%2C%20you%20are%20calling%20the,to%20super%2C%20the%20props%20get%20assigned%20to%20this.)

**6. Why can't we have the callback function of javascript as async?**

The first argument of the useEffect should be a function which returns nothing(undefined) or should return a function which performs cleanup actions. If we use async callback function it will return a promise which is not expected. [Read more](https://devtrium.com/posts/async-functions-useeffect).

**7. Read about createHashRouter, createMemoryRouter**
