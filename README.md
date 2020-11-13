# livroAPI

Front End desse projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0 e [SAPUI5 Web Components](https://sap.github.io/ui5-webcomponents/playground) version 1.0.0-rc.9
Back End utilizando [DotNet Core 3.1](https://dotnet.microsoft.com/download/dotnet/current) verion 3.1 e [EF - Entity Framework](https://docs.microsoft.com/pt-br/ef/core/)Version 5.0.0
Banco de dados - [Microsoft Entity Framework Sqlite](https://docs.microsoft.com/pt-br/ef/core/providers/sqlite/?tabs=dotnet-core-cli) Version 5.0.1

# REQUISITOS PARA EXECUTAR O PROJETO

Deverá ter instalado os seguintes componentes:

1ª - [.Net Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) versão 3.1 +
2ª - [Node.js](https://nodejs.org/en/) versão 14.15.0 +
3ª - [Angular CLI](https://angular.io/guide/setup-local)Version 10.2.0 +

## IDE desenvolvimento da sua escolha. (Sugiro)

4ª - [VsCode - Visual Studio Code](https://code.visualstudio.com/) versão 1.51 +

## Iniciar projeto
abra o terminal/ prompt e acesse a pasta WebApi ex: `cd livroAPI/WebApi`, onde está API dotnet Core 3.1, execute o comando  `dotnet build`

## Iniciar o servidor da API dotnet core 3.1
Execute o comando `dotnet run`

## Instalando npm
Abra o terminal e acesse a pasta ClientApi Ex: `cd livroAPI/ClientApi`, execute o comando`npm install` para instalar as dependencias do angular e sapui5 web components.

## Servidor de Desenvolvimento
Execute `ng serve` para iniciar um servidor de desenvolvimento na pasta "ClientApi". Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você não alterar qualquer um dos arquivos de origem.


# Obs:

## Caso a pasta migrations não esteje no projeto.
Execute o comando `dotnet ef migrations add initial`  - Este comando gera a pasta migrations e cria o banco de dados e suas conexões.

## Caso os dados do banco não esteje carregando...
execute o comando `dotnet ef database update`

## Lembrete...
Os comandos `dotnet build` e `dotnet run` deve ser executado pelo terminal ou prompt de comando de de dentro da pasta da API Dotnet `WebApi`.

os comandos `npm install` e `ng serve` devem ser executados pelo terminal ou prompt de comando de dentro da pasta do cliente front end `ClientApi`.


Obrigado e bons estudos.





## “Jesus, porém, olhando para eles, disse:

## Para os homens é impossível, mas não para Deus, porque para Deus todas as coisas são possíveis”. (Marcos 10:27)`

