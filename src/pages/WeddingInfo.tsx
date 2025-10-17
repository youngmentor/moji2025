
const WeddingInfo = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 text-center text-gray-800">
        Wedding
        <span className="text-rose-500 italic font-serif font-extralight"> Details</span>
      </h1>

      {/* Wedding Invitation */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-center text-gray-800">
            Official Invitation
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src="/wedding-invitation.jpg"
              alt="Wedding Invitation - Mojisola & Olatunji 2025"
              className="max-w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => window.open('/wedding-invitation.jpg', '_blank')}
            />
          </div>
          <p className="text-center text-gray-600 italic">
            Click to view full size invitation
          </p>
        </div>
      </div>

      {/* Wedding Details */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 shadow-lg">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-light text-gray-800">Date & Time</h3>
              <p className="text-xl font-medium text-gray-700">Saturday October 18, 2025</p>
              <p className="text-lg text-gray-600">10:00 AM</p>
            </div>

            <div className="w-16 h-0.5 bg-rose-300 mx-auto"></div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-light text-gray-800">Venue</h3>
              <p className="text-xl font-medium text-gray-700">De Spectacular Event Center</p>
              <p className="text-lg text-gray-600">Bashorun Avenue Beside Bluestone Garden City Off Mowe Ofada Road .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; export default WeddingInfo;
