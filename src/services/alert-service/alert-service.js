import * as _ from 'lodash';

export class AlertService {
    // @ngInject
    constructor(toaster) {
        _.assign(this,
            {
                toaster
            })
    }

    openSuccess(title = 'API call Success', message = 'Call success'){
        this.toaster.pop('success', title, `<span>${message}</span>`, 5000, 'trustedHtml');

    }

    openError(title  = 'API call fails' ,message  = 'Call fails'){
        this.toaster.pop('error', title, `<span>${message}</span>`, 5000, 'trustedHtml');

    }
}
