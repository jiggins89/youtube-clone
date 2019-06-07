import axios from 'axios';

const KEY = 'AIzaSyB7pmQJYgRfQbPCfO2-bySY0xqT9LCtLtY';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
