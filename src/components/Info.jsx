import studioImage from '../assets/img/studio.png';

export const Info = () => {
  return (
    <div className="info">
      <div className="info-header">
        <h1>Quam Tristique Condimentum</h1>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. <u>Curabitur blandit</u> tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
        </p>
      </div>
      <div className="info-body">
        <h2>Fringilla Euismod Adipiscing Ipsum</h2>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.
        </p>
        <ul>
          <li>Tellus Ullamcorper Inceptos</li>
          <li>Magna Condimentum</li>
          <ul className="second-list ml-20">
            <li>Mattis Tristique</li>
            <li>Pharetra Pellentesque Dapibus</li>
          </ul>
          <li>Aenean Inceptos</li>
          <li>Parturient Bibendum</li>
        </ul>
      </div>
      <img height={180} width={240} src={studioImage} alt="studio" />
    </div>
  );
};
