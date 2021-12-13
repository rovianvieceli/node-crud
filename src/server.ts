import express from 'express'

const HOST = '0.0.0.0'
const PORT = 3000
const app = express()

app.listen(PORT, HOST, () => console.log('Server is running'))
