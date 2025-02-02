"use client";
import { useState, useEffect, FormEvent } from "react";
import { useUser } from "@clerk/nextjs";
import { FaTrash } from "react-icons/fa";

const formatDate = (date: Date) => {
  return date.toISOString().split("T").join(" ").split(".")[0];
};

const CreateBlog = () => {
  const { user } = useUser();
  const userId = user?.id || "";
  const userName = user?.fullName || "Anonymous";
  const userProfile = user?.imageUrl || "/default-avatar.png"; // Fallback image

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<
    {
      id: number;
      userId: string;
      authorName: string;
      authorProfile: string;
      title: string;
      content: string;
      image: string | null;
      createdAt: string;
      comments: { text: string; createdAt: string; id: number }[];
      likes: number;
    }[]
  >([]);

  // Load posts from local storage
  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to local storage
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userId) return alert("You must be logged in to create a post.");

    const newPost = {
      id: Date.now(),
      userId,
      authorName: userName,
      authorProfile: userProfile,
      title,
      content,
      image,
      createdAt: formatDate(new Date()),
      comments: [],
      likes: 0,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentSubmit = (postId: number) => {
    const commentText = prompt("Enter your comment:");
    if (!commentText) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { text: commentText, createdAt: formatDate(new Date()), id: Date.now() },
              ],
            }
          : post
      )
    );
  };

  const handleDeletePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Create a New Post</h2>

      {/* Post Creation Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block w-full p-3 border rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={5}
          className="block w-full p-3 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files?.[0] as File))}
          className="block w-full"
        />
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded">
          Publish
        </button>
      </form>

      {/* Posts Display */}
      <h3 className="text-2xl font-semibold mt-8">Your Posts</h3>
      {posts.filter((post) => post.userId === userId).length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts
            .filter((post) => post.userId === userId)
            .map((post) => (
              <li key={post.id} className="border p-4 mt-4">
                <div className="flex items-center space-x-3 mb-3">
                  <img src={user?.imageUrl || post.authorProfile} alt="Author" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">{post.authorName}</span>
                </div>
                <h4 className="text-xl font-bold">{post.title}</h4>
                {post.image && <img src={post.image} alt="Post" className="mt-2" />}
                <p className="mt-2">{post.content}</p>
                <p className="text-sm text-gray-500">Published: {post.createdAt}</p>
                <div className="mt-4">
                  <button onClick={() => handleLike(post.id)} className="text-blue-500">
                    👍 Like ({post.likes})
                  </button>
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="text-green-500 ml-4"
                  >
                    💬 Comment
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-500 ml-4"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}

      <h3 className="text-2xl font-semibold mt-8">Other Users' Posts</h3>
      {posts.filter((post) => post.userId !== userId).length === 0 ? (
        <p>No posts from other users.</p>
      ) : (
        <ul>
          {posts
            .filter((post) => post.userId !== userId)
            .map((post) => (
              <li key={post.id} className="border p-4 mt-4">
                <div className="flex items-center space-x-3 mb-3">
                  <img src={post.authorProfile} alt="Author" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">{post.authorName}</span>
                </div>
                <h4 className="text-xl font-bold">{post.title}</h4>
                {post.image && <img src={post.image} alt="Post" className="mt-2" />}
                <p className="mt-2">{post.content}</p>
                <p className="text-sm text-gray-500">Published: {post.createdAt}</p>
                <div className="mt-4">
                  <button onClick={() => handleLike(post.id)} className="text-blue-500">
                    👍 Like ({post.likes})
                  </button>
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="text-green-500 ml-4"
                  >
                    💬 Comment
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default CreateBlog;
