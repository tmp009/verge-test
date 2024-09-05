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

    cy.contains('Allow all').click({ timeout: 60000, waitForAnimations: true })
    cy.contains('Configure TS PRO').click({ timeout: 60000, force: true, waitForAnimations: true })

    cy.get('#black > img.color-image', { timeout: 60000, force: true, waitForAnimations: true })
      .should('be.visible')
      .click({ force: true, waitForAnimations: true })

    cy.contains('Configure seat').click({ timeout: 60000, force: true })
    cy.get('#perforated-seat > div.configurator-option-details > div.configurator-option-name', { timeout: 60000, force: true })
      .should('be.visible')
      .click({ force: true, waitForAnimations: true })

    cy.contains('Configure suspension').click({ force: true, waitForAnimations: true })

    cy.contains('Continue', { timeout: 60000 })
      .click({ force: true, waitForAnimations: true })

    cy.contains('Checkout', { timeout: 60000 })
      .click({ force: true, waitForAnimations: true })
  })

  it('can fill form', () => {
    cy.contains('First name').type('Jon{enter}', { waitForAnimations: true, delay: 150 })
    cy.contains('Last name').type('Doe{enter}'), { waitForAnimations: true, delay: 150 }
    cy.contains('Address').type('Foobar 7 E{enter}', { waitForAnimations: true, delay: 150 })

    cy.contains('City').type('Helsinki{enter}', { waitForAnimations: true, delay: 150 })
    cy.contains('Additional info').type('851{enter}', { waitForAnimations: true, delay: 150 })
    cy.contains('Zip code').type('001234{enter}', { waitForAnimations: true, delay: 150 })

    cy.contains('Email *').type('example@example.com{enter}', { waitForAnimations: true, delay: 150 })
    cy.contains('Phone number').type('+358 0123456{enter}', { waitForAnimations: true, delay: 150 })

    cy.contains('Review & Pay')
      .should('be.visible')
      .click()
  })
});
