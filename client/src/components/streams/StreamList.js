import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.descripton}</div>
                    </div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // We need an array for render method 
    //Object.values returns an array od a given objects' own enumerable property values
    return { streams: Object.values(state.streams)};
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);