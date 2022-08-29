using System;
using Microsoft.AspNetCore.Components;
using myportfolio.Client.AppTheme;
using myportfolio.Services;

namespace myportfolio.Shared
{
    public partial class LandingLayout : LayoutComponentBase
    {
        [Inject] protected LayoutService LayoutService { get; set; } = default!;
        
        private bool _drawerOpen = false;
        
        protected override void OnInitialized()
        {
            LayoutService.SetBaseTheme(Theme.LandingPageTheme());

            base.OnInitialized();
        }
        
        private void ToggleDrawer()
        {
            _drawerOpen = !_drawerOpen;
        }

    }
}