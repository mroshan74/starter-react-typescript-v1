# Base setup for React project using Typescript + Vite

This project setup is used as a foundation for setting up **React** project using the **Vite** build with **Typescript** support.

##### The project includes following items for its setup
- eslint configuration
- Prettier configuration
- vitest
- react-testing-library

##### The setup includes following items
- eslint, eslint-airbnb-config, prettier
- vitest, jsdom, @testing-library

### Setup commands
#### Install the setup
```sh 
npm install
```

#### Manual setup commands
> Note: Follow `coding garden` step-by-step guide for manual setup of project **(recommended)**. Link is given in reference.

Initialize a vite-react project
```sh
npm create vite@latest
cd <project>
npm install
```

Setup eslint 
```sh
npm i -D eslint
npx eslint --init
```

Install eslint dependencies if not using CLI version (optional)
```sh
npm i -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
```

Install airbnb-style-guide dependencies
```sh
npx install-peerdeps --dev eslint-config-airbnb
npm i -D eslint-config-airbnb-typescript
```

Setup prettier
```sh
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Setup react-testing
```sh
npm install -D vitest
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install -D jsdom
```


### Todos
✅ Generate Vite + Typescript App <br/>
✅ Setup eslint + typescript + prettier <br/>
✅ Setup vitest, jsdom, @testing-library <br/>
⬜ Complete base configs <br/>
⬜ Complete documentation

## References
- [Coding Garden YT step-by-step Guide](https://www.youtube.com/watch?v=cchqeWY0Nak)
- [Vite docs](https://vitejs.dev/guide/) 
- [Typescript docs](https://www.typescriptlang.org/)
- [Airbnb style guide - React](https://airbnb.io/javascript/react/)
- [Using Testing Library jest-dom with Vitest](https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/)
- [Testing-library docs](https://testing-library.com/docs/queries/about#priority)
- [Common mistakes with react-testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Vitest](https://vitest.dev/guide/)
- [Prettier](https://prettier.io/docs/en/install.html)