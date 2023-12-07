import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};

    handleInputChange = (e)=>{
        this.setState({term:e.target.value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className='ui segment searchBar'>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="term">Video Search</label>
                        <input type="text" name="term" id="term" value={this.state.term} onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;