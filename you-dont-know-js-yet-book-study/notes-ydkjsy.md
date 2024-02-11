## Functions

### comparison

Strict equality === checks for type and value between two variables or operands.

## Modules vs Classes

Key Differences:

- API Definition: Classes define an implicit API through their public attributes and methods, while module factory functions explicitly define the public API through the returned object's methods.

- Data and Method Privacy: Classes have all data and methods public by default, while module factory functions can keep data and methods private within the function.

### When to Use Each:

- Classes are often preferred for:
Modeling real-world concepts with clear hierarchies and relationships
Leveraging inheritance and polymorphism

- Module factory functions are well-suited for:
Encapsulating implementation details and promoting data privacy
Creating objects with flexible APIs that can vary based on input
Avoiding potential issues with class-based inheritance
