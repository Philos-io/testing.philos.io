describe('AppDirective', function() {


  beforeEach(module('persgroep'));


  var element, scope;


  beforeEach(inject(function($compile, $rootScope){

    scope = $rootScope.$new();
    scope.name = 'persgroep';
    scope.location = 'Belgium';



    console.log(scope);
    element = '<company location={{location}} name={{name}}></company>';

    element = $compile(element)(scope);
    scope.$digest();
  }));


  it('Should be an element directive named company', function(){
    console.log(element[0].tagName)
    expect(element[0].tagName).to.be.equal('COMPANY');
  });


  it('Should have an attribute location and it should be equal to Belgium');
  it('Should have an attribute name and it should be equal to persgroep');
});
