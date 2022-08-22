const base_url = "https://api.themoviedb.org"
const API_KEY = "?api_key=5a189ff34bd9b38eb4b94fa7caf9dabb"

async function postGetMovieDetails(url = '') {
    // Default options are marked with *
    const response = await fetch(`${base_url}${url}${API_KEY}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
  }

  async function GetMovieList(url = '') {
    // Default options are marked with *
    const response = await fetch(`${base_url}${url}${API_KEY}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
  }


  export {
    postGetMovieDetails,
    GetMovieList

  }