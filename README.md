# Node Crash Behavior Example App

This repo contains two different node servers, swap them out in the `Procfile` to examine how errors are treated differently in these two cases.

`src/index.js` is a simple Hello World server that will crash on a request to the url `/error`.

`src/throng.js` is the same server, but clustered via throng.

## tl;dr

The non-clustered version will be restarted with a backoff policy unless it's deployed in private spaces. Each time it crashes the system will wait longer before restarting it. The clustered version will restart the failed children immediately.

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
