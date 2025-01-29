# JS FRAMEWORKS 2

## Components, Props, Events and State

### Components

- The building blocks of a React application.
- If made correctly it can be reused throughout the project.
- Lets devs break down complex ui into smaller and more managable parts.

There are two types of components.

#### Functional Components

- simple js functions that takes props as arguments and return jsx.
- they are lightweight and don't use class-based syntax.

#### Class Components

- Use ES6 classes and extend React.Component.
- They have their own **State**

### Why use components?

- Reusability, write it once and use troughout project
- Each Component handles it's own part oof the UI.
- It's maintainable, easy to update and debug.
- Composition, Components can be nested and used to create complex UI.

#### Best practice For use of JS or JSX

### Props

- Props, short for Properties
- used to pass data from a parent component to a child.
- Allows components to be reusable by making them configurable with different data.
- Immutable, Props are read-only and cannot be modified by child.
- Passed down, Data flows one way.
- A Prop can be any type of data.

```jsx
import React from "React";
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return <Greeting name="Heen" />;
};
export default App;
```

The props.name can be deconstructed to {name}.
you can add more props like:

```jsx
({ name, age, gender });
```

### Events

In React, events are actions that happens in the application. often triggered by useer interactions like Click, key presses, form subbmissions etc.

You bind an event like this:

```jsx
<buton onClick={handleClick}>Click Me</button>
```

Event handlers are typically functions that are passed as props to elements.

```jsx
const handleClick = () => alert("Button Clicked");
const App = () => {
  return <button onClick={handleClick}>Click Me</button>;
};
```


