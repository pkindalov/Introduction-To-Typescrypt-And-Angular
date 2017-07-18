import { ComponentsMarkupPage } from './app.po';

describe('components-markup App', () => {
  let page: ComponentsMarkupPage;

  beforeEach(() => {
    page = new ComponentsMarkupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
