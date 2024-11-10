import { v2 as cloudinary } from 'cloudinary'

async function uploadImage ( buffer ) {
    return new Promise( ( resolve, reject ) => {
        cloudinary.uploader.upload_stream (
            { resource_type: 'image' },
            ( error, result ) => {
                if ( error ) reject( error )
                else resolve( result )
            }
        ).end( buffer ); // Aquí pasas el buffer recibido por Multer
    });
}

async function removeImage ( id ) {
    return await cloudinary.api.delete_resources( [ id ], 
        { type: 'upload', resource_type: 'image' }
    )
}

export { uploadImage, removeImage }