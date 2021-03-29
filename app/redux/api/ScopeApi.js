
export default class ScopeApi {
  constructor(api) {
    this.api = api
  }

  // Get All scopes
  getAllScopes = () => {
    return new Promise((resolve, reject) => {
      this.api.getOauthScopes({}, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  // Get scope by inum
  getScope = async (inum) => {
    return new Promise((resolve, reject) => {
      this.api.getOauthScopesByInum(inum, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }  
  
  // Get scope by id
  getScope = async (id) => {
    return new Promise((resolve, reject) => {
      this.api.patchOauthScopesById(id, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

//Add Scope Config
  addNewScope = (input) => {
	  console.log('Scope Api add data ='+JSON.stringify(input))
    return new Promise((resolve, reject) => {
      this.api.postOauthScopes(input, (error, data) => {
        if (error) {
        	console.log('Scope Api add error ='+error)
          reject(error)
        } else {
        	 console.log('Scope Api add response ='+data)
          resolve(data)
        }
      })
    })
  }
  
  editAScope = (input) => {
	  console.log('Scope Api editAScope data ='+JSON.stringify(input))
	    return new Promise((resolve, reject) => {
	      this.api.putOauthScopes(input, (error, data) => {
	        if (error) {
	        	console.log('Scope Api editAScope error ='+error)
	          reject(error)
	        } else {
	        	 console.log('Scope Api editAScope response ='+data)
	          resolve(data)
	        }
	      })
	    })
	  }

  // Delete existing scope
  deleteScope = async (inum) => {
    return new Promise((resolve, reject) => {
      this.api.deleteOauthScopesByInum(inum, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}



