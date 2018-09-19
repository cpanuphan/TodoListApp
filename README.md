# TodoListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `npm install` then Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This application need to connect to Web API with 5 methods

<table>
  <tr>
    <th>API</th>
    <th>Description</th>
    <th>Request body</th>
    <th>Response boy</th>
  </tr>
  <tr>
    <td>GET /api/todo</td>
    <td>Get all to-do items</td>
    <td>None</td>
    <td>Array of to-do items</td>
  </tr>
  <tr>
    <td>GET /api/todo/{id}</td>
    <td>Get an item by ID</td>
    <td>None</td>
    <td>To-do items</td>
  </tr>
  <tr>
    <td>POST /api/todo</td>
    <td>Add a new item</td>
    <td>To-do item</td>
    <td>To-do items</td>
  </tr>
  <tr>
    <td>PUT /api/todo/{id}</td>
    <td>Update an existing item</td>
    <td>To-do item</td>
    <td>None</td>
  </tr>
  <tr>
    <td>DELETE /api/todo/{id}</td>
    <td>Delete an item</td>
    <td>None</td>
    <td>None</td>
  </tr>
</table>
