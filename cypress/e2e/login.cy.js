/// <reference types="cypress" />

//realiza os cenários na viewpoort escolhida
describe("Login", () => {
    beforeEach(() => {
        cy.viewport("iphone-6");
    });
//funcionalidade
describe("Login", () => {
    //cenário
    it("Login com sucesso", () => {
       //DADO
       //abir aplicação

       cy.visit('https://automationpratice.com.br/login');
       //preenche email e senha
       cy.get('#user').type('edu@qazando.com');
       cy.get('#password').type('123456');    
    
       //QUANDO
       //clica em entrar
       cy.get('#btnLogin').click()

       //ENTÃO
       //valida mensagem
       cy.get('#swal2-title').should("be.visible");
       cy.get('#swal2-title').should('have.text', 'Login realizado');
    });

    //cenário
    it("Email inválido", () => {
        cy.visit('https://automationpratice.com.br/login');    
        cy.get('#user').type('edu');
        cy.get('#password').type('123456');        
        cy.get('#btnLogin').click(); 
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
     }); 

     //cenário
     it("Senha inválido", () => {
        cy.visit('https://automationpratice.com.br/login');    
        cy.get('#user').type('edu@qazando.com');
        cy.get('#password').type('x');        
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        
     }); 

     //cenário
     it("Senha vazia", () => {
        cy.visit('https://automationpratice.com.br/login');    
        cy.get('#user').type('edu@qazando.com');     
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        
     });

     //cenário
     it("E-mail vazio", () => {
        cy.visit('https://automationpratice.com.br/login');   
        cy.get('#password').type('123456');      
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        
     });

});
});