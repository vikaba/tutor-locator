import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to wd-project-angular!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to wd-final-project-angular!');
>>>>>>> bd365290dfde6b48923ecfd37b35d9e3674f5119
  });
});
