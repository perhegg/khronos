describe('User can see saved times', () => {

	beforeEach(function () {
		cy.server();
		cy.route({
			method: "GET",
			url: "https://demo.kimai.org/api/version",
			response: "fixture:login.json",
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})
		cy.route({
			method: "GET",
			url: "https://demo.kimai.org/api/timesheets",
			response: "fixture:get_data.json",
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})
    .get('button').contains('Get started here!').click()
    .get(':nth-child(1) > .ui > input').type('susan_super')
    .get(':nth-child(2) > .ui > input').type('api_kitten')
    .get('button').contains('Login').click()
	})
	it('User can see saved times', () => {
		cy.server();
		cy.route({
			method: 'POST',
			url: 'https://demo.kimai.org/api/timesheets',
			response: 'fixture:save_data.json',
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})

		cy.get('input[id="begin"]').type('2019-03-28 11:00')
		cy.get('input[id="end"]').type('2019-03-28 13:00')
		cy.get('input[id="hourlyRate"]').type('100.0')
		cy.get(".customer > .dropdown").click()
		cy.contains("Company 1").click()
		cy.get('.project > .dropdown').click()
		cy.contains("Project 1").click()
		cy.get('.activity > .dropdown').click()
		cy.contains("Task 1").click()
		cy.contains("Save").click()
		cy.contains("Your time was saved")

		cy.route({
			method: 'GET',
			url: 'https://demo.kimai.org/api/timesheets',
			response: 'fixture:get_data_plus.json',
			headers: {
				"X-AUTH-USER": "susan_super",
				"X-AUTH-TOKEN": "api_kitten"
			}
		})
		cy.wait(2000)
		cy.get(':nth-child(2) > #beginSave').should('contain', '2019-03-28 11:00')
      // .should('contain', '2019-03-28 14:00')
      // .should('contain', 'Company 2')
      // .should('contain', 'Project 2')
      // .should('contain', 'Task 2')
	})
})
