/// <reference types="cypress"/>

import Login from '../../support/Login'

describe('Login', () => {

    it('Validar login com sucesso', () => {
        Login.acessarLogin();
        Login.preencherLoginValido();
        cy.get('.page-heading').should('be.visible').and('have.text','My account');
        //cy.get('.header_user_info').should('be.visible').and('have.text', 'nomeUsuario');
    });

    it('Validar campo email obrigatório', () => { 
        Login.acessarLogin();
        Login.validarCampoObrigatorioEmail();
        cy.get('.alert').should('be.visible').and('have.text','\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tAn email address required.\n\t\t\t\t\n\t\t\t');
    });

    it('Validar campo password obrigatório', () => { 
        Login.acessarLogin();
        Login.validarCampoObrigatorioSenha();
        cy.get('.alert').should('be.visible').and('have.text','\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tPassword is required.\n\t\t\t\t\n\t\t\t');
    });

    it('Validar email inválido', () => {
        Login.acessarLogin();
        Login.validarEmailInvalido();
        cy.get('.alert').should('be.visible').and('have.text','\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tAuthentication failed.\n\t\t\t\t\n\t\t\t');
    });

    it('Validar password inválido', () => {
        Login.acessarLogin();
        Login.validarSenhaInvalido();
        cy.get('.alert').should('be.visible').and('have.text','\n\t\tThere is 1 error\n\t\t\n\t\t\t\t\tAuthentication failed.\n\t\t\t\t\n\t\t\t');
    });
})