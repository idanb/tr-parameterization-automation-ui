import * as _ from 'lodash';
import {API_METHODS } from 'constants/api-methods';

export class homeController {
    // @ngInject //
    constructor(InputsUtils,AlertService) {
        _.assign(this,
            {
                methods: API_METHODS,
                params: {id:''},
                actionSelected: {
                    isById: false
                },
                methodSelected: {},
                InputsUtils: InputsUtils,
                AlertService: AlertService,
                methodActions: null
            });
    }

    /**
     *
     * @param method
     * set the selected method by user, options: get|post|delete\put
     */
    toggleMethod(method) {
        this.methodSelected = method;
        this.methodActions = method.actions;
        const firstAction =_.keys(method.actions)[0];
        this.toggleMethodAction(method.actions[firstAction]);
        this.InputsUtils.updateUrl(method.actions[firstAction],this.params);
    }

    /**
     *
     * @param action is the method action selected by user i.e post: insert | insertBulk
     */
    toggleMethodAction(action) {
        this.actionSelected = action;
        this.InputsUtils.updateUrl(this.actionSelected, this.params);
    }

    responseGetbyKeysSuccess(response){
        this.AlertService.openSuccess('data');
        this.InputsUtils.executeAfterGetByKeys(response.data).then((response)=>{
            debugger;
            this.params.jsonBody = JSON.stringify(response.data);
        }, this.responseError);
    }

    responseGetSuccess(response){
        this.AlertService.openSuccess('get data success');
        this.params.jsonBody = response.data;
    }

    responseInsertSuccess(response){ //localhost:8080/api/data/attach?test-name=X&data-provider=X&version=X&profile=X&id=X
        this.AlertService.openSuccess(`insert call success: id:${response.data}`);
        this.InputsUtils.executeAfterPost(this.params, response.data).then((response)=>{
            console.log(response);
            this.AlertService.openSuccess(`put call success: id:${response.data}`);
        }, this.responseError);
    }

    responseDeleteSuccess(response){
        this.AlertService.openSuccess('Delete success');
    }

    responseSuccess(response){
        this.AlertService.openSuccess('Success');
    }

    responseError(response){
        this.AlertService.openError(response.data.error,response.data.message);
        console.log(response);
    }


    onSubmit() {
        debugger;
        let methodSuccess = this.actionSelected.successMethod || this.methodSelected.successMethod;
        let methodExecute = this.actionSelected.executeMethod || this.methodSelected.executeMethod;

        this.InputsUtils.executeOnSubmit(methodExecute,this.params.jsonBody)
            .then(this[methodSuccess].bind(this), this.responseError.bind(this));
    }
}

