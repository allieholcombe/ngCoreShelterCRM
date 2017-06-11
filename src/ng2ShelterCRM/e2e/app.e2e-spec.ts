import { Ng2ShelterCRMPage } from './app.po';

describe('ng2-shelter-crm App', () => {
  let page: Ng2ShelterCRMPage;

  beforeEach(() => {
    page = new Ng2ShelterCRMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
