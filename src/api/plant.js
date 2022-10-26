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