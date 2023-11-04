//ИНФА ПО ОБЬЕКТАМ
// const userChosenKeyName = 'level';
// let person = {
//   'first name': 'Oleg',  //можно называть кеи через '' почти как угодно
//   age: 24,
//   hobbies: ['Sports','Cooking','JavaScript','Games'],
//   greet: function() {
//     alert('Hi there!')
//   },
//   1.5: 'hello',
//   [userChosenKeyName]: '...' // позволяет создать кей с уже имеющимся названием а что самое важное с вэлью которое укажите вы !
// };

// person.isAdmin = true; 
// // точка и название  позволяет добавить новый элемент в обьект

// delete person.age;
// //позволяет удалить элемент из обьекта

// // person.name = null;
// // озночает то что обьект ещё существует но не имеет вэлью


// const keyName = 'first name';


// console.log(person['first name']);
// // [] позволяет получить доступ к кеям оторые записаны через '' или к числа которые записаны как кеи
// console.log(person[1.5]);
// console.log(person);
// console.log(person[keyName]);


const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
   }
   movieList.innerHTML = '';

const filteredMovies = !filter 
? movies 
: movies.filter(movie =>  movie.info.title.includes(filter));

filteredMovies.forEach( movie => {
    const moviEl = document.createElement('li');
    //  if (!('info' in movie)) или  (movie.info === undefined) {
    //  проверка на существование проперти
    // }
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const{ title: movieTitel } = info;
    const { getFormattedTitle } = movie;
    let text = movie.getFormattedTitle() + ' - ';  // toUpperCase превращает всё в заглавные буквы
    for (const key in info){
     if (key !== 'title'){
        text = text + `${key}: ${info[key]}`;
     }
    };
    moviEl.textContent = text;
    movieList.append(moviEl);
   }); 
};

const addmovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    // .trim удаляет все проблемные символы в начале и конце строки (например пробел табуляция неразрывный пробел итд)
   if (
    title.trim() === ''
    || extraName.trim() === '' 
    || extraValue.trim() === ''
    ) {
        return;
    }

const newMovie = {
    info: {
        title,
        [extraName]:extraValue
  },
  id: Math.random().toString(),
  getFormattedTitle()   {                   // сокращённый вариант добавлять методы
   return this.info.title.toUpperCase();
  }
 };
 movies.push(newMovie);
 renderMovies();
};


const searchMovieHandler = () => {
   const filterfilm = document.getElementById('filter-title').value;
   renderMovies(filterfilm);
};


addMovieBtn.addEventListener('click',addmovieHandler);
searchBtn.addEventListener('click',searchMovieHandler)




