import { NextPage } from "next";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import HeroSec from "../components/ui/HeroSec";
import Image from "next/image";

const BlogPage: NextPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Wonders of the Universe",
      author: "Jane Doe",
      date: "January 25, 2025",
      excerpt:
        "Explore the boundless wonders of the universe and the mysteries beyond our understanding.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQGZRkPi6Zx8Zg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681056025955?e=2147483647&v=beta&t=2tuf2hcp9xtuibDhZf7Y4wdgQRhQPBSS07AMVvbw9KM",
    },
    {
      id: 2,
      title: "Tech Innovations Changing the World",
      author: "John Smith",
      date: "February 1, 2025",
      excerpt:
        "Discover the cutting-edge technologies that are revolutionizing industries worldwide.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQGbWT6pNmoEvg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694707414298?e=2147483647&v=beta&t=U7-0XyKCPmf1LdllNEUmkqSOEg3oVapQVKU_A5r9MmY",
    },
    {
      id: 3,
      title: "The Impact of Climate Change",
      author: "Emily White",
      date: "February 3, 2025",
      excerpt:
        "Learn about the pressing issue of climate change and its effects on the planet.",
      image:
        "https://concaveagri.com/wp-content/uploads/2022/06/climate-change-backgrounder.jpeg",
    },
  ];

  return (
    <div className=" bg-gray-100 relative">
      <HeroSec
        imageSrc="/blog.jpeg"
        heading="Latest Insights and Stories"
        tagline=" Exploring the intersection of technology and life."
        buttonText="Dive Into Our Stories"
      />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="md:col-span-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow mb-6"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center">
                      <FaRegUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegCalendarAlt className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <div className="text-teal-600 hover:underline mt-4 inline-block">
                      Read more &rarr;
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p>
                Welcome to PostHive! We are dedicated to sharing valuable
                insights, stories, and ideas from different fields to spark
                creativity and thought. Stay tuned for inspiring content!
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-lg">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/">
                      <div className="text-teal-600 hover:underline">Home</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <div className="text-teal-600 hover:underline">About</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <div className="text-teal-600 hover:underline">
                        Contact
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 PostHive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
