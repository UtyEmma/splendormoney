import { FileByteFormat } from "@/Types/files";

export const fileByteFormats : FileByteFormat[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export function formatBytes(bytes : number, decimals = 1) : string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const fileByteFormats : FileByteFormat[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + fileByteFormats[i];
}

export function blobUrlToFile(blobUrl : string): Promise<File>  {
    return new Promise((resolve) => {
        return fetch(blobUrl).then((res) => {
          res.blob().then((blob) => {
              // please change the file.extension with something more meaningful
            // or create a utility function to parse from URL
            const file = new File([blob], "File Image", {type: blob.type})
            resolve(file)
        })
    })
})
}

export function btyesToFormat(bytes: number, format: FileByteFormat, decimals = 1){    
    const k: number = 1024;
    const index: number = fileByteFormats.findIndex((item) => format === item)
    const dm: number = decimals < 0 ? 0 : decimals;
    const convertedBytes = parseFloat(((bytes / Math.pow(k, index)).toFixed(dm)))
    return convertedBytes
}