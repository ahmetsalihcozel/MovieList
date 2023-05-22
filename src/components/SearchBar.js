import React from "react";

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    
    handleClickAddMovie = (e) => {
        e.preventDefault();
        window.location = "http://localhost:3000/add"
    }    


    render() {

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5">
                    <div className="col-10">
                        <input onChange={
                            (e) => {
                                this.setState(
                                    {searchQuery: e.target.value},
                                    this.props.movieFilterFunc(e.target.value)
                                    )}}
                        type="text" 
                        className="form-control" 
                        placeholder="Search a Movie"
                        value={this.state.searchQuery}
                        />
                    </div>
                    <div className="col-2">
                        <button 
                        type="button"
                        className="btn btn-md btn-danger"
                        style={{float:"right"}}
                        onClick={this.handleClickAddMovie}
                        >Add Movie
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}

export default SearchBar;