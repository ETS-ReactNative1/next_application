# next_application

# NEXT JS

React framework for production

React apps:

- Not quite possible to build a full feature rich ap ready to be deployed for prod
- React is a library for building user interfaces
- You have to make decisions on other features of the app like routing, styling, auth

Next js

- A packege taht uses react for building user interfaces
- Loaded with a lot more feautres that enable you to buld full fledged prod ready app like routing, styling, auth
- react provides everything for you there's no need to install additional packages
- conventions need to be followed

Why?

- Simplifies the process of building a react app for prod
- File based routing
- Pre-rendenring
- API routes -> You can create APIs wwith NextJS
- Fullstack framework
- Support for CSS modules
- Authentication
- Dev and prod build system

Pre-requisites:

- HTML CSS and Javascript Fundamentals
- ES6 + Features
- React Fundamentals

Setting up environment:

- nodejs.org
- code.visualstudio.com
- To create a project wwe would need to execute:
  ```
  npx create-next-app [project name]
  ```
- To start the project
  ```
  npm run dev
  ```

Project structure:

- package.json : contains the dependencies and scripts for the project
- package-lock.json: auto-generated npm file
- next.cnfig.js : nextjs configuration file
- .eslint: to highlight errors and warns
- .next: generated by scripts
- node_modules: dependencies
- styles: contains the styles of the project
- public: holds the public resources for the app images, icons, etc
- pages: responsible for routing features of the app
- pages/index.js: gets served in the browser when we visit localhost in 3000
- pages/\_app.js: we can define the layout for our app
- pages/api: to create apis

Flow control:

- When running npm run dev , the execution is tranfer to pages/\_app.js which contains my app component
- It receives a Component and pageProps which are then retuned as part of the jsx
- The component will refers to the pages/index.js

Routing section:

- Routing in a React app
  - install a third party
  - route.js file to configue the routes
  - For each route , create a component file and configure the new route with a path
- Routing next.js app
  - File-system based routing mechanism
  - when a file is added to the pages folder it automatically becomes available as a route
  - mixing and matching file names with a nested folder structure, it is possible to pretty much define the most common routing patterns
- Routing pages

  - pages folder is responsible for routing
  - scenario 1
    - home page : localhost:3000
    - create a file called index.js in pages
    - create a functional component
  - scenario 2

    - localhost:3000/about
    - localhost:3000/profile
    - create a file called about.js in pages with a functional component
    - create a file called profile.js in pages with a functional component

  - scenario 3: Nested routes

    - localhost:3000/blog
    - localhost:3000/blog/first
    - localhost:3000/blog/second
    - create a folder called blog which will contain two files with their functional component. The blog/ will be pages/blog/index.js

  - scenario 4: Dynamic routes

    - localhost:3000/product/ refer to a product list
    - localhost:3000/product/:productId refers to different product
    - create a file [productId].js in pages/product/
    - recover the query param
      ```
      import { useRouter } from "next/router";
      const { query: { productId }} = useRouter();
      ```
    - if the query param match with another component then the other component will be rendered

  - scenario 5: Nested dynamic routes

    - localhost:3000/product/:productId/review/:reviewId
    - create a folder called [productId]
    - create an index.js for [productId] folder
    - create a new folder for review
    - create a new file called [reviewId].js inside the review folder

  - scenario 6 : catch all routes
    - localhost:3000/docs/fature1/concept1/example1
    - localhost:3000/docs/fature1/concept1/example2
    - Sometimes we have a lot of params maybe infinite, so for that we would need to create multiple folders/files for each param
    - We can create a file called [...params].js in order to get all the params
      ```
      import { useRouter } from "next/router";
      const { query: { params = [] }} = useRouter();
      ```
    - Also we can add other brackets if we want to include the root of the folder as part of the [...params].js => [[...params]].js

- Navigation

  - we can navigate programmatically
  - from home to blog

  ```
      import React from "react";
      import Link from "next/link";

      const Home = () => {
      return (
          <>
          <h1>Home page</h1>
          <Link href="/blog">
              <a>Blog</a>
          </Link>
          </>
      );
      };

      export default Home;
  ```
  
