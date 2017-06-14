/**
 * Created by idannaim on 8/12/15.
 */
import {ServiceApi} from './service-api/service-api'
import {InputsUtils} from './inputs-utils/inputs-utils'
import {AlertService} from './alert-service/alert-service'

export default angular.module('services.module', [])
.service('ServiceApi',ServiceApi)
.service('InputsUtils',InputsUtils)
.service('AlertService',AlertService)