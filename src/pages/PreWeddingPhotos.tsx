
const PreWeddingPhotos = () => (
    <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Pre-Wedding Photos</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Capturing beautiful moments before our special day. These photos represent our journey together
            and the love we share as we prepare to become one.
        </p>

        {/* Main Featured Photo */}
        <div className="mb-12">
            <img
                src="/_MG_7298.jpg"
                alt="Featured pre-wedding photo"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-contain"
            />
        </div>

        {/* Photo Grid - Mobile First Design */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7323.jpg"
                    alt="Pre-wedding moment 1"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7329.jpg"
                    alt="Pre-wedding moment 2"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7359.jpg"
                    alt="Pre-wedding moment 3"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7368.jpg"
                    alt="Pre-wedding moment 4"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7387.jpg"
                    alt="Pre-wedding moment 5"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7427.jpg"
                    alt="Pre-wedding moment 6"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7460.jpg"
                    alt="Pre-wedding moment 7"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
            <div className="group cursor-pointer">
                <img
                    src="/_MG_7473.jpg"
                    alt="Pre-wedding moment 8"
                    className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] w-full h-auto object-contain"
                />
            </div>
        </div>

        <div className="text-center mt-12">
            <p className="text-gray-600 italic text-lg">
                "Every picture tells a story, and our story is just beginning..."
            </p>
        </div>
    </div>
);

export default PreWeddingPhotos;
