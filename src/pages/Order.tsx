
const Order = () => {
  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-8">Order Your Custom Cake</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif text-brown-dark mb-4">Getting Started</h2>
            <p className="text-brown mb-6 leading-relaxed">
              Before placing your order, please visit our{" "}
              <a href="/flavours" className="text-brown-dark underline hover:text-brown">
                flavours page
              </a>{" "}
              to explore our delicious range of cake flavours.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif text-brown-dark mb-4">Cake Options</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-brown-dark mb-2">Base Cakes</h3>
                <p className="text-brown leading-relaxed">
                  Our base cakes start at $120 AUD and include basic decoration with buttercream.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-brown-dark mb-2">Custom Fondant Cakes</h3>
                <p className="text-brown leading-relaxed">
                  For a more elaborate design, we offer custom fondant decorations at additional cost.
                  These cakes feature intricate details and can be fully personalized to your vision.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-brown hover:bg-brown-dark text-cream text-lg px-8 py-4 rounded transition-colors"
            >
              Contact Us to Place Your Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
