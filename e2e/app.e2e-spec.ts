import { UxvPage } from './app.po';

describe('uxv App', function() {
  let page: UxvPage;

  beforeEach(() => {
    page = new UxvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
