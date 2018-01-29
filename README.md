## Getting started

```
npm i
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more information.

#### Code coverage

If you want to generate code coverage report use
```
npm run test -- --coverage
```

## Tasks to complete
If you use redux/reducer, please make sure to write tests.
In general writing tests is encouraged.

Feel free to delete or add any packages you want.
`redux`, `redux-logger` and `redux-saga` are already set up on the project (see `store/configureStore.js`)

You must do both tasks

### TASK 1

Use https://pokeapi.co/docsv2/ to get data

1) Create a form with an input for "name" with search button
This should hit GET http://pokeapi.co/api/v2/pokemon/:name
Handle success and error from the API call
On success display some information about the pokemon and some images (sprites property)

2) Use "react-notify-toast" to show notification on success/error of search call

3) Extra point if you use redux-saga to fetch data (https://redux-saga.js.org/)

### TASK 2

Build something similar to google convert Celsius to Fahrenheit (see image attached in `docs/convert-temperature.png` folder)

Please do both tasks.
Tweak routing/container as you see fit.
Code must have a decent coverage.
Please don't spend more than 1.5 days on the test
If you don't write test it will be considered a failed test
