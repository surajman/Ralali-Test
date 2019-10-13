var list;
var error;
var html = '';
var retryBtn;
var heading;
const searchText = 'guardian';

fetchMovies = () => {
    list = document.getElementById('moviesList');
    error = document.getElementById('errorDiv');
    retryBtn = document.getElementById('btnRetry');
    heading = document.getElementById('heading');
    fetch(`http://www.omdbapi.com/?apikey=9075f344&y=2014&s=${searchText}`).then(data => data.json()).then(data => {
        heading.append(searchText);
        if(data && data.Search) {
            data.Search.forEach(movie => {
            console.log();
            html += `<li>${movie.Title}</li>`;
            });
            error.style.display = 'none';
            list.style.display = 'block';
            list.innerHTML = html;
            retryBtn.style.display = 'none';
        } else {
            throw new Error('Something Went Wrong');
        }
    }).catch(err => {
        list.style.display = 'none';
        error.style.display = 'block';
        retryBtn.style.display = 'block';
        error.innerHTML = err && err.message;
        console.error(err);
    });
}

window.onload = () => {
    fetchMovies();
};