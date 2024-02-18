import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

let runWatch = false;
let startingTime;
let passedTime = 0;


function startWatch() {
    if (!runWatch) {
        startingTime = Date.now() - passedTime;
        running = true;
        displayWatch();
    }
}

function stopWatch() {
    if (running) {
        runWatch = false;
        clearInterval(interval);
    }
}

function resetWatch() {
    stopWatch();
    passedTime = 0;
    displayWatch();
}

function displayWatch() {
    interval = setInterval(function () {
        timeChange = Date.now() - startingTime;
        showTime(timeChange);
    });
}

function showTime(time) {
  let millisecond = Math.floor((time%1000)/10);
  let minute = Math.floor(time/6000);
  let second = Math.floor((time%6000)/1000);
    return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}:${String(millisecond).padStart(2, '0')}`;
}

export default function AssetExample() {
    const [time, setTime] = useState('00:00:00');

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Stopwatch</Text>
            <Text style={styles.timerText}>{time}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Start" onPress={startWatch} style={styles.button} color="#00ff00"/>
                <Button title="Lap" style={styles.button}/>
                <Button title="Stop" onPress={stopWatch} style={styles.button} color="#ff0000"/>

            </View>
            <View style={styles.buttonContainerReset}>
                <Button title="Reset" onPress={resetWatch} color="#696969"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginVertical: 10,
  },

  buttonContainerReset: {
    width: '90.5%',
  },

  button: {
      flex: 1,
      width: '100%',
  },
    timerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});