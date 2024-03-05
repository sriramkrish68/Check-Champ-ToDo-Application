import {ID, storage} from '@/appwrite';

const uploadImage= async (file: File) => {
    if(!file) return;

    const fileUploaded=await storage.createFile(
        "65e364887f66448ca6e2",
        ID.unique(),
        file
    );
    return fileUploaded;
};
export default uploadImage;