# Satellite Manager Task

## The Assignment

The Assignment that you about to create is called Satellite Manager, that is about Managing Satellites that users can see the Satellite information and details in form of table more on that later, your task is implement(build) a design(UI) using React JS, to test your frontend skills, note that every detail might matter, every careful and subtle touches as well as bigger picture quality, re-usability, maintainability and accessibility thoughts you put into the application helps us better understand your skills and your mental model of engineering in general and coding in particular.

note: Fork this Repository then work on it(on the forked one) after finishing it make a PR(Pull Request) to this main Repository 

## Deadline

The assignment Deadline for review is in your :

Note: Even if you didn't finish the task before the deadline make the PR with the main  

## Design and Implementation

For the Design you can find the Figma link [here](https://www.figma.com/file/LLL9PYg2gV9SljQD4DhnHS/Untitled?node-id=1%3A4)

Note: Try preview the application with Figma Preview functionality and interact with links and buttons to see how they respond to actions, but keep in mind, it's just a mock up, and real-world applications need more attention in terms of both design and functionality.

Important Note: For Styling we prefer using [Tailwind CSS](https://tailwindcss.com/) or pure CSS but feel free to use any other CSS Frameworks(Chakra UI, Bootstrap,... etc)

In the Home Page you have a Table, Filter button, Search Input, Add Satellite and A range of Date for filtering
- Filter Button: Opens a Modal that contains the filtering Inputs like how the design shows it that it contains:
  - Multiselect input for `CreatedBy`, `Satellite Dishes`, `City`
  - Radio button for `Status`: that you can choose Success or Error or Both of them to show in the Table
  - Reset Button
- Date Range: Is another property for filtering, handle it using [React Date Picker](https://www.npmjs.com/package/react-datepicker) 
- Search Input: used for filtering by searching in `name` and `created by` column
- Add Satellite button: This Button will go to the `/add` route there you can handle Adding functionality
- Table: here try to show the data that is inside `db.json` in the table using [React Table](https://react-table.tanstack.com/)
- Pagination: paginate the data using react-table that it contains pagination or feel free to use any other pagination packages

For the Add Satellite Page you have two main sections:
- Add Section: here you have a form that you add data(satellite) to the `db.json` but for creating it consider the following:
  - Validation
  - Types( check the db.json to know what are the types of each property)
  - Error Handling 
  - Each Validation 
  - Alert(using packages)
  - Handling Date Picker(using same package [React Date Picker](https://www.npmjs.com/package/react-datepicker))
- Latest Section: Try to Calculate and return latest 10 Satellites in the Database(db.json)

Note: Back button redirecting user to home page


## Data 

The Data is inside `db.json` in the `./db.json` file, feel free to check it out and understand the format of the data  

by running this command

`json-server --watch db.json`

`localhost:port-number/data`

A json server will run and you can fetch your data like any API or Backend integration

Note: For fetching data use `axios` package or any other fetching packages

An example of individual satellite data:
```
{
        "id": 29,
        "name": "Laurel",
        "configuredAt": "28-01-2022",
        "createdBy": "Muhammad Sardar",
        "satelliteDishes": [
            "Dish 1000",
            "Dish 300"
        ],
        "address": {
            "longitude": 117.218044,
            "latitude": 39.19537
        },
        "status": true,
        "city": "Duhok"
    },  

```
Note: 
- `db.json` contains Array of satellite objects
- When you implement the Add functionality be sure using same types

## Notes

Consider the following:
1. problem-solving in simple efficient way. 
2. Code style (code readability). 
3. Input validation. 
4. Unit Testing. 
5. Error handling. 
6. security. 
7. scalability.
8. best practices and design patterns. 
9. naming and correct spelling. 
10. code reusability(DRY). 
11. efficiency.
12. use latest version of packages
13. Add Global State(using Context API)

Our main key for doing this task is to test you so for better chance be creative and efficient in writing your code, Good Luck
if you have any question feel free to ask it 

## Plus

1. Make The Dashboard Responsive
2. Add SignIn/Up page and functionality
3. Add Animation
4. State Management(Redux)
5. Add Dark Mode
6. Feel free to additional pages 