import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card, IconButton, List } from 'react-native-paper'

const ConfirmDeliveryCard = () => {
  return (
    <Card
    testID='confirmDeliveryCard'
    >
    <Card.Content>
      <List.Item
        title="$10.00"
        description="Total price"
        left={() => (
          <IconButton
            icon="moped"
            size={40}
            color="purple"
            style={{top: 5}}
          />
        )}
        right={() => (
          <View>
            <Button color="purple">Cancel</Button>
            <Button mode="contained" color="purple">
              CONFIRM
            </Button>
          </View>
        )}>
        </List.Item>
    </Card.Content>
  </Card>
  )
}

export default ConfirmDeliveryCard