export class AppTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-test-app h1')).getText();
  }
}
