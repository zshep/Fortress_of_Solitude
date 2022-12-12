// Just a simple class to grab state and set some methods for setting and getting local storage.

class GoblinState {
    constructor(state) {
        this.state = state
    }
    
    setLoginState() {
        localStorage.setItem("user", JSON.stringify(this.state))
    }
    getLoginState() {
        const state = localStorage.getItem('user')
        return JSON.parse(state)
    }
    clearLocalStorage() {
        localStorage.clear()
    }
}

export default GoblinState