# Web Components

Web Components are a set of web platform APIs that allow you to create reusable custom elements in web pages and web applications. They are a collection of technologies that enable you to encapsulate your HTML, CSS, and JavaScript code into reusable components, which can be used across different projects.

## Benefits of Web Components

1. **Reusability**: Web Components promote code reusability by encapsulating functionality into self-contained components. This allows you to easily reuse and share components across different projects, reducing development time and effort.

2. **Modularity**: Web Components provide a modular approach to building web applications. Each component can be developed and tested independently, making it easier to maintain and update your codebase.

3. **Encapsulation**: Web Components encapsulate their styles and behavior, preventing style conflicts and JavaScript collisions with other parts of your application. This helps to improve code organization and maintainability.

4. **Interoperability**: Web Components are designed to work with any modern web browser, making them highly interoperable. They can be used in any web project, regardless of the underlying framework or library being used.

5. **Standards-based**: Web Components are based on web standards, such as Custom Elements, Shadow DOM, and HTML Templates. This ensures that your components are future-proof and compatible with evolving web technologies.

# Comparision with other tools

## React
React uses a virtual DOM to improve performance. When the state of an object changes, React first updates the virtual DOM, which is much faster than updating the real DOM. Then it compares the virtual DOM with a virtual copy of the former DOM (a process known as "diffing") and updates the real DOM only where there were changes. This process is called reconciliation.

## Web Compnents
Web Components (which include Custom Elements and Shadow DOM) interact directly with the real DOM. They don't use a virtual DOM or a diffing algorithm. Instead, they encapsulate functionality into custom HTML elements that can have their own encapsulated HTML, CSS, and JavaScript. This can make them more straightforward to use and understand, but potentially less efficient for large-scale updates. However, they are native to the browser and don't require any additional libraries to use, making them more lightweight.




## Usage
The project has 2 pages, index.html only show and hide the content base on the link selected, and page2 delete the contect and recreate it base on the link selected.



