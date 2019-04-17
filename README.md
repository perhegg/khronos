# Khronos - Time-tracking App
April 2019 Final Course Project

We created a frontend time-tracking application for freelancers to track working time according to customer, project and task. The user can also generate printable invoices for payment.
To get access to the site the user must send an e-mail to the support staff.

The application is based on Kimai RESTful API (https://demo.kimai.org/api/doc).

Once you are signed in you will be redirected to the dashboard which features Time Tracking, Statistics, and Invoicing.

In Time Tracking the user can record times in real time by clicking 'play' and 'stop' buttons or by selecting date and time via drop down calendar. Regardless of the method chosen, the user will be asked to fill in the other fields with information regarding rate-per-hour, customer, project and task before being able to save.

In Statistics the user can see charts summarizing the total amount of time spent on projects and total money earned, per month. The user can also see amount of hours spent on projects and money earned during the day.

In Invoicing the user can filter timesheets by customer, project and/or tasks. The User can then select timesheets and create a printable invoice.

##  Getting started:
Under the repository name, click Clone or download. Copy the clone URL for the repository. Open Terminal. Change the current working directory to the location where you want the cloned directory to be made.

 `git clone https://github.com/CraftAcademy/khronos`

## Installation:
Ensure that the dependencies versions on your local machine are as specified in the package.json.
Run `yarn install` to install dependencies.

##Testing:
We use Cypress and Enzyme for testing. `yarn test` runs unit tests.
To run end-to-end Cypress tests run simultaneously `yarn start` and `yarn cy:open` by opening two terminal windows.

## Deployment:
Deployed with Netlify.

## Built With:
- [React](https://github.com/facebook/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)
- [Chart js](https://github.com/chartjs/Chart.js)
- [Moment-timezone](https://github.com/moment/moment-timezone)
- [React-datepicker](https://github.com/Hacker0x01/react-datepicker/)

## Authors
- [Laura Reale](https://github.com/LauraRe)
- [Viktor Olsson](https://github.com/vick3d)
- [Per Eriksson](https://github.com/perhegg)
- [Amanda Gibson](https://github.com/amandagibson)

## License
MIT license