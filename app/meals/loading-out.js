// any nested pages or adjacent file will use this loading component
import classes from './loading.module.css';

const MealsLoadingPage = () => {
    return <p className={classes.loading}>Fetching meals...</p>
}

export default MealsLoadingPage;