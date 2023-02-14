# react-props-and-expressions

Synchronizing Components with React Effects.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React Effect?
- When should you use an Effect and when should you not use an Effect?
- When do Effects run?
- What function is used to declare an Effect?
- What are Effect dependencies and how do you declare them?
- How do you clean up from an Effect?

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

1. Read about [Synchronizing with Effects](https://beta.reactjs.org/learn/synchronizing-with-effects) in the official React documentation.
1. Look through the official React documentation on the [useEffect](https://beta.reactjs.org/reference/react/useEffect) hook.
1. Read the code in `src/index.jsx`. Note that the `List` component conditionally renders items depending on the state of `isLoading`. Also look over the code in `src/read.js` to understand what it does.
1. Modify the code in the `List` component to call `readItems` and update its state when the Promise resolves.
1. Build your code and test it in the browser. The page content should transition from "Loading..." to the list contents after several seconds.

### Note for Windows Users

When using a `"watch"` script, you may encounter some `Watchpack Error` messages. These are safe to ignore as long as you see a `Compiled successfully.` message before them.

<p align="middle">
  <img src="assets/watchpack-errors.png">
</p>

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
