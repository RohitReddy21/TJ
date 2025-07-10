import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { services, CaseStudy } from '../data/caseStudyData';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const currentStudy: CaseStudy | undefined =
    (location.state as CaseStudy) || services.find((s) => s.slug === slug);

  if (!currentStudy) {
    return <div className="text-center py-20 text-lg text-gray-600">No Case Study Data Found</div>;
  }

  const recommendations = services.filter((s) => s.slug !== currentStudy.slug);

  return (
    <section className="bg-[#f5f9ff]">
      {/* Hero */}
      <div className="w-full py-16 px-4 sm:px-8 lg:px-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block px-8 py-3 rounded-xl shadow-lg">
          {currentStudy.title}
        </h1>

        <div className="text-sm text-gray-600 mt-4">
          Home <span className="mx-1">&gt;</span> Case Studies <span className="mx-1">&gt;</span> {currentStudy.title}
        </div>

        {/* Icon */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white p-4 rounded-full shadow-md hover:scale-105 transition duration-300">
            <img src={currentStudy.icon} alt="icon" className="w-10 h-10 object-contain" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-4 sm:px-6 lg:px-20 py-12 max-w-screen-xl mx-auto rounded-t-3xl shadow-inner">
        <div className="grid gap-12 text-gray-800 text-justify">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Overview</h2>
            <p className="leading-relaxed whitespace-pre-line">{currentStudy.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Challenge</h2>
            <p className="leading-relaxed whitespace-pre-line">{currentStudy.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Results</h2>
            <p className="leading-relaxed whitespace-pre-line">{currentStudy.results}</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="py-20 px-4 sm:px-6 lg:px-16 bg-white border-t">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">You May Also Like</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
          {recommendations.map((rec) => (
            <div
              key={rec.slug}
              onClick={() => navigate(`/case-studies/${rec.slug}`, { state: rec })}
              className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img src={rec.image} alt={rec.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{rec.title}</h3>
                <p className="text-sm text-gray-600">{rec.description.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
