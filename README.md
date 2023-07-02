# Quiz

Website URL - https://quiz-one-omega.vercel.app/

Storybook UI Component library - https://64a17911a5a0651c475f501a-gklkgfvqwu.chromatic.com/

### Task

Create a webapp that allows a user to answer questions. Once the user has finished answering all questions, present
the user with their score. The webapp needs to follow the below requirements.

- The user must see only one question at a time. The webapp should transition from one question to another and not show all questions at once.
- It must be written in typescript and react.
- Must have a countdown clock that when the time is exceeded removes the current question on the page with some text informing the user their time is up

### Tech Stack

- Next.js (Next v13 app folder) and React with Typescript
- Tailwind for styling
- Storybook for component library
- Deployment of Storybook with Chromatic
- Deployed with Vercel
- Cypress end to end testing

### Installation

```
git clone https://github.com/puyanwei/quiz.git
cd quiz
yarn install
yarn dev
```

To run the Storybook library use the command `yarn run storybook` and then go to `https://localhost:6006`

To use Cypress testing run `yarn run cypress` to open Cypress. Then within the application click the test to run it.

### Process

### Conclusion
