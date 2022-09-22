# Projeto de automação de QAcademy Bootcamp [Avançado em Cypress]

Esse projeto é a criação da automação em cypress.<br/>
Usando a Aplicação Qtruck desenvolvida para o curso. </br>
Utilizando a estrutura do projeto como PageObject (PO).

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

*_1º Passo - Baixar as dependencias da Aplicação Qtruck_* <br/>
  1.1. Em um terminal baixar as dependencias de Test <br/>
     Na pasta de Test no terminal, informe o comando <br/>
     ```
    $ yarn install -D
    ```    <br/>

*_2º Passo - Após o start da Aplicação Qtruck executar os testes em Cypress_* <br/>
  2.1. No mesmo terminal que baixou as dependencias de Test <br/>
     Na pasta de Tests no terminal, informe o comando <br/>
     ```
    $ npx cypress open
    ```  <br/>

*_3º Passo - Após start o cypress aparecerá a tela de Boas vindas do Cypress_* <br/>
  3.1. Deve escolher a opção do E2E Testing conforme imagem abaixo: <br/>

 ![image](https://user-images.githubusercontent.com/32333336/184724714-85d58d7a-9a17-461b-833d-f95c34f57e49.png)
<br/>
  3.2. e peça para executar *_Running Chrome_* <br/>

*_4º Passo - irá carregar a tela para escolher qual navegador irá executar a automção_* <br/>
  4.1. Deve escolher qual navegador irá usar para a execução dos testes <br/>

  ![image](https://user-images.githubusercontent.com/32333336/184724758-60bdeb40-a088-4376-a77f-1c331961a2a6.png)
<br/>
  4.2. e peça para executar *_Start E2E Testing in Chrome_*  <br/>

*_5º Passo - irá carregar a inicialização da automação_* <br/>
  5.1. Deve escolher qual arquivo deve ser inicializado <br/>

  ![image](https://user-images.githubusercontent.com/32333336/184724794-51903da2-b8c5-43e4-99ca-20986cb9af2e.png)
<br/>
  5.2. Peça para executar *_login.cy.js_* <br/>
  5.3  onde irá carregar os cenários de login que foram criados.  <br/>

*_6º Passo - Instalando o Allure para gerar o relatório da execução_* <br/>
  6.1. Baixar o allure na máquina na pasta de test<br/>
    ```
    $ yarn add -D @shelex/cypress-allure-plugin
    ```  <br/>
  6.2. Baixar a dependencia do allure-commandline (para a visualização do relatório numa visão mais clara)
    ```
    $ yarn add allure-commandline
    ```  <br/> 

*_7º Passo - Para executar no formato para abrir o relatório do allure_* <br/>
  7.1. na pasta de test executar o comando (onde a regressão será executada)<br/>
    ```
    $ npx cypress run --env allure=true
    ```  <br/>
  7.2. Para abrir o relatório no navegador deve ser digitado o comando <br/>
    ```
    $ npx allure serve
    ```  <br/>
   *Obs.:* Segue informações de como o relatório será disponibilizado <br/>
  
*Em manutenção*

*Autora:* Cassia Caris <br/>
*Curso:* QAcademy Bootcamp [Avançado em Cypress]
