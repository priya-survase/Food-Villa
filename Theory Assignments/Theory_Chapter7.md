**1. What are various ways to add images into our app. Explain with code as example.**

1st way : We can add image url as src in the img tag.
`<img src="https://yourimageurl" />`

2nd way: You can keep the images in assets or img folder and then import it wherever required.
ex. If you have Logo.png in your img folder, you have to default import it.

`import Logo from "./img/Logo.png"\n<img src={Logo}/>`

**2. What would we get if we do console.log(useState());?**

By doing console.log(useState()); we will get an Array of two elements where the first element is undefined and the second element is a function. The first element corresponds to the local state variable name and the function in second element is used to update the local state variable.

**3. How will useEffect() behave if we dont add a dependency array?**

If we dont add a dependency array, the useEffect will be called after each render.

If we keep an empty dependency array, the useEffect will be called only once after initial render.

**4. What is SPA?**

SPA stands for Single Page application. In a SPA when we have navigate to other links in page (ex, about page) it doesn't have to make network call/reload the whole new page to the fetch the relevant data. The Page will not be reloaded, instead it will keep getting the content and rewrite the DOM.

**5. What is the difference between client side routing and server side routing?**

In Server side routing all the pages are coming from server on page reload.

In client side routing, all our components reside on client side, hence instead of page reload, SPA gets the relevant content and the DOM is rewritten.
