# andre-practice

### Functionalities
Memory
- Way of storing large amounts of data in a logical way
- Storing the interactions that Andre made with the user
- Storing the response to those interactions
- Storing the actions of the user in specific journeys ()
- Storing the meta information of the user (primary user data)
- Creating a profile out of the user based (secondary / derived user data)

Brain
- Classify the user in actionable stages (such as 1 - 5, 1 meaning not doing anything, 5 means super active, 3 trying)
In classifying there are a lot of subclassifications. 
- Select interaction
- Select communication details

### Design patterns
**Creational patterns**
- Singleton
- Prototype
- Factory method

NOT: Builder, Abstract Factory

**Structural patterns**
- Decorator
- Adaptar
- Facade
- Flyweight (For data of user)
- Bridge --> Maybe needs study
- Proxy --> Maybe needs study

NOT: Composite

**Creational patterns**
- Iterator
- Strategy (For selecting habits)
- Variation of Mediator (For coordinating the )
- Visitor (This will be very useful for adding data for conclusions to an overarching object)
- Observer / State (We might have pieces of logic that need to be activated when certain variables drop below thresholds. For example: Success rate drops betwene 20% --> Active algorithm for change in plan)
- Command --> Needs study
- Chain of responsibility --> Maybe based on usecase (could be useful if we create a hierarchical approach in the way we deal with Andre logic)

NOT: Memento, Template method, Chain
