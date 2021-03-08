# weekly-pay

Simple weekly wage calculator app.

## Requirements

Node.js [15.6.0](https://nodejs.org/)

npm 

## Quick start

Run `git clone https://github.com/GamboaDd27/weekly-pay`

Run `npm install` 

Run `npm start`

Visit http://localhost:3000/

## Usage

Open any browser compatible with Node.js

Visit http://localhost:3000/

Use the form in the main page to upload a txt file with the schedules to be processed

![App Screenshot](https://i.imgur.com/UW2O4Hp.png)

After submitting the form, the page will redirect you to a table with the results

## Solution approach
The solution involves creating an Employee object for each entry in the input file, then the corresponding string is converted to a list of days with their own schedules. 

The payment for each day is determined by comparing the hours to a range of hours contained in a configuration file; schedules may overlap two or more different pay scales.

Once each day's wage is calculated, the weekly wage is computed and assigned as a field unique to each employee. 

Finally, the app dynamically renders a table detailing each employee's name and weekly wage.

The architecture of the solution is a simple Node.js web app that takes advantages of routing to communicate data between different JavaScript classes and to dynamically render the solution in a visual manner.

## License

MIT License


Made with ❤ and js.
