const criarContaElements = require('./elements').CRIARCONTA;

class criarConta{
    acessarTelaCriarConta(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
    }

    emailValido(email){
        cy.get(criarContaElements.email).type(email);
        cy.get(criarContaElements.email).should('have.value', email);
        cy.get(criarContaElements.botao).click();
    }

    validarCampoObrigatorioEmail(){
        cy.get(criarContaElements.email).should('be.empty');
        cy.get(criarContaElements.botao).click();
    }

    validarCampoEmailDuplicidade(){
        cy.get(criarContaElements.email).type('hepiwap138@ailoki.com');
        cy.get(criarContaElements.botao).click();
    }

    validarCampoEmailInvalido(){
        cy.get(criarContaElements.email).type('hepi');
        cy.get(criarContaElements.botao).click();
    }
}

export default new criarConta();