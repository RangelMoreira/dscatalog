import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    //console.log(data);
    makePrivateRequest({ url: '/products', method: 'POST', data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="CADASTRAR UM PRODUTO">
        <div className="row">
          <div className="col-6">

            <div className="margin-bottom-30">
              <input
                {...register('name', 
                  { required: "Campo obrigatório",
                    minLength:{value: 5, message:'O campo deve ter no mínimo 5 caracteres'},
                    maxLength:{value: 60, message:'O campo deve ter no máximo 60 caracteres'}
                  }
                )}
                name="name"
                type="text"
                className="form-control input-base"
                placeholder="Nome do Produto"
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="margin-bottom-30">
              <input
                {...register('price', { required: "Campo obrigatório" })}
                name="price"
                type="number"
                className="form-control input-base"
                placeholder="Preço"
              />
              {errors.price && (
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
              )}
            </div>

            <div className="margin-bottom-30">
              <input
                {...register('imageUrl', { required: "Campo obrigatório" })}
                name="imageUrl"
                type="text"
                className="form-control input-base"
                placeholder="Imagem"
              />
              {errors.price && (
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
              )}
            </div>
          </div>

          <div className="col-6">
            <textarea
              {...register('description', { required: "Campo obrigatório" })}
              name="description"
              className="form-control input-base"
              placeholder="Descrição"
              id=""
              cols={30}
              rows={10}
            />
            {errors.description && (
              <div className="invalid-feedback d-block">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>
      </BaseForm>
    </form>

  )
}

export default Form;