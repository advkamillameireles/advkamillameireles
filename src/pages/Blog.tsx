import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return null;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="flex items-center mb-6">
        <span className="text-sm text-gray-500">{post.date}</span>
        <span className="mx-2 text-gray-300">•</span>
        <span className="text-sm text-primary font-semibold">
          {post.category}
        </span>
      </div>
      <h1 className="text-4xl font-roboto font-bold text-primary mb-6">
        {post.title}
      </h1>
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

const BlogList = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-roboto font-bold text-primary mb-12 text-center">
          Artigos e Notícias
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-primary font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-roboto font-bold mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:text-primary-light transition-colors"
                >
                  Leia Mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const { id } = useParams();
  return id ? <BlogPost /> : <BlogList />;
};

export default Blog;