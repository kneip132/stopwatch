import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';


export default function AssetExample() {
    const [start, setStart] = useState(null);
    const [run, setRun] = useState(false);
    const [passTime, setPassTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;

        if (run) {
            const showUpdate = () => {
                const timeNow = Date.now();
                const passedTime = timeNow - start;
                setPassTime(passedTime);
            };

            interval = setInterval(showUpdate, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [run, start]);

    const startWatch = () => {
        if (!run) {
            setStart(Date.now() - passTime);
            setRun(true);
        }
    };

    const stopWatch = () => {
        if (run) {
            setRun(false);
        }
    };

    const resetWatch = () => {
        setStart(null);
        setRun(false);
        setPassTime(0);
        setLaps([])
    };

    const addLap = () => {
        const newLaps = [...laps, passTime];
        setLaps(newLaps)
    }

    const showTime = (time) => {
        let millisecond = Math.floor((time % 1000)/10);
        let second = Math.floor((time % 60000) / 1000);
        let minute = Math.floor((time / 60000));

        millisecond = String(millisecond).padStart(2, '0');
        second = String(second).padStart(2, '0');
        minute = String(minute).padStart(2, '0');

        return `${minute}:${second}:${millisecond}`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Stopwatch</Text>
            <div>{showTime(passTime)}</div>
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