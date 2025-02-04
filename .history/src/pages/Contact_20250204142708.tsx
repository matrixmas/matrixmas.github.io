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
                <h2 className="text-2xl font-bold mb-6">Emergency Support</h2>
                <p className="text-gray-600 mb-4">24/7 emergency response available for critical situations.</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 font-bold">Emergency Hotline</p>
                  <p className="text-2xl font-bold text-red-600">(555) 911-FIRE</p>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
      </div>
    </div>
  );
}
