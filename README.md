# next_application

# NEXT JS

React framework for production

React apps:

- Not quite possible to build a full feature rich app ready to be deployed for prod
- React is a library for building user interfaces
- You have to make decisions on other features of the app like routing, styling, auth

Next js

- A package that uses react for building user interfaces
- Loaded with a lot more feautures that enable you to build full fledged prod ready app like routing, styling, auth
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
          <Link href="/blog" replace>
              <a>Blog</a>
          </Link>
          </>
      );
      };

      export default Home;
  ```

- Programmatically navigation

  - If we have a ecommere or a submit button , we can navigate programmatically

  ```
  import { useRouter } from "next/router";

  const Home = () => {
    const router = useRouter();

    const handleClick = () => {
      console.log("Placing your order");
      router.push("/product");
      //router.replace("/product/1");
    };
  }
  ```

- Define a custom 404

  - if you nevigate to a url that doesnt exist then nextjs will render a 404
  - We can customize the 404 page
  - create a 404.js

- Pre - rendering

  - What is pre rendering and why
  - Types of pre-rendering
    - static generation
      - without data
      - with data
      - Incremental static generation
      - dYNAMIC PARAMETERS WHEN FETCHING DATA
    - Server side rendering
      - data fetching
    - Client-side data fetching
    - COmbining pre rendering with client side data fetching

- Pre rendering

  - comparing react app and next app
  - react demo
    - if we inspect the element we are going to see <div id="root"><img src=""><a>...</a></div>
    - but when we check the view source code then the page loads <div id="root"></div> we only see this tag
    - the information that is sent from the server is empty and it doesnt contain any data
  - next js demo
    - we can see the same tags that are seen through inspect and view source code

  Next js pre-renders every page in the app

  - pre-render : generate html for each page in advance instead of having it all done by client side javascript

  No pre-rendenring

  - initial load app is not rendered --- js loads ---> Hydration: React components are intialized and app becomes interactive

  Pre rendenring

  - pre rendered htmls is displayed --- js loads --> Hydration: React components are intialized and app becomes interactive

  - render HTML in advance with the necessary data for a page

Why pre-render?

- improves performance

  - in react app you need to wait for the javascript to be executed
  - maybe fetch data form external api and then render UI
  - there is a wait time for the user
  - the html is already generated and loads faster

- helps with SEO

  - if you are building a ecommerce o blog it is very important to index the content
  - with react app if the search enginer hits your page it only sees a div tag
  - with a pre-render the content is present in the source code which will help index that page

- How to pre-render?
  Next js supports two forms of prerendering

  - Static generation

    - A method of prerendering where HTML pages are generated at build time
    - The html wit all the data tat makes up the content of he we page are generated in advance whe you build your app
    - Recommended method to pre-render pages whenever possible
    - Can be built once , cached by CDN and served to the client almost instantly
    - ex: blog ecommerce, marketing pages and coumentation

    - How?

      - Next js by default prerender every page in our app
      - The HTML for every page will automatically be statically generated when build our app
      - Prod server - An optimized build is create once and you deploy that build. You dont make code changes on the go once it is deployed
        - in nextjs a page will be pre-rendered once when we run the build command
      - Dev server - we should be able to make change in our code and we want that code to immediately reflect in the browser

        - in next js the page is pre-rendered for every request you make

      - We dont have to be worried about static generation in dev mode

  - Static generation & data

    - Without data

      - build the app and generate html content - no need to fetch external data

    - With data

      - Pages that can only be generated after fetching external data at build time

        - build the app for production
        - fetches external data
        - The html can only be generated after fetching data

        ```
          const Prerender = ({ users = [] }) => {
            return (
              <>
                <h1>List of users</h1>
                {users.map((user) => (
                  <div key={user.id}>
                    {user.name} - {user.email}
                  </div>
                ))}
              </>
            );
          };
          export default Prerender;

          export async function getStaticProps() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            console.log({ data });
            return {
              props: {
                users,
              },
            };
          }
        ```

      - getStaticProps
        - pros
          - we were able to fetch data and inject it to the page through props
          - getStaticProps runs only on the server side
          - The function will never run client side
          - The code you write inside the getStaticProps wnt even be included in the JS bundle that is sent to the brwoser
          - You can write server-side code directly in getStaticProps
          - Accessing the file system usinf the fs module or querying a database cab be done inside getStaticProps
          - You also dont have to be worry about including api keys
        - cons
          - it is allowed only in apage and cannot be run from a regular component file
          - it is used only for prerendering and not client side data fetching
          - should return an object and contain a props key
          - get staticProps will run at build time

  - server side rendering

- Pages vs components

  - we would like to create components so we need to create a separated folder called components

- Inspecting static generation build
  - we should build our app for prod
    - run : npm run build
    - to serve we need to run: npm run start
- Link pre fetching

  - When a page with getStaticProps is pre-rendered at build time , in addition to the page HTML file Next js generates a JSON file holding the result of running getstatticprops
  - The JSON file will be used in client-side routing through next/link or next/router
  - CLient -side page transitions will not call getStaticProps as only the exported JSON is used
  - Any <Link /> component in the viewport will be prefetched by default (including the coressponding data) for pages using static generation this is why the load time is faster
  - But if you navigate through url you wont have this ability

- Summary Static generation

  - is a method of prerendering where html pages are generated at build time
  - with and without external data
  - export getStaticProps function for external data
  - HTML, Javascript and a JSON file are generated
  - if you navifate directly yo the route, the html is served.
  - If you navigate to the pae route from a different route, the page is created client side using the javascript and json prefetched from the server

- Master detail pattern

  - We have a master page and a details page that has the relevant details
  - When click on articles then it will navigate to the article content
  - we will have a dynamic parameter , so how we can mix static generation with a dynamic id
  - dynamic parameters

  ```
    export async function getStaticProps(context) {
      const { params } = context;
      const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
      const response = await fetch(url);
      const post = await response.json();
      console.log({ post, params, url });
      return {
        props: {
          post,
        },
      };
    }

    export async function getStaticPaths() {
      return {
        paths: [
          { params: { postId: "1" } },
          { params: { postId: "2" } },
          { params: { postId: "3" } },
        ],
        fallback: false,
      };
    }
  ```

  We would need to define every parameter in the getStaticPaths function

  So with this the html will be loaded in advance at build time and when we navigate through the next/link or next/route it is going to be prefetched before going to the page

  We can fetch the paths for getStatichPaths in order to avoid making individually

  ```
    export async function getStaticPaths() {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response = await fetch(url);
      const posts = await response.json();
      const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
      return {
        paths,
        fallback: false,
      };
    }
  ```

  fallback key is mandatory. It accepts three possible values false, true and 'blocking'

  - Fallback is false

    - paths returned from getStaticPaths will be rendered to html at build time by getStaticProps
    - if fallback set to false, any apths not retuned by getStaticPaths will result in 404 page
    - when?
      - it is suitable if you if you have an app with a small number of paths to pre-render
      - when new pages are not added often
      - blog site with a few articles is a good example for fallback set to false

  - Fallback is true

    - paths returned from getStaticPaths will be rendered to html at build time by getStaticProps
    - The paths that have not been generated at build time will not result in a 404 page, instead, next will serve a fallback version of the page on the first request to such a path.
    - IN the back ground , next will statically generate the requested path HTML and JSON. thi includes running getStaticProps
    - When that's done, the browser receives the json for the generated path. This will be used to automatically render the page with the required props. From the user's prespective, the page will be swapped from the fallback page to the full page.
    - At the same time, next keeps track of the new list of pre-redenred pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-redenred at build time

    ```
    import React from "react";
    import { useRouter } from "next/router";

    const Post = ({ post }) => {
      const router = useRouter();
      if (router.isFallback) {
        return <h1>Loading...</h1>;
      }
      return (
        <div>
          <h1>
            {post.id} {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      );
    };

    export default Post;

    export async function getStaticProps(context) {
      const { params } = context;
      const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
      const response = await fetch(url);
      const post = await response.json();
      if (!post.id) {
        return {
          notFound: true,
        };
      }
      console.log("Generating page for postId: " + post.id);
      return {
        props: {
          post,
        },
      };
    }

    export async function getStaticPaths() {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response = await fetch(url);
      const posts = await response.json();
      // const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
      const paths = [
        { params: { postId: "1" } },
        { params: { postId: "2" } },
        { params: { postId: "3" } },
      ];
      return {
        paths,
        fallback: true,
      };
    }
    ```

    - When?
      - If our app has a very large number of static pages (ecommerce)
      - You want all the product pages to be pre-rendered but if you ave a few thousand products, builds can take a long time
      - You may statically generate a samll subset of products that are ppular and use fallback for the rest
      - When someone request a page that's not generated yet the user will see the page with a loading indicator
      - shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page willl get statically pre-rendered page

- Fallback blocking

  - It is very similar to true
  - The difference is that we wont see any content when the page is generated
  - paths returned from getStaticPaths will be rendered to html at build time by getStaticProps
  - The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, next js will render oon the server and return the generated HTML
  - When it is dne the browser receives the HTML for the generated path. From the user perspective it will transition from 'the browser is requesting the page' to 'the full page is laoded'. There is no flash of loading/fallback state.
  - Keeps track of the new list of pre-rendered
  - When ?
    - UX level preople prefer to be loaded without a loading indicator
    - Some crawlers did not suppor javascript. The loading page would be rendered and then te full page would be laded which was causing problem

- Summary static generation SSG
  - Pros
    - SSG is a methos of pre-renderin where the HTML pages are generated at build time
    - The pre-rendered static pages can be pushed to a CDN, cached and served to clients acrosss the globe almost instantly
    - SSG is fast and better for SEO as they are immediately indexed by search engines
    - SSG with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like a really good approach to a wide variety of applications in production
  - Cons
    - The build time is proportional to the number of pages in the app
    - A page, once generated, can contain stale data till the time you rebuild the app
      - e comerce product prices can vary everyday
      - the entire app has to be re built and the page with updated data will be statically generated
      - What about getStaticPaths?
        - pre render only few pages at build time and rest of the pages can be prerendered on request
        - can we not use that to render say 10000 most popular pages and rest of the 99000 pages can be prerendered on request
        - it still does not fix the issue of stale data
        - If you render 1000 pages at build time, and then the rest are generated based on incoming request, using fallback true or blocking, changes in data will not update the already pre-rendered pages
      - So with an exmaple if we change information from the API, the static pages cannot take the new changes because there were generated either at build time or on request. So the next time we request the same page, we wont have the new value.
        For that reason there is a new concept called Incremental static regeneration. 


- Incremental Static Generation (ISR)
  - Allows you to update static pages after you have built your application
  - You can statically generate indivicdual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data

  How? 
    - In the getStaticProps function, apart from the props key, we can specify a revalidate key
    - The value for revalidate is the number of seconds after which a page re-generation can occur
    

