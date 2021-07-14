import { makePrivateRequest } from "core/utils/request";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BaseForm from "../../BaseForm";
import './styles.scss';

export type FormUserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: String;
  isAdmin: boolean;
  roles: [];
}


type ParamsType = {
  userId: string;
}

const FormUser = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormUserState>();
  const history = useHistory();
  const { userId } = useParams<ParamsType>();
  const [isPasswordEquals, setIsPasswordEquals] = useState(true);

  const isEditing = userId !== 'create';
  const formTitle = isEditing ? 'EDITAR UM USUÁRIO' : 'CADASTRAR UM USUÁRIO';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/users/${userId}` })
        .then(response => {
          setValue('firstName', response.data.firstName);
          setValue('lastName', response.data.lastName);
          setValue('email', response.data.email);
        })
    }

  }, [userId, isEditing, setValue])


  const onSubmit = (data: FormUserState) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,

      roles:
        data.isAdmin ?
          (
            [{
              "id": 1
            },
            {
              "id": 2
            }]
          )
          :
          (
            [{
              "id": 1
            }]
          )
    }

    if (data.password === data.repeatPassword) {
      setIsPasswordEquals(true);
      console.log(payload);

      makePrivateRequest({
        url: isEditing ? `/users/${userId}` : '/users',
        method: isEditing ? 'PUT' : 'POST',
        data: payload
      })
        .then(() => {
          toast.info('Usuário salvo com sucesso!')
          history.push('/admin/users');
        })
        .catch((error) => {
          console.log(error);

          toast.error('Erro ao salvar Usuário!')
        })
    }
    else
      setIsPasswordEquals(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm
        title={formTitle}
      >

        <div className="name">
          <div className="first-name">
            <input
              ref={register(
                {
                  required: "Campo obrigatório"
                }
              )}
              name="firstName"
              type="text"
              className="form-control input-base"
              placeholder="Nome"
            />
            {errors.firstName && (
              <div className="invalid-feedback d-block">
                {errors.firstName.message}
              </div>
            )}
          </div>

          <div className="last-name">
            <input
              ref={register(
                {
                  required: "Campo obrigatório"
                }
              )}
              name="lastName"
              type="text"
              className="form-control input-base"
              placeholder="Sobrenome"
            />
            {errors.lastName && (
              <div className="invalid-feedback d-block">
                {errors.lastName.message}
              </div>
            )}
          </div>



        </div>

        <div className="email">
          <input
            ref={register(
              {
                required: "Campo obrigatório"
              }
            )}
            name="email"
            type="email"
            className="form-control input-base"
            placeholder="E-mail"
          />

          {errors.email && (
            <div className="invalid-feedback d-block">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="pass">
          <div className="password">
            <input
              ref={register(
                {
                  required: "Campo obrigatório",
                  minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres' },
                  maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
                }
              )}
              name="password"
              type="password"
              className="form-control input-base"

              placeholder="Digite aqui a Senha"
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="repeat-password">
            <input
              ref={register(
                {
                  required: "Campo obrigatório",
                  minLength: { value: 8, message: 'O campo deve ter no mínimo 5 caracteres' },
                  maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
                }
              )}
              name="repeatPassword"
              type="password"
              className="form-control input-base"
              placeholder="Repita aqui a Senha"

            />

            {!isPasswordEquals && (
              <div className="error-password">
                As senhas digitadas devem ser iguais
              </div>
            )}
          </div>

        </div>
        
        <span className="span-password">
          A sua senha deve ter pelo menos 8 caracteres e conter pelo menos uma número
        </span>

        <input
          ref={register()}
          type="checkbox"
          name="isAdmin"
        /> Perfil Administrador
      </BaseForm>
    </form >

  );

}
export default FormUser;