import vendors from 'vendor'
import servicesModule from 'services/services.module'
import statesModule from 'states/states.module'
import componentsModule from 'components/components.module'

class AppController {

  constructor() {
    this.title = 'Parameterization Automation Interface';
    this.info = 'this is the deployment script';
    this.version = '1.0.0';
  }
}

function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
   $urlRouterProvider.otherwise('/');

}

angular.module('app.starter', [
    'ui.router',
    'ui.ace',
    'ui.bootstrap',
    'toaster',
    servicesModule.name,
    statesModule.name,
    componentsModule.name
]).config(appConfig)
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
