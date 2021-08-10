/// <reference types="cypress"/>

import Conta from '../../support/CadastroConta';
import Criar from '../../support/CriarConta'

var emailValido = 'hicona4846@ailoki.com';
var emailCadastro = 'hamibo5327@awg5.com';

describe('Criar Conta', () => {
    
    it('Email valido', () => {
        Criar.acessarTelaCriarConta();
        Criar.emailValido(emailValido);
        cy.get('#customer_firstname').should('be.visible');
    })
    
    it('Validar campo email obrigatório', () => {
        Criar.acessarTelaCriarConta();
        Criar.validarCampoObrigatorioEmail();
        cy.get('#create_account_error').should('be.visible').and('have.text','Invalid email address.');
    })

    it('Validar duplicidade email', () => {
        Criar.acessarTelaCriarConta();
        Criar.validarCampoEmailDuplicidade();
        cy.get('#create_account_error').should('be.visible').and('have.text','An account using this email address has already been registered. Please enter a valid password or request a new one. ');
    })

    it('Validar email inválido', () => {
        Criar.acessarTelaCriarConta();
        Criar.validarCampoEmailInvalido();
        cy.get('#create_account_error').should('be.visible').and('have.text','Invalid email address.');
    })

    it('Cadastrar conta com sucesso', () => {
        Criar.acessarTelaCriarConta();
        Criar.emailValido(emailCadastro);
        Conta.cadastrarConta(emailCadastro);
    })

    it('Validar campos obrigatorios cadastro de conta', () => {
        Criar.acessarTelaCriarConta();
        Criar.emailValido(emailValido);
        Conta.validarCampoObrigatorio();
    })
});