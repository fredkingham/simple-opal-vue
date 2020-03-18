let BASE_URL = '/api/v0.1/'


class Http{
  static getCookie() {
    var name = "XSRF-TOKEN"
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  static getHeaders(){
    return new Headers({
        'X-XSRF-TOKEN': this.getCookie(),
        'Content-Type': 'application/json'
    });
  }

  static getUrl(someUrl){
    return fetch(someUrl).then(function(response) {
      if(response.status === 401){
        alert('you need to log in dude')
      }
      return response.json();
    })
  }
  static createUrl(modelName, id){
    if(id){
      return BASE_URL + modelName + "/" + id + "/";
    }
    return BASE_URL + modelName + "/";
  }
  static getOne(modelName, id) {
    let url = this.createUrl(modelName, id);
    return this.getUrl(url);
  }
  static saveUrl(url, values, method){
    if(!method){
      method="POST"
    }
    var fetchArgs = {
      method: method,
      credentials: 'include',
      body: JSON.stringify(values),
      headers: this.getHeaders()
    }

    return fetch(url, fetchArgs).then(function(response) {
      return response.json();
    }).catch(function(x){
      alert("Unable to send! " + x);
    });
  }
  static saveSubrecord(modelName, values){
    var method = "POST";

    if(values.id){
      method = "PUT"
    }
    return this.saveUrl(this.createUrl(modelName, values.id), values, method);
  }
  static deleteSubrecord(modelName, id){
    var fetchArgs = {
      method: "DELETE",
      credentials: 'include',
      headers: this.getHeaders()
    }
    return fetch(this.createUrl(modelName, id), fetchArgs).then(function(response) {
      return response.json();
    }).catch(function(x){
      alert("Unable to send! " + x);
    });
  }
}

export default Http

