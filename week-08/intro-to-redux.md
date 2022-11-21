# Intro To Redux

## What is Redux

### Predictable State Management System

- Redux simplifies state management by offering a consistent easy to reason about way to mange state
- Redux manages state of an application in a central location outside of the UI.
- Flux (Redux) is a Software Design Pattern that can be used in any language, framework, library

### Locus of Control

- Redux Tool Kit is opinionated.
    - Opinionated framework: a framework that encourages/enforces preferred best practices specific to the framework
- Single Source of Truth:
    - All state is stored in a central location outside of the UI called a store.
- Immutable:
    - Once data is declared it does not change unless under specific circumstances.

## Core Concepts

### Reducers
- Functions that dictate how the store is interacted with and changed. Reducers respond to actions that get dispatched from somewhere else in the application.
- [Redux Reducers Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers)
```javascript
  function quoteReducer(state = [], action) {
	console.log("State", state);
	console.log("Action", action);
	if (action.type === "ADD_QUOTE") {
		return [...state, action.payload];
		// return ['Hello ','World', '!'];
	} else if (action.type === "REMOVE_QUOTE") {
		const newState = [...state];
		return newState.filter(index => index.id !== action.payload.id);
	} else {
		return state;
  	}
  }
```
### Actions
- Simple objects that send data to the store via the reducers.
- [Redux Actions Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions)
```javascript
  const addQuoteAction = {
	type: "ADD_QUOTE",
	payload: { id: 1, content: "Hello " }
};
  ```
### Store
- Where all the data for an application is kept in a simple object. TLDR it is the single source of truth.
- [Redux Store Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#store)
```javascript
  
  const store = createStore(quoteReducer);
  store.getState()
  // returns [{"id":1,"content":"Hello "},{"id":2,"content":"World  "},{"id":4,"content":"Redux Rock"}]

```
### Dispatch
- A built-in function on the store. It is the only way to change data in redux. How the UI and the store communicate
- [Redux Dispatch Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch)
```javascript
store.dispatch(addQuoteAction);
```

## Classical Redux Code Walkthrough
- [Classical Redux Example Sandbox](https://codesandbox.io/s/classical-redux-nbcy9?file=/src/index.js)
    - Create action callbacks which use TYPES to determine what they do
    - `store.dispatch(actionCallback)` calls our action callbacks
    - console.log shows us what we are getting in the browser console
    - issues with this classical redux:
        - have to remember our actions
        - can be confusing to figure out which variables are changeable and which aren't (mutability)
- instead of this classical redux approach, we use [Redux Toolkit](https://redux-toolkit.js.org)
    - Includes [Immer](https://immerjs.github.io/immer/docs/introduction) - cleans up how we manage our states

## Recommended Reading
- [What Is Redux: A Designer's Guide - Smashing Magazine](https://www.smashingmagazine.com/2018/07/redux-designers-guide/)