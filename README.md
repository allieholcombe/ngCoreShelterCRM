# "AdoptCare" Pet Adoption Facility CRM

### _By Alexandra Holcombe_

**Angular v4 & ASP.NET MVC API application for use by animal shelters and rescues.  Intended to be only accessible to registered users; app has open registration for demo purposes only.**

## Goals
* Gain deeper understanding of frameworks and technologies
* Build app with “real world” architecture
* Combine multiple technologies used during course with skills and concepts learned in internship

![Image demonstrating application's architecture](http://i.imgur.com/urrm2q4.png)

## Future Plans
* Response handling
* Form validation
* Image uploading
* CSS media queries
* Deployment
* Search and result piping
* Matchmaking algorithm
* Mobile version
* Appointment tracking
* Reminders Feed

## Getting Started

### Installing API
* Clone solution to local machine  
`> git clone https://github.com/alexandraholcombe/PetAdoptionCRM.git`  
* Configure database connections in `appsettings.json` and `Startup.cs`  

#### If using .NET Core CLI
[.NET Core command-line interface (CLI) tools](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/)  
* Apply database migrations from inside `src/PetAdoptionCRM` directory  
`> dotnet ef database update`
* Restore NuGet packages  
`> dotnet restore`  
* Build project  
`> dotnet build`  

#### If using Visual Studio
* Apply database migrations using Package Manager Console  
`> Update-Database`
* Restore NuGet packages by right-clicking project in Solution Explorer then selecting `Restore`
* Build project by right-clicking project in Solution Explorer then selecting `Build`
* Compile SCSS using [WebCompiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler)

### Installing Front End
[Angular CLI Installation Instructions](https://github.com/angular/angular-cli#development-hints-for-working-on-angular-cli)

### Requirements
* Microsoft .NET Core Tools (Preview 2)
* (If using Visual Studio) Visual Studio 2015 Update 3
* NPM
* Angular v4
* SASS

[Microsoft .NET Core 1.0.0 Release Notes](https://github.com/dotnet/core/blob/master/release-notes/1.0/1.0.0.md)  
[Release Announcement](https://blogs.msdn.microsoft.com/dotnet/2016/06/27/announcing-net-core-1-0/)

## Technologies Used
* C#
* Visual Studio 2015 Update 3
* .NET Core 1.0.0 Preview 2 003131
* Angular v4 w/Angular CLI
* Node Package Manager (NPM)
* SASS/SCSS
* Firebase Database

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

**Copyright (c) Alexandra Holcombe 2017**
