import css from './PageTitle.module.css';

const PageTitle = ({ children }) => {
  return <div className={css.head}>{children}</div>;
};

export default PageTitle;
