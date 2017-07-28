describe('Controller: ListController', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var ListController, scope, $httpBackend;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, listFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("http://localhost:3000/mobiles").respond([
		{
		"id": 0,
		"name": "Iphone 7 Plus",
		"image": "images/blackberry.jpg",
		"label": "Hot",
		"price": "20.000.000đ",
		"title": "Điện thoại Iphone 7 Plus",
		"manhinh": "LED-backlit IPS LCD, 5.5, Retina HD",
		"hdh": "iOS 10",
		"camerasau": "2 camera 12 MP",
		"cameratruoc": "7 MP",
		"cpu": "Apple A10 Fusion 4 nhân 64-bit",
		"ram": "3 GB",
		"bonhotrong": "128 GB",
		"thenho": "Không",
		"thesim": "1 Nano SIM, Hỗ trợ 4G",
		"dungluongpin": "2900 mAh, Không",
		"comments": [{}]
		},
		{
		"id": 1,
		"name": "Iphone 7 Plus",
		"image": "images/bphone.png",
		"label": "Hot",
		"price": "20.000.000đ",
		"title": "Điện thoại Iphone 7 Plus",
		"manhinh": "LED-backlit IPS LCD, 5.5, Retina HD",
		"hdh": "iOS 10",
		"camerasau": "2 camera 12 MP",
		"cameratruoc": "7 MP",
		"cpu": "Apple A10 Fusion 4 nhân 64-bit",
		"ram": "3 GB",
		"bonhotrong": "128 GB",
		"thenho": "Không",
		"thesim": "1 Nano SIM, Hỗ trợ 4G",
		"dungluongpin": "2900 mAh, Không",
		"comments": [{}]
}
      ]);

    scope = $rootScope.$new();
    ListController = $controller('ListController', {
      $scope: scope, listFactory: listFactory
    });
            $httpBackend.flush();

  }));
  

	  it('should create "mobiles" with 2 mobiles fetched from xhr', function(){

	      expect(scope.showList).toBeTruthy();
	      expect(scope.mobiles).toBeDefined();
	      expect(scope.mobiles.length).toBe(2);

	  });

	  it('should have the correct data order in the mobiles', function() {

	      expect(scope.mobiles[0].name).toBe("Iphone 7 Plus");
	      expect(scope.mobiles[1].label).toBe("Hot");

	  });

});