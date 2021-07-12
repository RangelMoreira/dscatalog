import { Category } from "core/types/Category";
import { Link } from "react-router-dom";
import './styles.scss';

type Props = {
  category: Category;
  onRemove: (categoryId: number) => void;
}

const CardCategory = ({ category, onRemove }: Props) => {
  return (
    <div className="card-base border-radius-10 category-card">
      <div className="row">
        <div className="col-7">
          <h2 className="content">{category.name}</h2>
        </div>

        <div className="col-5">
          <div className="row">
            <div className="col-6">
              <Link
                to={`/admin/categories/${category.id}`}
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
                onClick={() => onRemove(category.id)}
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

export default CardCategory;
