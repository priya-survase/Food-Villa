**1. Is JSX mandatory for React?**

No. Each JSX element is syntactic sugar for calling React.CreateElement(component, props, children.)So anything in JSX can be written by using plain JavaScript. [Read more](https://reactjs.org/docs/react-without-jsx.html).

**2. Is ES6 mandatory for React?**

No. [Read more](https://reactjs.org/docs/react-without-es6.html)

**3. {TitleComponent} vs {< TitleComponent/>} vs {< TitleComponent>< /TitleComponent>}**

{TitleComponent} - TitleComponent is a simple JavaScript variable for a JSX expression.

{<TitleComponent/>} - TitleComponent is a functional component used in another functional component.

{<TitleComponent></TitleComponent>} - Another way to write functional component i.e. TitleComponent

**4. How can I write comments in JSX?**

We can use normal comment /\* \*/ but wrapped in curly braces.
example - {/\*\_ A JSX comment \*/}

**5. What is <React.Fragment></React.Fragment> and <></> ?**

JSX can have only one parent/root element. If we dont want to div as root element to avoid redundancy, we can use <React.Fragment></React.Fragment>. React.Fragment is a component exported by React. It can be also written as empty tag <></> and used as root/parent element in JSX. You cannot pass any styles/attributes in this empty tag.

**6. What is Virtual DOM?**

Virtual DOM is a representation of actual DOM. (Tree like diagram of DOM). [Virtual DOM](https://reactjs.org/docs/faq-internals.html)

**7. What is Reconciliation in React?**

Reconciliation is an algorithm used by React to diff between trees and determine which part is updated and just re-render that part.[Reconciliation](https://reactjs.org/docs/reconciliation.html)

**8. What is React Fiber?**

React Fiber is the new reconciliation engine in React. Its main goal is to enable incremental rendering of virtual DOM.[React Fiber](https://github.com/acdlite/react-fiber-architecture).

**9. Why and when do we need keys in React?**

During reconciliation process, if an element has multiple children with same attribute(ex. all children are div) and one more child of same attribute is added then React will not understand which is the newly added child and also the order of the children cannot be determined. In this case everychild will be re-rendered. To avoid this we give keys to the elements to uniquely identify children. When unique keys are used, only the required new child is rendered.

**10. Can we use index as key in React?**

We can use index as keys in react but it is not recommended. WHY? because, key is the only elemnent which react uses to uniquely identify the DOM element. Suppose we push new items to the list or remove something from middle, React will still assume that the DOM component is same as before which is no longer true. [Read more](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/).

**11. What is props in React?**

Props is shorthand for properties. We can pass props to functional components in the similar way how we pass arguments in normal functions. When we pass props in functional components, react wraps all properties in a variable called 'props'. It can be any variable but 'props' is most commonly used.

**12. What is a Config Driven UI?**

When UI is driven by config/data sent by backend, it is known as config driven UI. We can keep dynamic frontend for each user based on location.
