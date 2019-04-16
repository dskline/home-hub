import { Ionicons } from '@expo/vector-icons'
import { contentCentered } from 'app/utilities/style/layout'
import { Font } from 'expo'
import { Root, Spinner, View } from 'native-base'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
interface State {
  fontLoaded: boolean
}

export default class StyleProvider extends React.Component<Props, State> {

  state = {
    fontLoaded: false
  }

  async componentDidMount (): Promise<void> {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
    this.setState({ fontLoaded: true })
  }

  render (): ReactNode {
    return (
      <Root>
        { this.state.fontLoaded
          ? this.props.children
          : (
            <View style={contentCentered}>
              <Spinner color='blue' />
            </View>
          )
        }
      </Root>
    )
  }
}
