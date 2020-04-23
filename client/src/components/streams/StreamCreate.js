import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // {error, touched} destructured from meta
    renderError( {error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // { input, label, meta } destructures of props of the Field
    // turn it to arrow function to use this keyword
    renderInput = ({input, label, meta} ) => { 
        // highlight the error fields 
        const className = `field ${meta.error && meta.touched ? 'error': '' }` 
        return (
            <div className={className}>
                <label>{label}</label>
                {/* Turn off auto complete input */}
                <input {...input} autoComplete="off" /> 
                {this.renderError(meta)}               
            </div>
        )         
    }

    onSubmit(formValues){
        // Do not need the event.preventDefatult(), as handleSubmit can handle that.
        // fromValues come from Fields when handleSubmit is called
        console.log(formValues);
    }
    
    render() { 
         return (
             // this.props is from redux-form
             // add class 'error' to form to display error message as required by Semantic UI
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
         );
    }   
}

// Redux form will put the errors objects props to Field's component prop (this.renderInput) with the same name props
// The validation is going to be run when the form is rendered on the screen or anytime user interacts with it
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm( {
    form: 'streamCreate',
    validate
})(StreamCreate);