import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
        <style>{'body{background-image: url(https://i.imgur.com/ScMjDxj.jpg); background-size: cover}'}</style>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <div className='container-md' style={{ backgroundColor: "#43295b", color: 'white', padding:"50px"}}>
                    <h2>Are you sure you want to sign out?</h2>
                    <small>We hate to see you go...</small><br/>
                    <ButtonGroup>
                        <Button style={{marginTop:"20px"}} variant='outline-light' onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button style={{marginTop:"20px"}} variant='outline-light' onClick={onCancel}>
                            Cancel
                        </Button>
                    </ButtonGroup>

                </div>
                </div>
            </div>
		</>
	)
}

export default SignOut
