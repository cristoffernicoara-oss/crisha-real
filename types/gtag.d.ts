/** Google Ads delayed-navigation conversion helper (injected after cookie consent). */
interface Window {
  gtagSendEvent?: (url: string) => false;
}
