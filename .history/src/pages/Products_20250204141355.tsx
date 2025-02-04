import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import Header from '../components/Header';

const products = [
  {
    id: 1,
    name: "GAS MATRIX (Ramah Lingkungan)",
    image: "src/pages/image/1.jpg",
    description: "GAS MATRIX (Ramah Lingkungan) – Disemprot langsung mati apinya, ideal untuk memadamkan api dengan cepat dan efisien. Solusi ramah lingkungan untuk kebutuhan keamanan kebakaran Anda.",
    features: [
      "Fire Extinguisher tidak berwarna, tidak korosi, serta non-conductive pada peralatan elektronik",
      "Clean agent / Media Bersih",
      "Memiliki Zero ODP (Tidak merusak lapisan ozon)",
      "Mempunyai Zero ODP (Tidak merusak Ozon)",
      "Memadamkan api kelas A, B, C (E) dengan cara efisien dan cepat",
      ],
  specifications: {
    capacity: "Tersedia Berbagai Ukuran",
    
  }
  },
  {
    id: 2,
    name: "CO2 Fire Extinguisher",
    image: "https://images.unsplash.com/photo-1629814210609-0d984e86bfb8?auto=format&fit=crop&q=80",
    description: "CO2 Fire Extinguisher - Memadamkan api listrik dan peralatan sensitif dengan cepat, tanpa residu, ideal untuk ruang server dan perangkat elektronik.",
    features: [
      "Non-konduktif",
      "Tidak meninggalkan residu",
      "Sangat cocok untuk peralatan elektronik",
      "Dilengkapi dengan pin pengaman"
    ],
    specifications: {
      capacity: "Tersedia Berbagai Ukuran",
    }
  },
  {
    id: 3,
    name: "POWDER MATRIX ABC",
    image: "https://images.unsplash.com/photo-1629814210609-0d984e86bfb8?auto=format&fit=crop&q=80",
    description: "Tidak hanya dalam bentuk gas saja, kami juga hadir dalam bentuk powder. Fire Extinguisher jenis ini kami rekomendasikan bagi Anda yang tidak ingin menguras dompet terlalu banyak tetapi tetap dengan kualitas yang baik.",
    features: [
      "Powder Matrix ABC ini merupakan serbuk kimia yang serbaguna untuk memadamkan Api : A, B, C",
      "Kualitas I dengan kadar Monoammonium Phosphate 70%"
    ],
    specifications: {
      capacity: "Tersedia Berbagai Ukuran"
    }
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-red-600 mb-4">${product.price}</p>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/products/${product.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-center flex items-center justify-center"
                    >
                      <Info className="h-5 w-5 mr-2" />
                      Details
                    </Link>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}