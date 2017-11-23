const { Given, Then, When } = require('cucumber');
const  assert  = require('assert');

Given(/^The contact list is display$/, function (callback) {
    this.browser.visit("http://localhost:3000", (err) => {

        let c =  this.browser.tabs.current.Contact;
        let list = c.Contacts.instance().iterator();
        let tab=[];
        while(list.hasNext()){
            let contact = list.next();
            tab.push(contact)
        }

        if (err) throw err;
            for(let i = 0; i<tab.length;++i){
                assert.ok(tab[i].firstName() == this.browser.query('#contacts').querySelectorAll('#cellFirstName')[i+1].textContent
                && tab[i].lastName() == this.browser.query('#contacts').querySelectorAll('#cellLastName')[i+1].textContent);
            }
        callback();
    });
});

When(/^User clicks on remove button of the first contact$/, function (callback) {
    this.browser.visit("http://localhost:3000", (err) => {
        if (err) throw err;

        callback();
    });
});

Then(/^The first contact is removed$/, function (callback) {
    this.browser.visit("http://localhost:3000", (err) => {
        if (err) throw err;

        callback();
    })
})