import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import SwipeableFlatlist from '../components/SwipeableFlatlist';
import MyHeader from '../components/MyHeader';
export default class NotificationScreen extends React.Component {
constructor(){
    super();
this.state = {
    allNotification:[],
}
}

keyExtractor = (item,index) => index.toString();
renderItem=({item,i})=>{
    return(
        <ListItem
            key={i}
            title={item.itemName}
            subtitle={item.description}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity 
                style={styles.btn}
                >
                <Text style={{color:'white'}}>Exchange</Text>
                </TouchableOpacity>
            }
            />
    )
}

render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1}}>
          <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
        </View>

        <View style={{flex:0.9}}>
          {
            this.state.allNotification.length === 0
            ?(
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../assets/Notification.png')}/>
                <Text style={{fontSize:25}}>You have no notifications</Text>
              </View>
            )
            :(
              <SwipeableFlatlist allNotifications={this.state.allNotifications}/>
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });