import React, { useEffect } from 'react'

import { StyleSheet,} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ThemedView from './ThemedView';
import ImageText from './ImageText';

const Back = ({  logo, txt, style, ...props }) => {
  return (
    <ThemedView style={styles.card}>
      <ImageText logo={logo} txt={txt} style={styles.img} />
    </ThemedView>
  )
}

const Face = ({  logo, txt, style, ...props }) => {
  return (
    <ThemedView style={styles.card}>
      <ImageText logo={logo} txt={txt} style={styles.img} />
    </ThemedView>
  )
}

const FlipinCard = ({ 
    isFlipped,
    direction = 'y', 
    duration = 500,
    logo1, txt1, logo2, txt2, 
    style,
    ...props }) => {

        const spinVal = useSharedValue(0)
        const isDirX = direction === 'x'

        useEffect(() => {
            spinVal.value = withTiming(isFlipped ? 1 : 0, { duration})
        }, [isFlipped])

        const faceAnimatedStyle = useAnimatedStyle(() => {
            const rotateVal = interpolate(spinVal.value, [0, 1], [0, 180])
            //const rotateVal = withTiming(`${spinVal}deg`, { duration })
            return {
                transform: [
                    { perspective: 1000 },
                    isDirX ? { rotateX: `${rotateVal}deg`} : { rotateY: `${rotateVal}deg`}
                ],
                zIndex: spinVal.value > 0.5 ? 0 : 1,
            }
        })

        const backAnimatedStyle = useAnimatedStyle(() => {
            const rotateVal = interpolate(spinVal.value, [0, 1], [180, 360])
            return {
                transform: [
                    { perspective: 1000 },
                    isDirX ? { rotateX: `${rotateVal}deg`} : { rotateY: `${rotateVal}deg`}
                ],
            }
        })

        return (
            <ThemedView style={styles.container}>
                <Animated.View style={[styles.absolute, faceAnimatedStyle,]}>
                    <Face logo={logo1} txt={txt1}></Face>
                </Animated.View>
                <Animated.View style={[styles.absolute, backAnimatedStyle,]}>
                    <Back logo={logo2} txt={txt2}></Back>
                </Animated.View>
            </ThemedView>
        )
}

export default FlipinCard

const styles = StyleSheet.create({
  container: {
    width: 300, 
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden', 
  },
  card: {
    //position: 'absolute',
    flex: 1,
    borderRadius: 25,
    //borderColor: '#b52525',
    //borderWidth: 3,
    elevation: 5, 
    backgroundColor: 'white', 
  }
})