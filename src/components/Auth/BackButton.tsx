import { useNavigate } from 'react-router-dom';

export function BackButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/account', {replace: true});
      };
    return (
        <div>
            <a className='linkBack' onClick={handleClick}>&#8592; Back</a>
        </div>
    )
}
