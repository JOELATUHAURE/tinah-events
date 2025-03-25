import React, { useState, useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
  Tent,
  Sparkles,
  Calendar,
  Music,
  Star,
  Clock,
  Lightbulb,
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  User
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Elegant Wedding Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Corporate Event Space"
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Luxury Party Decoration"
    }
  ];

  const videos = [
    { id: 'VIDEO_ID_1', title: 'Luxury Wedding Setup' },
    { id: 'VIDEO_ID_2', title: 'Corporate Event Excellence' },
    { id: 'VIDEO_ID_3', title: 'Mega Tent Showcase' }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Tinah Events made our wedding absolutely magical! The attention to detail in the tent setup and decorations was beyond our expectations.",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "David Mukasa",
      rating: 5,
      text: "Professional team that delivered an outstanding corporate event. The sound and lighting setup was perfect for our needs.",
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Rachel Namara",
      rating: 5,
      text: "From the initial consultation to the final execution, Tinah Events proved why they're the best in Mbarara. Our graduation party was unforgettable!",
      date: "2 months ago",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const services = [
    { icon: <Tent size={32} />, title: 'Mega Tents & Venue Setup', description: 'Premium tents and sophisticated venue arrangements for events of any scale.' },
    { icon: <Sparkles size={32} />, title: 'Luxury Decorations & Theming', description: 'Elegant decorations and themed setups that transform spaces into magical environments.' },
    { icon: <Calendar size={32} />, title: 'Wedding & Corporate Event Planning', description: 'End-to-end event planning services for weddings and corporate functions.' },
    { icon: <Music size={32} />, title: 'Sound, Lighting & Technology', description: 'State-of-the-art audio-visual solutions for immersive event experiences.' }
  ];

  const features = [
    { icon: <Star size={32} />, title: 'Exceptional Designs', description: 'Unmatched attention to detail in every event design.' },
    { icon: <Clock size={32} />, title: 'Timely Execution', description: 'Reliable and punctual delivery of all event elements.' },
    { icon: <Lightbulb size={32} />, title: 'Creative Solutions', description: 'Innovative approaches to make your event unique.' },
    { icon: <Award size={32} />, title: 'Industry Experts', description: 'Trusted by leading brands and individuals.' }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-gold' : 'text-gray-300'}`}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-90 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-gold font-bold text-xl">Tinah Events</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-gold px-3 py-2">Home</a>
                <a href="#about" className="text-white hover:text-gold px-3 py-2">About</a>
                <a href="#services" className="text-white hover:text-gold px-3 py-2">Services</a>
                <a href="#gallery" className="text-white hover:text-gold px-3 py-2">Gallery</a>
                <a href="#contact" className="text-white hover:text-gold px-3 py-2">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gold"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white hover:text-gold block px-3 py-2">Home</a>
              <a href="#about" className="text-white hover:text-gold block px-3 py-2">About</a>
              <a href="#services" className="text-white hover:text-gold block px-3 py-2">Services</a>
              <a href="#gallery" className="text-white hover:text-gold block px-3 py-2">Gallery</a>
              <a href="#contact" className="text-white hover:text-gold block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Beyond Dreams – Elevate Your Events with Tinah Events
            </h1>
            <p className="text-xl text-white mb-8">
              Premier Event Management in Mbarara, Uganda
            </p>
            <button className="bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tinah Events is Mbarara's premier event planning company, specializing in creating unforgettable experiences through our expertise in mega tents, luxury décor, and seamless event execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-gold mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Experience the Magic – Watch Us in Action!
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See how we transform spaces and create unforgettable experiences through our event showcases
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <LiteYouTubeEmbed
                id={videos[currentVideoIndex].id}
                title={videos[currentVideoIndex].title}
                poster="maxresdefault"
              />
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={previousVideo}
                className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextVideo}
                className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentVideoIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Gallery</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src={galleryImages[currentImageIndex].url} 
                alt={galleryImages[currentImageIndex].alt}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <button 
                onClick={previousImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What Our Clients Say – Real Reviews from Google
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Don't just take our word for it – hear from our satisfied clients
          </p>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {reviews[currentReviewIndex].image ? (
                    <img
                      src={reviews[currentReviewIndex].image}
                      alt={reviews[currentReviewIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="flex">{renderStars(reviews[currentReviewIndex].rating)}</div>
                    <span className="ml-2 text-gray-600">{reviews[currentReviewIndex].date}</span>
                  </div>
                  <p className="text-gray-700 text-lg mb-3">"{reviews[currentReviewIndex].text}"</p>
                  <p className="font-semibold text-gray-900">{reviews[currentReviewIndex].name}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={previousReview}
                className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReviewIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Planning an Event? Let's Make It Extraordinary!</h2>
          <button className="bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold" />
                </div>
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">Event Type</label>
                  <select id="event-type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold"></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Phone className="text-gold mr-2" size={20} />
                    <span>+256 123 456 789</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="text-gold mr-2" size={20} />
                    <span>info@tinahevents.com</span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="text-gold mr-2" size={20} />
                    <span>High Street, Mbarara, Uganda</span>
                  </p>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Google Maps iframe would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map Loading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tinah Events</h3>
              <p className="text-gray-400">Creating unforgettable moments in Mbarara and beyond.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-gold">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-gold">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-gold">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Mega Tents</li>
                <li className="text-gray-400">Luxury Decorations</li>
                <li className="text-gray-400">Event Planning</li>
                <li className="text-gray-400">Sound & Lighting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold"><Facebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gold"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gold"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gold"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Tinah Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;