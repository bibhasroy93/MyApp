import {View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {theme} from '../theme';

import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';

export default function HomeScreen(){
  const[showSearch,toggleSearch]=useState(false);
  const[locations,setLocations]=useState([1,2,3]);

  const handleLocation=(loc)=>{
    console.log('location: ',loc);
  }
    return(
        <View className="flex-1 relative">
          <StatusBar style="light" />
          <Image blurRadius={70} source={require('../assets/images/bg.png')}
          className="absolute h-full w-full" />

          <SafeAreaView className="flex flex-1">
            {/* search section */}
            <View style={{height:'7%'}} className="mt-10 mx-4 relative z-50">
              <View className="flex-row justify-end items-center rounded-full"
              style={{backgroundColor:showSearch? theme.bgWhite(0.2):'transparent'}}>
                {
                  showSearch?(
                    <TextInput 
                    placeholder='Search City' 
                    placeholderTextColor={'lightgrey'}
                    className="pl-6 h-10 pb-1 flex-1 text-base text-white"/>
                  ):null
                }
                
              <TouchableOpacity
              onPress={()=>toggleSearch(!showSearch)}
              style={{backgroundColor:theme.bgWhite(0.3)}}
              className="rounded-full p-3 m-1"
              >
                <MagnifyingGlassIcon size="25" color="white" />
              </TouchableOpacity>
              </View>
              {locations.length>0 && showSearch?(
                <View className="absolute w-full bg-gray-300 mt-20 rounded-3xl">
                  {
                    locations.map((loc,index)=>{
                      let showBorder=index+1 != locations.length;
                      let borderClass=showBorder?'border-b-2 border-b-gray-400':'';
                      return(
                        <TouchableOpacity
                        onPress={()=>handleLocation(loc)}
                        key={index}
                        className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}>
                            <MapPinIcon size="20" color="gray" />
                            <Text className="text-black text-lg ml-2">Durgapur, India</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                  </View>
              ):null
              }
            </View>
            {/* forecast section */}
            <View className="mx-4 flex justify-around flex-1 mb-2">
              {/* location */}
              <Text className="text-white text-center text-2xl font-bold">
                Durgapur,
                <Text className="text-lg font-semibold text-gray-300">
                  India
                </Text>
              </Text>
              {/* weather image */}
              <View className="flex-1 justify-center m-20">
                <Image
                source={require('../assets/images/partlycloudy.png')}
                className="w-52 h-52"/>

                {/* degree celcius */}
                <View className="space-y-2 mt-10">
                  <Text className="text-center font-bold text-white text-6xl ml-5">
                    23&#176;
                  </Text>
                  <Text className="text-center text-white text-xl tracking-widest">
                    Partly Cloudy
                  </Text>
                </View>
                {/* other stats */}
                <View className="flex-row justify-center m-6">
                  <View className="flex-row space--2 items-center p-5">
                    <Image source={require('../assets/icons/wind.png')} className="h-6 w-6 mr-2" />
                    <Text className="text-white font-semibold text-base">
                      22 kmph
                    </Text>
                  </View>

                  <View className="flex-row space--2 items-center p-5">
                    <Image source={require('../assets/icons/drop.png')} className="h-6 w-6 mr-2" />
                    <Text className="text-white font-semibold text-base">
                      22 %
                    </Text>
                  </View>

                  <View className="flex-row space--2 items-center p-5">
                    <Image source={require('../assets/icons/sun.png')} className="h-6 w-6 mr-2" />
                    <Text className="text-white font-semibold text-base">
                      6:05 AM
                    </Text>
                  </View>

                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
    )
}