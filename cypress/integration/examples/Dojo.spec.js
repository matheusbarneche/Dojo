/* eslint-disable no-undef */
context('Acessar Página', () => {//contexto dos testes que serão realizados na spec
    beforeEach(() => {//step para visitar a página antes de cada validação
      cy.visit('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    it('Sucesso no login', () => {//valida o caminho feliz de login na página
      cy.get('#username').type('angular').should('have.value','angular');//utilizando o CSS Selector recebe o campo Username do Form, inseri um texto e valida que o valor inserido seja igual a 'angular'
      cy.get('#password').type('password').should('have.value','password');//utilizando o CSS Selector recebe o campo password do Form, inseri um texto e valida que o valor inserido seja igual a 'password'
      cy.get('div.form-group > div > input.form-control').type('angular').should('have.value','angular');
      cy.get('button.btn.btn-danger').click();////utilizando o CSS Selector recebe o botão que estava desabilitado até os campos serem preenchdios e clica no botão
      // eslint-disable-next-line no-trailing-spaces
    });
    
    it('Erro ao acessar', () => {
        cy.get('#username').type('Test').should('have.value','angular');
        cy.get('#password').type('123').should('have.value','password');
        cy.get('div.form-group > div > input.form-control').type('angular').should('have.value','angular');
        cy.get('button.btn.btn-danger').click();
        // eslint-disable-next-line no-trailing-spaces
      });

      it('Validar obrigatoriedade campo login', () => {
        cy.get('#username').click();
        cy.get('[name="form"] > div:nth-of-type(1) > div.help-block > div').should('have.text','You did not enter a username');
        cy.get('#password').click();
         // eslint-disable-next-line no-trailing-spaces
      });
      
      it('Botão bloqueado', () => {
        cy.get('button.btn.btn-danger').should('be.disabled');
       // eslint-disable-next-line no-trailing-spaces
      });
  });