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
import logo from 'assets/img/circus.png';
import {Tabs, Tab} from 'react-bootstrap';
import { Link } from 'react-router';

export class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.moduleList = [];
  }

  componentWillMount() {
    this.props.onSearch();
  }

  render() {
    if (this.props.onSearchSuccess) {
      this.moduleList = this.props.onSearchSuccess[0].profile;
      this.followingData = this.props.onSearchSuccess[0].following.length;
      this.followerData = this.props.onSearchSuccess[0].follower.length;
      this.starsData = this.props.onSearchSuccess[0].stars.length;
      this.reposData = this.props.onSearchSuccess[0].searchRepo.length;
      console.log(this.followerData);
    }
    const meta = (
      <Helmet
        title="Main Page"
        meta={[
          { name: 'description', content: 'Description of Main Page' },
        ]}
      />
    );
    const padding = {
      paddingTop: 100,
      background: '#23d1b1',
      boxShadow: 1,
      paddingBottom:20
    }
    return (
      <div>
        {meta}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="img-responsive img-rounded" src={this.moduleList.avatar_url} alt="" style={{height:230, width:230}}/>
              <div className="page-header">
                <h2>{this.moduleList.name}<br/><small>{this.moduleList.login}</small></h2>
                <p className="help-block">{this.moduleList.bio}</p>
                <button type="button" className="btn btn-default btn-block" style={{width:230}}><strong>Follow</strong></button>
                <small><a href="#">Block or report user</a></small>
              </div>
              <div className="page-header" style={{marginTop: 20,textAlign: "center"}}>
                <p><a href="#">Developer Program Member</a></p>
              </div>
                <table>
                  <tr>
                    <td style={{textAlign: "center"}}><i className="fa fa-users"/></td>
                    <td><span>&nbsp;{this.moduleList.company}</span></td>
                  </tr>
                  <tr>
                    <td style={{textAlign: "center"}}><i className="fa fa-map-marker"/></td>
                    <td><span>&nbsp;{this.moduleList.location}</span></td>
                  </tr>
                  <tr>
                    <td style={{textAlign: "center"}}><i className="fa fa-envelope-o"/></td>
                    <td><span>&nbsp;{this.moduleList.email}</span></td>
                  </tr>
                  <tr>
                    <td className="centered"><i className="fa fa-link"/></td>
                    <td><span>&nbsp;{this.moduleList.blog}</span></td>
                  </tr>
                </table>
            </div>
            <div className="col-md-8">
              <ul className="nav nav-justified">
                <li className="active"><a href="#">Overview</a></li>
                <li><a href="#">Repositories <span className="badge">{this.moduleList.public_repos}</span></a></li>
                <li><a href="#">Stars <span className="badge">{this.starsData}</span></a></li>
                <li><a href="#">Followers <span className="badge">{this.followerData}</span></a></li>
                <li><a href="#">Following <span className="badge">{this.followingData}</span></a></li>
              </ul><hr style={{marginTop:0}}/>
              <div className="col-md-12">
                <h4>Pinned repositories</h4>
                <div className="panel-horizontal">
                  <div className="panel panel-default col-md-6">
                    <div className="panel-body">
                      <h4><a href="#">mailchimp-nodejs</a></h4>
                      <span className="help-block">
                        Unofficial Node.js Client Library for MailChimp API http://developer.mailchimp.com
                      </span>
                      <div>
                        <span>
                          <i className="fa fa-circle" style={{color:"#f1e05a"}}/>Javascript &nbsp;&nbsp;&nbsp;
                          <i className="fa fa-star" style={{color:"#586069"} }/>2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
