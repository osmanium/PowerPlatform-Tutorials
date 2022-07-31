# .Net Standard 2.0 Plugin Sample (Experimental)

Based on .Net Standard compatibility table below, it is possible to reference .Net Framework assemblies
Reference: https://dotnet.microsoft.com/en-us/platform/dotnet-standard#versions

![WebResource](Images/Versions.png)

## Limitations

- If you register the assembly manually via Plugin Registration Tool it works, but with the new Package registration, it does not work.
  ![WebResource](Images/Limits1.png)

## Create New Project

Create a new class library (not .Net Framework).
![WebResource](Images/Project1.png)

Name the project and select the location.
![WebResource](Images/Project2.png)

Select .Net Standard 2.0. Version above 2.0 does not support .Net Framework references.
![WebResource](Images/Project3.png)

If you add "Microsoft.CrmSdk.CoreAssemblies" nuget package to project, it won't stop you but it will give warning, saying it is not fully compatible.
![WebResource](Images/Project4.png)
![WebResource](Images/Project5.png)

And it will register with no problems
![WebResource](Images/Project6.png)
![WebResource](Images/Project6.1.png)

## Create New Project - Dataverse.Client

If you create a new .Net Standard 2.0 project with "Microsoft.PowerPlatform.Dataverse.Client" nuget package, you will still receive the same warning message.

![WebResource](Images/Project7.png)
![WebResource](Images/Project8.png)

And will still let you register the plugin assembly.

![WebResource](Images/Project9.png)

## Result

As it is already mentioned in Microsoft documentation, plugins will continue using .Net Framework 4.6.2 or above, there is no official support for .Net Standard.

## References

- https://dotnet.microsoft.com/en-us/platform/dotnet-standard
- https://docs.microsoft.com/en-us/power-apps/developer/data-platform/sdk-client-transition
