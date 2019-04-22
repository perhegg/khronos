# khronos

## https://khronostimetracking.netlify.com/

## Khronos - CA final project

---
We created an application based on a RESTful API which allows users to track working time according to customer, project and task with the option to generate printable invoices for payment. The application is based on Kimai RESTful API (https://demo.kimai.org/api/doc).

You gain access to an account by e-mailing our support staff with a request.
You log in by clicking 'Get Started Here' or via the log in button in the header.

Upon log in you are redirected to your dashboard which features Time Tracking, Statistics, and Invoicing.

In Time Tracking the user can record times in real time by clicking 'play' and 'stop' buttons or by selecting date and time via drop down calendar. Regardless of the method chosen, the user will be asked to fill in the other fields with information regarding rate-per-hour, customer, project and task before being able to save. The user also has access to previously recorded times here.

In the Statistics section there are bar graphs that show total working time and total money earned per month.

In Invoicing the user can filter timesheets by customer, project and/or task and toggle which times to bill for with the option of adding free text. A printable invoice is rendered.

---
## Getting Started
Under the repository name, click clone or download. Copy the clone URL for the repository, open Terminal, change the current working directory to the location where you want the cloned directory to be made.

 `git clone https://github.com/CraftAcademy/khronos`

## Installing
Ensure that the dependency versions on your local machine are as specified in the package.json.

Run `yarn install` to install dependencies.

Run `yarn start` to open in localhost.

As a trial you can log in with the following credentials:

user: susan_super

password: api_kitten

---
## Testing
We use Cypress and Enzyme for testing. `yarn run test` runs unit tests.
To run end-to-end Cypress tests run simultaneously `yarn start` and `yarn cy:open` by opening two terminal windows.

---
## Deployment
We continuously deploy with netlify at https://khronostimetracking.netlify.com/

---
## Built with
- [React](https://github.com/facebook/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)
- [Chart js](https://github.com/chartjs/Chart.js)
- [Moment-timezone](https://github.com/moment/moment-timezone)
- [React-datepicker](https://github.com/Hacker0x01/react-datepicker/)

---
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
