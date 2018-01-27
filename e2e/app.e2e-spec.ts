import { LinalgoPage } from './app.po';

describe('linalgo App', () => {
  let page: LinalgoPage;

  beforeEach(() => {
    page = new LinalgoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
