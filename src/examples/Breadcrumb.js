import React , {useState, useEffect}from 'react';
import Breadcrumb from '../components/Breadcrumb';
const BreadcrumbExamples = () => {
    const [pathSegments, setPathSegments] = useState([]);

    useEffect(() => {
      // Dummy path for illustration purposes
      const dummyPathname = "/products/category1/product123";
      const segments = dummyPathname.split('/').filter(segment => segment !== '');
  
      setPathSegments(segments);
    }, []);
  
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      text: segment,
      url: `/${pathSegments.slice(0, index + 1).join('/')}`,
    }));
  console.log(pathSegments, breadcrumbItems);
  /**
   0: {text: 'products', url: '/products'}
   1: {text: 'category1', url: '/products/category1'}
   2: {text: 'product123', url: '/products/category1/product123'}
   length: 3
   */
    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
        </div>
    );
};

export default BreadcrumbExamples;