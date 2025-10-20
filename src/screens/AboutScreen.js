// src/screens/AboutScreen.js
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            {/* Your logo from local assets */}
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.appName}>NusaPolaroid</Text>
          <Text style={styles.version}>Versi 1.0.0</Text>
        </View>

        {/* About App Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            {/* Custom about icon from local assets */}
            <Image 
              source={require('../../assets/images/about-icon.png')} 
              style={styles.sectionIcon}
              resizeMode="contain"
            />
            <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
          </View>
          <Text style={styles.sectionText}>
            NusaPolaroid adalah aplikasi katalog polaroid webtoon karakter lokal Indonesia. 
            Kami menyediakan koleksi polaroid karakter-karakter komik Webtoon Indonesia 
            yang dikemas dalam format modern dan menarik.
          </Text>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✨ Fitur Aplikasi</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Katalog produk polaroid karakter webtoon lokal</Text>
            <Text style={styles.featureItem}>• Tambah produk baru</Text>
            <Text style={styles.featureItem}>• Edit informasi produk</Text>
            <Text style={styles.featureItem}>• Hapus produk dari katalog</Text>
            <Text style={styles.featureItem}>• Lihat detail lengkap produk</Text>
          </View>
        </View>

        {/* Student Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍🎓 Informasi Mahasiswa</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}><Text style={styles.infoLabel}>Nama:</Text> Muhammad Zainal Ilmi</Text>
            <Text style={styles.infoText}><Text style={styles.infoLabel}>NPM:</Text> 23081010072</Text>
            <Text style={styles.infoText}><Text style={styles.infoLabel}>Program Studi:</Text> Informatika</Text>
            <Text style={styles.infoText}><Text style={styles.infoLabel}>Universitas:</Text> UPN Veteran Jawa Timur</Text>
            <Text style={styles.infoText}><Text style={styles.infoLabel}>Mata Kuliah:</Text> Aplikasi Mobile</Text>
          </View>
        </View>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Kembali ke Beranda</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 30,
    borderRadius: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#334155',
  },
  logoContainer: {
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#94a3b8',
  },
  section: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#334155',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60a5fa',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5e1',
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5e1',
    marginBottom: 4,
  },
  infoCard: {
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 12,
    marginTop: 8,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5e1',
    marginBottom: 6,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  backButton: {
    backgroundColor: '#2563eb',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutScreen;