import { DependencyInjectionDemoPage } from './app.po';

describe('dependency-injection-demo App', () => {
  let page: DependencyInjectionDemoPage;

  beforeEach(() => {
    page = new DependencyInjectionDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
