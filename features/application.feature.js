require('../spec.helper');

describe('User can input a value and get FizzBuzz results', () => {
  
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
    expect(await browser.page.title()).to.eql('Full Stack Developer Student | My FizzBuzz kata using Javascript | Clarissa Liljander');
  });

  it('clicks on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
  })

  it('clicks on the "Check" button, before entering a numeric value', async () => {
    await browser.fillIn("input[id='value']", { with: "" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('You need to enter a valid number');
  })

});