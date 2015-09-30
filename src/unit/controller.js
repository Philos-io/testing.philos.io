(function(){

    angular.module('persgroep')
      .controller('MainController', MainController);


      function MainController(){
        this.name = 'persgroep';

        this.location = '';

        this.activate = function(){}
      }

})();
