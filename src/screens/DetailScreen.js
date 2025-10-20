// src/screens/DetailScreen.js
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.character}>Karakter: {product.character}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Rp {product.price.toLocaleString('id-ID')}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Description Section */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionLabel}>Deskripsi Produk</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {/* Stock Info Section */}
        <View style={styles.stockInfo}>
          <View style={styles.stockIcon}>
            <Text style={styles.stockEmoji}>📦</Text>
          </View>
          <View style={styles.stockTextContainer}>
            <Text style={styles.stockLabel}>Stok Tersedia</Text>
            <Text style={styles.stockCount}>{product.stock} pcs</Text>
          </View>
        </View>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Kembali ke Katalog</Text>
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
  image: {
    width: '100%',
    height: 380,
  },
  content: {
    backgroundColor: '#1e293b',
    margin: 16,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#334155',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 12,
  },
  titleSection: {
    flex: 1,
    flexShrink: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  character: {
    fontSize: 16,
    color: '#cbd5e1',
    flexWrap: 'wrap',
  },
  priceContainer: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 20,
  },
  descriptionSection: {
    marginBottom: 24,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5e1',
    textAlign: 'justify',
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#334155',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },
  stockIcon: {
    backgroundColor: '#2563eb',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stockEmoji: {
    fontSize: 20,
  },
  stockTextContainer: {
    flex: 1,
  },
  stockLabel: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 4,
  },
  stockCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa',
  },
  backButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
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

export default DetailScreen;