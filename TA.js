



class TA {
    
    state = {
        htmlEl: '',
        minDelay: 0, 
        maxDelay: 0,
    }

    constructor(state){
        this.state = {
            htmlEl: document.querySelector(state.htmlEl),
            minDelay: state.minDelay,
            maxDelay: state.maxDelay,
        }
    }

    // recursive typing animation forward
    typingForward(finalForm, i) {
        let duration = this.getRandomNumber(this.state.minDelay, this.state.maxDelay);

        if(this.state.htmlEl.textContent.length < finalForm.length) {
            this.state.htmlEl.textContent += finalForm[i];
            i++; 

            setTimeout(() => this.typingForward(finalForm, i), duration);
        }
    }

    typingBackward(finalForm) {
        let duration = this.getRandomNumber(this.state.minDelay, this.state.maxDelay);
    
        if (this.state.htmlEl.textContent.length > finalForm.length) {
            this.state.htmlEl.textContent = this.state.htmlEl.textContent.slice(0, (this.state.htmlEl.textContent.length-1));
        }
    
        setTimeout(() => this.typingBackward(finalForm), duration);
    }
    
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    
}



