import React from 'react';
import { Shield, Users, Award, History } from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Mengenai Matrix Fire Extinguisher</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Pengalaman Kita</h2>
              <p className="text-gray-600 mb-6">
              Produk kami berkualitas tinggi dan ditawarkan kepada semua klien kami dengan harga yang menakjubkan yang tidak dapat dikalahkan. Dengan memilih Matrix Fire Extinguisher sebagai preferensi, Anda mendapatkan produk yang Anda butuhkan saat Anda membutuhkannya. Beritahu kami produk seperti apa yang ingin Anda beli untuk rumah atau kantor Anda dan dengan senang hati kami akan menganjurkan Anda tentang apa yang paling sesuai dengan kebutuhan Anda saat ini.
              </p>
              <p className="text-gray-600">
              Komitmen kami terhadap keselamatan, kualitas, dan layanan pelanggan telah menjadikan kami nama yang tepercaya dalam industri keselamatan kebakaran.
              Kami percaya bahwa setiap orang berhak mendapatkan akses ke peralatan dan pengetahuan keselamatan kebakaran terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Misi Kami</h3>
                <p className="text-gray-600">
                Untuk menyediakan peralatan dan layanan keselamatan kebakaran berkualitas tinggi, memastikan perlindungan jiwa dan harta benda melalui inovasi, pendidikan, dan layanan pelanggan yang luar biasa.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tim Kami</h3>
                <p className="text-gray-600">
                Tim kami terdiri dari ahli keselamatan kebakaran bersertifikat, teknisi berpengalaman, dan profesional layanan pelanggan yang berdedikasi tinggi dan berkomitmen terhadap keselamatan dan kepuasan Anda.
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}