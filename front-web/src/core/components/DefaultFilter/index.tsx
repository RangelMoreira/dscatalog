import { ReactComponent as SeachIcon } from 'core/assets/images/search-icon.svg';
import Select from 'react-select';
import './styles.scss'

type Props = {
  name?: string;
  placeholderText?: string;
  handleChangeName: (name: string) => void;
  handleChangeDirection: (direction: string, label: string) => void;
  clearFilters: () => void;
  optionValue: number;
}


const options = [
  { value: 'DESC', label: 'Filtrar por Recentes' },
  { value: 'ASC', label: 'Filtrar por Antigos' },

];

const DefaultFilters = ({
  name,
  placeholderText,
  optionValue,
  handleChangeName,
  handleChangeDirection,
  clearFilters,
  

}: Props) => {

  return (
    <div className="card-base filters-container">
      <div className="input-search">
        <input
          type="text"
          value={name}
          className="form-control"
          placeholder={`Pesquisar ${placeholderText}`}
          onChange={event => handleChangeName(event.target.value)}
         
        />
        <SeachIcon />
      </div>
      <div className="select-container">
        <Select options={options}
          key={`select-${options.values}`}
          classNamePrefix="default-select"
          className="filter-select-container"
          onChange={value => handleChangeDirection(value?.value as string,
            value?.label as string)}
          placeholder="Direção"
          value={optionValue !== -1 ? options[optionValue] : null}
        />

      </div>
      <button
        className="btn btn-outline-secondary border-radius-10"
        onClick={clearFilters}
      >
        LIMPAR FILTRO
      </button>
    </div>
  )
}

export default DefaultFilters;