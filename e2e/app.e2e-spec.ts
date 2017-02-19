import { Angular2musicPage } from './app.po';

describe('angular2music App', function() {
  let page: Angular2musicPage;

  beforeEach(() => {
    page = new Angular2musicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
