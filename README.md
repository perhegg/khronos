# khronos

## https://khronostimetracking.netlify.com/

## Khronos - CA final project

---
We created an application based on a RESTful API which allows users to track working time according to customer, project and task with the option to generate invoices for payment.

You gain access to an account by e-mailing our support staff with a request.
You log in by clicking 'Get Started Here' or via the log in button in the header.

Upon log in you are redirected to your dashboard which features Time Tracking, Statistics, and Invoicing.

You're able to track your time by entering it manually via the time tracking section by entering a start and end time via a drop down calendar,a rate, selecting a customer, project and task.  Time can also be tracked by clicking the 'play' and 'stop' buttons in the header to record in real time. You also have access to previously recorded times here.

In the Statistics section there are bar graphs that show total working time and total money earned per month.

In Invoicing you have the option to create an invoice by selecting customer, project and/or tasks and toggling which times you'd like to bill for with the option of adding free text. A printable invoice is rendered.

---
## Getting Started
Under the repository name, click clone or download. Copy the clone URL for the repository, open Terminal, change the current working directory to the location where you want the cloned directory to be made.

`git clone
https://github.com/CraftAcademy/khronos`

## Installing
Ensure that the dependency versions on your local machine are as specified in the package.json.

Run `yarn install` to install dependencies.

Run `yarn start` to open in localhost.

As a trial you can log in with the following credentials:

user: susan_super

password: api_kitten


---
## Testing
We used cypress for e2e testing, and enzyme for feature tests.

Run `yarn cy:open` to run e2e testing.

Run `yarn run test` to run enzyme testing.

---
## Deployment
We continuously deploy with netlify at https://khronostimetracking.netlify.com/

---
## Built with
## Built With:
- [React](https://github.com/facebook/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)
- [Chart js](https://github.com/chartjs/Chart.js)
- [Moment-timezone](https://github.com/moment/moment-timezone)
- [React-datepicker](https://github.com/Hacker0x01/react-datepicker/)
---
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

## Authors
- [Laura Reale](https://github.com/LauraRe)
- [Viktor Olsson](https://github.com/vick3d)
- [Per Eriksson](https://github.com/perhegg)
- [Amanda Gibson](https://github.com/amandagibson)
---
## License
- MIT License

---
## Acknowledgments
Special thanks to our awesome coach [Magnus](https://github.com/magnus-thor)!
