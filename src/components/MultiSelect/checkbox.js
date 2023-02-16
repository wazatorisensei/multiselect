import './style.css';

export const Checkbox = ({ children, ...props }) => (
  <label className='check'>
    <input type='checkbox' className='check-internal' {...props} />
    {children}
  </label>
);