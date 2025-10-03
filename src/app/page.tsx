export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full flex items-center bg-foreground md:px-24 px-6 justify-between">
        <h1 className="font-montserrat md:text-7xl text-5xl text-background tracking-tighter ">
          Taste so good
          <br />
          feels like heaven
        </h1>
      </div>
      
      {/* Content sections to demonstrate scroll effect */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Delicious Sweets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Traditional Sweets</h3>
              <p className="text-gray-600">Experience the authentic taste of traditional Indian sweets made with the finest ingredients.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Modern Delights</h3>
              <p className="text-gray-600">Contemporary fusion sweets that blend traditional flavors with modern presentation.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Orders</h3>
              <p className="text-gray-600">Special occasion sweets customized to your preferences and celebrations.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About JK Sweets Corner</h2>
            <div className="prose lg:prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Visit Our Store</h3>
                <p className="text-gray-600">
                  123 Sweet Street<br />
                  Confectionery Lane<br />
                  Sweet City, SC 12345
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: hello@jksweetscorner.com<br />
                  Hours: Mon-Sat 9AM-8PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
