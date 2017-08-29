"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ModalComponent = (function () {
    function ModalComponent(params) {
        this.params = params;
        this.selectedProdcut = this.params.context.product;
        console.log(this.selectedProdcut.name);
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
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
        console.log(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQWU1RTtJQU9JLHdCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLGNBQWM7WUFDZCxTQUFTO1lBQ1QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixjQUFjO1NBQ2pCLENBQUM7UUFHRixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1o7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNBO2dCQUNHLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDQTtnQkFDRyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKLENBQUE7SUFDTCxDQUFDO0lBRU0sOEJBQUssR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdNLG9DQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQy9CLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdERRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMvQixDQUFDO3lDQVFxQywyQkFBaUI7T0FQM0MsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbiBcclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgc3RvY2s6IGJvb2xlYW47XHJcblxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAubW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5tb2RhbC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xyXG4gXHJcbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBwcm9kdWN0czogQXJyYXk8UHJvZHVjdD47XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkUHJvZGN1dDogYW55O1xyXG4gXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2RjdXQgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnByb2R1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFByb2RjdXQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtzID0gW1xyXG4gICAgICAgICAgICBcIk5hdGl2ZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcIlhhbWFyaW5cIixcclxuICAgICAgICAgICAgXCJPbnNlbiBVSVwiLFxyXG4gICAgICAgICAgICBcIklvbmljIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcIlJlYWN0IE5hdGl2ZVwiXHJcbiAgICAgICAgXTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJraXdpIHN1cGVyIGRlbW9cIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmV0b1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDMwLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNZXhpY2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQwLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGNsb3NlKHJlczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2VuZFRvT3JkZXIocHJvZHVjdDogUHJvZHVjdCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhwcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFRleHRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiBcclxufSJdfQ==