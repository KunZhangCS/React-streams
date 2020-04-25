import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    // with React-Router, each component needs to be designed to work in isolation(fetch its own data!)
    // So fetch the stream independently here, otherwise if the user open the edit page directly other than from the main page (streamlist), then
    // stream will be undefined.
    componentDidMount() {
        //this.props from the React Router has the match prop
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return <div>{this.props.stream.title}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);