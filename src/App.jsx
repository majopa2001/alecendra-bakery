import React, { useState } from 'react';
import { Menu, X, MessageCircle, Calendar, ShoppingBag, Clock, MapPin } from 'lucide-react';

export default function AleCendraLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const cartaRestaurante = '/carta-restaurante.pdf';
  const cartaPedidos = '/carta-pedidos.pdf';
  const logoUrl = '/logo.png';
  
  const whatsappNumber = '51936799135';

  const sendWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Georgia', serif" }}>
      <nav className="fixed w-full bg-white shadow-md z-50 border-b-2" style={{ borderColor: '#EDBEB9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold" style={{ color: '#EDBEB9', fontFamily: "'Playfair Display', serif" }}>
                  Ale Cendra
                </h1>
                <p className="text-xs tracking-widest text-gray-600">B A K E R Y</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:opacity-70 transition">Inicio</a>
              <a href="#cartas" className="text-gray-700 hover:opacity-70 transition">Cartas</a>
              <a href="#contacto" className="text-gray-700 hover:opacity-70 transition">Contacto</a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 hover:bg-gray-50">Inicio</a>
              <a href="#cartas" className="block px-3 py-2 hover:bg-gray-50">Cartas</a>
              <a href="#contacto" className="block px-3 py-2 hover:bg-gray-50">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(to bottom, #FFF5F3, #FFFFFF)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block rounded-full p-2 mb-6 bg-white shadow-lg" style={{ border: '4px solid #EDBEB9' }}>
              <img 
                src={logoUrl} 
                alt="Ale Cendra Bakery Logo" 
                className="w-32 h-32 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-6xl hidden">🎂</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Delicias Artesanales
            <br />
            <span style={{ color: '#EDBEB9' }}>Hechas con Amor</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Cada creación es única y especial. Endulzamos tus momentos más importantes con nuestras recetas tradicionales.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px" style={{ backgroundColor: '#EDBEB9' }}></div>
          <span className="text-3xl">✿</span>
          <div className="w-24 h-px" style={{ backgroundColor: '#EDBEB9' }}></div>
        </div>
      </div>

      <section id="cartas" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#EDBEB9' }}>
            Nuestras Cartas
          </h3>
          <p className="text-center text-gray-600 mb-16 text-lg">Explora nuestras opciones</p>

          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4" style={{ borderColor: '#EDBEB9' }}>
              <div className="p-6" style={{ backgroundColor: '#FFF5F3' }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar size={32} style={{ color: '#EDBEB9' }} />
                  <h4 className="text-3xl font-bold text-center" style={{ fontFamily: "'Playfair Display', serif", color: '#EDBEB9' }}>
                    Carta del Restaurante
                  </h4>
                </div>
                <p className="text-center text-gray-600 mb-4">Disfruta en nuestro local - Reserva tu mesa</p>
              </div>

              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 bg-gray-100 p-4">
                  <div className="relative">
                    <iframe
                      src={cartaRestaurante}
                      className="w-full h-[600px] rounded-lg border-2"
                      style={{ borderColor: '#EDBEB9' }}
                      title="Carta del Restaurante"
                    />
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center gap-6" style={{ backgroundColor: '#FFF5F3' }}>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">🍽️</div>
                    <h5 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Servicio Presencial
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Reserva tu mesa y disfruta de nuestras delicias en un ambiente acogedor
                    </p>
                  </div>

                  <button
                    onClick={() => sendWhatsApp('Hola! 🍽️ Me gustaría hacer una RESERVA en el restaurante. ¿Tienen disponibilidad?')}
                    className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#EDBEB9' }}
                  >
                    <Calendar size={20} />
                    Reservar Mesa
                  </button>

                  <button
                    onClick={() => sendWhatsApp('Hola! Tengo una consulta sobre la carta del restaurante 🍽️')}
                    className="w-full py-4 rounded-full font-semibold border-2 hover:bg-white transition flex items-center justify-center gap-2"
                    style={{ color: '#EDBEB9', borderColor: '#EDBEB9' }}
                  >
                    <MessageCircle size={20} />
                    Hacer Consulta
                  </button>

                  <div className="mt-4 p-4 bg-white rounded-lg border-2" style={{ borderColor: '#EDBEB9' }}>
                    <div className="flex items-start gap-2 mb-2">
                      <Clock size={20} style={{ color: '#EDBEB9' }} />
                      <div>
                        <p className="font-semibold text-sm">Horarios</p>
                        <p className="text-xs text-gray-600">Lun-Sáb: 8AM-8PM</p>
                        <p className="text-xs text-gray-600">Dom: 9AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4" style={{ borderColor: '#EDBEB9' }}>
              <div className="p-6" style={{ backgroundColor: '#FFF5F3' }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <ShoppingBag size={32} style={{ color: '#EDBEB9' }} />
                  <h4 className="text-3xl font-bold text-center" style={{ fontFamily: "'Playfair Display', serif", color: '#EDBEB9' }}>
                    Carta de Pedidos Personalizados
                  </h4>
                </div>
                <p className="text-center text-gray-600 mb-4">Para llevar o delivery - Pedidos especiales</p>
              </div>

              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 bg-gray-100 p-4">
                  <div className="relative">
                    <iframe
                      src={cartaPedidos}
                      className="w-full h-[600px] rounded-lg border-2"
                      style={{ borderColor: '#EDBEB9' }}
                      title="Carta de Pedidos"
                    />
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center gap-6" style={{ backgroundColor: '#FFF5F3' }}>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">🎂</div>
                    <h5 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Pedidos Especiales
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Tortas personalizadas, postres para eventos y más. Pick up o delivery disponible
                    </p>
                  </div>

                  <button
                    onClick={() => sendWhatsApp('Hola! 🎂 Me gustaría hacer un PEDIDO PERSONALIZADO. ¿Me pueden ayudar?')}
                    className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#EDBEB9' }}
                  >
                    <ShoppingBag size={20} />
                    Hacer Pedido
                  </button>

                  <button
                    onClick={() => sendWhatsApp('Hola! Tengo una consulta sobre pedidos personalizados 🎂')}
                    className="w-full py-4 rounded-full font-semibold border-2 hover:bg-white transition flex items-center justify-center gap-2"
                    style={{ color: '#EDBEB9', borderColor: '#EDBEB9' }}
                  >
                    <MessageCircle size={20} />
                    Hacer Consulta
                  </button>

                  <div className="mt-4 p-4 bg-white rounded-lg border-2" style={{ borderColor: '#EDBEB9' }}>
                    <p className="font-semibold text-sm mb-2" style={{ color: '#EDBEB9' }}>💡 Tip</p>
                    <p className="text-xs text-gray-600">
                      Pedidos con 48hrs de anticipación. Delivery disponible en Lima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-24 h-px" style={{ backgroundColor: '#EDBEB9' }}></div>
          <span className="text-3xl">✿</span>
          <div className="w-24 h-px" style={{ backgroundColor: '#EDBEB9' }}></div>
        </div>
      </div>

      <section id="contacto" className="py-20 px-4" style={{ backgroundColor: '#FFF5F3' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif", color: '#EDBEB9' }}>
            Contáctanos
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2" style={{ borderColor: '#EDBEB9' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Información</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold">Horario</p>
                      <p className="text-gray-600">Lunes - Sábado: 10:00 AM - 10:00 PM</p>
                      <p className="text-gray-600">Domingo: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-gray-600">Lima, Perú</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">+51 936 799 135</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>¿Tienes dudas?</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Contáctanos por WhatsApp para resolver todas tus preguntas sobre reservas, pedidos personalizados o cualquier consulta.
                </p>
                <button
                  onClick={() => sendWhatsApp('Hola Ale Cendra Bakery, tengo una consulta 👋')}
                  className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#EDBEB9' }}
                >
                  <MessageCircle size={20} />
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#EDBEB9' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-2" style={{ color: '#EDBEB9', fontFamily: "'Playfair Display', serif" }}>
            Ale Cendra Bakery
          </h3>
          <p className="text-gray-600 mb-6 text-lg italic">Endulzando momentos especiales desde el corazón</p>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-2xl">🎂</span>
            <span className="text-2xl">🧁</span>
            <span className="text-2xl">🥐</span>
            <span className="text-2xl">🍰</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Ale Cendra Bakery. Hecho con amor y dedicación.
          </p>
        </div>
      </footer>

      <button
        onClick={() => sendWhatsApp('¡Hola Ale Cendra Bakery! 👋')}
        className="fixed bottom-6 right-6 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition z-50"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}