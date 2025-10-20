// src/screens/FormScreen.js
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormScreen = ({ route, navigation, products, setProducts }) => {
  const product = route.params?.product;
  const isEdit = !!product;

  const [formData, setFormData] = useState({
    name: product?.name || '',
    character: product?.character || '',
    price: product?.price?.toString() || '',
    stock: product?.stock?.toString() || '',
    description: product?.description || '',
    image: product?.image || '',
  });

  const handleSave = () => {
    // Validation
    if (!formData.name || !formData.character || !formData.price || !formData.stock || !formData.description || !formData.image) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    if (isEdit) {
      // Update product
      const updatedProducts = products.map(p =>
        p.id === product.id
          ? {
              ...p,
              name: formData.name,
              character: formData.character,
              price: parseInt(formData.price),
              stock: parseInt(formData.stock),
              description: formData.description,
              image: formData.image,
            }
          : p
      );
      setProducts(updatedProducts);
      Alert.alert('Sukses', 'Produk berhasil diupdate!');
    } else {
      // Add new product
      const newProduct = {
        id: Date.now().toString(),
        name: formData.name,
        character: formData.character,
        price: parseInt(formData.price),
        stock: parseInt(formData.stock),
        description: formData.description,
        image: formData.image,
      };
      setProducts([...products, newProduct]);
      Alert.alert('Sukses', 'Produk berhasil ditambahkan!');
    }

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>
          {isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}
        </Text>

        <Text style={styles.label}>Nama Produk</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          placeholder="contoh: Si Pitung Polaroid"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.label}>Nama Karakter</Text>
        <TextInput
          style={styles.input}
          value={formData.character}
          onChangeText={(text) => setFormData({ ...formData, character: text })}
          placeholder="contoh: Si Pitung"
          placeholderTextColor="#94a3b8"
        />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Harga (Rp)</Text>
            <TextInput
              style={styles.input}
              value={formData.price}
              onChangeText={(text) => setFormData({ ...formData, price: text })}
              placeholder="25000"
              keyboardType="numeric"
              placeholderTextColor="#94a3b8"
            />
          </View>

          <View style={styles.halfInput}>
            <Text style={styles.label}>Stok</Text>
            <TextInput
              style={styles.input}
              value={formData.stock}
              onChangeText={(text) => setFormData({ ...formData, stock: text })}
              placeholder="15"
              keyboardType="numeric"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        <Text style={styles.label}>URL Gambar</Text>
        <TextInput
          style={styles.input}
          value={formData.image}
          onChangeText={(text) => setFormData({ ...formData, image: text })}
          placeholder="https://example.com/image.jpg"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          placeholder="Ceritakan tentang karakter ini..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholderTextColor="#94a3b8"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Batal</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>
              {isEdit ? 'Simpan Perubahan' : 'Tambah Produk'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#1e293b',
    borderWidth: 2,
    borderColor: '#334155',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#f8fafc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 32,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#475569',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#cbd5e1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#2563eb',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormScreen;