**1. What is prop drilling ?**

When props are passed from parent to child components down multiple levels, it is know as props drilling. It is okay if you are passing props down 2-3 levels but not more than that. It makes the code cluttered and always re-renders all the components which are passing data.

**2. What is lifting the state up??**
There are some times when several components need to use same state. To make this possible we can keep the state variables in the closest common ancestor. This is known as lifting the state up.

**3. What is Context Provider and context Consumer?**

Provider react component of each context object allows us to make changes to context data by passing props. This props value overrides the default context value.

Context consumer is the react component using which we can access the context data changed by context provider.

**4. If you dont provide value to the provider does it take the default value?**
