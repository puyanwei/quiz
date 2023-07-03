# Quiz

Website URL - https://quiz-one-omega.vercel.app/

Storybook UI Component library - https://64a17911a5a0651c475f501a-gklkgfvqwu.chromatic.com/

<img src="https://github.com/puyanwei/quiz/assets/14803518/d8e8f628-41ac-4214-9e59-33b661b6d4dc" alt="quiz start screenshot" width="600"/>
<img src="https://github.com/puyanwei/quiz/assets/14803518/cfce6042-84bd-46b8-81f1-01dbfa429944" alt="question screenshot" width="600"/>
<img src="https://github.com/puyanwei/quiz/assets/14803518/20af60b2-693b-4f18-8203-c14adc29d5de" alt="final score screenshot" width="600"/>

<img src="https://github.com/puyanwei/quiz/assets/14803518/07e082a4-99f8-4069-8e16-e8ce55e64246" alt="storybook component library screenshot" width="600"/>

### Task

Create a webapp that allows a user to answer questions. Once the user has finished answering all questions, present the user with their score. The webapp needs to follow the below requirements.

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

I started by noting down some points of interest, page user flow, components, tests and anything else I could think of.

<img src="https://github.com/puyanwei/quiz/assets/14803518/39cc9558-3d1a-4593-8c2b-7a6d1b9b18fa" alt="notes" width="600"/>

Using Storybook to code each component was super useful to have as a way of organising them but also code them in isolation

Each component has these props by default added using Typescript

```
export type Component = {
  className?: string
  testId?: string
  styles?: string
}
```

**ClassNames** are mainly used to overrides styles of the compmonent from a higher level (ie, parent DOM), as well as being used for spacing (padding).

**TestIds** are used for Cypress tests.

**Styles** are used for some niche situations where you need to override certain css which are applied by other libraries (eg Next Image has some weird !important position absolute stylings)

I also split up each component into its own category in Storybook of Atoms, Molecules, and Pages. This meant that everything could be previewed using Storybook in isolation before it went out on to the site.

### Improvements

- More Cypress tests to test out all paths. Although more investigation needed to see why testing seems quite inconsistent, they seemed to fail sometimes so I tried to add some `cy.wait` to delay next steps which seemed he help a little.
- Restart quiz button
- Reponsive styling
- Link to API and use fetch instead of static data
- Some state management if json data becomes very large
- More accessibility focused on key components
