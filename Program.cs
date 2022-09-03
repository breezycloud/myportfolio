using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using myportfolio.Services;
using MudBlazor;
using MudBlazor.Services;
using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using myportfolio;

public class Program
{
    public static async Task Main(string[] args)
    {
        var builder = WebAssemblyHostBuilder.CreateDefault(args);
        builder.RootComponents.Add<App>("#app");
        builder.RootComponents.Add<HeadOutlet>("head::after");

        builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

        builder.Services.AddBlazoredLocalStorage();
        builder.Services.AddMudServices();     
        builder.Services.AddScoped<LayoutService>();
        builder.Services.AddScoped<IUserPreferencesService, UserPreferencesService>();

        await builder.Build().RunAsync();
    }
}