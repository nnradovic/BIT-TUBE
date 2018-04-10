import {url} from './../const/Const'


class ApiService {
  
     getVideo = () =>{
       
        return fetch(url)
        .then(response=> response.json())

    }


}

export const apiService = new ApiService(); 