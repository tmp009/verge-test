describe('Check footnotes', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('should have footnotes California Edition', () => {
    cy.visit('https://www.vergemotorcycles.com/order/fi_en/california-edition-details/')
    cy.contains('Allow all').click({ timeout: 60000 })

    cy.contains(' Non-refundable for order cancellations, except when statutory cancellation rights apply.')
    cy.contains(' If you choose to apply for 3rd party consumer financing, additional related financing fees may apply.')
  })

  it('should have footnotes Your Verge', () => {
    cy.visit('https://www.vergemotorcycles.com/order/fi_en/your-verge')
    cy.contains('Allow all').click({ timeout: 60000 })

    cy.contains(' Non-refundable for order cancellations, except when statutory cancellation rights apply.')
    cy.contains(' If you choose to apply for 3rd party consumer financing, additional related financing fees may apply.')
  })
})

describe('Configurator', () => {
  const url = 'https://www.vergemotorcycles.com/order/fi_en/'

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.visit(url);

    cy.contains('Allow all').click({ timeout: 60000 })
    cy.contains('Configure TS PRO').click({ timeout: 60000, force: true })

    cy.get('#black > img.color-image', { timeout: 60000, force: true })
      .should('be.visible')
      .click({ force: true })

    cy.contains('Configure seat').click({ timeout: 60000, force: true })
    cy.get('#perforated-seat > div.configurator-option-details > div.configurator-option-name', { timeout: 60000, force: true })
      .should('be.visible')
      .click({ force: true })

    cy.contains('Configure suspension').click({ force: true })

    cy.get('#overview', { timeout: 60000 })
      .should('be.visible')
      .click({ force: true })

    cy.get('#overview-block > div.configurator-bottom > div.configurator-section-buttons > a', { timeout: 60000 })
      .should('be.visible')
      .click({ force: true })
  })

  it('can fill form', () => {
    cy.get('#fname').type('Jon')
    cy.get('#lname').type('White')
    cy.get('#pnumber').type('+358 0123456')

    cy.get('#saddress').type('Foobar 7 E')
    cy.get('#email').type('example@example.com')
    cy.get('#cemail').type('example@example.com')

    cy.get('#ainfo').type('851')
    cy.get('#zipcode').type('001234')
    cy.get('#state').type('Uusimaa')
    cy.get('#city').type('Helsinki')

  })
});
