import React from 'react'
import { withRouter } from 'react-router-dom'

export default Component => {

    class Decorated extends React.Component {

        resolveToLocation = to => {
            return typeof to === 'object' ? to['pathname'] : to
        }

        handleClick = event => {
            event.preventDefault()
            const { to } = this.props

            const goTo = process.env.PUBLIC_URL + to

            this.props.history.push(goTo)
        }

        render() {
            const { to, match, location, history, staticContext, ...rest } = this.props
            const toLocation = this.resolveToLocation(to)
            return (
                <Component
                    {...rest}

                    href={toLocation}
                    onClick={this.handleClick}
                />
            )
        }
    }

    return withRouter(Decorated)
}