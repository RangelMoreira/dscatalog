import { makePrivateRequest, makeRequest } from "core/utils/request";
import { useEffect} from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BaseForm from "../../BaseForm";

export type FormCategoryState = {
  name: string;
}

type ParamsType = {
  categoryId: string;
}

const FormCategory = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormCategoryState>();
  const history = useHistory();
  const { categoryId } = useParams<ParamsType>();

  const isEditing = categoryId !== 'create';
  const formTitle = isEditing ? 'EDITAR UMA CATEGORIA' : 'CADASTRAR UMA CATEGORIA';

  useEffect(() => {
    if (isEditing) {
      makeRequest({ url: `/categories/${categoryId}` })
        .then(response => {
          setValue('name', response.data.name);
        })
    }

  }, [categoryId, isEditing, setValue])

  const onSubmit = (data: FormCategoryState) => {
    makePrivateRequest({
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      method: isEditing ? 'PUT' : 'POST',
      data
    })
      .then(() => {
        toast.info('Categoria salva com sucesso!')
        history.push('/admin/products');
      })
      .catch(() => {
        toast.error('Erro ao salvar Categoria!')
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm
        title={formTitle}
      >
        <div className="margin-bottom-30">
          <input
            ref={register(
              {
                required: "Campo obrigatório",
                minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres' },
                maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
              }
            )}
            name="name"
            type="text"
            className="form-control input-base"
            placeholder="Nome da Categoria"
          />
          {errors.name && (
            <div className="invalid-feedback d-block">
              {errors.name.message}
            </div>
          )}
        </div>
      </BaseForm>
    </form>

  );
}

export default FormCategory;

