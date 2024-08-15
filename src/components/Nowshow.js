import React,{useState} from 'react';
import "./css/Nowshow.css";
const movies = [
    { title: 'Movie 1', img: '' }, // Add your image paths here
    { title: 'Movie 2', img: '' },
    { title: 'Movie 3', img: '' },
    { title: 'Movie 4', img: '' },
    { title: 'Movie 5', img: '' },
    { title: 'Movie 6', img: '' },
    { title: 'Movie 7', img: '' },
    { title: 'Movie 8', img: '' },
    { title: 'Movie 9', img: '' },
    { title: 'Movie 10', img: '' },
];

const Nowshow = () => {
    const [currentIndex, setCurrentIndex] = useState(2);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    const getMovieClass = (index) => {
        if (index === currentIndex) return 'movie center';
        if (index === (currentIndex - 1 + movies.length) % movies.length) return 'movie left';
        if (index === (currentIndex + 1) % movies.length) return 'movie right';
        return 'movie hidden';
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {movies.map((movie, index) => (
                    <div key={index} className={getMovieClass(index)}>
                        {movie.img ? (
                            <img src={movie.img} alt={movie.title} className="movie-img" />
                        ) : (
                            <div className="movie-placeholder">{movie.title}</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="controls">
                <button className="btn btn-primary" onClick={handlePrev}>{'<'}</button>
                <button className="btn btn-primary" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    );
};

export default Nowshow
