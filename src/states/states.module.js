//substates


//current controller import Substate from './state1__/substate1/substate1.moudle';
import {homeController} from './home/homeController';

function adminConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "states/home/home.html",
            controller: 'homeController',
            controllerAs: 'Home'
        })
}

export default angular.module('states.module', [
    'ui.router'
])
    .config(adminConfig)
    .controller('homeController', homeController)



// import { homeController } from './home/homeController';
// //current controller
//
// function adminConfig($stateProvider) {
//     $stateProvider
//         .state('home', {
//             url: '/',
//             templateUrl: "states/home/home.html",
//             controller: 'homeController',
//             controllerAs: 'Home'
//         })
// }
//
// export default angular.module('states.module', [
//     'ui.router'
// ])
//     .config(adminConfig)
//     .controller('homeController', homeController)