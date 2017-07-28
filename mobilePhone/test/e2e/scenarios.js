'use strict';

describe('mobilephone App E2E Testing', function() {
	it('should automatically redirect to / when location hash/fragment is empty', function() {
	    browser.get('index.html');
	    expect(browser.getLocationAbsUrl()).toMatch("/");
	  });
	describe('index', function() {
	    beforeEach(function() {
	      browser.get('index.html#/');
	    });

	    it('should have a title', function() {
	      expect(browser.getTitle()).
	        toEqual('Điện thoại di động');
	    });
	  });
	describe('list 0 item', function() {
	    beforeEach(function() {
	      browser.get('index.html#!/list/0');
	    });

	    it('should have a name', function() {
	          var name = element(by.binding('mobile.name'));
	          expect(name.getText()).
	             toEqual('Iphone 7 Plus  Hot');
	    });

	    it('should show the number of comments as', function() {
	         expect(element.all(by.repeater('comment in mobile.comments'))
	            .count()).toEqual(3);

	    });

	    it('should show the first comment author as', function() {
	    	element(by.model('orderText')).sendKeys('author');
	        expect(element.all(by.repeater('comment in mobile.comments'))
	        		.count()).toEqual(3);
	          var author = element.all(by.repeater('comment in mobile.comments'))
	                      .first().element(by.binding('comment.author'));

	          expect(author.getText()).toContain('John Lemon, Oct. 17, 2012');

	    }); 
	 });  
});