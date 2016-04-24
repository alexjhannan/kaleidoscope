# Kaleidoscope Best Practices

## FRONT END: located in 'client'
-----------------------------------------------------------------------------------------------------
* Components -> UI, concerned with interaction only
** May contain a UI state and functions to alter state
** Should not retrieve or access data, only receive it

* Containers -> Data shells, concerned with data retrieval and manipulation
** Interacts with Meteor to perform data requests
** Sends data to components for rendering on the UI

* Layouts -> Templates for defining a specific page layout
** mainLayout simply combines a navbar, content section, and footer together
** other layouts are possible for situations where a different layout is required

* Views -> Files that combine multiple components together
** To be used for complicated pages where multiple reusable components are all in use

-----------------------------------------------------------------------------------------------------

* Routes/routes.jsx -> Defines routes using FlowRouter
** Can be made modular up if the routing becomes too intense for one file

* Styles -> SCSS for all styling across the application (avoid using inline styles)
** Standard notation for classes is 'CEM', (BEM with components in mind), and follows this stucture:
*** component--element__modifier
**** EX: characterBoard--card-panel__fire would denote a fire-styled card panel on characterBoard

## BACK END: located in 'server'
* Methods -> Calls to the Meteor API for data access, retrieval, manipulation

* Publications -> Collections that are available for the client to use


-----------------------------------------------------------------------------------------------------

* Practices in this application:
** When dealing with functionality that combines data and display concerns:
*** Create a UI function on the component that handles the front-facing concern (displaying the confirmation) and then conditionally invokes a function located on the component's properties.
*** Create a data function on the container that handles the back-facing concern (deleting the object). Pipe this function to the component when rendering it with the container.
*** This approach doubles the number of functions for an action such as this, but it also maintains the front-end being where the front-end should be - in the component, not the container.

-----------------------------------------------------------------------------------------------------

* Semantics:
** Components and JSX tends to be written with a loose semantic interpretation of things, so as to provide fluidity and flexibility to deal with a great variety of concerns. Containers and methods are written specifically with MongoDB in mind, so as to reference as best possible the actual methods being called in the database.