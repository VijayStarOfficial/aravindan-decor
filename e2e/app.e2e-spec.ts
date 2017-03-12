import { AravindanDecorPage } from './app.po';

describe('aravindan-decor App', () => {
  let page: AravindanDecorPage;

  beforeEach(() => {
    page = new AravindanDecorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
