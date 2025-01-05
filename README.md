# farkle-scorekeeper

### Public URL

You can access a publicly hosted instance of this app here: https://farkle-scorekeeper.s3.amazonaws.com/index.html

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Deploy

```sh
yarn build; aws s3 sync dist s3://farkle-scorekeeper
```
