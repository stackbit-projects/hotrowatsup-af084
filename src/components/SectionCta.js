import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-cta outer">
              <div className="inner">
                <div className="has-gradient">
                  <div className="grid grid-middle grid-center">
                    {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
                    <div className="grid-item block-header">
                      {_.get(section, 'title', null) && (
                      <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                      )}
                      {_.get(section, 'subtitle', null) && (
                      <p className="block-subtitle">{htmlToReact(_.get(section, 'subtitle', null))}</p>
                      )}
                    </div>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="grid-item block-buttons">
                      <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
              
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-close" aria-hidden="true" /></button>
                      <ul className="menu">
                      {_.map(_.get(this.props, 'data.config.header.nav_links', null), (action, action_idx) => {
                          let page_url = _.trim(_.get(this.props, 'page.__metadata.urlPath', null), '/');
                          let action_url = _.trim(_.get(action, 'url', null), '/');
                          return (
                            <li key={action_idx} className={classNames('menu-item', {'has-children': _.get(action, 'has_subnav', null) && _.get(action, 'subnav_links', null), 'current': page_url === action_url, 'menu-button': _.get(action, 'style', null) !== 'link'})}>
                              <ActionLink {...this.props} action={action} />
                              {(_.get(action, 'has_subnav', null) && _.get(action, 'subnav_links', null)) && (<React.Fragment>
                                <button className="submenu-toggle"><span className="icon-angle-right" aria-hidden="true" /><span className="screen-reader-text">Sub-menu</span></button>
                                <Submenu {...this.props} submenu={_.get(action, 'subnav_links', null)} menu_class={'submenu'} page={this.props.page} />
                              </React.Fragment>)}
                            </li>
                          )
                      })}
                      </ul>
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                  </React.Fragment>)}
            </section>
        );
    }
}
