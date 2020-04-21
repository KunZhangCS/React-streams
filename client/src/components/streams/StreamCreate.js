import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // { input } decomposes of form Props of the Field
    renderInput( { input } ){ 
        return <input { ...input }/>
    }
    
    render() {
         return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
         );
    }   
}

export default reduxForm( {
    form: 'streamCreate'
})(StreamCreate);