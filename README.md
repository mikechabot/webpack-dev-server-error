# material-ui-hello-world
Simple ReactJs project with Material UI & Materialize CSS. Built with Webpack.
 - **ReactJs**: https://facebook.github.io/react/
 - **Material UI**: http://www.material-ui.com/
 - **Materialize**: http://materializecss.com/
 - **Webpack**: https://webpack.github.io/

## Demo
 - http://ec2-52-91-0-209.compute-1.amazonaws.com

## Get Started
1. Clone repository:
 - `git clone git@github.com:mikechabot/material-ui-hello-world.git`
2. Download dependencies:
 - `npm install`
3. Invoke a task with `npm run <task-name>` (e.g. `npm run dev`):
   1. `build`: Build assets according to `webpack.config.js`, place output in `/dist`
   2. `dist`: Build minified assets for production
   3. `preview`: Build assets and start an [http-server](https://www.npmjs.com/package/http-server) server on port `8088`
   4. `dev`: Build assets and start a [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) with [hot module replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) on port `8080`
   5. `start-server`: Invoked by `preview`, starts the `http-server`
   6. `start-dev-server`: Invoked by `dev`, starts the `webpack-dev-server`

## Notable Dependencies
  - [react](https://www.npmjs.com/package/react)
  - [material-ui](https://www.npmjs.com/package/material-ui)
  - [bootsrap](https://www.npmjs.com/package/bootstrap)
  - [weback](https://www.npmjs.com/package/webpack)
  - [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
  - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
 
## Servers
 - `npm run preview` available at [http://localhost:8088](http://localhost:8088)
 - `npm run dev` available at [http://localhost:8080](http://localhost:8080)

## SCSS
 - The SCSS asset located at `/app/scss/style.scss` is included `app/App.jsx` out-of-the-box.
   - Any changes to `style.scss` will be reflected within application's root component: `<div id="my-app"></div>` found in `/app/index.html`.
