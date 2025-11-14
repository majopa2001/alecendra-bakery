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
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Lora', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
      `}</style>

      <nav className="fixed w-full bg-white shadow-md z-50 border-b-2" style={{ borderColor: '#EDBEB9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold" style={{ color: '#EDBEB9', fontFamily: "'Cinzel', serif" }}>
                  Ale Cendra
                </h1>
                <p className="text-xs tracking-widest text-gray-600" style={{ fontFamily: "'Cinzel', serif" }}>B A K E R Y</p>
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

      <section
        id="inicio"
        className="pt-32 pb-20 px-4"
        style={{ background: 'linear-gradient(to bottom, #FFF5F3, #FFFFFF)' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div
              className="inline-block rounded-full p-1 mb-6 bg-white shadow-xl"
              style={{ border: '3px solid #EDBEB9' }}
            >
              <img
                src={logoUrl}
                alt="Ale Cendra Bakery Logo"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full object-contain bg-white p-2"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-6xl hidden">🎂</span>
            </div>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}
          >
            La Elegancia en Cada Bocado
          </h2>
          <p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Creaciones únicas que transforman momentos ordinarios en extraordinarios
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
          <h3
            className="text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#EDBEB9', letterSpacing: '0.05em' }}
          >
            Nuestras Cartas
          </h3>
          <p
            className="text-center text-gray-600 mb-16 text-lg italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Descubre nuestras selecciones especiales
          </p>

          {/* CARTA RESTAURANTE */}
          <div className="mb-16">
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4"
              style={{ borderColor: '#EDBEB9' }}
            >
              <div className="p-6" style={{ backgroundColor: '#FFF5F3' }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar size={32} style={{ color: '#EDBEB9' }} />
                  <h4
                    className="text-3xl font-bold text-center"
                    style={{ fontFamily: "'Cinzel', serif", color: '#EDBEB9', letterSpacing: '0.03em' }}
                  >
                    Carta del Restaurante
                  </h4>
                </div>
                <p
                  className="text-center text-gray-600 mb-4 italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Experiencia memorable en el restaurante
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 bg-gray-100 p-4">
                  <div className="hidden md:block relative">
                    <iframe
                      src={cartaRestaurante}
                      className="w-full h-[600px] rounded-lg border-2"
                      style={{ borderColor: '#EDBEB9' }}
                      title="Carta del Restaurante"
                    />
                  </div>
                  
                  {/* Versión móvil mejorada */}
                  <div className="md:hidden flex flex-col items-center text-center py-10 px-6 bg-white rounded-xl shadow-sm">
                    <div className="text-6xl mb-4">📋</div>

                    <h5
                      className="text-2xl font-bold mb-3 tracking-wide"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Ver Carta del Restaurante
                    </h5>

                    <p
                      className="text-gray-600 mb-6 text-base italic leading-relaxed"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Toca el botón para ver nuestra carta completa
                    </p>

                    <a
                      href={cartaRestaurante}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-xs py-3 px-4 rounded-full font-semibold text-white shadow-lg text-center text-base"
                      style={{ backgroundColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                    >
                      📄 Abrir Carta
                    </a>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center gap-6" style={{ backgroundColor: '#FFF5F3' }}>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">🍽️</div>
                    <h5
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}
                    >
                      Servicio Presencial
                    </h5>
                    <p
                      className="text-gray-600 text-sm italic"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Reserva tu mesa y vive una experiencia memorable
                    </p>
                  </div>

                  <button
                    onClick={() => sendWhatsApp('Hola! 🍽️ Me gustaría hacer una RESERVA en el restaurante. ¿Tienen disponibilidad?')}
                    className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                  >
                    <Calendar size={20} />
                    Reservar Mesa
                  </button>

                  <button
                    onClick={() => sendWhatsApp('Hola! Tengo una consulta sobre la carta del restaurante 🍽️')}
                    className="w-full py-4 rounded-full font-semibold border-2 hover:bg-white transition flex items-center justify-center gap-2"
                    style={{ color: '#EDBEB9', borderColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                  >
                    <MessageCircle size={20} />
                    Hacer Consulta
                  </button>

                  <div
                    className="mt-4 p-4 bg-white rounded-lg border-2"
                    style={{ borderColor: '#EDBEB9' }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <Clock size={20} style={{ color: '#EDBEB9' }} />
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Horarios
                        </p>
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          Lunes a Domingo
                        </p>
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          10:00 AM - 10:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARTA PEDIDOS */}
          <div>
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4"
              style={{ borderColor: '#EDBEB9' }}
            >
              <div className="p-6" style={{ backgroundColor: '#FFF5F3' }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <ShoppingBag size={32} style={{ color: '#EDBEB9' }} />
                  <h4
                    className="text-3xl font-bold text-center"
                    style={{ fontFamily: "'Cinzel', serif", color: '#EDBEB9', letterSpacing: '0.03em' }}
                  >
                    Carta de Pedidos Personalizados
                  </h4>
                </div>
                <p
                  className="text-center text-gray-600 mb-4 italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Delivery o Pick Up en tienda - Pedidos especiales
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 bg-gray-100 p-4">
                  <div className="hidden md:block relative">
                    <iframe
                      src={cartaPedidos}
                      className="w-full h-[600px] rounded-lg border-2"
                      style={{ borderColor: '#EDBEB9' }}
                      title="Carta de Pedidos"
                    />
                  </div>
                  
                  {/* Versión móvil mejorada */}
                  <div className="md:hidden flex flex-col items-center text-center py-10 px-6 bg-white rounded-xl shadow-sm">
                    <div className="text-6xl mb-4">🎂</div>

                    <h5
                      className="text-2xl font-bold mb-3 tracking-wide"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Ver Carta de Pedidos
                    </h5>

                    <p
                      className="text-gray-600 mb-6 text-base italic leading-relaxed"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Toca el botón para ver todas nuestras opciones personalizadas
                    </p>

                    <a
                      href={cartaPedidos}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-xs py-3 px-4 rounded-full font-semibold text-white shadow-lg text-center text-base"
                      style={{ backgroundColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                    >
                      📄 Abrir Carta
                    </a>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center gap-6" style={{ backgroundColor: '#FFF5F3' }}>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">🎂</div>
                    <h5
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}
                    >
                      Pedidos Especiales
                    </h5>
                    <p
                      className="text-gray-600 text-sm italic"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Creaciones personalizadas para momentos únicos
                    </p>
                  </div>

                  <button
                    onClick={() => sendWhatsApp('Hola! 🎂 Me gustaría hacer un PEDIDO PERSONALIZADO. ¿Me pueden ayudar?')}
                    className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                  >
                    <ShoppingBag size={20} />
                    Hacer Pedido
                  </button>

                  <button
                    onClick={() => sendWhatsApp('Hola! Tengo una consulta sobre pedidos personalizados 🎂')}
                    className="w-full py-4 rounded-full font-semibold border-2 hover:bg-white transition flex items-center justify-center gap-2"
                    style={{ color: '#EDBEB9', borderColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                  >
                    <MessageCircle size={20} />
                    Hacer Consulta
                  </button>

                  <div
                    className="mt-4 p-4 bg-white rounded-lg border-2"
                    style={{ borderColor: '#EDBEB9' }}
                  >
                    <p
                      className="font-semibold text-sm mb-2"
                      style={{ color: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                    >
                      💡 Nota Importante
                    </p>
                    <p
                      className="text-xs text-gray-600 italic"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
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
          <h3
            className="text-5xl font-bold text-center mb-16"
            style={{ fontFamily: "'Cinzel', serif", color: '#EDBEB9', letterSpacing: '0.05em' }}
          >
            Contáctanos
          </h3>
          
          <div
            className="bg-white rounded-2xl shadow-xl p-8 border-2"
            style={{ borderColor: '#EDBEB9' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Información
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Horario</p>
                      <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>Lunes a Domingo</p>
                      <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Ubicación</p>
                      <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>Lima, Perú</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle size={24} style={{ color: '#EDBEB9' }} className="mt-1" />
                    <div>
                      <p className="font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>WhatsApp</p>
                      <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>+51 936 799 135</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  ¿Tienes dudas?
                </h4>
                <p
                  className="text-gray-600 mb-6 leading-relaxed italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Estamos aquí para atenderte. Contáctanos por WhatsApp y resolveremos todas tus consultas.
                </p>
                <button
                  onClick={() => sendWhatsApp('Hola Ale Cendra Bakery, tengo una consulta 👋')}
                  className="w-full py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#EDBEB9', fontFamily: "'Cinzel', serif" }}
                >
                  <MessageCircle size={20} />
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="py-12 px-4 border-t-2"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#EDBEB9' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3
            className="text-4xl font-bold mb-2"
            style={{ color: '#EDBEB9', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}
          >
            Ale Cendra Bakery
          </h3>
          <p
            className="text-gray-600 mb-6 text-lg italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Donde cada creación cuenta una historia
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-2xl">🎂</span>
            <span className="text-2xl">🧁</span>
            <span className="text-2xl">🥐</span>
            <span className="text-2xl">🍰</span>
          </div>
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: "'Lora', serif" }}
          >
            © 2024 Ale Cendra Bakery. Hecho con amor y dedicación.
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
