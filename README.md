# Utility Tool

Utility Tool is a debugging tool to help you with your code.

## Getting Started

First make sure you have node installed on your computer

If you do not open up your terminal and run the command brew install node

If you already have node on your computer make sure

it is up to date by running the command node-v

If you do not have the latest update run the command brew update

Now clone this repository to get started by typing

```
git clone https://github.com/kcossifos/AppStore2.git
```

## Dependencies

### Install all packages

```
npm install
```

### Install mocha globally

```
npm install -g mocha
```
## Usage

### Start Server

To start the server on port 3000 without debug mode use

```
npm start
```
## Debug Mode

To start server on port 3000 with debug mode on use

```
NODE_ENV=true npm start
```
### Using Debug

To debug a certain section in your code you have to require
the util tool in the file and use `util.debug('Log Message', status_code)`

### Debug Example

```
util.debug({ methods: '"Hello without status"' }, 30);

Thursday, August 18th, 2016, 10:27:50 PM "Hello without status" 30
```
## Unit Testing

Tests you code to make sure there are no errors

Make Sure your server is on by using npm start

To run the test use the command mocha

```
mocha
```

## Code Coverage

This ensures what part of your code is tested

To run the command for the code coverage report use:

```
istanbul cover _mocha
```

## Style Guide

[Airbnb](https://github.com/airbnb/javascript)
 style guide is used to make sure your code is formatted correctly.

### Installing

To install eslint run this command:

```
npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```
Then install linter or eslinter packge for the IDE you are using


## Configuration

You will need to create a .eslintrc.json file

```
{
    "env": {
        "node": true
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "new-cap": 0,
        "prefer-template": 0,
        "global-require": 0
    },
    "globals": {
        "describe": true,
        "it": true
    }
}
```
