class UserCamera {
    constructor() {
        this.video = document.getElementById('video')
        this.snap = document.getElementById('snap')
        this.canvas = document.getElementById('canvas')
        this.snapErrorMsgElement = document.getElementById('snapErrorMsgElement')
        this.countDisplay = document.getElementById('countDisplay')
        // video properties
        this.constraints = {
            audio: false,
            video: {
                width: 1280,
                height: 720
            }
        }
        // make capture active
        this.listener = this.snap.addEventListener("click", () => {
            snap.disabled = true;
            console.log(this.canvas)
            this.countDown(this.saveImg1, this.video, this.canvas)
        })
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
    saveImg1(video, canvas) {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 640, 360);
        const dataURI = canvas.toDataURL();
        const a = document.createElement("a")
        document.body.appendChild(a)
        a.href = dataURI;
        a.download = "selfie.png"
        a.click()
        document.body.removeChild(a)
    }

    // count down before picture is taken
    countDown(func, video, canvas) {
        let count = 5;
        const timer = setInterval(function () {
            count--;
            console.log(count);
            this.countDisplay.innerHTML = count
            if (count === 1) this.countDisplay.innerHTML = Cheese
            if (count === 0) {
                clearInterval(timer);
                console.log("Time's up!");
                console.log(this.canvas)
                func(video, canvas)
                this.countDisplay.innerHTML = 5
                snap.disabled = false;
            }
        }, 1000);
    }

}

const cam1 = new UserCamera();
cam1.init()