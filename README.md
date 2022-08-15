# Projeto de automação de QAcademy Bootcamp [Avançado em Cypress]

Esse projeto é a criação da automação em cypress.
Usando a Aplicação Qtruck desenvolvida para o curso

## Componentes necessários para executar o projeto

- Nodejs (Versão *16.16*)
- yarn
- cypress (verão *10.4.0*)

## Informações para execução do Projeto

*Clonar o projeto*
```
$ git clone https://github.com/CassiaCaris/bootcampCypressAvancado.git
```

### Informações baixar as dependencias do Projeto e executa-lo

*_1º Passo - Baixar as dependencias da Aplicação Qtruck_*
  1.1. Em um terminal baixar as dependencias de Test
     Na pasta de Test no terminal, informe o comando
     ```
    $ yarn install
    ```    

*_2º Passo - Após o start da Aplicação Qtruck executar os testes em Cypress_*
  2.1. No mesmo terminal que baixou as dependencias de Test
     Na pasta de Tests no terminal, informe o comando
     ```
    $ npx cypress open
    ```  

*_3º Passo - Após start o cypress aparecerá a tela de Boas vindas do Cypress_*
  3.1. Deve escolher a opção do E2E Testing conforme imagem abaixo: 

  image.png

  3.2. e peça para executar *_Running Chrome_*

*_4º Passo - irá carregar a tela para escolher qual navegador irá executar a automção_*
  4.1. Deve escolher qual navegador irá usar para a execução dos testes 

  image.png

  4.2. e peça para executar *_Start E2E Testing in Chrome_*  

*_5º Passo - irá carregar a inicialização da automação_*
  5.1. Deve escolher qual arquivo deve ser inicializado 

  image.png

  5.2. Peça para executar *_login.cy.js_* 
  5.3  onde irá carregar os cenários de login que foram criados.  

*Em manutenção*

*Autora:* Cassia Caris <br/>
*Curso:* QAcademy Bootcamp [Avançado em Cypress]