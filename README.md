# brightmd-takehome

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Production Deploy (Prompt #2)
 
If you were asked to make the application you built into a production deployable version, what would you do?

I would write unit tests for every component in the project which would help catch any regressions that might occur in subsequent development. I would setup a CI pipeline in github to run my tests, run 'yarn build' to create a minified build, and to deploy the build to my host of choice (probably AWS). I would host at least two branches, one for development and testing and one for public use.

Setting up a CI/CD pipeline like this would allow me to make my app available to the public while I continue to improve and extend it. I would setup environment variables so the app should know which environment it is running in (dev or production) which would allow me to change where API calls go and enable or disable features like analytics.

Monitoring would also be a big step forwards for the app; bug tracking via a service like bugsnag would be useful to keep track of where the app is failing. User tracking like Fullstory can help to reproduce issues that pop up and to help me understand the way users interact with my app. Custom analytics events would also be useful as user interaction becomes more complicated, it would help me to understand user flows and bottlenecks.

The project also looks like it should be using API calls to get and post data so integrating an API would be a major step in making it usable.