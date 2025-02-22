# Esta é uma aplicação criada com NextJS, utilizando ReactJS

## LEIA COM ATENÇÃO

## O QUE FAZER PARA COMEÇAR A CODAR NO PROJETO:

```css
Extensões obrigatórias! em seu VSCode:
1.Prettier - Code Formatter
2.PostCSS Language Support
3.TailwindCSS IntelliSense

Extensões não obrigatórias:
1.Material Icon Theme (recomendado)
```

## Ao instalar as extensões, instale as dependências do projeto executando:

```bash
npm install
```

Para executar o servidor de testes do Frontend, execute o comando:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

As Páginas automaticamente atualizam no navegador assim que uma alteração é feita.

Esse projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para automaticamente otimizar o carregamento das fontes.
Qualquer importação de fonte, utilizem o `next/font` como primeiro plano. Utilizem este recurso pois o framework lida melhor com esse tipo de importação.
A fonte padrão do nosso projeto será a "SourceSans3". A fonte ja foi importada no `src/app/Layout.tsx`.
A configuração de importação da fonte está localizada em `src/utils/font.ts`.
Caso seja necessário a importação desta fonte em outros Layouts, faça a importação do arquivo `src/utils/font.ts`.

## Saiba mais

Para saber mais sobre Next.js, veja sua documentação:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
