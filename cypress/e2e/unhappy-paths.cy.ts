// const quizUrl = `https://quiz-one-omega.vercel.app`
const quizUrl = `http://localhost:3000`

describe("Unhappy paths", () => {
  it("Completes the quiz with no correct answers", () => {
    cy.visit(quizUrl)
    cy.get('[data-testid="homepage"]').should(
      "contain",
      "You will have 1 minute to complete the quiz."
    )
    cy.get('[data-testid="start-quiz"]').click()
    cy.wait(1000)
    cy.url().should("eq", `${quizUrl}/quiz`)
    cy.get('[data-testid="question-card-1"]').should("contain", "What is the capital of UK")
    cy.wait(1000)
    cy.get('[data-testid="button-paris"]').click()
    cy.get('[data-testid="question-card-2"]').should("contain", "What is the capital of France")
    cy.get('[data-testid="button-london"]').click()
    cy.wait(1000)
    cy.get('[data-testid="question-card-3"]').should("contain", "What is the capital of Spain")
    cy.get('[data-testid="button-london"]').click()
    cy.wait(1000)
    cy.get('[data-testid="question-card-4"]').should("contain", "What is the capital of Germany")
    cy.get('[data-testid="button-london"]').click()
    cy.wait(1000)
    cy.get('[data-testid="question-card-5"]').should("contain", "What is the capital of Japan")
    cy.get('[data-testid="button-london"]').click()
    cy.wait(1000)
    cy.get('[data-testid="question-card-6"]').should("contain", "What is the capital of USA")
    cy.get('[data-testid="button-paris"]').click()
    cy.wait(1000)
    cy.get('[data-testid="end-game-card"]')
      .should("contain", "Your final score is 0/6")
      .and("contain", "Oh dear... there are no words")
  })
})
