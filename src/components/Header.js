import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import ActionLink from './ActionLink';
import Submenu from './Submenu';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'data.config.header.logo_img', null) ? (
                    <p className="site-logo"><Link href={withPrefix(_.get(this.props, 'data.config.header.url', null) || '/')}><img src={withPrefix(_.get(this.props, 'data.config.header.logo_img', null))} alt={_.get(this.props, 'data.config.header.logo_img_alt', null)} /></Link></p>
                    ) : 
                    <p className="site-title"><Link href={withPrefix(_.get(this.props, 'data.config.header.url', null) || '/')}>{_.get(this.props, 'data.config.header.title', null)}</Link></p>
                    }
                  </div>
                </div>
              </div>
            </header>
        );
    }
}
