import { AdMobPlus, BannerAd } from './admob-plus/capacitor'

(async () => {
const banner = new BannerAd({
    adUnitId: 'ca-app-pub-6671660454181307/4168265514',
})
console.log('logged banner');
await banner.show()

AdMobPlus.addListener('banner.impression', async () => {
    await banner.hide()
})
})();