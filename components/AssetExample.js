import { Text, View, StyleSheet, Image } from 'react-native';

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
    })
}

function showTime(time) {
    let millisecond = Math.floor((time%1000)/10);
    let minute = Math.floor(time/6000);
    let second = Math.floor((time%6000)/1000);
}

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello :)
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
