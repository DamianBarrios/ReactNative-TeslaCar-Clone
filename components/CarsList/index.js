import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem/index';


const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                keyExtractor={item => item.name}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList;