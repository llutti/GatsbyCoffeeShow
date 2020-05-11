# Projeto Gatsby Coffee Shop Website

  Site web para a fictícia "Gatsby Coffee Shop".

  Projeto em Gatsby desenvolvido durante video [Gatsby Coffee Shop Website](https://www.youtube.com/watch?v=oAVhEPey_qA&t=206s) disponibilizado por **Coding Addict**.

## Passos para criar o projeto
  - Criar o projeto como comando: `gatsby new coffee`
  - Atualizar os dados do projeto no arquivo `\gatsby-config.js`
  - Apagar os arquivos:
    > - `\src\components\header.js`
    > - `\src\components\image.js`
    > - `\src\pages\page-2.tsx`
  - Modificar o arquivo `\src\components\layout.js`:
    > - Remover as importações dos arquivos `header.js` e `image.js`
    > - Modificar a definição da constante **Layout** para:
      ``` javascript
        const Layout = ({ children }) =>
        {
          return (
            <>
              {children}
            </>
          )
        }
      ```
  - Modificar o arquivo `\src\pages\index.js`:
    > - Remover as referências ao arquivo `\src\components\image.js`
  - Baixar o arquivo de *CSS* do [Bootstrap](https://github.com/twbs/bootstrap/releases/download/v4.4.1/bootstrap-4.4.1-dist.zip)
  - Copiar o arquivo `bootstrap.min.css` para a pasta `\src\components\`
  - Abrir o arquivo `\src\components\layout.js` e importar o arquivo `bootstrap.min.css`
    ``` javascript
      import './bootstrap.min.css';
    ```
  - Adicionar o pacote de ícones: `yarn add react-icons`
  - Adicionar o plugin:
    > - `yarn add gatsby-background-image`
