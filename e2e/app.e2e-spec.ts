import { WdFinalProjAngularPage } from './app.po';

describe('wd-final-proj-angular App', () => {
  let page: WdFinalProjAngularPage;

  beforeEach(() => {
    page = new WdFinalProjAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
