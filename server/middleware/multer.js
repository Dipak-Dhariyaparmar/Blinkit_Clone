import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({ storage : storage })

export default upload
// This controller is related to the multer to upload a file
