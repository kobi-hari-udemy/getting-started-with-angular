# Practice 02 - Hello Angular

## Overview

This practice project is the application created by `ng new`. We will use it to understand the main files in a small Angular application and how they fit together. We will then change a signal in the component and see the effect in the user interface.

## Steps

### Step 1 - Run the application

1. Open the `02. hello-angular` folder in your code editor.
2. Run `npm install` if the project dependencies have not been installed yet.
3. Run `npm start` or `ng serve` to start the development server.
4. Open the browser and navigate to `http://localhost:4200`.

The project initially displays the Angular CLI starter page. The development server watches the source files and recompiles the application when you save a change.

### Step 2 - Explore the main files

Open the following files in `src/` and `src/app/`:

| File | Purpose |
| --- | --- |
| `src/index.html` | The host HTML page. The `<app-root>` element is the place where Angular renders the root component. |
| `src/styles.css` | Global styles for the application. Styles placed here can affect the whole application. |
| `src/main.ts` | The entry point. It bootstraps the `App` component and supplies the application configuration. |
| `src/app/app.ts` | The root component class. It connects the component metadata, template, styles, and the `title` signal. |
| `src/app/app.html` | The root component template. It contains the HTML and Angular template expressions shown in the browser. |


### Step 3 - Change the title signal
1. Open the `src/app/app.html` file - and delete everything inside it. Then add the following content:
```html
<h1>Welcome to the application</h1>
<h2>{{ title() }}</h2>
```
2. Save the file and look at the browser. The page now displays the text "Welcome to the application" and then a title - but it's not what you wrote inside the h2 element. The title is read from the `title` signal in the `App` component class.

3. Open `src/app/app.ts`.
4. Find the `title` signal:

```typescript
protected readonly title = signal('hello-angular');
```

The "signal" is a box that holds a value. The initial value is set to the string 'hello-angular'. We will learn more about signals soon, but for now, we can change the value and see the effect in the user interface.

5. Change its value, for example:

```typescript
protected readonly title = signal('my first Angular app');
```

6. Save the file and look at the browser.


7. Now lets set a timer that will change the value of the signal after a few seconds. Add the following code to the `App` component class:

```typescript
constructor() {
  setTimeout(() => {
    this.title.set('my first Angular app - updated');
  }, 5000);
}
```
And save the file. 

8. In the browser, refresh the page. You will first see the title "my first Angular app" and after 5 seconds, it will change to "my first Angular app - updated". 

>What happened?

You did not change the HTML? You only changed the value of the signal. But the html "magically" updated itself. This is the power of signals in Angular. The template is automatically updated when the signal value changes.


