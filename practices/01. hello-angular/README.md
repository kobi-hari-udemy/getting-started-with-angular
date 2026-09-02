# Practice 01 - Fun with Angular

## Overview
In this practice exercise, we will get started with Angular. We will take a look at a freshly generated Angular application, run it in our development enviroment, see it in the browser, and make some small changes to see how they affect the presented page.

## Steps
### Step 1 - Run the application
1. Open the `01. fun-with-angular` folder in your code editor
2. Run `npm install` to install the dependencies - if you have not done it already 

> Hint: if you see the folder `node_modules` in the file explorer of your code editor, it means that the dependencies are already installed, otherwise you will need to run `npm install` to install the dependencies

3. Run `npm start` or `ng serve` to start the development server
4. Open the browser and navigate to `http://localhost:4200` to see the application running

### Step 2 - Make some changes
1. Open the `src/app/app.html` file in your code editor
2. Add the following code to the file, between the `<h1>` and the `<p>` elements:
```html
<div class="my-div">
  <p>This is a div element with a class of "my-div"</p>
</div>
```
3. Make sure to **save the file** after making the changes - You will not see any changes in the browser until you save the file
4. When you save the file, if you look at the terminal running the development server, you will see that it detects the changes and recompiles the application
5. After the recompilation is done, you will see the changes in the browser - you should see a new div element with the text "This is a div element with a class of "my-div"". 
> Note: Notice that you did not have to refresh the browser to see the changes - this is one of the great features of Angular's development server, it automatically pushes changes to the browser without the need to refresh the page, this is called "Hot Module Replacement" (HMR) and it greatly improves the development experience by allowing you to see changes in real-time without losing the state of the application.
