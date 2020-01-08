class App {

    constructor(backendReference) {
        this.backendReference = backendReference;
        setInterval(() => this.tick.call(this), 1000);
    }

    tick() {
        this.backendReference.invokeMethodAsync("OnJsTickOccured");
    }

}

window.app = function (backendReference) {
    window.app = new App(backendReference);
}