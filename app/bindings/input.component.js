System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n<h1> details please</h1>\n<div>\n\t<label for=\"name\">Your name</label>\n\t<input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n</div>\n\n<div>\n\t<label for=\"age\">Your age</label>\n\t<input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n</div>\n<br>\n<div class=\"\">Filled out: {{isFilled ? 'yes' : 'no'}}</div>\n<div class=\"\">Valid {{isValid ? 'Yes' : 'No'}}</div>\n<br>\n<button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n\t",
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFDM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFrQjdELENBQUM7Z0JBaEJBLGdDQUFPLEdBQVA7b0JBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsQ0FBQztnQkFDRixDQUFDO2dCQUNELGlDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTFDRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsdWdCQWdCVDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3RCLENBQUM7O2tDQUFBO2dCQXVCRixxQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsMkNBc0JDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdteS1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgXG48aDE+IGRldGFpbHMgcGxlYXNlPC9oMT5cbjxkaXY+XG5cdDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbjwvZGl2PlxuXG48ZGl2PlxuXHQ8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBhZ2U8L2xhYmVsPlxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbjwvZGl2PlxuPGJyPlxuPGRpdiBjbGFzcz1cIlwiPkZpbGxlZCBvdXQ6IHt7aXNGaWxsZWQgPyAneWVzJyA6ICdubyd9fTwvZGl2PlxuPGRpdiBjbGFzcz1cIlwiPlZhbGlkIHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG48YnI+XG48YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG5cdGAsXG5cdG91dHB1dHM6IFsnc3VibWl0dGVkJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xuXHRteXNlbGYgPSB7bmFtZTonJywgYWdlOicnfTtcblx0aXNGaWxsZWQgPSBmYWxzZTtcblx0aXNWYWxpZCA9IGZhbHNlO1xuXHRzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcblxuXHRvbktleXVwKCkge1xuXHRpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcblx0dGhpcy5pc0ZpbGxlZCA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSkge1xuXHR0aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHR0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblx0fVxufVxub25TdWJtaXQoKXtcblx0dGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZik7XG59XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
