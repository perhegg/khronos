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
- [React](https://github.com/facebook/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Semantic UI](https://github.com/Semantic-Org/Semantic-UI-React)
- [Chart js](https://github.com/chartjs/Chart.js)
- [Moment Timezone]()
- [React Datepicker]()
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
