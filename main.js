
(()=>{


    class Player{

        audio;
        controls;
        state = 0; // 0 = stopped, 1 = playing, 2 = paused, 3 = loading, -1 = error

        constructor(){
            //init audio element
            this.audio = document.createElement("audio");
            this.audio.style.display = "none"
            this.audio.preload = "auto"
            this.audio.load = false;

            this.audio.addEventListener('playing', (e)=>{
                this.state = 1;
            })

            this.audio.addEventListener('pause', (e)=>{
                console.log(e)
                this.state = 2;
            })

            this.audio.addEventListener('waiting', ()=>{
                this.state = 3;
            })
            
            //push element on page
            document.body.appendChild(this.audio)

            this.controls = {
                back: document.getElementById("controlBack"),
                play: document.getElementById("controlPlay"),
                stop: document.getElementById("controlStop"),
                forward: document.getElementById("controlForward")
            }

            this.controls.play.onclick = ()=>{ this.play() }

        }

        loadSong(dir){
            this.audio.src = dir
            this.audio.pause()
        }

        play(){
            console.log(this.state)
            switch(this.state){
                case 0: //stopped
                    this.audio.play()
                    break;
                case 1: //playing
                    this.audio.pause()
                    break;
                case 2: //paused
                    this.audio.play()
                    break;
                default: return false;
                    break;
            }
        }

        changeVolume(input){
            if(typeof input !== "number") return false;
            

            if(input >= 1){
                this.audio.volume = parseInt(input)
            }else(
                this.audio.volume = parseInt(input / 100)
            )
            
        }

    }

    var player = new Player();

    player.loadSong("/music/song.mp3");

    
})();