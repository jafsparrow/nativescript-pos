"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ModalComponent = (function () {
    function ModalComponent(params) {
        this.params = params;
        this.selectedProdcut = this.params.context.product;
        console.log(this.selectedProdcut.price);
        this.products = [
            {
                id: 1,
                name: "kiwi super demo",
                price: 20,
                stock: true
            },
            {
                id: 2,
                name: "Corneto",
                price: 30,
                stock: true
            },
            {
                id: 1,
                name: "Mexicano",
                price: 40,
                stock: true
            }
        ];
    }
    ModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ModalComponent.prototype.sendToOrder = function (product) {
        // console.log(product);
        this.params.closeCallback(product);
    };
    ModalComponent.prototype.printTextValue = function (value) {
        // console.log(value);
        this.params.closeCallback(value);
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            moduleId: module.id,
            templateUrl: "app.modal.html",
            styleUrls: ['app.modal.css']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQWU1RTtJQU9JLHdCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJeEMsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDQTtnQkFDRyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0E7Z0JBQ0csRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJO2FBQ2Q7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTSxvQ0FBVyxHQUFsQixVQUFtQixPQUFnQjtRQUMvQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaERRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMvQixDQUFDO3lDQVFxQywyQkFBaUI7T0FQM0MsY0FBYyxDQW1EMUI7SUFBRCxxQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbiBcclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgc3RvY2s6IGJvb2xlYW47XHJcblxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAubW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5tb2RhbC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xyXG4gXHJcblxyXG4gICAgcHVibGljIHByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PjtcclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRQcm9kY3V0OiBhbnk7XHJcbiBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvZGN1dCA9IHRoaXMucGFyYW1zLmNvbnRleHQucHJvZHVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUHJvZGN1dC5wcmljZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImtpd2kgc3VwZXIgZGVtb1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZXRvXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMzAsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1leGljYW5vXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDAsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZW5kVG9PcmRlcihwcm9kdWN0OiBQcm9kdWN0KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50VGV4dFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuIFxyXG59Il19