import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { DataStorageService } from "./data-storage.service";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    providers: [DataStorageService],
    exports: [
        CommonModule, 
        DropdownDirective
    ]
})
export class SharedModule {

}