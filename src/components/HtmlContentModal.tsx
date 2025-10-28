import { useEffect, useState } from 'react';

interface HtmlContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const HtmlContentModal = ({ isOpen, onClose, url, title = 'Project Details' }: HtmlContentModalProps) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      fetchHtmlContent();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const fetchHtmlContent = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const html = await response.text();

      // Extract and clean the HTML content
      const cleanedHtml = cleanHtmlContent(html);
      setHtmlContent(cleanedHtml);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
      console.error('Error fetching HTML:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const cleanHtmlContent = (html: string): string => {
    // Create a temporary DOM to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove scripts
    doc.querySelectorAll('script').forEach(script => script.remove());

    // Fix image sources
    doc.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('data:')) {
        img.setAttribute('src', new URL(src, url).href);
      }
    });

    // Fix link hrefs
    doc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http')) {
        link.setAttribute('href', new URL(href, url).href);
      }
    });

    // Fix background images in style attributes
    doc.querySelectorAll('[style*="url("]').forEach(el => {
      const style = el.getAttribute('style');
      if (style) {
        const updatedStyle = style.replace(/url\(['"]?([^'"()]+)['"]?\)/g, (match, urlPath) => {
          if (!urlPath.startsWith('http') && !urlPath.startsWith('data:')) {
            return `url('${new URL(urlPath, url).href}')`;
          }
          return match;
        });
        el.setAttribute('style', updatedStyle);
      }
    });

    return doc.documentElement.outerHTML;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 bg-white rounded-lg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 bg-neutral-50 rounded-t-lg flex-shrink-0">
          <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
          <div className="flex items-center gap-2">
            {/* Open in New Tab Button */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-200 rounded-lg transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Open in new tab"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-200 rounded-lg transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 overflow-auto">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-neutral-600">Loading content...</span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="bg-red-50 rounded-lg p-6 shadow-lg max-w-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Failed to load content</h3>
                    <p className="text-sm text-red-700">{error}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View original page →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isLoading && !error && htmlContent && (
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </div>
      </div>

      {/* Backdrop Click to Close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />
    </div>
  );
};

export default HtmlContentModal;
