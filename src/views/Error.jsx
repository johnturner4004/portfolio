import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <p>Oops, an unexpected error has occured</p>
      <p>
        <i>{ error.statusText || error.message }</i>
      </p>
    </div>
  );
}
