import classes from './Switch.module.css';

const Switch = (porps) => {
  return (
    <div className={classes['switch-container']}>
      <input
        checked={porps.isOn}
        onChange={porps.onChange}
        className={classes['switch-checkbox']}
        id={`switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: porps.isOn && '#06D6A0' }}
        className={classes['switch-label']}
        htmlFor={`switch-new`}
      >
        <span className={classes['switch-button']} />
      </label>
    </div>
  );
};

export default Switch;
