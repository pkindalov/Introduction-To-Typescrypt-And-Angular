import { MyFirstReactAppPage } from './app.po';

describe('my-first-react-app App', () => {
  let page: MyFirstReactAppPage;

  beforeEach(() => {
    page = new MyFirstReactAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
