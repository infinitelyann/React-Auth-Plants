import apiUrl from '../apiConfig'
import axios from 'axios'

export const plantCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/plants',
		data: {
			plant: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const plantIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/plants',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const plantShow = (user, id) => {
	console.log('this is plantShow', user.token)
	return axios({
		method: 'GET',
		url: apiUrl + '/plants/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const plantUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/plants/' + id,
		data: {
			plant: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const plantDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/plants/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}