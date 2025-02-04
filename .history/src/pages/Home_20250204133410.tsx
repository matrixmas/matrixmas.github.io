import React from 'react';
import { Shield, Phone, ShoppingCart, Award, Clock, AlertTriangle, FireExtinguisher, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://static.wixstatic.com/media/60950c08c94d45479365133f9df72605.jpg/v1/fill/w_2577,h_1183,al_c,q_90,enc_avif,quality_auto/60950c08c94d45479365133f9df72605.jpg"
          alt="Fire Safety Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Navbar />
        <div className="relative z-20 container mx-auto px-6 pt-32">
          <h1 className="text-5xl font-bold text-white mb-6">Jual Alat Pemadam Api Berkualitas dan Ramah Lingkungan di Surabaya</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">Cari alat pemadam api yang murah namun berkualitas? Matrix Fire Extinguisher hadir dengan pilihan produk alat pemadam api dan peralatan safety lainnya yang ramah lingkungan dan terjangkau. Kami menawarkan solusi terbaik untuk perorangan maupun bisnis, dengan layanan di Surabaya. Hubungi kami untuk mendapatkan produk berkualitas dengan harga kompetitif!</p>
          <div className="flex space-x-4">
            <Link to="/products" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Products</span>
            </Link>
            <Link to="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peralatan Bersertifikat</h3>
              <p className="text-gray-600">Semua produk kami telah memenuhi standar keselamatan yang ditetapkan oleh Standar Nasional Indonesia (SNI), memastikan kualitas dan keandalan yang dapat dipercaya untuk kebutuhan Anda.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Waktu Beroperasi</h3>
              <p className="text-gray-600">Toko kami beroperasi setiap hari Senin hingga Jumat, siap memenuhi kebutuhan Anda dengan layanan yang cepat dan responsif. Kami memberikan dukungan penuh selama jam operasional untuk memastikan Anda mendapatkan pelayanan terbaik.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kami Menyediakan Produk dengan Beragam Variasi</h3>
              <p className="text-gray-600">Kami melayani pengiriman dari Sabang hingga Merauke, memastikan produk kami tersedia di seluruh penjuru Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kami Memberikan Arahan dan Produk Terbaik</h3>
              <p className="text-gray-600">Sebagai penyedia solusi keamanan kebakaran yang handal, kami tidak hanya menawarkan produk berkualitas tinggi, tetapi juga memberikan arahan yang tepat untuk memastikan perlindungan maksimal. Dengan pengalaman dan komitmen kami, produk kami telah dipercaya di industri ini untuk melindungi bisnis Anda dari risiko kebakaran.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training Programs</h3>
              <p className="text-gray-600">Fire safety training for your team</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-gray-600">24/7 emergency support services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}