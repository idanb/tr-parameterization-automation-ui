import * as _ from 'lodash';
const BASE_URL = 'http://172.18.15.200:8080/api/data';

export class InputsUtils {
    // @ngInject
    constructor($httpParamSerializer, ServiceApi) {
        _.assign(this,
            {
                $httpParamSerializer,
                ServiceApi,
                url: BASE_URL,
                initUrl: BASE_URL
            })
    }


    /**
     * update the url query param every change in the params fields
     */
    updateUrl(action, params) {

        let url_params = {
            profile: params.profile,
            'test-name': params.testName,
            'data-provider': params.dataProvider,
            version: params.version,
            level: params.level
        };

        switch (action.isById) {
            case true:
                this.url = `${this.initUrl}${action.url}/${params.id}`
                break;

            case false:
                let queryParams = this.$httpParamSerializer(
                    _.transform(url_params, (res, v, k) => {
                        if (v) res[k] = v;
                    }));
                this.url = `${this.initUrl}${action.url}?${queryParams}`;
                break;

            case 'irrelevant':
                url_params[id] = params.id;
                let queryParam = this.$httpParamSerializer(
                    _.transform(url_params, (res, v, k) => {
                        if (v) res[k] = v;
                    }));
                this.url = `${this.initUrl}${action.url}?${queryParam}`;
                break;
        }
    }


    /**
     * this method execute on user submit, addressing the ServiceApi with the url + url query params
     * and json body depends on the method type.
     * success callback will be called asynchronously when the response is available.
     * error callback called asynchronously if an error occurs or server returns response with an error status.
     */
    executeOnSubmit(method, jsonBody = null) {
        return this.ServiceApi[method](this.url, jsonBody);
    }

    executeAfterPost(params, id) {
        const queryParams = this.$httpParamSerializer(
            _.transform({
                profile: params.profile,
                'test-name': params.testName,
                'data-provider': params.dataProvider,
                version: params.version,
                level: params.level,
                id: id
            }, (res, v, k) => {
                if (v) res[k] = v;
            }));

        let url = `${this.initUrl}/attach?${queryParams}`;
        return this.ServiceApi['put'](url);
    }

    executeAfterGetByKeys(keys) {
        let url = `${this.initUrl}/getAggregatedData`;
        return this.ServiceApi['post'](url,keys);
    }
}


// post: send json data with post and receive id, send 'attach' (put)
