
export class ServiceApi {
    // @ngInject
    constructor($http) {
        this.$http = $http;
        // this.baseUrl = 'test.json';
        this.headers = {
            "Content-Type": "application/json"
        };
    }

    get(url) {
        return this.$http.get(url, this.headers);
    }

    post(url,data) {
        return this.$http.post(url, data, this.headers);
    }

    delete(url) {
        return this.$http.delete(url, this.headers);
    }

    put(url,data) {
        return this.$http.put(url, data, this.headers);
    }
}


// post: send json data with post and receive id, send 'attach' (put)
