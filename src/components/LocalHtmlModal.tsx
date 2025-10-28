import { useEffect, useState } from 'react';

interface LocalHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlPath: string;
  title?: string;
}

const LocalHtmlModal = ({ isOpen, onClose, htmlPath, title = 'Project Details' }: LocalHtmlModalProps) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      loadHtmlContent();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, htmlPath]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const loadHtmlContent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(htmlPath);
      const html = await response.text();
      const cleanedHtml = removeHeaderFooter(html);
      setHtmlContent(cleanedHtml);
    } catch (err) {
      console.error('Error loading HTML:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeHeaderFooter = (html: string): string => {
    // Parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove header elements (nav, header tags, or elements with common header classes/ids)
    const headerSelectors = [
      'header',
      'nav',
      '[class*="header" i]',
      '[class*="navigation" i]',
      '[class*="navbar" i]',
      '[id*="header" i]',
      '[id*="navigation" i]',
      '[id*="navbar" i]',
      '[data-framer-name*="header" i]',
      '[data-framer-name*="navigation" i]',
    ];

    headerSelectors.forEach(selector => {
      doc.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Remove footer elements
    const footerSelectors = [
      'footer',
      '[class*="footer" i]',
      '[id*="footer" i]',
      '[data-framer-name*="footer" i]',
    ];

    footerSelectors.forEach(selector => {
      doc.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Remove "other projects" or "more projects" sections
    const otherProjectsSelectors = [
      '[class*="other-project" i]',
      '[class*="more-project" i]',
      '[class*="related-project" i]',
      '[class*="similar-project" i]',
      '[id*="other-project" i]',
      '[id*="more-project" i]',
      '[data-framer-name*="other" i]',
      '[data-framer-name*="more project" i]',
      '[data-framer-name*="related project" i]',
    ];

    otherProjectsSelectors.forEach(selector => {
      doc.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Remove elements containing "Other Projects" or "More Projects" text
    const allElements = doc.querySelectorAll('*');
    allElements.forEach(el => {
      const text = el.textContent?.trim().toLowerCase() || '';
      if (
        (text.includes('other project') ||
         text.includes('more project') ||
         text.includes('similar project') ||
         text.includes('related project')) &&
        text.length < 100 // Avoid removing content that just mentions these words
      ) {
        // Check if this is a heading or section container
        if (el.tagName.match(/^H[1-6]$/) || el.classList.toString().match(/section|container|wrapper/i)) {
          // Remove the parent container if it exists
          const parent = el.closest('section, [class*="section"], [class*="container"]');
          if (parent) {
            parent.remove();
          } else {
            el.remove();
          }
        }
      }
    });

    // Remove bottom images (typically in the last sections)
    // Find all sections and remove the last few that might contain promotional images
    const sections = Array.from(doc.querySelectorAll('section, [class*="section"]'));
    if (sections.length > 2) {
      // Remove last 2 sections which typically contain other projects and bottom images
      sections.slice(-2).forEach(section => {
        const hasLotsOfText = (section.textContent?.length || 0) > 500;
        // Only remove if it doesn't have lots of content (likely just images/promos)
        if (!hasLotsOfText) {
          section.remove();
        }
      });
    }

    // Return the cleaned HTML
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

        {/* Content Container */}
        <div className="flex-1 overflow-auto bg-white">
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

          {!isLoading && htmlContent && (
            <iframe
              srcDoc={htmlContent}
              title={title}
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
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

export default LocalHtmlModal;
