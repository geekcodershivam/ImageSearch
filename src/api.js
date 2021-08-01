/**https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1583ada955f818856c5692be7cb57c4e&per_page=3&format=json&nojsoncallback=1**/

import axios from 'axios';

export default axios.create({
    baseURL:'https://www.flickr.com/services/rest'
});