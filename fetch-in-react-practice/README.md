# fetch-in-react-practice

Practice sending HTTP requests to a server from a React app.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Exercise

**For this exercise's commands to work properly, your terminal needs to be within the exercise's directory.** In your terminal, change directories with the `cd` command. This will change which directory your future commands are executed in.

```bash
cd name-of-exercise
```

**⚠️ Your terminal prompt should look like this with the name of the exercise at the end of the path as well as the branch name in `()` parenthesis. ⚠️**

#### Yes ✅

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

#### No ❌

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

1. Read the **API Documentation** provided below.
1. Read through all of the provided code, including `package.json` and `webpack.config.js`.
1. `cd` into your solution directory.
1. Make a copy of `.env.example` named `.env`.
    ```bash
    cp .env.example .env
    ```
1. Install all dependencies with `npm install`.
1. Make sure `postgresql` is running.
    ```bash
    sudo service postgresql start
    ```
1. Create a new database for the exercise. **NOTE:** on Windows, you may see an error that says `WARNING: could not flush dirty data: Function not implemented`. This is a bug in WSL and can be safely ignored.
    ```bash
    createdb fetchInReactPractice
    ```
1. Import the database schema and data with the provided `"db:import"` script.
    ```bash
    npm run db:import
    ```
1. Start `pgweb` in a new terminal so you can verify that your data is being updated.
    ```bash
    pgweb --db=fetchInReactPractice
    ```
1. Then open a browser tab to `http://localhost:8081` to view your database.
1. Start your Express API server and Webpack Dev Server with the provided `"dev"` script.
    ```bash
    npm run dev
    ```
1. Then visit `localhost:3000` in your browser. **⚠️Opening `index.html` in the browser will not work!!⚠️**
1. Complete the empty methods of the `App` component in `client/components/app.jsx` to perform HTTP requests to the server API. **You don't need to modify any other code, though you may need to read the other code to understand what's happening.**

### Tips!

- `console.log('hi')`
- Try the API with HTTPie before trying to write `fetch()` code. Make sure you understand the request and response messages for each route.
- **The overall strategy is to send your HTTP request from the client and then update the UI to reflect the action _after_ you receive a response.**
- Ignore the given pseudo-code steps at your own peril.
- Make sure your browser dev tools are open and put to use. **If your dev tools aren't open, you're not a developer.**
- Your console should have no errors or warnings in it when your solution is complete.
- You should have React dev tools installed in your browser.
- Use the Network tab of your dev tools to verify that the requests are being sent as you expect.
- It is possible to customize the column headers of the Network tab of the dev tools.
- You can reset the database again at any time with `npm run db:import`.

### API Documentation

#### `GET /api/todos`

Returns a JSON Array of all `todo` objects from the server.

```
GET /api/todos HTTP/1.1
Host: localhost:3000
Accept: */*

```

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "todoId": 1,
    "task": "learn http",
    "isCompleted": true,
    "createdAt": "2020-12-13T21:06:03.736Z",
    "updatedAt": "2020-12-13T22:37:03.736Z"
  },
  {
    "todoId": 2,
    "task": "learn fetch",
    "isCompleted": false,
    "createdAt": "2020-12-13T22:37:03.736Z",
    "updatedAt": "2020-12-13T22:37:03.736Z"
  }
]
```

#### `POST /api/todos`

Creates a new `todo` object from the request body and returns the created `todo`, including an auto-generated `todoId` property and timestamps.

```
POST /api/todos HTTP/1.1
Host: localhost:3000
Accept: */*,
Content-Type: application/json

{
  "task": "do a barrel roll",
  "isCompleted": false
}
```

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "todoId": 3,
  "task": "do a barrel roll",
  "isCompleted": false,
  "createdAt": "2020-12-13T22:37:03.736Z",
  "updatedAt": "2020-12-13T22:37:03.736Z"
}
```

#### `PATCH /api/todos/${todoId}`

Applies a partial update to the `todo` object identified by its `todoId` in the URL. The `todoId` of the target `todo` object should be in the **request target**, while the `isCompleted` property of the `todo` should be in the **request body**. The whole updated `todo` is returned in the response body.

```
PATCH /api/todos/2
Host: localhost:3000
Accept: */*
Content-Type: application/json

{
  "isCompleted": true
}
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "todoId": 2,
  "task": "learn fetch",
  "isCompleted": true,
  "createdAt": "2020-12-13T22:37:03.736Z"
  "updatedAt": "2020-12-13T22:39:08.276Z"
}
```

![Fetch in React Practice](assets/fetch-in-react-practice.gif)

### Finish

**For `git` to work properly, your terminal needs to be within the root of your local repository.** You have been executing commands in your exercise directory, but it's time to return "up" one level. In your terminal, change directories with the `cd` command as shown in the example below. This will change which directory your future commands are executed in.

**`..` means "parent directory".**

```bash
cd ..
```

#### Yes ✅

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

#### No ❌

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).
