import classes from './Header.module.css';

const Header = (props) =>{
    return(
        <div className={classes.container}>
            <img src="/images/header-image.png" alt="Background"/>
            <div className={classes.welcome}>
                <h3>Bienvenido José</h3>
            </div>
        </div>
    )
}

export default Header;