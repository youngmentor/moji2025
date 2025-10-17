import { useState } from 'react';

const Home = () => {
    const [activeTab, setActiveTab] = useState<'bride' | 'groom'>('bride');

    const brideStory = {
        title: "Mojisola's Story",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light max-w-4xl mx-auto">
                <p className="text-xl leading-relaxed">
                    We met while we were both undergraduates at <strong className="font-medium text-gray-800">Obafemi Awolowo University, Ile-Ife</strong>, in 2019.
                    It all began during Ramadan that year, when my friend Semiat invited me to a Muslim gathering on campus - <strong className="font-medium text-rose-600">TIMSAN</strong>.
                    It felt like a family away from home.
                </p>

                <p className="leading-relaxed">
                    At first, I just wanted to attend the evening Ramadan prayer at the Zawiyah, but the way the members welcomed me that day
                    made me feel so at home. Even though I didn't return immediately, one evening my phone rang and it was the man I'm getting married to today.
                </p>

                <p className="leading-relaxed">
                    At the time, he was the PRO of TIMSAN. The moment I picked up, I felt something. He called to inform me that members were
                    meeting at the SUB car park and were already waiting for me so we could go together to one of our lecturers' quarters for the Ramadan prayer.
                </p>

                <p className="leading-relaxed">
                    I wasn't really interested in the program but <em className="text-rose-500 font-medium">the voice behind the call pulled me in</em>. I left my hostel and met them at the car park.
                    I asked Semiat who called me, and she pointed to him. I also found out he was a medical student which made me even more curious.
                </p>

                <p className="leading-relaxed">
                    As a lady, I didn't make the first move, but I started drawing closer, hoping he would notice. I began attending prayers at the
                    Zawiyah every day - partly because of him. And eventually, he noticed me.
                </p>

                <p className="leading-relaxed">
                    After some months of friendship, he finally asked me out during one of our school breaks. I didn't take long to say,
                    <strong className="font-medium text-gray-800">"I'll be your girl."</strong>
                </p>

                <p className="text-rose-600 font-medium text-xl leading-relaxed mt-8 italic border-l-4 border-rose-200 pl-6">
                    Our journey has been memorable, intentional, and full of growth. Through storms, distance, and challenges,
                    we've held onto each other and today, we're here.
                </p>
            </div>
        )
    };

    const groomStory = {
        title: "Olatunji's Story",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light max-w-4xl mx-auto">
                <p className="text-xl leading-relaxed italic text-gray-600">
                    Coming from the groom's perspective...
                </p>
                <p className="leading-relaxed">
                    As the PRO of TIMSAN in 2019, I was always looking out for new members and trying to make everyone feel welcome.
                    When I heard about this new sister who had attended one of our gatherings, I knew I had to reach out.
                </p>

                <p className="leading-relaxed">
                    That evening when I called her about the Ramadan prayer, I had no idea that simple phone call would change my life forever.
                    There was something special about our conversation - a connection I hadn't felt before.
                </p>

                <p className="leading-relaxed">
                    Being a medical student kept me quite busy, but I found myself looking forward to our TIMSAN meetings more and more.
                    I noticed she started coming regularly, and I couldn't help but be drawn to her presence.
                </p>

                <p className="leading-relaxed">
                    I watched her from afar for months, admiring her dedication and the way she carried herself.
                    When I finally gathered the courage to ask her out during our school break, I was nervous but hopeful.
                </p>

                <p className="leading-relaxed">
                    When she said <strong className="font-medium text-gray-800">"I'll be your girl,"</strong> I knew my life had just taken the most beautiful turn possible.
                </p>

                <p className="text-blue-600 font-medium text-xl leading-relaxed mt-8 italic border-l-4 border-blue-200 pl-6">
                    From that moment, we've built something extraordinary together. Through every challenge and every joy,
                    our love has only grown stronger.
                </p>
            </div>
        )
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 text-center text-gray-900 tracking-wide">
                Welcome to Our
                <span className="block font-serif font-extralight text-4xl md:text-6xl text-rose-500 mt-2 italic">Wedding</span>
            </h1>
            <p className="text-center text-gray-500 text-lg md:text-xl font-light tracking-wider mb-12 italic">
                Celebrating Love • Creating Memories • Building Forever
            </p>

            {/* Wedding Invitation Card */}
            <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-gradient-to-b from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-rose-100">
                    <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 text-center text-gray-800">
                        You're
                        <span className="text-rose-500 italic font-serif font-extralight"> Invited</span>
                    </h2>
                    <div className="flex justify-center">
                        <img
                            src="/wedding-invitation.jpg"
                            alt="Wedding Invitation - Mojisola & Olatunji 2025"
                            className="max-w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => window.open('/wedding-invitation.jpg', '_blank')}
                        />
                    </div>
                    <p className="text-center text-gray-600 mt-4 italic">
                        Click to view full invitation
                    </p>
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
                <img src="/_MG_7298.jpg" alt="Beautiful couple photo" className="rounded-2xl shadow-2xl w-full lg:w-1/3 max-w-md object-cover h-96" />
                <div className="lg:w-2/3 text-center lg:text-left">
                    <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-gray-800 leading-tight">
                        Our
                        <span className="text-rose-500 font-serif italic font-extralight"> Love </span>
                        Story
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-gray-600 mb-6 leading-relaxed italic">
                        "Ours was love at first sound."
                    </p>
                    <div className="w-16 h-0.5 bg-rose-400 mx-auto lg:mx-0"></div>
                </div>
            </div>

            {/* Story Section with Tabs */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12 mb-16 border border-gray-100">
                    <h3 className="font-serif text-3xl md:text-4xl font-light mb-8 text-center text-gray-800 tracking-wide">
                        How We
                        <span className="text-rose-500 italic font-serif font-extralight"> Met</span>
                    </h3>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-50 rounded-2xl p-1.5 flex shadow-inner">
                            <button
                                onClick={() => setActiveTab('bride')}
                                className={`px-8 py-4 rounded-xl font-light text-lg transition-all duration-300 ${activeTab === 'bride'
                                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-600 hover:text-rose-500 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                Bride's Story
                            </button>
                            <button
                                onClick={() => setActiveTab('groom')}
                                className={`px-8 py-4 rounded-xl font-light text-lg transition-all duration-300 ${activeTab === 'groom'
                                    ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg transform scale-105'
                                    : 'text-gray-600 hover:text-blue-500 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                Groom's Story
                            </button>
                        </div>
                    </div>

                    <div className="min-h-[500px]">
                        <h4 className="text-2xl md:text-3xl font-light mb-8 text-center text-gray-700 tracking-wide">
                            {activeTab === 'bride' ? brideStory.title : groomStory.title}
                        </h4>
                        <div className="prose prose-lg prose-gray max-w-none text-center">
                            {activeTab === 'bride' ? brideStory.content : groomStory.content}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-6 text-gray-800 tracking-wide">
                    Join Us in Celebrating
                    <span className="block text-rose-500 italic font-serif font-extralight mt-2">Our Love</span>
                </h3>
                <p className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    We can't wait to share this special day with our family and friends.
                    <span className="block mt-2 text-lg italic">Scroll down to find all the details about our wedding day!</span>
                </p>

                {/* Photo Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <img src="/_MG_7329.jpg" alt="Couple moment 1" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 object-cover h-52 w-full transform hover:scale-105" />
                    <img src="/_MG_7359.jpg" alt="Couple moment 2" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 object-cover h-52 w-full transform hover:scale-105" />
                    <img src="/_MG_7368.jpg" alt="Couple moment 3" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 object-cover h-52 w-full transform hover:scale-105" />
                    <img src="/_MG_7387.jpg" alt="Couple moment 4" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 object-cover h-52 w-full transform hover:scale-105" />
                </div>

                <div className="text-center mt-16">
                    <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-rose-50 rounded-3xl p-8 shadow-lg">
                        <p className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed">
                            "Life is not measured by the number of breaths we take,
                            <span className="block mt-2 text-rose-600">but by the moments that take our breath away."</span>
                        </p>
                        <div className="w-24 h-0.5 bg-rose-300 mx-auto mt-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
