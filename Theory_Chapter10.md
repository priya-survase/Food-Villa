**1. Explain all the ways of writing CSS.**

i. Normal css, where all the css is written in separate file.

ii. SCSS is modern way of writing CSS. This SCSS is later converted into simple CSS while loading the page.

iii. Inline CSS - we pass object or object variable in the style attribute of the components.

`<button style={{backgroundColor:blue}}>Submit</button>`

This saves time but not a good way of writing CSS as this is not reusable, is repetitive and difficult to maintain. Processing inline CSS is very heavy for browsers.

iv. Using Libraries - Libraries like material UI / Ant Design / Chakra UI. These are component libraries which are already styled.

Pros of libraries - reusable CSS, It saves time, gives us consistent UI and takes care of the responsiveness of the page

Cons - Bundle size increases, less flexibility and control over code as customizing components is very difficult.

v. Styled Components - `styled-components.com` It is like CSS in JavaSCript.

vi. Frameworks/Tailwind CSS -Pros - CSS can be written in same file, bundle size is less as it offers minimal CSS, very flexible UI, easy to customize, easy to debug, no duplicate CSS, less code, Faster development as you dont have to switch between files to write CSS.

Cons - Every new developer wont know about this framework , less used.

**2. How do we configure tailwind?**

1. By adding CDN Links

`<script src="https://cdn.tailwindcss.com"></script>`

2. By installing npm package for tailwind

step 1.` npm install -D tailwindcss postcss`

step 2. `npx tailwindcss init `

step 3. Add the paths to all of your template files in your tailwind.config.js file.

step 4. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

step 5. Create a .postcssrc file in your project root, and enable the tailwindcss plugin.

**3. In the tailwind.config.js, what does all the keys mean(content, theme, plugins )?**

i. content - The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.

```
content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
```

ii. The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

iii. let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.

**4. Why do we have.postcssrc file?**

Adding .postcssrc file tells our bundler that we are using tailwind css which needs to converted to normal CSS while bundling.
