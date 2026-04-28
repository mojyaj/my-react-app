
import propTypes from 'prop-types'

function UserGreeting( {isLoggedIn="true", username="Default Username"} ) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    return( isLoggedIn ? welcomeMessage : loginPrompt );
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}

export default UserGreeting 