export const allQus = {
  categories: [
    {
      id: "flutter",
      name: "Flutter Basics",
      questions: [
        {
          id: "q1",
          question: "What is Flutter primarily used for?",
          options: [
            "A. Web development",
            "B. Cross-platform mobile app development",
            "C. Desktop application development",
            "D. Game development",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which programming language is used with Flutter?",
          options: ["A. JavaScript", "B. Dart", "C. Kotlin", "D. Swift"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "What is a `Widget` in Flutter?",
          options: [
            "A. A database management tool",
            "B. A blueprint for Flutter applications",
            "C. A component that represents a part of the user interface",
            "D. A command-line interface for building apps",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q4",
          question:
            "What is the purpose of the `pubspec.yaml` file in a Flutter project?",
          options: [
            "A. To define the app's entry point",
            "B. To specify the app's dependencies and assets",
            "C. To configure the build environment",
            "D. To manage state in the app",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question:
            "Which widget is used to create a scrollable list in Flutter?",
          options: [
            "A. ListView",
            "B. GridView",
            "C. SingleChildScrollView",
            "D. Table",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "What is the role of the `build` method in Flutter?",
          options: [
            "A. To initialize the app",
            "B. To describe the UI of a widget",
            "C. To handle user input",
            "D. To define routes in the app",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "What is the purpose of the `MaterialApp` widget?",
          options: [
            "A. To manage state in a Flutter app",
            "B. To provide a basic structure for a Material Design app",
            "C. To configure the navigation routes",
            "D. To handle animations in Flutter",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q8",
          question:
            "Which widget allows for creating customizable buttons in Flutter?",
          options: [
            "A. IconButton",
            "B. RaisedButton",
            "C. ElevatedButton",
            "D. FloatingActionButton",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q9",
          question: "What does the `setState` method do in Flutter?",
          options: [
            "A. It triggers a navigation event",
            "B. It updates the UI when the app state changes",
            "C. It fetches data from an API",
            "D. It initializes the app's state",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q10",
          question: "Which command is used to create a new Flutter project?",
          options: [
            "A. flutter init",
            "B. flutter create",
            "C. flutter start",
            "D. flutter new",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },

    {
      id: "rjAdvance",
      name: "Advanced ReactJS",
      questions: [
        {
          id: "q1",
          question: "What is the primary purpose of React's `useMemo` hook?",
          options: [
            "A. To optimize rendering performance by memoizing computed values",
            "B. To manage state across components",
            "C. To memoize the entire component tree",
            "D. To replace `useEffect` for side effects",
          ],
          correctAnswer: "A",
          timeLimit: 15,
        },
        {
          id: "q2",
          question:
            "How does React's `useReducer` hook differ from `useState`?",
          options: [
            "A. `useReducer` is for managing local component state, while `useState` is for global state",
            "B. `useReducer` is suitable for complex state logic, while `useState` is better for simpler state",
            "C. `useReducer` works only with Redux",
            "D. They are identical in functionality",
          ],
          correctAnswer: "B",
          timeLimit: 15,
        },
        {
          id: "q3",
          question: "Which of the following is NOT true about React Context?",
          options: [
            "A. It eliminates the need for prop drilling",
            "B. It is a global state management solution",
            "C. It supports the `useContext` hook",
            "D. It is optimized for high-frequency state updates",
          ],
          correctAnswer: "D",
          timeLimit: 15,
        },
        {
          id: "q4",
          question: "What is the purpose of the `React.memo` function?",
          options: [
            "A. To prevent unnecessary re-renders of a component",
            "B. To create higher-order components",
            "C. To memoize the state of a component",
            "D. To manage side effects",
          ],
          correctAnswer: "A",
          timeLimit: 15,
        },
        {
          id: "q5",
          question:
            "What is the difference between `React.Fragment` and a plain `<div>`?",
          options: [
            "A. `<div>` adds an extra DOM node, while `React.Fragment` does not",
            "B. `React.Fragment` is faster than `<div>`",
            "C. `<div>` can only contain text, while `React.Fragment` can contain JSX",
            "D. `React.Fragment` is required for rendering arrays",
          ],
          correctAnswer: "A",
          timeLimit: 15,
        },
        {
          id: "q6",
          question:
            "What is the key difference between server-side rendering (SSR) and client-side rendering (CSR) in React?",
          options: [
            "A. SSR renders components on the client, CSR renders on the server",
            "B. SSR improves SEO, CSR is faster for dynamic interactions",
            "C. SSR is only used with Redux, CSR is used with Context API",
            "D. SSR uses JSX, CSR does not",
          ],
          correctAnswer: "B",
          timeLimit: 15,
        },
        {
          id: "q7",
          question:
            "How does React's `Suspense` feature help in handling asynchronous rendering?",
          options: [
            "A. It retries failed network requests",
            "B. It defers rendering of a component until a resource is ready",
            "C. It manages global state for asynchronous operations",
            "D. It is used only with Redux",
          ],
          correctAnswer: "B",
          timeLimit: 15,
        },
        {
          id: "q8",
          question:
            "Which React hook is used for subscribing to custom events?",
          options: [
            "A. `useRef`",
            "B. `useSubscription`",
            "C. `useEffect`",
            "D. `useEventListener`",
          ],
          correctAnswer: "C",
          timeLimit: 15,
        },
        {
          id: "q9",
          question: "What is the role of keys in React lists?",
          options: [
            "A. To uniquely identify each element for rendering optimization",
            "B. To bind events to list elements",
            "C. To style list items dynamically",
            "D. To sort elements in the list",
          ],
          correctAnswer: "A",
          timeLimit: 15,
        },
        {
          id: "q10",
          question: "How can you implement code splitting in a React app?",
          options: [
            "A. By using `React.lazy` and `Suspense`",
            "B. By wrapping components with `React.Fragment`",
            "C. By using the `useEffect` hook",
            "D. By declaring all imports in the entry file",
          ],
          correctAnswer: "A",
          timeLimit: 15,
        },
      ],
    },

    {
      id: "angularBasic",
      name: "Angular Basics",
      questions: [
        {
          id: "q1",
          question: "What is Angular primarily used for?",
          options: [
            "A. Building server-side applications",
            "B. Developing dynamic, single-page web applications",
            "C. Designing databases",
            "D. Managing web servers",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q2",
          question:
            "Which directive is used to display dynamic data in Angular templates?",
          options: ["A. ng-template", "B. ng-model", "C. {{ }}", "D. *ngIf"],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "What is the purpose of Angular CLI?",
          options: [
            "A. To install Angular libraries",
            "B. To provide a command-line interface for generating and managing Angular projects",
            "C. To write Angular code in a browser",
            "D. To debug Angular applications",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q4",
          question: "What does the `ngOnInit` lifecycle hook do?",
          options: [
            "A. It initializes the Angular application",
            "B. It is called after a component is initialized",
            "C. It handles all click events",
            "D. It destroys the component",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question:
            "Which module is always required to define the root module in Angular?",
          options: [
            "A. FormsModule",
            "B. RouterModule",
            "C. NgModule",
            "D. CommonModule",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question:
            "What is the default directive for creating two-way data binding in Angular?",
          options: ["A. ng-model", "B. ng-bind", "C. [(ngModel)]", "D. *ngIf"],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "What is the purpose of Angular's `HttpClient` module?",
          options: [
            "A. To make HTTP requests",
            "B. To handle form validation",
            "C. To perform DOM manipulations",
            "D. To optimize application performance",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "How do you define a component in Angular?",
          options: [
            "A. Using `@Component` decorator",
            "B. Using `@Module` decorator",
            "C. Using `@Directive` decorator",
            "D. Using `@Injectable` decorator",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q9",
          question:
            "Which file is used to define the entry point of an Angular application?",
          options: [
            "A. app.module.ts",
            "B. index.html",
            "C. main.ts",
            "D. styles.css",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q10",
          question: "What is the purpose of `ngFor` in Angular?",
          options: [
            "A. To perform conditional rendering",
            "B. To iterate over an array and render its items",
            "C. To bind input fields to the component",
            "D. To set styles dynamically",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },

    {
      id: "js_basics",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["A. <javascript>", "B. <script>", "C. <js>", "D. <code>"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q4",
          question: "How do you write 'Hello World' in an alert box?",
          options: [
            "A. msg('Hello World');",
            "B. alert('Hello World');",
            "C. msgBox('Hello World');",
            "D. show('Hello World');",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "A. var colors = (1:'red', 2:'green', 3:'blue');",
            "B. var colors = ['red', 'green', 'blue'];",
            "C. var colors = 'red', 'green', 'blue';",
            "D. var colors = {red, green, blue};",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q6",
          question:
            "Which event occurs when the user clicks on an HTML element?",
          options: [
            "A. onmouseover",
            "B. onmouseclick",
            "C. onclick",
            "D. onchange",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "How do you declare a JavaScript variable?",
          options: [
            "A. variable carName;",
            "B. var carName;",
            "C. v carName;",
            "D. declare carName;",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "How do you create a function in JavaScript?",
          options: [
            "A. function myFunction()",
            "B. function:myFunction()",
            "C. create myFunction()",
            "D. function = myFunction()",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q9",
          question: "How do you call a function named 'myFunction'?",
          options: [
            "A. call myFunction();",
            "B. call function myFunction();",
            "C. myFunction();",
            "D. Call.myFunction();",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q10",
          question: "How to write an IF statement in JavaScript?",
          options: [
            "A. if i == 5 then",
            "B. if i = 5 then",
            "C. if (i == 5)",
            "D. if i = 5",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
      ],
    },
  ],
};
