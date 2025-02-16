
const About = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-4xl font-serif text-brown-dark mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-brown leading-relaxed">
              <p>
                My journey into baking began with a deep fascination for its scientific foundations. As someone driven by curiosity and a love for understanding how things work, I found myself captivated by the intricate chemistry of baking - the delicate interplay of ingredients, the crucial role of temperature, and the precision of timing that transforms simple ingredients into extraordinary creations.
              </p>
              <p>
                A serendipitous moment occurred when I noticed the striking similarities between my partner Sarah's pottery techniques and the art of working with fondant. This observation led to an exciting experiment - giving Sarah some fondant to work with. The result was nothing short of magical, as her artistic expertise translated perfectly into cake decoration.
              </p>
              <p>
                Today, we've created something truly special by merging our passions - my dedication to perfecting the science of baking with Sarah's artistic vision in fondant decoration. Every cake we create is a testament to this unique collaboration, combining delicious flavors with stunning visual artistry.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/a5bc56e9-ec8f-4918-8e42-e884548d1aaf.png"
                alt="Head baker in chef's whites"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold opacity-10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brown opacity-10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
