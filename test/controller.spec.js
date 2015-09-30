// var expect = chai.expect;


describe('MainController', function(){

  beforeEach(module('persgroep'));



  var scope, main;

  beforeEach(inject(function($rootScope, $controller, $httpBackend){

    scope = $rootScope.$new();

    main = $controller('MainController', {
      $scope: scope
    });

    console.log($httpBackend)

    $httpBackend.whenGET('/api/users').respond({});


  }));

  it('test', function(){
    expect()
  })

  xit('Should have a property name and its name should equal persgroep', function(){



    expect(main).has.a.property('name').that.equal('persgroep');
  });

  xit('Should have a property location', function(){
    expect(main).has.a.property('location');
  });

  xit('Should have a property activate of type function', function(){
    expect(main).has.a.property('activate').is.a('function');
  });

});
