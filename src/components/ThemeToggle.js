import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';

export default class ThemeToggle extends Component {
    render() {
        return(
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <AppConsumer>
                    {(context) => (
                        <React.Fragment>
                        <div className="toggle">
                            <span className="toggleLabel" >light</span>
                            <label className="switch">
                              <input type="checkbox" onClick={context.updateTheme}/>
                              <span className="slider"></span>
                            </label>
                            <span className="toggleLabel">dark</span>
                        </div>
                        </React.Fragment>
                    )}
                </AppConsumer>
            </div>
        );
    }
}
