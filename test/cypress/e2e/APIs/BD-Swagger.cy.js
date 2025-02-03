// 1. Test de conexion a API Cookies
describe('API Testing', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5264/swagger/index.html')
    
  })
  describe('CRUD-Cookies', () => {
    it('GET /api/Cookies', () => {
    cy.get('#operations-Cookies-get_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click(); 
    cy.get('.execute-wrapper > .btn').click();
    cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200')
    })
    it('POST /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-post_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('.body-param__text').clear().type('{"id": 0,"name": "Testing Cookies 2025","description": "But test........","required":true,"accepted":true}', { parseSpecialCharSequences: false });
    cy.get('.execute-wrapper > .btn').click();
    cy.get('.response-col_status').should('include.text', '201');
    })
    it('GET /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('21');
    cy.get('.execute-wrapper > .btn').click();
    cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200');
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > :nth-child(10)').should('include.text', 'Testing Cookies update - 2025');
    })
    it('PUT /api/Cookies/{id}', () => {
      cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type('21');
      //update testing id 21
      cy.get('.body-param__text').clear().type('{"accepted": true}', { parseSpecialCharSequences: false });
      cy.get('.execute-wrapper > .btn').click();
      cy.get('#put_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
      //Validate update
      cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type('21');
      cy.get('.execute-wrapper > .btn').click();
      cy.get('.example > .language-json > :nth-child(25)').should('include.text', 'true');
      cy.get('#get_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
      cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    })
    it('DELETE /api/Cookies/{id}', () => {
    // create test
    cy.get('#operations-Cookies-post_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('.body-param__text').clear().type('{"id": 0,"name": "Testing Delete Cookies","description": "Testing Delete ......","required":true,"accepted":true}', { parseSpecialCharSequences: false });
    cy.get('.execute-wrapper > .btn').click();
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > [style="color: rgb(211, 99, 99);"]').invoke('text').then((text)=>{
      cy.get('#operations-Cookies-post_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
      cy.get('#operations-Cookies-delete_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type(text);
      cy.get('.execute-wrapper > .btn').click();
      //validar testing eliminado
      cy.get('#operations-Cookies-delete_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type(text);
      cy.get('.execute-wrapper > .btn').click();
      cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('include.text', '404');
    });
   
    
    })
    it('PUT /api/Cookies/update-status-full{id}', () => {
      cy.get('#operations-Cookies-put_api_Cookies_update_cookie_full__id_ > .opblock-summary > .opblock-control-arrow').click();    
      cy.get('.btn').click();
      cy.get('input').type('21');

      cy.get('.body-param__text').clear().type('{"id": 21,"name": "Testing Cookies update - 2025","description": "But test update........","required":false,"accepted":false}', { parseSpecialCharSequences: false });

      cy.get('.execute').click();
      cy.get('#put_api_Cookies_update-cookie-full__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
    })
  });
  describe('CRUD-Politicas Cookies', () => {
    it('GET/api/Politics', () => {
      cy.get('#operations-Politics-get_api_Politics > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click(); 
      cy.get('.execute-wrapper > .btn').click();
      cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200')
    })
    it('POST /api/Politics{id}', () => {
      cy.get('#operations-Politics-post_api_Politics > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('.body-param__text').clear().type('{"id": 0,"title": "Politics Cookies 2025","description": "But I must explain....."}', { parseSpecialCharSequences: false });
      cy.get('.execute-wrapper > .btn').click();
      cy.get('.response-col_status').should('include.text', '201');
    })
    it('GET /api/Politics/{id}', () => {
      cy.get('#operations-Politics-get_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type('5');
      cy.get('.execute-wrapper > .btn').click();
      cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200');
      cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight').should('include.text', 'Politics Cookies 2025');
    })
    it('PUT /api/Politics/{id}', () => {
      cy.get('#operations-Politics-put_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type('6');
      //update testing id 6
      cy.get('.body-param__text').clear().type('{"id": 6,"title": "Testing Politics Cookies Update","description": "But I must explain to you how all UPDATE....."}', { parseSpecialCharSequences: false });
      cy.get('.execute-wrapper > .btn').click();
      cy.get('#put_api_Politics__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
      //Validate update
      cy.get('#operations-Politics-put_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('#operations-Politics-get_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('input').type('6');
      cy.get('.execute-wrapper > .btn').click();
      cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight').should('include.text', '"But I must explain to you how all UPDATE....."');
      cy.get('#get_api_Politics__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
  
    })
    it('DELETE /api/Politics/{id}', () => {
    // create test
    cy.get('#operations-Politics-post_api_Politics > .opblock-summary > .opblock-control-arrow').click();
      cy.get('.btn').click();
      cy.get('.body-param__text').clear().type('{"id": 0,"title": "Testing Delete Politics Cookies","description": "Testing Delete ......"}', { parseSpecialCharSequences: false });
      cy.get('.execute-wrapper > .btn').click();
      cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > [style="color: rgb(211, 99, 99);"]').invoke('text').then((text)=>{
        cy.get('#operations-Politics-post_api_Politics > .opblock-summary > .opblock-control-arrow').click();
        cy.get('#operations-Politics-delete_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
        cy.get('.btn').click();
        cy.get('input').type(text);
        cy.get('.execute-wrapper > .btn').click();
        //validar testing eliminado
        cy.get('#operations-Politics-delete_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
        cy.get('#operations-Politics-get_api_Politics__id_ > .opblock-summary > .opblock-control-arrow').click();
        cy.get('.btn').click();
        cy.get('input').type(text);
        cy.get('.execute-wrapper > .btn').click();
        cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('include.text', '404');
      });
    })
    it('GET/api/Politics', () => {
      cy.get('#operations-tag-Cookies > .expand-operation').click();
      cy.get('#operations-tag-Politics > .expand-operation').click();
    })
  });


})
