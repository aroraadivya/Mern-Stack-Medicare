const upload_preset = import.meta.env.VITE_UPLOAD_PRESET

const uploadImageToCloudinary = async file => {

    const uploadData = new FormData()

    uploadData.append('file', file)
    uploadData.append('upload_preset', file)
    uploadData.append('file', file)

}

export default uploadImageToCloudinary;