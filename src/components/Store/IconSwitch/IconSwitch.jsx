import './iconSwitch.css';

export const IconSwitch = ({ icon, onSwitch}) => {
  return (
    <div className='store__control'>  
      <button type="button" onClick={onSwitch} className="store__btn-switch material-icons">{icon}</button>
    </div>
  )
}
