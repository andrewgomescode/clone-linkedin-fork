# LEIA COM ATENÇÃO

Esta é uma aplicação criada com NextJS, utilizando ReactJS.

## O que fazer para começar a codar no projeto

**Extensões obrigatórias! em seu VSCode:**

```txt
1.Prettier - Code Formatter
2.PostCSS Language Support
3.TailwindCSS IntelliSense
```

**Extensões não obrigatórias:**

```txt
1.Material Icon Theme (recomendado)
```

## Instalação das dependências

Após instalar as extensões e já estiver com o projeto clonado, execute o seguinte comando no terminal:

```bash
npm install
```

## Executando servidor de teste

Para executar o servidor de testes do Frontend, execute o comando:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
As Páginas automaticamente atualizam no navegador assim que uma alteração é feita.

## Fontes externas

Esse projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para automaticamente otimizar o carregamento das fontes.\
Qualquer importação de fonte, utilizem o `next/font` como primeiro plano. Utilizem este recurso pois o framework lida melhor com esse tipo de importação.\
A fonte padrão do nosso projeto será a "SourceSans3";\
A fonte ja foi importada no `src/app/Layout.tsx`;\
A configuração de importação da fonte está localizada em `src/utils/font.ts`;\
Caso seja necessário a importação desta fonte em outros Layouts, faça a importação do arquivo `src/utils/font.ts`.

## Saiba mais

Para saber mais sobre Next.js, veja sua documentação:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
