const cadastroContaElements = require('./elements').CADASTROCONTA;

class cadastroConta{

    cadastrarConta(email){
        //DadosPessoais
        cy.get(cadastroContaElements.mrs).should('be.visible');
        cy.get(cadastroContaElements.mrs).check();
        cy.get(cadastroContaElements.mrs).should('be.checked');
        cy.get(cadastroContaElements.nome).type('Maria');
        cy.get(cadastroContaElements.sobrenome).type('Silva');
        cy.get(cadastroContaElements.email).should('have.value', email);
        cy.get(cadastroContaElements.senha).type('Teste123');
        cy.get(cadastroContaElements.senha).should('have.value', 'Teste123');        
        cy.get(cadastroContaElements.confirmanome).should('have.value', 'Maria');
        cy.get(cadastroContaElements.confirmesobrenome).should('have.value', 'Silva');
        //DadosEndereço
        cy.get(cadastroContaElements.confirmanome).should('have.value', 'Maria');
        cy.get(cadastroContaElements.confirmesobrenome).should('have.value', 'Silva');
        cy.get(cadastroContaElements.endereco).type('Rua João Meirelles, n5402');
        cy.get(cadastroContaElements.cidade).type('Florianopolis');
        cy.get(cadastroContaElements.pais).select('United States');
        cy.get(cadastroContaElements.pais).find('option').contains('United States').should('be.selected');
        cy.get(cadastroContaElements.cep).type('80541');
        cy.get(cadastroContaElements.estado).select('Florida');
        cy.get(cadastroContaElements.estado).find('option').contains('Florida').should('be.selected');
        cy.get(cadastroContaElements.telefone).type('993546812');
        cy.get(cadastroContaElements.apelido).clear().type(email);
        cy.get(cadastroContaElements.botaoCadastrarConta).click();
        cy.get('.info-account').should('be.visible').and('have.text','Welcome to your account. Here you can manage all of your personal information and orders.');
    }

    validarCampoObrigatorio(){
        //DadosPessoais
        cy.get(cadastroContaElements.mrs).should('be.visible');
        cy.get(cadastroContaElements.nome).should('be.empty');
        cy.get(cadastroContaElements.sobrenome).should('be.empty');
        cy.get(cadastroContaElements.email).clear().should('be.empty');
        cy.get(cadastroContaElements.senha).should('be.empty');     
        cy.get(cadastroContaElements.confirmanome).should('be.empty');
        cy.get(cadastroContaElements.confirmesobrenome).should('be.empty');
        //DadosEndereço
        cy.get(cadastroContaElements.endereco).should('be.empty');
        cy.get(cadastroContaElements.cidade).should('be.empty');
        cy.get(cadastroContaElements.cep).should('be.empty');
        cy.get(cadastroContaElements.telefone).should('be.empty');
        cy.get(cadastroContaElements.apelido).clear().should('be.empty');
        cy.get(cadastroContaElements.botaoCadastrarConta).click();
    }
}

export default new cadastroConta();
