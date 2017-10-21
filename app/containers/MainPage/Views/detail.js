/*
 *
 * MainPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import * as actions from '../actions';
import mainPageSelector from '../selectors';
import messages from '../messages';
import logo from 'assets/img/logof.png';
import H1 from 'components/H1';
import YouTube from 'react-youtube';
import { Link } from 'react-router';

export class Detail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.moduleList = [];
    this.renderModule = this.renderModule.bind(this);
  }

  componentWillMount() {
    this.props.onSearch();
  }
  renderModule(val) {
      console.log(val);
    return (
      <div>
        <div className="container" style={{paddingTop:10}}>
        <div className="row" ></div>
        <br/>
      </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    if (this.props.onSearchSuccess) {
      this.moduleList = this.props.onSearchSuccess[0].articles[parseInt(this.props.params.id)];
      console.log(this.moduleList);
    }
    const meta = (
      <Helmet
        title="Main Page"
        meta={[
          { name: 'description', content: 'Description of Main Page' },
        ]}
      />
    );
    
    if(this.moduleList.yotubeUrl) {
        const opts = {
            paddingTop:20,
            playerVars: {
              autoplay: 1
            }
          };
        this.youtubeView = (
            <YouTube
                videoId={this.moduleList.yotubeUrl}
                opts={opts}
                className="col-md-12"
                onReady={this._onReady}
            />
        )
    }
    const padding = {
      paddingTop: 100,
      paddingBottom:20
    }
    return (
      <div style={padding}>
        {meta}
        <div className="container" style={{paddingTop:10}}>
          <div className="row">
            <div className="col-md-12">
              <H1>{this.moduleList.title}</H1>
              <img className="img-fluid" src={this.moduleList.urlToImage} alt=""/>
              <p className="small">{this.moduleList.author}</p>
              <p className="text-muted" >{this.moduleList.description}</p>
              <span>{this.youtubeView}</span>
            </div>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  onSearch: PropTypes.func,
  onSearchSuccess: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  onSearchSuccess: mainPageSelector('searchSuccess'),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (val) => dispatch(actions.search(val)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
