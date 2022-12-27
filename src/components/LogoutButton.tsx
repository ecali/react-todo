export const LogOutButton = (props: {onClick: () => Promise<void>, image: string}) => {
  return (
    <div className="logout-navigation" onClick={props.onClick}>
      <a className="button-a" href="">
        <img className="logout-img" src={props.image} referrerPolicy="no-referrer" />

        <div className="logout">LOGOUT</div>
      </a>
    </div>
  );
};
