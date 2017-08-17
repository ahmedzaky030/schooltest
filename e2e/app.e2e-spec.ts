import { SchooltestPage } from './app.po';

describe('schooltest App', () => {
  let page: SchooltestPage;

  beforeEach(() => {
    page = new SchooltestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
