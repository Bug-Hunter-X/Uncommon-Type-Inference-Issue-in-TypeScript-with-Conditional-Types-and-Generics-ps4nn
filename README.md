# Uncommon TypeScript Type Inference Bug

This repository demonstrates an uncommon bug related to type inference in TypeScript.  The bug involves situations where the compiler does not narrow down the type of a variable as precisely as expected when using a combination of conditional types, generics, and function composition.

## Description

The core issue lies in the `processUser` function. Even though the `processValue` function returns a `User` object, the TypeScript compiler doesn't fully infer this and instead keeps `mixed` as `User | number` which is less precise than the actual type (`User`).  This can lead to runtime errors if you make assumptions about the precise type of `mixed`.

## How to Reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Observe the type of the `mixed` variable in the generated JavaScript. Note that the type information won't fully reflect the expected behavior.

## Solution

The solution involves using type assertions to explicitly tell the compiler the correct type. This is demonstrated in `bugSolution.ts`.

## Conclusion

This demonstrates a subtle edge case in TypeScript's type inference system. While generally robust, it's important to be aware of these less common scenarios where manual type assertions might be necessary for precise type safety.