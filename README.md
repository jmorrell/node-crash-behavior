# Node Crash Behavior Example App

This repo contains two different node servers.

`src/index.js` is a simple Hello World server that will crash on a request to the url `/error`.

`src/throng.js` is the same server, but clustered via throng.

## Deploying

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Or, from the command line:

```
$ heroku create
$ git push heroku master
$ heroku open
```

# Developing locally

```
$ yarn
$ yarn dev
```

# Testing

```
$ yarn test
```
