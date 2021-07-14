import Pagination from "core/components/Pagination";
import { UserResponse } from "core/types/User";
import { makePrivateRequest} from "core/utils/request";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CardLoader from "../../Products/Loaders/ProductCardLoader";
import CardUser from "../CardUser";


const ListUsers = () => {
  const [userResponse, setUserResponse] = useState<UserResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const onRemove = (userId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este usuário?');

    if (confirm) {
      makePrivateRequest({ url: `/users/${userId}`, method: 'DELETE' })
        .then(() => {
          getUsers();
          toast.info('Usuário removido com sucesso!')
        })
        .catch(() => {
          toast.error('Erro ao remover o usuário!')
        })
    }
  }

  const getUsers = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 4,
      direction: 'DESC',
      orderBy: 'id'
    }
    setIsLoading(true);
    makePrivateRequest({ url: '/users', params })
      .then(response => setUserResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage])

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleCreate = () => {
    history.push('/admin/users/create');
  }

  return (
    <div className="admin-user-list">
      <button className="btn btn-primary btn-lg" onClick={handleCreate} >
        ADICIONAR
      </button>

      <div className="admin-list-container">
        {isLoading ? <CardLoader /> : (
          userResponse?.content.map(user => (
            <CardUser user={user} onRemove={onRemove} key={user.id} />
          ))
        )}

        {userResponse &&
          <Pagination
            totalPages={userResponse?.totalPages}
            activePage={activePage}
            onChange={page => setActivePage(page)}
          />
        }
      </div>
    </div>
  );

}

export default ListUsers;
