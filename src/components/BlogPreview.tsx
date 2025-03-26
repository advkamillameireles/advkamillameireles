import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPreview = () => {
  // Show only the first 3 posts in the preview
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-roboto font-bold text-primary mb-4">
            Artigos e Notícias
          </h2>
          <p className="text-gray-600">
            Fique por dentro das últimas atualizações do Direito Previdenciário
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewPosts.map((post) => (
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
                <h3 className="text-xl font-roboto font-bold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center"
                >
                  Leia Mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;