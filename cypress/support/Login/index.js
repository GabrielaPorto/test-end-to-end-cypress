const loginElements = require('./elements').LOGIN;

class Login{
    acessarLogin(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
    }

    preencherLoginValido(){
        cy.get(loginElements.email).type('hepiwap138@ailoki.com');
        cy.get(loginElements.senha).type('Teste123');
        cy.get(loginElements.botao).click();
    }

    validarCampoObrigatorioEmail(){
        cy.get(loginElements.email).should('be.empty');
        cy.get(loginElements.senha).type('Teste123');
        cy.get(loginElements.botao).click();
    }

    validarCampoObrigatorioSenha(){
        cy.get(loginElements.email).type('hepiwap138@ailoki.com');
        cy.get(loginElements.senha).should('be.empty');
        cy.get(loginElements.botao).click();
    }

    validarEmailInvalido(){
        cy.get(loginElements.email).type('hepiwap@ailoki.com');
        cy.get(loginElements.senha).type('Teste123');
        cy.get(loginElements.botao).click();
    }

    validarSenhaInvalido(){
        cy.get(loginElements.email).type('hepiwap138@ailoki.com');
        cy.get(loginElements.senha).type('teste12');
        cy.get(loginElements.botao).click();
    }
}

export default new Login();