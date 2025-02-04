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
                  src="https://www.google.com/maps/dir//Jl.+Cipunegara+No.45,+Darmo,+Kec.+Wonokromo,+Surabaya,+Jawa+Timur+60241,+Indonesia/@-7.2928368,112.6896432,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x2dd7fbbfd56e1219:0x6c3c14d9a349cca0!2m2!1d112.730843!2d-7.2928387?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
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

            {/* Map Section */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
