/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { isInteger } from '../util/util';
import * as i0 from "@angular/core";
/**
 * @return {?}
 */
export function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * \@since 2.2.0
 * @abstract
 * @template T
 */
var NgbTimeAdapter = /** @class */ (function () {
    function NgbTimeAdapter() {
    }
    NgbTimeAdapter.decorators = [
        { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
    ];
    /** @nocollapse */ NgbTimeAdapter.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
    return NgbTimeAdapter;
}());
export { NgbTimeAdapter };
if (false) {
    /**
     * Converts a user-model time of type `T` to an `NgbTimeStruct` for internal use.
     * @abstract
     * @param {?} value
     * @return {?}
     */
    NgbTimeAdapter.prototype.fromModel = function (value) { };
    /**
     * Converts an internal `NgbTimeStruct` time to a user-model time of type `T`.
     * @abstract
     * @param {?} time
     * @return {?}
     */
    NgbTimeAdapter.prototype.toModel = function (time) { };
}
var NgbTimeStructAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgbTimeStructAdapter, _super);
    function NgbTimeStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    NgbTimeStructAdapter.prototype.fromModel = /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    NgbTimeStructAdapter.prototype.toModel = /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    NgbTimeStructAdapter.decorators = [
        { type: Injectable }
    ];
    return NgbTimeStructAdapter;
}(NgbTimeAdapter));
export { NgbTimeStructAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXIvbmdiLXRpbWUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFFdkMsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUNwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUQ7SUFBQTtLQVdDOztnQkFYQSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxtQ0FBbUMsRUFBQzs7O3lCQXJCakY7Q0FnQ0MsQUFYRCxJQVdDO1NBVnFCLGNBQWM7Ozs7Ozs7O0lBSWxDLDBEQUE0Qzs7Ozs7OztJQUs1Qyx1REFBeUM7O0FBRzNDO0lBQzBDLGdEQUE2QjtJQUR2RTs7SUFtQkEsQ0FBQztJQWpCQzs7T0FFRzs7Ozs7O0lBQ0gsd0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFtQjtRQUMzQixPQUFPLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILHNDQUFPOzs7OztJQUFQLFVBQVEsSUFBbUI7UUFDekIsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbEJGLFVBQVU7O0lBbUJYLDJCQUFDO0NBQUEsQUFuQkQsQ0FDMEMsY0FBYyxHQWtCdkQ7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiVGltZVN0cnVjdH0gZnJvbSAnLi9uZ2ItdGltZS1zdHJ1Y3QnO1xuaW1wb3J0IHtpc0ludGVnZXJ9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOR0JfREFURVBJQ0tFUl9USU1FX0FEQVBURVJfRkFDVE9SWSgpIHtcbiAgcmV0dXJuIG5ldyBOZ2JUaW1lU3RydWN0QWRhcHRlcigpO1xufVxuXG4vKipcbiAqIEFuIGFic3RyYWN0IHNlcnZpY2UgdGhhdCBkb2VzIHRoZSBjb252ZXJzaW9uIGJldHdlZW4gdGhlIGludGVybmFsIHRpbWVwaWNrZXIgYE5nYlRpbWVTdHJ1Y3RgIG1vZGVsIGFuZFxuICogYW55IHByb3ZpZGVkIHVzZXIgdGltZSBtb2RlbCBgVGAsIGV4LiBhIHN0cmluZywgYSBuYXRpdmUgZGF0ZSwgZXRjLlxuICpcbiAqIFRoZSBhZGFwdGVyIGlzIHVzZWQgKipvbmx5KiogZm9yIGNvbnZlcnNpb24gd2hlbiBiaW5kaW5nIHRpbWVwaWNrZXIgdG8gYSBmb3JtIGNvbnRyb2wsXG4gKiBleC4gYFsobmdNb2RlbCldPVwidXNlclRpbWVNb2RlbFwiYC4gSGVyZSBgdXNlclRpbWVNb2RlbGAgY2FuIGJlIG9mIGFueSB0eXBlLlxuICpcbiAqIFRoZSBkZWZhdWx0IHRpbWVwaWNrZXIgaW1wbGVtZW50YXRpb24gYXNzdW1lcyB3ZSB1c2UgYE5nYlRpbWVTdHJ1Y3RgIGFzIGEgdXNlciBtb2RlbC5cbiAqXG4gKiBTZWUgdGhlIFtjdXN0b20gdGltZSBhZGFwdGVyIGRlbW9dKCMvY29tcG9uZW50cy90aW1lcGlja2VyL2V4YW1wbGVzI2FkYXB0ZXIpIGZvciBhbiBleGFtcGxlLlxuICpcbiAqIEBzaW5jZSAyLjIuMFxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VGYWN0b3J5OiBOR0JfREFURVBJQ0tFUl9USU1FX0FEQVBURVJfRkFDVE9SWX0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdiVGltZUFkYXB0ZXI8VD4ge1xuICAvKipcbiAgICogQ29udmVydHMgYSB1c2VyLW1vZGVsIHRpbWUgb2YgdHlwZSBgVGAgdG8gYW4gYE5nYlRpbWVTdHJ1Y3RgIGZvciBpbnRlcm5hbCB1c2UuXG4gICAqL1xuICBhYnN0cmFjdCBmcm9tTW9kZWwodmFsdWU6IFQpOiBOZ2JUaW1lU3RydWN0O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBpbnRlcm5hbCBgTmdiVGltZVN0cnVjdGAgdGltZSB0byBhIHVzZXItbW9kZWwgdGltZSBvZiB0eXBlIGBUYC5cbiAgICovXG4gIGFic3RyYWN0IHRvTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCk6IFQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2JUaW1lU3RydWN0QWRhcHRlciBleHRlbmRzIE5nYlRpbWVBZGFwdGVyPE5nYlRpbWVTdHJ1Y3Q+IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIGZyb21Nb2RlbCh0aW1lOiBOZ2JUaW1lU3RydWN0KTogTmdiVGltZVN0cnVjdCB7XG4gICAgcmV0dXJuICh0aW1lICYmIGlzSW50ZWdlcih0aW1lLmhvdXIpICYmIGlzSW50ZWdlcih0aW1lLm1pbnV0ZSkpID9cbiAgICAgICAge2hvdXI6IHRpbWUuaG91ciwgbWludXRlOiB0aW1lLm1pbnV0ZSwgc2Vjb25kOiBpc0ludGVnZXIodGltZS5zZWNvbmQpID8gdGltZS5zZWNvbmQgOiBudWxsfSA6XG4gICAgICAgIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBOZ2JUaW1lU3RydWN0IHZhbHVlIGludG8gTmdiVGltZVN0cnVjdCB2YWx1ZVxuICAgKi9cbiAgdG9Nb2RlbCh0aW1lOiBOZ2JUaW1lU3RydWN0KTogTmdiVGltZVN0cnVjdCB7XG4gICAgcmV0dXJuICh0aW1lICYmIGlzSW50ZWdlcih0aW1lLmhvdXIpICYmIGlzSW50ZWdlcih0aW1lLm1pbnV0ZSkpID9cbiAgICAgICAge2hvdXI6IHRpbWUuaG91ciwgbWludXRlOiB0aW1lLm1pbnV0ZSwgc2Vjb25kOiBpc0ludGVnZXIodGltZS5zZWNvbmQpID8gdGltZS5zZWNvbmQgOiBudWxsfSA6XG4gICAgICAgIG51bGw7XG4gIH1cbn1cbiJdfQ==