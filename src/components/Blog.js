import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "How Do I Find the Best Video Production Company in Bangalore?",
      excerpt: "Excellent films can fascinate consumers like no other media, whether for business communication, product demos, or advertising campaigns.",
      image: "/api/placeholder/300/200",
      date: "March 15, 2024"
    },
    {
      title: "How Do I Reach Out to Micro-Influencers?",
      excerpt: "Usually between 10K and 100K followers, micro-influencers are specialized online experts with quite a limited audience.",
      image: "/api/placeholder/300/200",
      date: "March 10, 2024"
    },
    {
      title: "Top 10 Influencer Marketing Companies In India 2024",
      excerpt: "Influencer marketing has become a powerful tool for companies engaging with their target audience on social media in the digital age.",
      image: "/api/placeholder/300/200",
      date: "March 5, 2024"
    },
    {
      title: "Online Influencer Marketing Strategies for Brands",
      excerpt: "Working with the appropriate influencers speeds up your approach to reaching your target market, as the general public values their viewpoint.",
      image: "/api/placeholder/300/200",
      date: "February 28, 2024"
    },
    {
      title: "What is the Best Platform for Sourcing Influencers?",
      excerpt: "Intelligent algorithms used in influencer marketing systems simplify life for companies and agencies looking for influencers.",
      image: "/api/placeholder/300/200",
      date: "February 25, 2024"
    },
    {
      title: "Who is the Biggest Skincare Influencer?",
      excerpt: "India is among the most significant marketplaces globally. This article is suitable for you if you're looking for trendsetters.",
      image: "/api/placeholder/300/200",
      date: "February 20, 2024"
    }
  ];

  return (
    <section id="blog" className="blog section-padding">
      <div className="container">
        <div className="blog-header text-center">
          <h2 className="section-title">Blogs</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends and insights in influencer marketing.
          </p>
        </div>

        <div className="blog-grid grid grid-3">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="blog-read-more">
                  Read More <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center" style={{marginTop: '3rem'}}>
          <button className="btn-primary">View All Blogs</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
