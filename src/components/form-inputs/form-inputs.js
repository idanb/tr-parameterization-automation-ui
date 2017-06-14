/**
 * Created by temp1 on 01/06/17.
 */
import { assign } from 'lodash';

class FormInputsController {
    // @ngInject //
    constructor(ServiceApi, InputsUtils, $httpParamSerializer) {
        assign(this,
            {
                ServiceApi,
                InputsUtils,
                $httpParamSerializer,
            })
    }

    $onInit() {

    }

    updateUrl() {
        this.InputsUtils.updateUrl(this.action, this.params)
    }

}

export const formInputs = {
    bindings: {
        params: '=',
        action: '=',
        method: '='
    },
    templateUrl: 'components/form-inputs/form-inputs.html',
    controller: FormInputsController,
    controllerAs: 'FormInputs'
};
