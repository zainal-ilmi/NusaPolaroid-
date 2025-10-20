// src/screens/HomeScreen.js
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation, products, setProducts }) => {
  const handleDetail = (product) => {
    navigation.navigate('Detail', { product });
  };

  const handleEdit = (product) => {
    navigation.navigate('Form', { product });
  };

  const handleDelete = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
      alert(`Apakah Anda yakin ingin menghapus ${product.name}?`);
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleAddProduct = () => {
    navigation.navigate('Form');
  };

  const handleAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            {/* Your logo from local assets */}
            <Image 
              source={require('../../assets/images/logo-white.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.titleText}>
              <Text style={styles.title}>NusaPolaroid</Text>
              <Text style={styles.subtitle}>Koleksi Polaroid Webtoon Karakter Lokal Indonesia</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.aboutButton} onPress={handleAbout}>
            {/* Custom about icon from local assets */}
            <Image 
              source={require('../../assets/images/about-icon.png')} 
              style={styles.aboutIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats and Add Button */}
      <View style={styles.actions}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Katalog Produk ({products.length})</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.addButtonText}>+ Tambah Produk</Text>
        </TouchableOpacity>
      </View>

      {/* Products List */}
      {products.length === 0 ? (
        <View style={styles.empty}>
          {/* Your logo from local assets */}
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.emptyLogo}
            resizeMode="contain"
          />
          <Text style={styles.emptyText}>Belum ada produk. Yuk tambahkan produk pertama!</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onDetail={handleDetail}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={handleAddProduct}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark background
  },
  header: {
    backgroundColor: '#1e3a8a', // Midnight blue
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  titleText: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#bfdbfe',
    opacity: 0.9,
  },
  aboutButton: {
    backgroundColor: '#334155',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#475569',
  },
  aboutIcon: {
    width: 24,
    height: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e293b',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  stats: {
    flex: 1,
  },
  statsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContent: {
    padding: 8,
    paddingBottom: 80,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.4,
  },
  emptyText: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 24,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2563eb',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 8,
  },
  fabText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;