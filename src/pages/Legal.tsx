import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Legal() {
  const { page } = useParams<{ page: string }>();
  
  const titleMap: Record<string, string> = {
    'privacy-policy': 'Privacy Policy',
    'terms': 'Terms & Conditions',
    'disclaimer': 'Disclaimer',
    'cookies': 'Cookie Policy',
    'dmca': 'DMCA Notice',
    'support': 'Support',
    'about': 'About Us'
  };

  const title = page && titleMap[page] ? titleMap[page] : 'Legal Document';

  return (
    <>
      <Helmet>
        <title>{title} - SDevAI</title>
      </Helmet>
      <div className="py-20 px-4 max-w-4xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            This is the official {title} for SDevAI. 
            All tools and services provided on this website are for educational and informational purposes.
          </p>
          <p>
            If you have any questions regarding this document, please <a href="/contact" className="text-blue-600">contact us</a>.
          </p>
        </div>
      </div>
    </>
  );
}
