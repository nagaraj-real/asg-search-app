import { AsgsearchappPage } from './app.po';

describe('asgsearchapp App', () => {
  let page: AsgsearchappPage;

  beforeEach(() => {
    page = new AsgsearchappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
