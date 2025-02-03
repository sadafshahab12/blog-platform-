"use client";
import { useState, useEffect, FormEvent } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { MdEditNote } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import Image from "next/image";

const formatDate = (date: Date) => date.toISOString().split("T")[0];
interface CreateBlogProps {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}
const CreateBlog = ({buttonRef} : CreateBlogProps) => {
  const { user } = useUser();
  const userId = user?.id || "";
  const userName = user?.fullName || "Anonymous";
  const userEmail = user?.primaryEmailAddress?.emailAddress || "No email provided";
  const userProfile = user?.imageUrl || "/default-avatar.png";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [commentText, setCommentText] = useState("");
  const [posts, setPosts] = useState<
    {
      id: number;
      userId: string;
      authorName: string;
      authorEmail: string;
      authorProfile: string;
      title: string;
      content: string;
      image: string | null;
      createdAt: string;
      comments: { text: string; createdAt: string; id: number; likes: number }[];
      likes: number;
      showCommentBox: boolean;
    }[]
  >([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userId) {
      alert("You must be logged in to create a post.");
      return;
    }
    const newPost = {
      id: Date.now(),
      userId,
      authorName: userName,
      authorEmail: userEmail,
      authorProfile: userProfile,
      title,
      content,
      image,
      createdAt: formatDate(new Date()),
      comments: [],
      likes: 0,
      showCommentBox: false,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleDeletePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image);
      setEditingPostId(postId);
    }
  };

  const handleUpdatePost = () => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === editingPostId
          ? { ...post, title, content, image }
          : post
      )
    );
    setTitle("");
    setContent("");
    setImage(null);
    setEditingPostId(null);
  };

  const handleLikePost = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentSubmit = (postId: number) => {
    if (!commentText) return;
    const newComment = {
      text: commentText,
      createdAt: formatDate(new Date()),
      id: Date.now(),
      likes: 0,
    };
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment], showCommentBox: false }
          : post
      )
    );
    setCommentText("");
  };

  const handleLikeComment = (postId: number, commentId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
              ),
            }
          : post
      )
    );
  };

  const handleEditComment = (commentId: number, postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      const comment = post.comments.find((c) => c.id === commentId);
      if (comment) {
        setEditingCommentId(commentId);
        setCommentText(comment.text);
      }
    }
  };

  const handleUpdateComment = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === editingCommentId
                  ? { ...comment, text: commentText }
                  : comment
              ),
            }
          : post
      )
    );
    setEditingCommentId(null);
    setCommentText("");
  };

  const handleDeleteComment = (postId: number, commentId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: post.comments.filter((comment) => comment.id !== commentId) }
          : post
      )
    );
  };

  return (
    <section className="max-w-4xl mx-auto p-8" ref={buttonRef}>
      <h2 className="text-3xl font-bold mb-4">Create a New Post</h2>
      {!userId && (
        <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800">
          <p>You must be logged in to create a post.</p>
          <SignInButton />
        </div>
      )}
      <form onSubmit={editingPostId ? handleUpdatePost : handleSubmit} className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block w-full p-3 border rounded"
          required
          disabled={!userId}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={5}
          className="block w-full p-3 border rounded"
          required
          disabled={!userId}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && setImage(URL.createObjectURL(e.target.files[0]))}
          className="block w-full"
          disabled={!userId}
        />
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded" disabled={!userId}>
          {editingPostId ? "Update" : "Publish"}
        </button>
      </form>
      <h3 className="text-2xl font-semibold mt-8">All Posts</h3>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border p-4 mt-4 relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Image src={post.authorProfile} alt="Author"  width={500} height={500} className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="font-semibold">{post.authorName}</span>
                    <p className="text-sm text-gray-500">{post.authorEmail}</p>
                  </div>
                </div>
                {userId === post.userId && (
                  <div className="relative">
                    <button onClick={() => setDropdownOpen(dropdownOpen === post.id ? null : post.id)} className="text-gray-600 focus:outline-none">
                      <HiOutlineDotsHorizontal className="w-6 h-6" />
                    </button>
                    {dropdownOpen === post.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md">
                        <button onClick={() => handleEditPost(post.id)} className="flex items-center gap-3 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200">
                          <MdEditNote className="w-6 h-6" /> Edit
                        </button>
                        <button onClick={() => handleDeletePost(post.id)} className="flex items-center gap-3 w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200 text-sm">
                        <IoMdTrash className="w-6 h-6" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <h4 className="text-xl font-bold">{post.title}</h4>
              {post.image && <Image src={post.image} alt="Post"  width={500} height={500} className="mt-2 w-full rounded" />}
              <p className="mt-2">{post.content}</p>
              <p className="text-sm text-gray-500">Published: {post.createdAt}</p>
              <div className="mt-4 flex justify-between">
                <button onClick={() => handleLikePost(post.id)} className="text-indigo-600 flex items-center gap-3">
                <SlLike className="w-5 h-5" /> Like {post.likes}
                </button>
                <button onClick={() => setPosts((prevPosts) => prevPosts.map((p) => (p.id === post.id ? { ...p, showCommentBox: !p.showCommentBox } : p)))} className="text-indigo-600 flex items-center gap-3">
                <FaRegComment className="w-6 h-6" />  Comment
                </button>
              </div>
              {post.showCommentBox && (
                <div className="mt-4">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="block w-full p-3 border rounded"
                  />
                  <button onClick={() => handleCommentSubmit(post.id)} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">
                    Submit Comment
                  </button>
                </div>
              )}
              <div className="mt-6">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="border p-4 mt-2 rounded space-y-5">
                    <p>{comment.text}</p>
                    <div className="mt-2 flex gap-10 text-sm items-center">
                      <button onClick={() => handleLikeComment(post.id, comment.id)} className="text-indigo-600 flex items-center gap-2">
                      <SlLike className="w-5 h-5" /> Like {comment.likes}
                      </button>
                      {userId === post.userId && (
                        <button onClick={() => handleEditComment(comment.id, post.id)} className="text-yellow-600 flex items-center gap-2">
                          <MdEditNote className="w-6 h-6" /> Edit
                        </button>
                      )}
                      {userId === post.userId && (
                        <button onClick={() => handleDeleteComment(post.id, comment.id)} className="text-red-600 flex items-center gap-2">
                         <IoMdTrash className="w-5 h-5" /> Delete
                        </button>
                      )}
                    </div>
                    {editingCommentId === comment.id ? (
                      <div className="mt-2">
                        <textarea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="block w-full p-2 border rounded"
                        />
                        <button
                          onClick={() => handleUpdateComment(post.id)}
                          className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
                        >
                          Update
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CreateBlog;
