const { expect } = require('chai');
const { Builder, By } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

describe('百度首页 UI 测试', () => {
  // this.timeout(50000);
  let driver, by;
  before(async () => {
    driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments(['headless']))
    .build();
    by = await new By();
  });

  it('should have title “百度一下，你就知道”', done => {
    driver.get('https://www.baidu.com').then(() => {
      driver.getTitle().then(title => {
        expect(title).to.equal('百度一下，你就知道');
        done();
      });
    });
  });

  it('should have button value “百度一下”', done => {
    driver.findElement(by.id('su').then(button => {
      button.getAttribute('value').then(val => {
        expect(val).to.equal('百度一下');
        done();
      })
    }));
  });

  after(async () => {
    await driver.quit();
  });
})
