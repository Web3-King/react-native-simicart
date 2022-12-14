import React from 'react';
import { Button, Text } from 'native-base';
import Identify from '@helper/Identify';

export default class AddressButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonEnabled: Object.keys(this.props.parent.state.address).length == 0 ? false : true
        }
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this)
        }
    }

    componentWillUnmount() {
        if (this.props.onRef) {
            this.props.onRef(undefined)
        }
    }

    onSaveAddress() {
        this.props.parent.editNewAddress();
    }

    updateButtonStatus(status) {
        if (status != this.state.buttonEnabled) {
            this.setState({ buttonEnabled: status });
        }
    }

    render() {
        return (
            <Button style={{ width: '40%', height: 50, borderRadius: 8, marginTop: 30 }}
                full
                disabled={!this.state.buttonEnabled}
                onPress={() => { this.onSaveAddress() }}>
                <Text>{Identify.__('Save')}</Text>
            </Button>
        );
    }
}