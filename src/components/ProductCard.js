// src/components/ProductCard.js
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductCard = ({ product, onDetail, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>Rp {product.price.toLocaleString('id-ID')}</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.character}>Karakter: {product.character}</Text>
        <Text style={styles.stock}>Stok: {product.stock} pcs</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.detailButton}
            onPress={() => onDetail(product)}
          >
            <Text style={styles.buttonText}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => onEdit(product)}
          >
            <Text style={styles.buttonText}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => onDelete(product.id)}
          >
            <Text style={styles.buttonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#334155',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  priceTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 4,
  },
  character: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 4,
  },
  stock: {
    fontSize: 14,
    color: '#60a5fa',
    fontWeight: '600',
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  detailButton: {
    flex: 2,
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#475569',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#dc2626',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ProductCard;