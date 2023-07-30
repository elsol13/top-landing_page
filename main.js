function createMovieCard(movie) {

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card'; // Creating div.card

  let currentHoveredCard = null;

  // When the card is hovered over
  cardDiv.addEventListener('mouseover', function() {
    // Check if this card is already being hovered over
    if (currentHoveredCard === movie.id) return;
  
    currentHoveredCard = movie.id; // Update the currently hovered card
  
    const infoSection = document.getElementById('info');
    infoSection.style.transition = 'background-image 0.5s ease-in-out, background-color 0.5s ease-in-out';
    infoSection.style.backgroundColor = 'black'; // Fade to black
  
    setTimeout(() => {
      infoSection.style.backgroundImage = `url(${movie.backgroundImage})`; // Set the new background
      infoSection.style.backgroundColor = ''; // Revert the background color
    }, 500); // Match this timeout with the CSS transition duration
  });

  cardDiv.addEventListener('mouseout', function() {
    currentHoveredCard = null;
  });
  

  const moviePosterDiv = document.createElement('div');
  moviePosterDiv.className = 'movie-poster'; // creating div.movie-poster

  const posterImg = document.createElement('img');
  posterImg.src = movie.poster;
  posterImg.alt = '';
  posterImg.className = 'card-img'; // creating img.card-img with $movie.poster

  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'overlay'; // creating div.overlay

  const buttons = [
    { icon: 'eye', title: 'Trailer' },
    { icon: 'plus', title: 'Watchlist' },
    { icon: 'search', title: 'Screening' }
  ];
  
  buttons.forEach((button) => {
    const aTag = document.createElement('a');
    aTag.className = 'button button-icon';
    const imgTag = document.createElement('img');
    imgTag.src = `media/icons/${button.icon}.svg`;
    imgTag.className = 'svg';
    aTag.appendChild(imgTag);
    aTag.appendChild(document.createTextNode(button.title));
    overlayDiv.appendChild(aTag);
  });

  const movieTitleDiv = document.createElement('div');
  movieTitleDiv.className = 'movie-title';
  movieTitleDiv.textContent = movie.name; // div.movie-title with $movie-name

  // appending everything together
  moviePosterDiv.appendChild(posterImg);
  moviePosterDiv.appendChild(overlayDiv);
  cardDiv.appendChild(moviePosterDiv);
  cardDiv.appendChild(movieTitleDiv);

  // Append the card div to the main container on the page
  document.querySelector('.card-container').appendChild(cardDiv); // Assumes you have a div with class "container" to hold the cards
}

function displayAllMovies() {
  const movies = [
      {
        id: 1,
        name: "Oppenheimer",
        director: "Christopher Nolan",
        date: "2023-11-17",
        poster: "media/images/oppenheimer.jpeg",
        backgroundImage: "media/images/oppenheimer_bg.jpeg"
      },
      {
        id: 2,
        name: "Barbie",
        director: "Greta Gerwig",
        date: "2023-06-02",
        poster: "media/images/barbie.jpeg",
        backgroundImage: "media/images/barbie_bg.jpeg"
      },
      {
        id: 3,
        name: "Asteroid City",
        director: "Wes Anderson",
        date: "2023-10-07",
        poster: "media/images/asteroidcity.jpeg",
        backgroundImage: "media/images/asteroidcity_bg.jpeg"
      },
      {
        id: 4,
        name: "Elemental",
        director: "Director", 
        date: "2023-07-14",
        poster: "media/images/elemental.jpeg",
        backgroundImage: "media/images/elemental_bg_2.jpeg"
      }
  ]
  movies.forEach(movie => {
    createMovieCard(movie);
  });
}

document.addEventListener('DOMContentLoaded', displayAllMovies);


window.addEventListener('scroll', function() {
  const trendingSection = document.getElementById('trending');
  const scrollPosition = window.scrollY;
  const parallaxOffset = scrollPosition * 0.2; // You can adjust this value to change the speed of the parallax effect
  trendingSection.style.backgroundPosition = `center ${parallaxOffset}px`;
});
