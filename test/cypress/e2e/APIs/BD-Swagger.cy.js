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
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > :nth-child(10)').should('include.text', 'Testing Cookies 2025');
    })
    it('PUT /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('21');
    //update testing id 21
    cy.get('.body-param__text').clear().type('{"id": 21,"name": "Testing Cookies Update","description": "But I must explain to you how all ....."}', { parseSpecialCharSequences: false });
    cy.get('.execute-wrapper > .btn').click();
    cy.get('#put_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
    //Validate update
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('21');
    cy.get('.execute-wrapper > .btn').click();
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > :nth-child(15)').should('include.text', '"But test........"');
    cy.get('#get_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    // restablecer a su origen
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.reset').click();
    cy.get('.body-param__text').clear().type('{"id": 21,"name": "Testing Cookies","description": "But I must explain to you how all ....."}', { parseSpecialCharSequences: false });
    cy.get('.execute').click();
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
    it.only('PUT /api/Cookies/update-status{id}', () => {
      cy.get('#operations-Cookies-put_api_Cookies_update_status__id_ > .opblock-summary > .opblock-control-arrow').click();    cy.get('.btn').click();
    //   cy.get('.execute').click();
    //   cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200');
    })
  });
  describe('CRUD-Politicas Cookies', () => {
    it('GET /api/Cookies', () => {
    cy.get('#operations-Cookies-get_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click(); 
    cy.get('.execute-wrapper > .btn').click();
    cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200')
    })
    it('POST /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-post_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('.body-param__text').clear().type('{"id": 0,"name": "Testing Cookies 2025","description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}', { parseSpecialCharSequences: false });
    cy.get('.execute-wrapper > .btn').click();
    cy.get('.response-col_status').should('include.text', '201');
    })
    it('GET /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('32');
    cy.get('.execute-wrapper > .btn').click();
    cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200');
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > :nth-child(10)').should('include.text', 'Testing Cookies');
    })
    it('PUT /api/Cookies/{id}', () => {
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('32');
    //update testing id 32
    cy.get('.body-param__text').clear().type('{"id": 21,"name": "Testing Cookies Update","description": "But I must explain to you how all ....."}', { parseSpecialCharSequences: false });
    cy.get('.execute-wrapper > .btn').click();
    cy.get('#put_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
    //Validate update
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('input').type('32');
    cy.get('.execute-wrapper > .btn').click();
    cy.get('.response-col_description > :nth-child(1) > .highlight-code > .microlight > .language-json > :nth-child(15)').should('include.text', '"But I must explain to you how all ....."');
    cy.get('#get_api_Cookies__id__responses > tbody > .response > .response-col_status').should('have.text', '200');
    cy.get('#operations-Cookies-get_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    // restablecer a su origen
    cy.get('#operations-Cookies-put_api_Cookies__id_ > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.reset').click();
    cy.get('.body-param__text').clear().type('{"id": 21,"name": "Testing Cookies","description": "But I must explain to you how all ....."}', { parseSpecialCharSequences: false });
    cy.get('.execute').click();
    })
    it('DELETE /api/Cookies/{id}', () => {
    // create test
    cy.get('#operations-Cookies-post_api_Cookies > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('.body-param__text').clear().type('{"id": 0,"name": "Testing Delete Cookies","description": "Testing Delete ......"}', { parseSpecialCharSequences: false });
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
    it('GET /WeatherForecast', () => {
    cy.get('#operations-WeatherForecast-GetWeatherForecast > .opblock-summary > .opblock-control-arrow').click();
    cy.get('.btn').click();
    cy.get('.execute').click();
    cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('have.text', '200');
    })
  });
})
