# 04-State-Machine

This application implements the state machine and transitions represented by this table:

|  	|  	|  	|  	|
|--------------	|:-:	|:----------:	|:-:	|
|  	|  	|  	**Input**  	|  	
|  	| 0 	| 1 	| 2 	|
|  	|  	| **Next State** 	|  	|
| **Old State: 0** 	| 1 	| 3 	| 0 	|
| **Old State: 1** 	| 2 	| 0 	| 0 	|
| **Old State: 2** 	| 3 	| 1 	| 0 	|
| **Old State: 3** 	| 0 	| 2 	| 0 	|

Instructions for the application are as follows:
```
Enter a value (0, 1, or 2) to transition to the next state, and display the current state of the object.  Enter -1 to exit the state machine.
```

The application accepts input for the state machine from both button and keyboard events. 

----

## Installation

```
npm install
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
