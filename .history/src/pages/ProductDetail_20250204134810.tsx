import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Shield, Award, Clock } from 'lucide-react';
import Header from '../components/Header';

const products = [
  {
    id: 1,
    name: "GAS MATRIX (Ramah Lingkungan)",
    image: "https://images.unsplash.com/photo-1629814210609-0d984e86bfb8?auto=format&fit=crop&q=80",
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
    price: 149.99,
    image: "https://images.unsplash.com/photo-1629814210609-0d984e86bfb8?auto=format&fit=crop&q=80",
    description: "Ideal for electrical fires and sensitive equipment areas.",
    features: [
      "Non-conductive",
      "Leaves no residue",
      "Perfect for electrical equipment",
      "Includes safety pin",
      "5-year warranty"
    ],
    specifications: {
      capacity: "Tersedia Berbagai Ukuran",
    }
  },
  {
    id: 3,
    name: "Foam Extinguisher",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1629814210609-0d984e86bfb8?auto=format&fit=crop&q=80",
    description: "Specially designed for flammable liquid fires.",
    features: [
      "Forms protective blanket",
      "Prevents re-ignition",
      "Environmentally friendly foam",
      "Includes pressure gauge",
      "5-year warranty"
    ],
    specifications: {
      capacity: "6 L",
      range: "4-6 meters",
      dischargeDuration: "20 seconds",
      operatingPressure: "175 PSI",
      temperature: "5°C to 45°C"
    }
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <p className="text-3xl font-bold text-red-600 mb-6">${product.price}</p>
                
                <div className="flex space-x-4 mb-8">
                  <button className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Certified</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Warranty</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Specifications</h2>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}