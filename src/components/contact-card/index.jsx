function ContactCard(props) {
  return (
    <li className="flex flex-col justify-center">
      <a href={props.link ? props.link : "#"} className="mx-auto">
        <img
          src={
            props.image
              ? props.image
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          }
          alt={props.name ? "image of " + props.name : "image of contact"}
          className="rounded-xl object-cover overflow-hidden w-14 h-14 md:w-20 md:h-20"
        />
      </a>
      <p className="text-sm">Firstname Lastname</p>
    </li>
  );
}

export default ContactCard;
