import { createAppContainer, createStackNavigator } from 'react-navigation'

import screens from './screens'

export default createAppContainer(
  createStackNavigator(
    Object.keys(screens).reduce((previousValue: {}, key: string): {} => {
      previousValue[screens[key].name] = {
        screen: screens[key].component
      }
      return previousValue
    }, {})
  )
)
