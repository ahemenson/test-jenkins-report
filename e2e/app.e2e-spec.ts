import { TestJenkinsReportPage } from './app.po';

describe('test-jenkins-report App', () => {
  let page: TestJenkinsReportPage;

  beforeEach(() => {
    page = new TestJenkinsReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
