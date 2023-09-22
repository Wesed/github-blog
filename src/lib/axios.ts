import axios from 'axios'

export const userData = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const api = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const issueData = axios.create({
  baseURL: 'https://api.github.com/repos/wesed/github-blog/',
})
