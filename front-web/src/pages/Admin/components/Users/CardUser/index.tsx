import { User } from "core/types/User";
import { Link } from "react-router-dom";
import './styles.scss';

type Props = {
  user: User;
  onRemove: (userId: number) => void;
}

const CardUser = ({ user, onRemove }: Props) => {

  return(
    <div className="card-base border-radius-10 card-item ">
      <div className="main-row">
        <div className="col-user">
          <h2 className="content">{user.firstName} {user.lastName}</h2>
          <span>{user.email}</span>
        </div>

        <div className="col-buttons">
          <div className="row-buttons">
            <div className="col-btn">
              <Link
                to={`/admin/users/${user.id}`}
                type="button"
                className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
              >
                EDITAR
              </Link>
            </div>
            <div className="col-btn">
              <button
                type="button"
                className="btn btn-outline-danger btn-block border-radius-10"
                onClick={() => onRemove(user.id)}
              >
                EXCLUIR
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
 
}

export default CardUser;