/**
 * Created by temp1 on 01/06/17.
 */
import * as _ from 'lodash';

class ShowNameController {
    // @ngInject //
    constructor(ServiceApi){
        // _.assign(this, {
        //     ServiceApi,
        //     name:'idan'
        // });
        this.name= "adsasd";
    }

    $onInit(){
    //     console.log('ngInit');
    // this.ServiceApi.get()
    //     .then((data)=> {
    //     console.log(data);
    //     })

    }
}

export const showName = {
    bindings: {},
    templateUrl: './components/show-name/show-name.html',
    controller: ShowNameController,
    controllerAs: 'ShowName'
};