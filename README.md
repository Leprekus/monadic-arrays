# Monadic Arrays

Monadic Arrays is a JavaScript library that leverages the power of the Monad pattern to transform the way you work with arrays. With Monadic Arrays, you can effortlessly chain and compose array manipulation operations, making your code more readable, expressive, and maintainable.

## Motivation

I have always found JavaScript arrays to have confusing method names.Here are some examples:

- shift & unshift
- some & every
- find & findIndex & indexOf

As I was browsing youtube i came across this video ["The Absolute Best Intro to Monads For Software Engineers"](https://www.youtube.com/watch?v=C2w45qRc3aU&t=685s) and thought that it would be cool to learn the monad pattern by creating an array implementation that has method names that clearly indicate the purpose.

## Description

The idea is to leverage method chaining in order to create a more declarative way to call array methods, similar to Jest's methods.
