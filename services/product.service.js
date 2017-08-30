"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products = [
    {
        id: 1,
        name: "kiwi super demo",
        price: 20
    },
    {
        id: 2,
        name: "Corneto",
        price: 30
    },
    {
        id: 3,
        name: "Mexicano",
        price: 40
    },
    {
        id: 4,
        name: "Jafferico",
        price: 100
    },
    {
        id: 5,
        name: "Baskin Robin",
        price: 100
    },
    {
        id: 6,
        name: "HageenDazs",
        price: 100
    },
    {
        id: 7,
        name: "American Delight",
        price: 100
    },
    {
        id: 8,
        name: "Kiwi",
        price: 100
    },
    {
        id: 9,
        name: "Outer Sapce",
        price: 100
    },
    {
        id: 10,
        name: "Alhmdulillah",
        price: 100
    }
];
var ProductService = (function () {
    function ProductService() {
        this.products = products;
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDLElBQUksUUFBUSxHQUFjO0lBQ3RCO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLEtBQUssRUFBRSxFQUFFO0tBRVo7SUFDRztRQUNBLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsRUFBRTtLQUVaO0lBQ0c7UUFDQSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLEtBQUssRUFBRSxFQUFFO0tBQ1o7SUFDRztRQUNBLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFdBQVc7UUFDakIsS0FBSyxFQUFFLEdBQUc7S0FDYjtJQUNHO1FBQ0EsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsY0FBYztRQUNwQixLQUFLLEVBQUUsR0FBRztLQUNiO0lBRUc7UUFDQSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxHQUFHO0tBQ2I7SUFDRztRQUNBLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixLQUFLLEVBQUUsR0FBRztLQUNiO0lBQ0c7UUFDQSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLEdBQUc7S0FDYjtJQUNHO1FBQ0EsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsR0FBRztLQUNiO0lBQ0c7UUFDQSxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxjQUFjO1FBQ3BCLEtBQUssRUFBRSxHQUFHO0tBQ2I7Q0FDSixDQUFBO0FBSUQ7SUFHSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQVJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTs7T0FDQSxjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHtQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0J1xyXG5cclxubGV0IHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXHJcbiAgICB7ICAgXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJraXdpIHN1cGVyIGRlbW9cIixcclxuICAgICAgICBwcmljZTogMjBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiQ29ybmV0b1wiLFxyXG4gICAgICAgIHByaWNlOiAzMFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIk1leGljYW5vXCIsXHJcbiAgICAgICAgcHJpY2U6IDQwXHJcbiAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIkphZmZlcmljb1wiLFxyXG4gICAgICAgIHByaWNlOiAxMDBcclxuICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIG5hbWU6IFwiQmFza2luIFJvYmluXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBuYW1lOiBcIkhhZ2VlbkRhenNcIixcclxuICAgICAgICBwcmljZTogMTAwXHJcbiAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBuYW1lOiBcIkFtZXJpY2FuIERlbGlnaHRcIixcclxuICAgICAgICBwcmljZTogMTAwXHJcbiAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICBuYW1lOiBcIktpd2lcIixcclxuICAgICAgICBwcmljZTogMTAwXHJcbiAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBuYW1lOiBcIk91dGVyIFNhcGNlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMFxyXG4gICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwiQWxobWR1bGlsbGFoXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMFxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0cygpOiBQcm9kdWN0W117XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcbn0iXX0=