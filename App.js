import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import RNU from 'react-native-units';
// import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
export default function App() {
  // const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  // const initialSelectedIndex = 1;
  // const windowWidth = Dimensions.get('window').width;
  // const height = 200;
  // const CITIES = 'Jakarta,Bandung,Sumbawa,Taliwang,Lombok,Bima'.split(',');

  let agesItems = new Array(30);

  for (let index = 0; index < agesItems.length; index++) {
    agesItems[index] = {
      value: index + 1,
      label: index + 1,
    }
    
  }
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [province, setProvince] = React.useState('');
  const [city, setCity] = React.useState('');
  const wheelRef = React.useRef(null);
  const PROVINCES = 'DKI,NTB,JABAR,JATIM'.split(',');
  const CITIES = 'Jakarta,Bandung,Sumbawa,Taliwang,Lombok,Bima'.split(',');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <Image source={require('./assets/logo.png')} style={styles.logoImage} />

      <Text style={styles.policy}>
        By entering your age you agree to our Terms and Privacy Policy
      </Text>
      <TouchableOpacity style={styles.ageButton}>
        <Text style={styles.ageEnter}>
          Enter your age
        </Text>
      </TouchableOpacity>
        <WheelPickerExpo
          ref={wheelRef}
          backgroundColor='#1E1E1E'
          width={RNU.vw(100)}
          height={200}
          initialSelectedIndex={5}
          items={agesItems}
          renderItem={(e) => {
          return <View style={{width: RNU.vw(100), height: 50, backgroundColor: selectedIdx == e.label ? '#202020' : '#00000000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>{e.label}</Text>
          </View>
        }}
          onChange={({ item }) => setSelectedIdx(item.label)} />
          
      {/* <DynamicallySelectedPicker
        items={agesItems}
        fontSize={20}
        onScroll={({ index }) => setSelectedItemIndex(index)}
        onMomentumScrollBegin={({ index }) => setSelectedItemIndex(index)}
        onMomentumScrollEnd={({ index }) => setSelectedItemIndex(index)}
        onScrollBeginDrag={({ index }) => setSelectedItemIndex(index)}
        onScrollEndDrag={({ index }) => setSelectedItemIndex(index)}
        initialSelectedIndex={initialSelectedIndex}
        height={height}
        width={windowWidth}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 8,
    minHeight: RNU.vh(100)
  },
  ageButton: {
    marginBottom: 20
  },
  ageEnter: {
    marginTop: 20,
    fontSize: 19,
    color: '#1E80E3',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginButton: {
    marginLeft: 'auto',
    marginTop: 30,
    marginRight: 10
  },
  loginText: {
    color: 'white',
    fontSize: 18
  },
  logoImage: {
    height: 80,
    width: 263,
    marginTop: '25%',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  policy: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    color: '#5C5C5C',
    fontSize: 16,
    width: 263,
    textAlign: 'center',
  }
});
