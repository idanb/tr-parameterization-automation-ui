export const API_METHODS = {
    'get': {
        name: 'Get/View/Read',
        executeMethod: 'get',
        successMethod: 'responseGetSuccess',
        actions: {
            GetById:  {
                url: '/get',
                isById: true,
                info: 'get document body by id'
            },
            GetByKey: {
                url: '/getIdsPerKey',
                isById: false,
                successMethod: 'responseGetbyKeysSuccess',
                info: 'get documents body by key'
            }
        }
    },
    post: {
        name: 'Post/Insert/Create',
        executeMethod: 'post',
        successMethod: 'responseInsertSuccess',
        actions: {
            Insert: {
                url: '/insert',
                isById: false,
                info: 'insert new document body by key'
            },
            InsertBulk:  {
                url: '/insert-bulk',
                isById: false,
                info: 'insert new document body by key'
            },
        }
    },
    put: {
        name: 'Put/Update',
        executeMethod: 'put',
        successMethod: 'responseSuccess',
        actions: {
            UpdateById: {
                url: '/update',
                isById: true,
                info: 'update document body by id' },
            UpdateBulkById: {
                url: '/update-bulk',
                isById: true,
                info: 'update document body by id' },
        }
    },
    delete: {
        name: 'Delete/Remove',
        executeMethod: 'delete',
        successMethod: 'responseDeleteSuccess',
        actions: {
            RemoveDataById: {
                url: '/remove',
                isById: true,
                info: "deletes the document and detaching it's id from all related keys" },
            RemoveKey: {
                url: '/remove-key',
                isById: false,
                info: "deletes the key while not deleting the documents." },
        }
    }
};
