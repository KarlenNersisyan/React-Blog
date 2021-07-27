import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React </span>
        <span className="headerTitleLg"> Blog </span>
      </div>
      <img
        className="headerImg"
        src="http://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2019/4/15/nature.ashx?h=450&w=750&hash=A5F93BBB4FC839BB2A620535F62AB7F9"
        alt="Karlen Nersisyan"
      />
    </div>
  );
}
