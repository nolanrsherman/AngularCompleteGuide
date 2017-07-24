import { CompleteGuideProjectPage } from './app.po';

describe('complete-guide-project App', () => {
  let page: CompleteGuideProjectPage;

  beforeEach(() => {
    page = new CompleteGuideProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
