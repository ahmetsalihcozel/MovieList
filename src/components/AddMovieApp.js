import React from "react";
import AddMovie from "./AddMovie";


class AddMovieApp extends React.Component { 



    render() {

        return(
            <AddMovie onAddMovie = {this.addMovie}/>
            )
    }
}

export default AddMovieApp;