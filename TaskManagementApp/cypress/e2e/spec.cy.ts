// Please complete the following end to end tests for the entire application

describe('Task table', () =>
{

  /*it('should display a list of tasks', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });*/

  

  /*it('should be able to change the completion status of a task from Yes to No or from No to Yes', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to change the assigned user of a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });*/

  it('should be able to create a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

    cy.get('.newTaskInput').eq(0).type('Testing123'); 
    cy.get('.newTaskInput').eq(1).type('Test123 description'); 
    cy.get('input[type="date"].newTaskInput').should('be.visible');

    cy.get('input[type="date"].newTaskInput')
      .clear() 
      .type('2025-02-09'); 
    
    cy.get('input[type="date"].newTaskInput')
      .should('have.value', '2025-02-09'); 
    
    cy.get('mat-select[title="Assign the task to a user"]').should('be.visible');

    cy.get('mat-select')
      .contains('Vaishali') 
      .click();
      
    cy.get('mat-select[title="Assign the task to a user"]')
      .should('contain', 'Vaishali'); 

    cy.contains('button', 'Add a task').click({ force: true });

    cy.contains('td', 'Testing123').should('be.visible');

});

  it('should be able to delete a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test
       // Wait for the task list to load
    cy.get('table', { timeout: 100000 }) 
      .should('be.visible'); 

    cy.contains('tr', 'Test33', { timeout: 100000 }) 
      .should('be.visible')
      .within(() => {

    cy.contains('button', 'Delete').click();
  });

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Are you sure to delete?'); 
      return true; 
  });

});  
/*describe('User table', () =>
{
  it('should display a list of users', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });*/


  it('should be able to create a user', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test
     
    cy.get('input[type="text"].newUserInput')
      .eq(0) 
      .type('TestUser');
  
    cy.get('input[type="password"].newUserInput')
      .type('1234'); 
  
    cy.get('input[type="text"].newUserInput')
      .eq(1) 
      .type('test@1234');
  
    cy.contains('button', 'Add a user').click();
    cy.contains('User added successfully').should('be.visible'); 

  });

  /*it('should be able to delete a user', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should not be able to delete a user if they have tasks assigned to them', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });*/
});