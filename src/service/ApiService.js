import {url} from './../const/Const'
import Video from './../entites/Video'
import Search from './../parts/Search'

class ApiService {
    constructor(props){     
        this.state={
            value : ''
        }
    }


  
     getVideo = (searchInput) =>{
       
         
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchInput}&type=video&key=AIzaSyChh0yi4FwvMQtj-Qtx2_5q_0xaGjoR-1M`)
        .then(response=> response.json())
        .then(videos =>videos.items.map(video=>new Video(video))
        )

    }


}

export const apiService = new ApiService(); 