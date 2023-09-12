function AboutCard(props) {
  return (
    <ul className="grid text-left gap-2 md:gap-4 md:text-lg rounded-2xl bg-gray-50 dark:bg-gray-700 px-6 py-4">
      <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
        <div>📍</div>
        <div>
          <span>From </span>
          {props.from ? props.from : "Norway"}
        </div>
      </li>
      <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
        <div>💼</div>
        <div>{props.job ? props.job : "Frontend-developer at zeta"}</div>
      </li>
      <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
        <div>🎂</div>
        <div>{props.birthday ? props.birthday : "13.july 1992"}</div>
      </li>
    </ul>
  );
}

export default AboutCard;
