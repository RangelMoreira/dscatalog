import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props ={
  text: string;
}

const ButtonIcon = ({text}:Props) => (
  <div className="default-button">
    <button className="btn btn-primary btn-icon">
      <h5>{text}</h5>
    </button>

    <div className="btn-icon-content">
      <ArrowIcon/>
    </div>
  </div>
);

export default ButtonIcon;