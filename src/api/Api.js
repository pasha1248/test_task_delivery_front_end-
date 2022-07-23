/** @format */
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://back-end-delicery.herokuapp.com/api/',
})
