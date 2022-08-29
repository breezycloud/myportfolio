using myportfolio.Services;
using Microsoft.AspNetCore.Components;

namespace myportfolio.Shared;

public partial class AppBarButtons
{    
    [Inject] private LayoutService LayoutService { get; set; } = default!;    
    protected override async Task OnInitializedAsync()
    {    
        await base.OnInitializedAsync();
    }    
}