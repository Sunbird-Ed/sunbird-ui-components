/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Interface used to type all toast config options. See `NgbToastConfig`.
 *
 * \@since 5.0.0
 * @record
 */
export function NgbToastOptions() { }
if (false) {
    /**
     * Specify if the toast component should emit the `hide()` output
     * after a certain `delay` in ms.
     * @type {?|undefined}
     */
    NgbToastOptions.prototype.autohide;
    /**
     * Delay in ms after which the `hide()` output should be emitted.
     * @type {?|undefined}
     */
    NgbToastOptions.prototype.delay;
    /**
     * Type of aria-live attribute to be used.
     *
     * Could be one of these 2 values (as string):
     * - `polite` (default)
     * - `alert`
     * @type {?|undefined}
     */
    NgbToastOptions.prototype.ariaLive;
}
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * \@since 5.0.0
 */
export class NgbToastConfig {
    constructor() {
        this.autohide = true;
        this.delay = 500;
        this.ariaLive = 'polite';
    }
}
NgbToastConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbToastConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(); }, token: NgbToastConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbToastConfig.prototype.autohide;
    /** @type {?} */
    NgbToastConfig.prototype.delay;
    /** @type {?} */
    NgbToastConfig.prototype.ariaLive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsidG9hc3QvdG9hc3QtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQU96QyxxQ0FvQkM7Ozs7Ozs7SUFmQyxtQ0FBbUI7Ozs7O0lBS25CLGdDQUFlOzs7Ozs7Ozs7SUFTZixtQ0FBOEI7Ozs7Ozs7OztBQVdoQyxNQUFNLE9BQU8sY0FBYztJQUQzQjtRQUVFLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGFBQVEsR0FBdUIsUUFBUSxDQUFDO0tBQ3pDOzs7WUFMQSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OztJQUU5QixrQ0FBZ0I7O0lBQ2hCLCtCQUFZOztJQUNaLGtDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gdHlwZSBhbGwgdG9hc3QgY29uZmlnIG9wdGlvbnMuIFNlZSBgTmdiVG9hc3RDb25maWdgLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlRvYXN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGlmIHRoZSB0b2FzdCBjb21wb25lbnQgc2hvdWxkIGVtaXQgdGhlIGBoaWRlKClgIG91dHB1dFxuICAgKiBhZnRlciBhIGNlcnRhaW4gYGRlbGF5YCBpbiBtcy5cbiAgICovXG4gIGF1dG9oaWRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGVsYXkgaW4gbXMgYWZ0ZXIgd2hpY2ggdGhlIGBoaWRlKClgIG91dHB1dCBzaG91bGQgYmUgZW1pdHRlZC5cbiAgICovXG4gIGRlbGF5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUeXBlIG9mIGFyaWEtbGl2ZSBhdHRyaWJ1dGUgdG8gYmUgdXNlZC5cbiAgICpcbiAgICogQ291bGQgYmUgb25lIG9mIHRoZXNlIDIgdmFsdWVzIChhcyBzdHJpbmcpOlxuICAgKiAtIGBwb2xpdGVgIChkZWZhdWx0KVxuICAgKiAtIGBhbGVydGBcbiAgICovXG4gIGFyaWFMaXZlPzogJ3BvbGl0ZScgfCAnYWxlcnQnO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIE5nYlRvYXN0IGNvbXBvbmVudC4gWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCxcbiAqIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpbiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlIHRvYXN0cyB1c2VkIGluIHRoZVxuICogYXBwbGljYXRpb24uXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE5nYlRvYXN0Q29uZmlnIGltcGxlbWVudHMgTmdiVG9hc3RPcHRpb25zIHtcbiAgYXV0b2hpZGUgPSB0cnVlO1xuICBkZWxheSA9IDUwMDtcbiAgYXJpYUxpdmU6ICdwb2xpdGUnIHwgJ2FsZXJ0JyA9ICdwb2xpdGUnO1xufVxuIl19