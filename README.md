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

User instructions to interact with the application are as follows:
```
Enter a value (0, 1, or 2) to transition to the next state.
Enter -1 to exit the state machine.
```

The application accepts input for the state machine from both button and keyboard events. 

----

## Live Deployment

This application is live at [https://womcauliff.github.io/Simple-State-Machine-App/](https://womcauliff.github.io/Simple-State-Machine-App/).

## Run Locally

To run this application on your local machine, run the following commands after cloning this repository:
```
cd Simple-State-Machine-App/
npm install
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
