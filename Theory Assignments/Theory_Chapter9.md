**1. When and why do we need lazy()?**

In large scale applications, it is not efficient to bundle all of the components in one bundle. In such case, we can create multiple bundles and load them only when user needs it. This concept is known as Chunking / Code Splitting / Dynamic bundling / Lazy loading/ On demand loading / Dynamic Import.

In order to import the components lazily, lazy() function is used which comes from "react" library.

```
import {lazy} from "react";
const Instamart = lazy(() => import("./components/Instamart"));

```

**2. What is Suspense?**

Suspense is a feature which helps you during lazy loading and let you take actions while the component takes time to render

**3. Why do we get the Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.** &&

**4. When and why do need Suspense**

When we dynamically import the component for the first time, react does not get code to render the component as it is not bundled and loaded in the browser yet. In such situation, react will suspend the render of the component and the above error is shown.

To handle this situation <Suspense></Suspense> is used

We can pass fallback as props to Suspense to show something on the screen untill the code is loaded.

```
import { Suspense } from "react";

<Suspense fallback = {<Shimmer/>}>

```

**5. Advantages and Disadvantages of code splitting?**

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
