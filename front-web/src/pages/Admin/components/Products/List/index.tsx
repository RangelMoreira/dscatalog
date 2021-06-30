import Pagination from 'core/components/Pagination';
import { ProductResponse } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';


const List = () => {
  const [productResponse, setProductResponse] = useState<ProductResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  console.log(productResponse);

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 4
    }
    setIsLoading(true);
    makeRequest({ url: '/products', params })
      .then(response => setProductResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage]);

  const handleCreate = () => {
    history.push('/admin/products/create');
  }

  return (
    <div className="admin-products-list">
      <button className="btn btn-primary btn-lg" onClick={handleCreate}>
        ADICIONAR
      </button>
      <div className="admin-list-container">
        {productResponse?.content.map(product => (
          <Card product={product} key={product.id} />
        ))}

        {productResponse &&
          <Pagination
            totalPages={productResponse?.totalPages}
            activePage={activePage}
            onChange={page => setActivePage(page)}
          />
        }
      </div>
    </div>
  )
}

export default List;