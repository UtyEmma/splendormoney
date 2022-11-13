export function getVideoDuration(file: any) {
    var video = document.createElement('video');
    video.preload = 'metadata';
    let duration = 0;

    video.src = file;
  
    video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src)
      duration = video.duration;
    }
  
  
    return duration
}