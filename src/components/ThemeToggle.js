import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';

export default class ThemeToggle extends Component {
    render() {
        return(
            <div className="example">
                <AppConsumer>
                    {(context) => (
                        <React.Fragment>
                        <p>Toggle Theme</p>
                        <div class="toggle">
                            <span class="toggleLabel" >light</span>
                            <label class="switch">
                              <input type="checkbox" onClick={context.updateTheme}/>
                              <span class="slider"></span>
                            </label>
                            <span class="toggleLabel">dark</span>
                        </div>
                        </React.Fragment>
                    )}
                </AppConsumer>
            </div>
        );
    }
}
