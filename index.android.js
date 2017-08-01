import React from 'react'
import { AppRegistry, DeviceEventEmitter, Text, View } from 'react-native'
import Beacons from 'react-native-beacons-manager'

export default class HelloBeacons extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    Beacons.detectIBeacons()
    DeviceEventEmitter.addListener('beaconsDidRange', data => this.setState({ data }))

    try {
      this.start()
    } catch (err) {
      this.setState({ data: err })
    }
  }

  async start() {
    await Beacons.startRangingBeaconsInRegion('REGION1')
    console.log(`Beacons ranging started succesfully!`)
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
