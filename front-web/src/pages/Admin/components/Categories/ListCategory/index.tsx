import Pagination from "core/components/Pagination";
import { CategoryResponse } from "core/types/Category";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CardLoader from "../../Products/Loaders/ProductCardLoader";
import CardCategory from "../CardCategory";

const ListCategory = () => {
  const [categoryResponse, setCategoryResponse] = useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const onRemove = (categoryId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este produto?');

    if (confirm) {
      makePrivateRequest({ url: `/categories/${categoryId}`, method: 'DELETE' })
        .then(() => {
          getCategories();
          toast.info('Produto removido com sucesso!')
        })
        .catch(() => {
          toast.error('Erro ao remover o produto!')
        })
    }

  }

  const getCategories = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 4,
      direction: 'DESC',
      orderBy: 'id'
    }
    setIsLoading(true);
    makeRequest({ url: '/categories', params })
      .then(response => setCategoryResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage])

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleCreate = () => {
    history.push('/admin/categories/create');
  }

  return (
    <div className="admin-products-list">
      <button className="btn btn-primary btn-lg" onClick={handleCreate} >
        ADICIONAR
      </button>

      <div className="admin-list-container">
        {isLoading ? <CardLoader /> : (
          categoryResponse?.content.map(category => (
            <CardCategory category={category} onRemove={onRemove} key={category.id} />
          ))
        )}

        {categoryResponse &&
          <Pagination
            totalPages={categoryResponse?.totalPages}
            activePage={activePage}
            onChange={page => setActivePage(page)}
          />
        }
      </div>
    </div>
  );
}

export default ListCategory;