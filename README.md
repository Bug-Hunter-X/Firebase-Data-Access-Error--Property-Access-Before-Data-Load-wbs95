# Firebase Data Access Error: Property Access Before Data Load

This repository demonstrates a common error in Firebase applications where you attempt to access properties of a document snapshot before the data has fully loaded. This typically occurs when dealing with asynchronous operations and improper handling of Promises or callbacks.

## Bug Description
The `bug.js` file shows how trying to access data from the snapshot immediately leads to undefined or null values. This can lead to crashes or unexpected application behavior.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle data loading using `.then()` to ensure the data is loaded before access. This prevents unexpected errors and improves application stability.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing the JavaScript files.
3. Run the `bug.js` file and observe the error.  Then run the `bugSolution.js` file to see the correct approach.

## Related issues
* Asynchronous operations in JavaScript
* Firebase document snapshots
* Promise handling