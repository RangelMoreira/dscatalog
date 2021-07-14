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
      <div className="row">
        <div className="col-7">
          <h2 className="content">{user.firstName} {user.lastName}</h2>
          <span>{user.email}</span>
        </div>

        <div className="col-5">
          <div className="row">
            <div className="col-6">
              <Link
                to={`/admin/users/${user.id}`}
                type="button"
                className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
              >
                EDITAR
              </Link>
            </div>
            <div className="col-6">
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