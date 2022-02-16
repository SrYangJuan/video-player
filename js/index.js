
        const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')
        
        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        $backward.addEventListener('click', handleBackward)
        $forward.addEventListener('click', handleForward)
        
    
        function handlePlay () {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al button de play') }

        function handlePause () {
            $pause.hidden = true
            $play.hidden = false
            $video.pause()
            console.log('le diste click al button de pause') }

        function handleBackward() {
            $video.currentTime -= 10
            console.log('para atrás 10 segundos', $video.currentTime) }

            function handleforward() {
                $video.currentTime += 10;
                console.log('para adelante 10 segundos', $video.currentTime);
              }
              
              const $progress = document.querySelector("#progress");
              $video.addEventListener("loadedmetadata", handleloaded);
              $video.addEventListener("timeupdate", handletimeupdate);
              
              function handleloaded() {
                $progress.max = $video.duration;
                console.log("ha cargado mi video", $video.duration);
              }
              
              function handletimeupdate() {
                $progress.value = $video.currentTime;
                //console.log("tiempo actual", $video.currentTime)//;
              }
              
              $progress.addEventListener("input", handleinput);
              
              function handleinput() {
                $video.currentTime = $progress.value;
                console.log($progress.value);
              }