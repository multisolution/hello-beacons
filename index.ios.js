import React from 'react'
import { AppRegistry, DeviceEventEmitter, View, Text } from 'react-native'
import Beacons from 'react-native-beacons-manager'

export default class HelloBeacons extends React.Component {
  componentDidMount() {
    const region = {
      identifier: 'Estimotes'
    }

    Beacons.requestWhenInUseAuthorization()
    Beacons.startMonitoringForRegion(region)
    Beacons.startRangingBeaconsInRegion(region)
    Beacons.startUpdatingLocation()

    DeviceEventEmitter.addListener('beaconsDidRange', data => this.setState({ data }))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 1 }}>
          {JSON.stringify(this.state.data)}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloBeacons', () => HelloBeacons)
