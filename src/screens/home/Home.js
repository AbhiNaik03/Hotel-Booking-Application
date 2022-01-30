import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import { ImageListItemBar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import moviesData from '../../common/moviesData';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            moviedata : []
        }
        moviesData.forEach((movie) => {
            let newMovieData = {
                id: movie.id,
                poster_url: movie.poster_url,
                title: movie.title,
                release_date: "",
                wiki_url: movie.wiki_url
            }
            const date = new Date(movie.release_date);
            const newDate = date.toUTCString().substring(0,16);
            newMovieData.release_date = newDate;
            this.state.moviedata.push(newMovieData);
        })
    }
    render() {
        let imageListOnClick = function(e) {
            window.location = e.target.alt;
        }
        return (
            <div>   
                <Header />

                <div className="heading">
                    <span>Upcoming Movies</span>
                </div>

                <div className="upcoming-movie-list">
                    <ImageList sx={{ width: 500, height: 450 }} id="image-list" cols={5} rowHeight={250}>
                        {moviesData.map((movie) => (
                            <ImageListItem key={movie.id}>
                            <img
                                src={`${movie.poster_url}?w=248&fit=crop&auto=format`}
                                srcSet={`${movie.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={movie.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={movie.title}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${movie.title}`}
                                >
                                </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </div>

                <div className="flex-container">

                    <div className="left">
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={350} id="image-list-left">
                            {this.state.moviedata.map((movie) => (
                                <ImageListItem key={movie.id} className="left-item" url={movie.wiki_url} onClick={imageListOnClick}>
                                    <img
                                        src={`${movie.poster_url}?w=248&fit=crop&auto=format`}
                                        srcSet={`${movie.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={movie.wiki_url}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={movie.title}
                                        subtitle={"Release Date: " + movie.release_date}
                                        actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${movie.title}`}
                                        >
                                        </IconButton>
                                        }
                                    />
                                </ImageListItem>
                                ))}
                        </ImageList>
                    </div>

                    <div className="right">
                        Movie Filter
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;