import { storage } from '@/appwrite';

const getUrl=async(image:Image) =>{
    const url=storage.getFileView(image.bucketID, image.fileId);
    return url;
};
export default getUrl;
