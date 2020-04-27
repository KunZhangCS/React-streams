import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    // with React-Router, each component needs to be designed to work in isolation(fetch its own data!)
    // So fetch the stream independently here, otherwise if the user open the edit page directly other than from the main page (streamlist), then
    // stream will be undefined.
    componentDidMount() {
        //this.props from the React Router has the match prop
        this.props.fetchStream(this.props.match.params.id);
    }
    
    onSubmit = (formValues) => {
        // formValues only contain title and description as passed from initialValues
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* initialValues is a very special prop name with Redux Form */}
                {/* Redux Form will use this initialValues to fill the Field in child component StreamForm */}
                <StreamForm 
                // Just pass title and description not the other props like id and userID
                // Without lodash, { {title : this.props.stream.title, desription: this.props.stream.desription}}
                initialValues={_.pick(this.props.stream, 'title', 'description')}
                onSubmit={this.onSubmit} 
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);