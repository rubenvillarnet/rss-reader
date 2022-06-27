# RSS Reader

A basic RSS reader.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project steps

1. **Create a quick POC**: when I face a complex task or user story, in addition to dividing it into more straightforward tasks, I always try to quickly implement the basic functionality and iterate from it, building the final deliverable. This way I can find potential blockers or dependencies in an early stage.
2. **Create a basic design in Figma**: if there is no a design available, I prefer to create a quick design. [Even if it is not a great design](https://www.figma.com/file/kmWdcOw6r9WbqriLBEsbCe/RSS-Reader), it helps me speed things up when working with the layout and the styles.
3. **Create the tasks and work with them**: in this case, I have created a [project on Github](https://github.com/rubenvillarnet/rss-reader/projects/1). I will try to create issues and Pull Requests in order to make it similar to a real workflow. I will use **Gitflow** to organize my code, but for the sake of simplicity, all my branches will be merged directly in *main*.

![me accepting my own PRs](https://i.kym-cdn.com/entries/icons/original/000/030/329/cover1.jpg "Me accepting my own PRs")
Me approving my own Pull Requests.

## Technical decisions

### Fetching the data

The first issue I found was that most of the RSS feeds were CORS protected, not allowing client-side data fetching. This, combined with the fact that I needed to convert the XML data to a readable format left me with various options:

- Ignore the CORS issue and use non-protected RSS feeds, the vast minority of them.
- Create a custom middleware (or an AWS Lambda Function, or a Firebase Cloud Function) that fetches the data and returns it. I could even use an existing solution like hosting my own [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) deployment.
- Use Next.js instead of Create React App, as I will going to deploy it in Vercel equally, so I can use SSR and their [API routes](https://nextjs.org/docs/api-routes/introduction) and avoid the problem.
- Be a lazy boy and use [RR2JSON](https://rss2json.com/), which fetches the data and converts it for me.

Finally, I chose the last solution due to time constraints and the fact that it's not a frontend-related issue. In a real-world application, a backend would exist that solves that problem and adds other functionalities (caching feeds already added by other users, marking articles as read, getting the full content of individual articles...). Also, the logical assumption would be that the login involving converting the XML to a JSON would be part of the business logic and would be implemented in the backend too.

### Getting the description and the image

  [The RSS specification](https://validator.w3.org/feed/docs/rss2.html) doesn't define an element for the item image of a plain-text description. In fact, the vast majority of the feeds include HTML code in the description. So I created a basic logic that checks the description and, in the case that it is HTML code, gets the first paragraph's content and the first image URL. It's very basic but it seems to cover the most common causes.

## Dependencies used

- **axios**: I prefer Axios over fetch because it offers better error handling and automatic JSON conversion, among other features.
- **dompurify**: it sanitizes the HTML code present in the description.
- **styled-components**: I like SCSS too, but I love how styled-components integrates with React.
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
