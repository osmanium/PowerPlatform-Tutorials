# Nuget Packages

.Net Framework

- Microsoft.CrmSdk.CoreAssemblies

.Net Core

- Microsoft.PowerPlatform.Dataverse.Client

# IServiceProvider

var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

var cloudService = (IServiceEndpointNotificationService)serviceProvider.GetService(typeof(IServiceEndpointNotificationService));

IOrganizationService service = (IOrganizationService)serviceProvider.GetService(typeof(IOrganizationService));

IOrganizationServiceFactory factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
CurrentUserService = factory.CreateOrganizationService(PluginExecutionContext.UserId);
SystemUserService = factory.CreateOrganizationService(null);
