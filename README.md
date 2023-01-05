# netbeau-spa-search

## Rerendering

> This app is developed using React Strict mode.

From Strict Mode - React docs:

Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

1. Class component constructor, render, and shouldComponentUpdate methods
2. Class component static getDerivedStateFromProps method
3. Function component bodies
4. State updater functions (the first argument to setState)
5. Functions passed to useState, useMemo, or useReducer

# Getting started

> Dont forget to setup the .env file
## **Run**

```git clone git@github.com:svetlyR/netbeau-spa-search.git```

```cd netbeau-spa-search```

```yarn install```

```yarn run dev```

## **Build**

> The ```file://``` protocol i.e. double clicking the .html file does not work with modules, so we need to use a local web server. Ex: [live-server](https://www.npmjs.com/package/live-server/v/0.8.0)

```git clone git@github.com:svetlyR/netbeau-spa-search.git```

```cd netbeau-spa-search```

```yarn install```

```yarn build```

```cd dist```

```npx live-server```
