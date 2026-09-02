# Fun with Angular

In this practice, we will look at the files Angular created for us, meet the root component, and see Angular update the screen when state changes.

## Run the application

Start the development server:

```bash
ng serve
```

Open `http://localhost:4200/` in the browser.

## Follow the application startup

Open `src/index.html`. This is the HTML page loaded by the browser. Its body contains:

```html
<app-root></app-root>
```

This is the place where Angular renders our application.

Next, open `src/main.ts`. The call to `bootstrapApplication` starts Angular and tells it to create the `App` class.

Finally, open the files in `src/app`:

- `app.ts` contains the `App` component class and its configuration.
- `app.html` is the component's template: the HTML it renders.
- `app.css` contains styles for this component.

## What is a component?

A component is a reusable piece of user interface. It combines a TypeScript class, a template, and optionally styles. The `App` component is the root component because its selector, `app-root`, matches the element in `index.html`.

In `app.html`, notice this expression:

```html
<h2>{{ title() }}</h2>
```

The double braces display a value in the template. Here, `title()` reads the value from the `title` signal in `app.ts`.

## Signals, state, and updates

The title is part of the component's **state**: data that can change while the application is running. A signal stores that state and lets Angular know when it changes.

Angular checks the template for values that depend on changed state and updates the matching parts of the page. This process is called **change detection**. We do not need to find the `<h2>` element or set its text ourselves.

Let's see it happen. In `src/app/app.ts`, add this constructor to the `App` class:

```ts
constructor() {
	setTimeout(() => {
		this.title.set('Angular updated this title!');
	}, 3000);
}
```

Refresh the browser. The initial title is displayed first. After three seconds, it changes automatically. The timer changed the signal's state, and Angular reflected the new value in the UI.
