# React Hands On

## Get started
Install node dependencies
```shell
npm i
```

Start application in dev mode
```shell
npm start
```

## Hands on

### Step 0: Start With A Mock
Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:
![Mock](https://reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

Our JSON API returns some data that looks like this:
```js
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```


### Step 1: Break The UI Into A Component Hierarchy

![Enoncé](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

* **FilterableProductTable (orange)**: contains the entirety of the example
* **SearchBar (blue)**: receives all user input
* **ProductTable (green)**: displays and filters the data collection based on user input
* **ProductCategoryRow (turquoise)**: displays a heading for each category
* **ProductRow (red)**: displays a row for each product

```
FilterableProductTable
|__ SearchBar
|__ ProductTable
    |__ ProductCategoryRow
    |__ ProductRow
```

> Yeah! Congratulation you can jump to Step 2 

### Step 2: Build A Static Version in React
Now that you have your component hierarchy, it’s time to implement your app. 
The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. 

To build a static version of your app that renders your data model, you’ll want to build components that reuse 
other components and pass data using props. props are a way of passing data from parent to child. 
If you’re familiar with the concept of state, **don’t use state at all** to build this static version. 
State is reserved only for interactivity, that is, data that changes over time. 
Since this is a static version of the app, you don’t need it.

> It's time to work dude!

### Step 3: Identify The Minimal (but complete) Representation Of UI State
To make your UI interactive, you need to be able to trigger changes to your underlying data model. 
React makes this easy with **state**.

To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. 
The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your 
application needs and compute everything else you need on-demand. 

Think of all of the pieces of data in our example application. We have:

* The original list of products
* The search text the user has entered
* The value of the checkbox
* The filtered list of products

Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem 
to be state since they change over time and can’t be computed from anything. And finally, the filtered list of 
products isn’t state because it can be computed by combining the original list of products with the search text 
and value of the checkbox.

So finally, our state is:

* The search text the user has entered
* The value of the checkbox

> Wahouuu! You're cute, let's jump to Step 4

### Step 4: Identify Where Your State Should Live

OK, so we’ve identified what the minimal set of app state is. 
Next, we need to identify which component mutates, or _owns_, this state. 

Remember: React is all about one-way data flow down the component hierarchy. 
It may not be immediately clear which component should own what state. 
**This is often the most challenging part for newcomers to understand**, so follow these steps to figure it out:

For each piece of state in your application:
* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, create a new component simply for holding 
the state and add it somewhere in the hierarchy above the common owner component.

Let’s run through this strategy for our application:
* _ProductTable_ needs to filter the product list based on state and _SearchBar_ needs to display the search text
and checked state.
* The common owner component is _FilterableProductTable_.
* It conceptually makes sense for the filter text and checked value to live in _FilterableProductTable_

Cool, so we’ve decided that our state lives in FilterableProductTable. 

> First, add an instance property `this.state = {filterText: '', inStockOnly: false}` to _FilterableProductTable_’s 
constructor to reflect the initial state of your application. 
Then, pass `filterText` and `inStockOnly` to _ProductTable_ and _SearchBar_ as a prop. 
Finally, use these props to filter the rows in _ProductTable_ and set the values of the form fields in _SearchBar_.

> You can start seeing how your application will behave: set filterText to "ball" and refresh your app. 
You’ll see that the data table is updated correctly.

### Step 5: Add Inverse Data Flow

So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. 
Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the 
state in _FilterableProductTable_.

React makes this data flow explicit to make it easy to understand how your program works, but it does require a 
little more typing than traditional two-way data binding.

If you try to type or check the box in the current version of the example, you’ll see that React ignores your input. 
This is intentional, as we’ve set the value prop of the input to always be equal to the state passed in from 
_FilterableProductTable_.

Let’s think about what we want to happen. We want to make sure that whenever the user changes the form, 
we update the state to reflect the user input. Since components should only update their own state, 
_FilterableProductTable_ will pass callbacks to _SearchBar_ that will fire whenever the state should be updated. 
We can use the onChange event on the inputs to be notified of it. 
The callbacks passed by _FilterableProductTable_ will call `setState()`, and the app will be updated.

Though this sounds complex, it’s really just a few lines of code. 
And it’s really explicit how your data is flowing throughout the app.

### And That’s It
Hopefully, this gives you an idea of how to think about building components and applications with React. 
While it may be a little more typing than you’re used to, remember that code is read far more than it’s written, 
and it’s extremely easy to read this modular, explicit code. As you start to build large libraries of components, 
you’ll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)

## For the braves
### Write a ProductAPI
1. Write a `ProductAPI` that simulate a api call to get products by returning a promise.
2. Test it using [jest](https://facebook.github.io/jest/) (just write a file `ProductAPI.test.js` and run `npm test`).
3. Use it in your application.

### Test your application
Write tests for your components using [jest](https://facebook.github.io/jest/) and [enzyme](https://github.com/airbnb/enzyme)

#### Setup
```
npm i --save-dev enzyme enzyme-adapter-react-16
```

Then create a file `src/setupTests.js` with this content:
```js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```
You're ready to go !