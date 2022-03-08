import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      maxResults: 8,
      type: 'video',
      videoEmeddable: true,
    },
    contentType: 'application/json',
    success: function(data) {
      // callback(data);
      console.log(data);
      callback(data);
    },
    error: function(data) {
      console.log('oh no!');
    }

  });
};



export default searchYouTube;
