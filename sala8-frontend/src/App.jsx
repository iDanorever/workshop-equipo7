export default function App() {
  return (
    <div className="min-h-screen bg-sky-200 flex flex-col items-center text-gray-800">
      {/* Header */}
      <header className="w-full bg-sky-500 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Sala 8</h1>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-4">Bienvenido</h2>
          <p className="text-gray-600 mb-6">
            Estamos desarrollando una plataforma moderna, pensada para ofrecer
            una experiencia clara, organizada y facil de usar.
            Todo con un diseño limpio y una base solida para seguir creciendo.
          </p>

          <p className="text-gray-600 mb-6">
            Nuestro objetivo es que cada interaccion sea transparente,
            confiable y sencilla para los usuarios.
          </p>

          <button className="px-6 py-2 bg-sky-500 text-white font-medium rounded-xl hover:bg-sky-600 transition">
            Conocer más
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-sky-500 text-white py-3 text-center">
        <p className="text-sm">© 2025 Proyecto de Logging Estructurado</p>
      </footer>
    </div>
  );
}
