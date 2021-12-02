import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class InputComponent {
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: InputComponent, selector: "second-nx-workspace-input", ngImport: i0, template: "<h1 class=\"text-red-600\">hello world</h1>\n<h2>change</h2>\n", styles: [".container{@apply p-5 w-full;@apply border-2 border-green-800;@apply grid grid-cols-1;}.label-container{@apply grid grid-cols-2;padding-top:27px;padding-bottom:7px}.label-div{@apply w-max grid grid-cols-2;}.error-div{@apply w-max text-red-600;}.input-box-div .input-field{@apply w-full h-12;@apply border border-solid rounded-lg;border-color:#e4e4e4;padding-top:16px;padding-bottom:17px;padding-left:24px}.input-box-div .input-field.error{border-color:red}.input-box-div input:focus{border-radius:7px;border-color:#ed7e21;box-shadow:0 0 0 3px #fedbb3}.input-box-div input:focus-visible{@apply outline-none;}.required:after{@apply ml-1;content:\" *\";@apply text-red-600;}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'second-nx-workspace-input',
                    templateUrl: './input.component.html',
                    styleUrls: ['./input.component.scss'],
                }]
        }] });

class TempModule {
}
TempModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: TempModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TempModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: TempModule, declarations: [InputComponent], imports: [CommonModule], exports: [InputComponent] });
TempModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: TempModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: TempModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [InputComponent],
                    exports: [InputComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputComponent, TempModule };
//# sourceMappingURL=temp.js.map
