import React from "react";
import axios from "axios";

class AddMovie extends React.Component { 

    handleFormAddMovieSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('#myForm');
        const formData = new FormData(form);
        const movies = {};
        formData.forEach((value, key) => movies[key] = value);
        const moviesJson = movies;
        await axios.post("http://localhost:3001/movies", moviesJson);
        window.location = "http://localhost:3000"
    }    


    render() {

        return(
            <div className="container">
            <form className="mt-5" id="myForm">
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text"
                                className="form-control" 
                                name="rating"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" onClick={this.handleFormAddMovieSubmit}/>
            </form>
        </div> 
        )
    }
}

export default AddMovie;