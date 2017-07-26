import { ModulesRoutingDemoPage } from './app.po';

describe('modules-routing-demo App', () => {
  let page: ModulesRoutingDemoPage;

  beforeEach(() => {
    page = new ModulesRoutingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
