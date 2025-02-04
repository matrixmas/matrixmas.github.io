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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Matrix Mas</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1995, Matrix Mas has been at the forefront of fire safety equipment and services. 
                With over 25 years of experience, we've protected countless homes and businesses with our state-of-the-art 
                fire extinguishers and expert consultation services.
              </p>
              <p className="text-gray-600">
                Our commitment to safety, quality, and customer service has made us a trusted name in the fire safety industry. 
                We believe that everyone deserves access to the best fire safety equipment and knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide the highest quality fire safety equipment and services, ensuring the protection 
                  of lives and property through innovation, education, and exceptional customer service.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Team</h3>
                <p className="text-gray-600">
                  Our team consists of certified fire safety experts, experienced technicians, and dedicated 
                  customer service professionals committed to your safety and satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Certified Quality</h4>
                    <p className="text-gray-600">All our products meet or exceed industry safety standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <History className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">25+ Years Experience</h4>
                    <p className="text-gray-600">Decades of expertise in fire safety equipment and services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">24/7 Support</h4>
                    <p className="text-gray-600">Round-the-clock emergency assistance and customer support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Expert Team</h4>
                    <p className="text-gray-600">Highly trained professionals dedicated to your safety</p>
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