import { AdMobPlus, BannerAd, InterstitialAd  } from '@admob-plus/capacitor';

window.onload = function () {
    (async () => {
        await AdMobPlus.start();

        await AdMobPlus.configRequest({
            tagForChildDirectedTreatment: false,
        });
        const banner = new BannerAd({
            adUnitId: 'ca-app-pub-6671660454181307/4168265514',
        });
        await banner.show();
        
        AdMobPlus.addListener('banner.impression', async () => {
            await banner.hide()
        });

        const interstitial = new InterstitialAd({
            adUnitId: 'ca-app-pub-6671660454181307/1826007355',
          })
          await interstitial.load()
          await interstitial.show()
    })();
}