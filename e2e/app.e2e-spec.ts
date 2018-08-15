import { PortifilioPage } from './app.po';

describe('portifilio App', () => {
  let page: PortifilioPage;

  beforeEach(() => {
    page = new PortifilioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
