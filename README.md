<h1 align="center">
  <img alt="Pokedex" src="https://ik.imagekit.io/hwyksvj4iv/rentx_X8NuBlkIg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666631361747" width="248px" />
</h1>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-how-to-use">How to Use</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [GraphQL](https://graphql.org/) and [GraphQL Codegen](https://www.the-guild.dev/graphql/codegen)
- [Apollo Client](https://www.apollographql.com/)
- [TailwindCSS](https://tailwindcss.com/)

## :books: Requirements
- To have [**Git**](https://git-scm.com/) installed to clone the repository.
- To have [**Node.js**](https://nodejs.org/en/) installed.
- To have [**Postgres**](https://www.postgresql.org/) image running.

## :hammer: How to Use
This application required Node.js v16+. From your command line:

``` bash
  # Clone this repository:
  $ https://github.com/MatheusPires99/rentx

  # Go into the repository:
  $ cd rentx

  # Install dependencies:
  $ yarn

  # Run migrations
  $ yarn prisma migrate dev

  # Start application:
  $ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/MatheusPires99/rext/blob/main/.env.example).
