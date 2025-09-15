import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from './Header';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading Incorporation Guide...</p>
    </div>
  );
};

export function IncorporationGuide() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkdownContent = async () => {
      try {
        const response = await fetch('/docs/incorporation-guide.md');
        if (!response.ok) {
          throw new Error('Failed to load incorporation guide');
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error loading incorporation guide:', error);
        setError(error.message);
        // Fallback content if file not accessible
        setMarkdownContent(`
# Singapore Company Incorporation Guide with Virtual Office Address

## Introduction

This comprehensive guide provides information about using virtual office addresses for Singapore company incorporation. While we provide virtual office address and mail forwarding services only, this guide offers general information about the incorporation process to help you understand how our address services fit into your business setup.

**IMPORTANT DISCLAIMER:** We provide virtual office address and mail forwarding services only. We do not provide legal, accounting, or business registration advice. For official incorporation procedures, consult qualified professionals and relevant authorities.

## What We Provide

### Virtual Office Address Services
- **Professional business address** at 10 Anson Road, International Plaza, Singapore CBD
- **Mail receiving and forwarding** to your preferred address
- **Address confirmation letters** for business registration purposes
- **ACRA-compliant address** suitable for company registration

For more information or to get started with your virtual office address, please contact us.
        `);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdownContent();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="incorporation-guide-page">
          <div className="guide-container">
            <LoadingSpinner />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="incorporation-guide-page">
        <div className="guide-container">
          {error && (
            <div className="error-notice">
              <p>Note: Displaying fallback content due to loading error: {error}</p>
            </div>
          )}
          <ReactMarkdown
            className="markdown-content"
            components={{
              h1: ({children}) => <h1 className="guide-title">{children}</h1>,
              h2: ({children}) => <h2 className="guide-section-title">{children}</h2>,
              h3: ({children}) => <h3 className="guide-subsection-title">{children}</h3>,
              p: ({children}) => <p className="guide-paragraph">{children}</p>,
              ul: ({children}) => <ul className="guide-list">{children}</ul>,
              ol: ({children}) => <ol className="guide-ordered-list">{children}</ol>,
              li: ({children}) => <li className="guide-list-item">{children}</li>,
              a: ({href, children}) => (
                <a
                  href={href}
                  className="guide-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({children}) => <strong className="guide-bold">{children}</strong>,
              em: ({children}) => <em className="guide-italic">{children}</em>,
              code: ({children}) => <code className="guide-code">{children}</code>,
              blockquote: ({children}) => <blockquote className="guide-blockquote">{children}</blockquote>,
              hr: () => <hr className="guide-divider" />
            }}
          >
            {markdownContent}
          </ReactMarkdown>

          {/* Call to Action */}
          <div className="guide-cta">
            <div className="cta-content">
              <h3>Ready to Get Your Singapore Business Address?</h3>
              <p>Start your company incorporation process with a prestigious International Plaza CBD address.</p>
              <button
                className="cta-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Get Business Address Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}