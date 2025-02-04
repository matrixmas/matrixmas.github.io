import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Matrix Mas</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">085104820001 / 081331255619</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">
                        <a href="mailto:matrixmas_fire@yahoo.com">matrixmas_fire@yahoo.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Surabaya - Indonesia</p>
                      
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:30 AM - 12:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5419526825244!2d112.72826807505896!3d-7.292838692714632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbbfd56e1219%3A0x6c3c14d9a349cca0!2sMATRIX%20MAS%20Jual%20Alat%20Pemadam%20Api%20APAR%20dan%20Peralatan%20Safety!5e0!3m2!1sen!2sus!4v1738654216423!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>


            </div>

            
            
          </div>
        </div>
      </div>
    </div>
  );
}
