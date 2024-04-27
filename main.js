class UserCamera {
    constructor() {
        this.video = document.getElementById('video')
        this.snapErrorMsgElement = document.getElementById('snapErrorMsgElement')
        // video properties
        this.constraints = {
            audio: false,
            video: {
                width: 1280,
                height: 720
            }
        }

    }
    // display the stream
    handleSuccess(stream) {
        window.stream = stream;
        this.video.srcObject = stream;
        console.log(stream)
    }
    // ask the user permission to use webcam
    async init() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
            this.handleSuccess(stream)
        } catch (e) {
            this.snapErrorMsgElement.innerHTML = `navigator.mediaDevices.getUserMedia.error: ${e.toString()}`
        }
    }

    // download Image

    // count down before picture is taken


}

const cam1 = new UserCamera();
cam1.init()