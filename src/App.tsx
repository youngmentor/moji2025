import Home from './pages/Home';
import PreWeddingPhotos from './pages/PreWeddingPhotos';
import Upload from './pages/Upload';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
            MO<span className="text-pink-600">2025</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            <span className="font-semibold text-pink-600">Mojisola</span>
            <span className="mx-3 text-gray-400">&</span>
            <span className="font-semibold text-blue-600">Olatunji</span>
          </p>
          <div className="mt-2">
            <span className="text-sm text-gray-500">Celebrating Our Love</span>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="min-h-screen py-8">
          <Home />
        </section>

        <section id="pre-wedding" className="min-h-screen py-8">
          <PreWeddingPhotos />
        </section>

        <section id="upload" className="min-h-screen py-8 bg-white">
          <Upload />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">
              MO<span className="text-pink-400">2025</span>
            </h3>
            <p className="text-gray-300">
              <span className="text-pink-400">Mojisola</span>
              <span className="mx-2">&</span>
              <span className="text-blue-400">Olatunji</span>
            </p>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <p className="text-gray-400 text-sm">
              Built with <span className="text-red-400">❤️</span> by <span className="font-semibold text-white">Hollo Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
