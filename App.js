// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import screens
import SplashScreen from './src/components/SplashScreen';
import AboutScreen from './src/screens/AboutScreen';
import DetailScreen from './src/screens/DetailScreen';
import FormScreen from './src/screens/FormScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

// Initial products data - Polaroid Webtoon Characters
const initialProducts = [
  {
    id: '1',
    name: 'Kiki',
    character: 'Kiki Polaroid From The Webtoon WEE!!!',
    price: 25000,
    stock: 15,
    description: 'Polaroid karakter Kiki dari webtoon lokal WEE!!!, dia berbakat dalam bermusik namun mengalami kesulitan dalam akademis, dan pernah mengalami trauma karena kehilangan ibunya.',
    image: 'https://i.pinimg.com/736x/36/8a/a7/368aa7a9001d511d337beddda29bce39.jpg'
  },
  {
    id: '2',
    name: 'Vilma Polaroid',
    character: 'Vilma Klarissa From The Webtoon Good Bad Fortune',
    price: 22000,
    stock: 20,
    description: 'Karakter dari Webtoon lokal good bad fortune. Vilma adalah sahabat Aya yang setia dan protektif, lahir dari keluarga konglomerat kaya, yang menggunakan sumber daya dan tekadnya untuk melindungi Aya dari mereka yang mengeksploitasi dari kemampuan “keberuntungannya”.',
    image: 'https://i.pinimg.com/564x/2b/8c/ac/2b8cac4918456809a4b60c9d151685ba.jpg'
  },
  {
    id: '3',
    name: 'Dedes Polaroid',
    character: 'Dedes From The Webtoon Dedes',
    price: 30000,
    stock: 10,
    description: 'Dedes adalah seorang perempuan keturunan Brahmana yang ditakdirkan untuk menjadi ibu para raja di tanah Jawa. Meskipun takdir agung telah digariskan padanya, ia tersapu ke dalam pusaran intrik politik dan konflik pribadi ketika jiwa seorang mahasiswi modern (Mita) dimasukkan ke dalam tubuhnya dan mulai mempertanyakan narasi sejarah yang telah mengikatnya.',
    image: 'https://i.pinimg.com/736x/b1/99/a2/b199a23d161b84dea160b7948f1735a9.jpg'
  },
  {
    id: '4',
    name: 'Faisal Polaroid',
    character: 'Faisal From The Webtoon Kosan 95',
    price: 23000,
    stock: 18,
    description: 'Faisal bertugas sebagai pengawas Kosan 95 dan awalnya bertemu dengan Rena, pendatang baru, dengan rasa tanggung jawab dan kehati-hatian yang tinggi, karena ia ditugaskan untuk mengawasi rumah kos misterius itu. Di balik penampilannya yang tenang, ia memikul beban masa lalunya dan berjuang menyeimbangkan tugasnya terhadap tempat tersebut dengan keraguan pribadinya tentang situasi yang terjadi di sekitarnya.',
    image: 'https://static.wikia.nocookie.net/kosan95/images/0/01/Faisal_s3.png/revision/latest?cb=20230812005637&path-prefix=id'
  }
];

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [products, setProducts] = React.useState(initialProducts);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e3a8a', // Midnight blue
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back', // Consistent back button text
        }}
      >
        <Stack.Screen 
          name="Home" 
          options={{ 
            title: 'NusaPolaroid',
            headerBackTitle: 'Back', // Ensure consistency
          }}
        >
          {props => <HomeScreen {...props} products={products} setProducts={setProducts} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Detail" 
          options={{ 
            title: 'Detail Produk',
            headerBackTitle: 'Back',
          }}
        >
          {props => <DetailScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Form" 
          options={{ 
            title: 'Tambah/Edit Produk',
            headerBackTitle: 'Back',
          }}
        >
          {props => <FormScreen {...props} products={products} setProducts={setProducts} />}
        </Stack.Screen>
        <Stack.Screen 
          name="About" 
          options={{ 
            title: 'Tentang Aplikasi',
            headerBackTitle: 'Back',
          }}
        >
          {props => <AboutScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}