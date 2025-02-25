// @ts-check
export var RollConfig = (function () {
    class RollConfig {
        constructor() {
            this.defence = false;
            this.threshold = -1;
            this.showCrit = false;
            this.showSuccess = false;
            this.showResult = true;
            this.reversal = false;
            this.thresholdDesc = "";
            this.messageOnSuccess = "";
            this.messageOnFailure = "";
            this.flagsOnSuccess = "";
            this.flagsOnFailure = "";
        }
    }
    return RollConfig;
})();
