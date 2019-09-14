require('../spec.helper');

context('User can input a value and get FizzBuzz results', () => {
  
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(async () => {
    await browser.close();
  });

  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('My FizzBuzz kata using Javascript');
  });

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content) == ('Fizz');
  })

});