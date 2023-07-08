import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

const GlobalHeader = ({ Img, text, RightImg, Icon,LIcon,onPress }) => {
    return (
        <View style={{ width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5 }}>
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
              { LIcon ? <View style={{}} >{LIcon}</View> :<Image source={Img} style={{ borderRadius: 360, width: 50, height: 50 }} />}
                {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
                <Text style={{ fontSize: 18, fontWeight: '500', left: 20 }}>{text ? text : 'user name'}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                {RightImg ?
                    <Image source={RightImg} style={{ borderRadius: 360, width: 50, height: 50 }} />
                    :
                    <View>
                        {Icon}
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({})