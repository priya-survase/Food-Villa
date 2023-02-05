**1. What is a Microservice?**

When we have to build a big React application, there are many react projects running behind the scenes. When we have different projects for everything, for example, UI, Bcakend API, notifications, logs , authentications, These projects are called microservices.

**2. What is monolith architecture?**

The architecture where all the things are in one project. for ex, previously in Java Apps, apis, SMS, UI everything used to be in one project. Such architecture is called monolith architecture.

**3. What is the difference between monolith and microservice?**

In monolith architecture, even for a small change we have to build the whole project. In microservices each department is independent of each other(separation of concerns) and is easier to test.

Unlike monolith architecture, we can use different tech stacks for every project

**4. Why do we need useEffect Hook?**

UseEffect hook is used when we need to call some function after initial rendering is done, or whenever we have to perform some function after a specific dependency change.

**5. What is optional chaining?**

?. is known as optional chaining operator. It is used to check whether the value on left hand side of ?. exists or not. If theis value doesn't exist, it will return undefined instead of showing the error and continue with further execution of code.

**6. What is Shimmer UI?**

The skeleton like structure shown when components in UI are not loaded is called shimmer UI.

**7. What is the difference between JS expression and JS statement?**

A JS expression is a piece of code which produces a value. ex (3+4), (119), (true && false) Statements are pieces of code that get executed and doesn't produce any value. ex if..else statement

**8. What is conditional rendering? Explain with a code as example**

When we want to render a component based on some condition it is knwon as conditional rendering.

```
{
 isLoggedIn == "true" ? (
<button onClick={() => setIsLoggedIn("false")}>Logout</button>
) : (
<button onClick={() => setIsLoggedIn("true")}>LogIn</button>
)
}
```

**9. What is CORS?**

**10. What is async and await?**

**11. What is the use of < const json = await data.json(); > in getRestaurants()?**
