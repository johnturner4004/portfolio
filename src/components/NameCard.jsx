export default function NameCard() {
  return (
    <div className="name-card__wrapper">
      <div className="name-card">
        <div className="name-card__row">
          <p className="name-card__info">
            John Turner
          </p>
          <p className="name-card__label">
            Name
          </p>
        </div>
        <div className="name-card__row">
          <p className="name-card__info">
            johnturner4004@gmail.com
          </p>
          <p className="name-card__label">
            Email
          </p>
        </div>
        <div className="name-card__row">
          <p className="name-card__info">
            612.203.0666
          </p>
          <p className="name-card__label">
            Phone
          </p>
        </div>
        <div className="name-card__row">
          <p className="name-card__info">
            17695 Exira Ave W
          </p>
          <p className="name-card__label">
            Address
          </p>
        </div>
        <div className="name-card__row">
          <p className="name-card__info">
            Farmington, MN 55024
          </p>
          <p className="name-card__label">
            City, State Zip
          </p>
        </div>
        <div className="name-card__holes" />
      </div>
    </div>
  )
}
