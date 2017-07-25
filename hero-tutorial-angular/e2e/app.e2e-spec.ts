import { HeroTutorialAngularPage } from './app.po';

describe('hero-tutorial-angular App', () => {
  let page: HeroTutorialAngularPage;

  beforeEach(() => {
    page = new HeroTutorialAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
