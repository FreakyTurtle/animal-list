import React, { Component } from 'react';
import {AppProvider, AppConsumer} from '../Context';

export default class AddType extends Component {
    render() {
        return(
            <div>
                <AppConsumer>
                    {(context) => (
                        <div className={context.state.addingType ? "add-type-form hide" : "add-type-form"}>
                        ADD TYPE FORM
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}
