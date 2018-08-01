# Amber Kim: React/Redux, React middleware exercise.

## Description: A small budget list React app that is able to create, update and delete a budget list item and add, update and delete expense items under each budget list item. With a logger and validator middleware

## Technologies
* JavaScript
* Nodejs
* React
* React Router
* Redux
* Babel
* Webpack
* Sass

## Structure
```
main.jsx
|_ components/app.jsx
    |_ BrowserRouter
       |_ Route '/' components/dashboard.jsx
         |_ components/category-form.jsx // for creating categories
         |_ components/category-list.jsx
            |_ components/category-item.jsx
               |_ components/category-form.jsx // for updating categories
               |_ ExpenseForm - CREATING expenses under the category
               |_ Expense Items - epense list display
                  |_ ExpenseForm - UPDATING expenses under the category
```