# Backend
Este proyecto fue realizado en .NET 8, utilizando el IDE Visual Studio 2022.
## Paquetes requeridos.
- Microsoft.EntityFrameworkCore version 9.0.1
- Microsoft.EntityFrameworkCore.SqlServer version 9.0.1
- Microsoft.EntityFrameworkCore.Tools version 9.0.1
## Consideraciones.
Este proyecto fue creado para trabajar en local, por ende es importante considerar los puertos que se utilizan para luego conectarlo con el frontend.
## Explicación del proyecto
El backend de este proyecto tiene el objetivo de implementar un CRUD para Cookies y sus políticas. Continuamente se explicara el paso a paso del funcionamiento del proyecto.
## Modelos
Los modelos Cookies y Politicas son las entidades con las que trabajaran cada CRUD, las que luego seran creadas tambien en la base datos.
## Context
El context tiene como proposito realizar la conexion del proyecto con la base datos de Sql server.
## Conexion con base de datos.
Para conectar la base de datos debemos considerar agregar lo siguiente a la clase appsettings.json:
```
"ConnectionStrings": {
    "Connection": "Server=ServerName;Database=DatabaseName;Trusted_Connection=true;TrustServerCertificate=true;"
}
```
Luego, debemos agregar la siguiente linea a program.cs para agregar el contexto a la base de datos.
```
var connectionString = builder.Configuration.GetConnectionString("Connection");
builder.Services.AddDbContext<ContextName>(optionsAction: options => options.UseSqlServer(connectionString));
```
Una vez considerado lo anterior, se debe de abrir la consola de NuGet package manager y escribir el siguiente comando:
```bash
Add-Migration NombreDeMigracion
```
Luego si la migracion fue hecha de manera correcta se realiza el siguiente comando para actualizar la base de datos con las entidades creadas en el modelo.
```bash
Update-Databse
```
## Controller
El controller es la clase mas importante, ya que, es la que maneja las operaciones CRUD de cada entidad. Consideraciones, el controller debe ser creado luego de realizar la conexion con la base de datos.
## DTO
La clase DTO tiene el unico objetivo de transferir como objeto un atributo en especifico de la clase cookie, para asi trabajarla en el frontend de una manera que al actualizar, no sea afectada por el CRUD.
# Building Project
Para iniciar el proyecto desde un IDE como Visual Studio 2022, solo se debe de iniciar desde el boton verde en forma de flecha, donde luego abrira una pestaña en el navegador, con la app de swagger con la que se podra visualizar el CRUD creado y de la misma manera comprobar que funcione correctamente.
