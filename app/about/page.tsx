import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaComments, FaPen } from "react-icons/fa";
import HeroSec from "../components/ui/HeroSec";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto relative">

      <div className="bg-white bg-opacity-70 absolute top-0 left-0 h-screen w-full"></div>

      <HeroSec
        imageSrc="/about-bg.jpg"
        heading="Discover Our Story"
        tagline="Building connections, one post at a time."
        buttonText="Explore Our Vision"
      />
      <div className="text-center mb-12 p-8">
        <p className="text-[16px] text-gray-600 leading-6">
          PostHive is a platform where creators and enthusiasts can share,
          discover, and engage with posts on various topics. Our mission is to
          provide a space for authentic voices and meaningful interactions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 mb-16 md:max-w-5xl sm:max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-[16px] text-gray-600">
            At PostHive, we believe that everyone has a story to tell. We aim to
            create a user-friendly platform that empowers individuals to express
            themselves and share their thoughts with the world. Whether {`you're`}
            here to write blogs, comment on posts, or simply browse, we want to
            offer an enriching experience for everyone.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[16px] text-gray-600">
            We focus on building a community of like-minded individuals who are
            passionate about discovering and sharing insightful content.
            PostHive is more than just a blogging platform; {`it's`} a space where
            users can engage with content that sparks discussions and broadens
            perspectives.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaUsers className="text-teal-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Community
            </h3>
            <p className="text-gray-600">
              Connect with like-minded individuals, exchange ideas, and create a
              thriving online community.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaComments className="text-teal-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Engagement
            </h3>
            <p className="text-gray-600">
              Share your thoughts, leave comments, and start meaningful
              conversations with others.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaPen className="text-teal-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Create
            </h3>
            <p className="text-gray-600">
              Publish your own posts, share your creativity, and build your
              portfolio with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 md:max-w-5xl mx-auto max-w-6xl">
          <div className="text-center">
            <Image
              src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4="
              width={500}
              height={500}
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.stockcake.com/public/a/3/9/a398c3fc-790b-4c2c-8715-c8d5c627b08a_large/smiling-professional-man-stockcake.jpg"
              width={500}
              height={500}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="text-center">
            <Image
              src="https://as1.ftcdn.net/v2/jpg/02/76/18/18/1000_F_276181825_vGSOaQQXr2GFFDJhv95LkOR6WO9hX6WI.jpg"
              width={500}
              height={500}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Alice Johnson
            </h3>
            <p className="text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-teal-600 text-white text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">
          Join the PostHive Community
        </h2>
        <p className="text-lg mb-6">
          Create, share, and engage with insightful content today!
        </p>
        <Link
          href="/sign-up"
          className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default About;
