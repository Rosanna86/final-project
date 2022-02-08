import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import BookPickup from "../components/BookPickup"

import { API_URL } from "../utils/urls"
import profile from "../reducers/profile"

import styled from "styled-components"

const MyProfileWrapper = styled.div`
	min-height: 20vh;
	font-family: 'Nunito',sans-serif;
	margin-top: 68px;	
	background: #fff;
`

const TopBanner = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	background: #f0f0f0;
	h1 {
		font-size: 26px;
		font-weight: 400;
		margin: 0;
		padding: 24px;
	}
`


const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	
`
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid;
		a{
			cursor: pointer;
			margin: 15px 30px;
			:focus{
				text-decoration: underline;
			}
		}	
	},	
		
`
const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;

`

const MyProfile = () => {
	const [selected, setSelected] = useState('Pickup')
	const message = useSelector((store) => store.user.email)
	const accessToken = useSelector((store) => store.user.accessToken)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const name = useSelector((store ) => store.user.name)

	useEffect(() => {
		if (!accessToken) {
			navigate('/signin')
		}
	}, [accessToken, navigate])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: accessToken,
			},
		}

		fetch(API_URL('my-profile'), options)
			.then((res) => res.text())
			.then((data) => {
				dispatch(profile.actions.setMessage(data.response))
				dispatch(profile.actions.setError(null))
			})
	}, [accessToken, dispatch])

	return (
    <MyProfileWrapper>
			<TopBanner>
				<h1>Welcome {message}!</h1>
			</TopBanner>
			
    <ContainerWrapper>
				<Container>
					
						<a onClick={() => setSelected('Pickup')}>Book a pick-up</a>
						<a onClick={() => setSelected('Orders')}>Order history</a>
						<a onClick={() => setSelected('EditProfile')}>Edit profile</a>
				
				</Container>
					<ContentContainer>
						{(selected === 'Pickup') && <div><BookPickup /></div>}
            {(selected === 'Orders') && <div><h3>Order history</h3></div>}
            {(selected === 'EditProfile') && <div><h3>Edit Profile</h3></div>}
					</ContentContainer>
    	</ContainerWrapper>
		</MyProfileWrapper>
	)
}

export default MyProfile