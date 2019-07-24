# FifaLeague

Ventigrate's Fifa game score tracker

## Commands executed

´´´shell
ng new FifaLeague.UI
cd FifaLeague.UI
ng generate component playerlist
ng generate component playerform
ng generate component playerpage
ng generate service fifaLeague
´´´

## Open Visual code

´´´shell
code .
´´´
dotnet add Microsoft.EntityFrameworkCore
dotnet add Microsoft.AspNet.WebApi.Core

## Run project

### Run UI

´´´shell
cd FifaLeague.UI
npm start
´´´

### Run API

´´´shell
cd FifaLeague.API
dotnet run
´´´

### Build DB

More info
[https://hub.docker.com/r/microsoft/mssql-server-windows-developer/](https://hub.docker.com/r/microsoft/mssql-server-windows-developer/)

´´´
docker run -d -p 1433:1433 -e sa_password=Pass@word1 -e ACCEPT_EULA=Y microsoft/mssql-server-windows-developer
´´´
