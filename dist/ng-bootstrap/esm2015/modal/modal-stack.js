/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Inject, Injectable, Injector, RendererFactory2, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { ngbFocusTrap } from '../util/focus-trap';
import { ContentRef } from '../util/popup';
import { ScrollBar } from '../util/scrollbar';
import { isDefined, isString } from '../util/util';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbActiveModal, NgbModalRef } from './modal-ref';
import { NgbModalWindow } from './modal-window';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../util/scrollbar";
export class NgbModalStack {
    /**
     * @param {?} _applicationRef
     * @param {?} _injector
     * @param {?} _document
     * @param {?} _scrollBar
     * @param {?} _rendererFactory
     */
    constructor(_applicationRef, _injector, _document, _scrollBar, _rendererFactory) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._document = _document;
        this._scrollBar = _scrollBar;
        this._rendererFactory = _rendererFactory;
        this._activeWindowCmptHasChanged = new Subject();
        this._ariaHiddenValues = new Map();
        this._backdropAttributes = ['backdropClass'];
        this._modalRefs = [];
        this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
        this._windowCmpts = [];
        // Trap focus on active WindowCmpt
        this._activeWindowCmptHasChanged.subscribe((/**
         * @return {?}
         */
        () => {
            if (this._windowCmpts.length) {
                /** @type {?} */
                const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
                ngbFocusTrap(activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
                this._revertAriaHidden();
                this._setAriaHidden(activeWindowCmpt.location.nativeElement);
            }
        }));
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} options
     * @return {?}
     */
    open(moduleCFR, contentInjector, content, options) {
        /** @type {?} */
        const containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
        /** @type {?} */
        const renderer = this._rendererFactory.createRenderer(null, null);
        /** @type {?} */
        const revertPaddingForScrollBar = this._scrollBar.compensate();
        /** @type {?} */
        const removeBodyClass = (/**
         * @return {?}
         */
        () => {
            if (!this._modalRefs.length) {
                renderer.removeClass(this._document.body, 'modal-open');
                this._revertAriaHidden();
            }
        });
        if (!containerEl) {
            throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
        }
        /** @type {?} */
        const activeModal = new NgbActiveModal();
        /** @type {?} */
        const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
        /** @type {?} */
        let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
        /** @type {?} */
        let windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
        /** @type {?} */
        let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        this._registerModalRef(ngbModalRef);
        this._registerWindowCmpt(windowCmptRef);
        ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
        ngbModalRef.result.then(removeBodyClass, removeBodyClass);
        activeModal.close = (/**
         * @param {?} result
         * @return {?}
         */
        (result) => { ngbModalRef.close(result); });
        activeModal.dismiss = (/**
         * @param {?} reason
         * @return {?}
         */
        (reason) => { ngbModalRef.dismiss(reason); });
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
        }
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissAll(reason) { this._modalRefs.forEach((/**
     * @param {?} ngbModalRef
     * @return {?}
     */
    ngbModalRef => ngbModalRef.dismiss(reason))); }
    /**
     * @return {?}
     */
    hasOpenModals() { return this._modalRefs.length > 0; }
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @return {?}
     */
    _attachBackdrop(moduleCFR, containerEl) {
        /** @type {?} */
        let backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
        /** @type {?} */
        let backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    }
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @param {?} contentRef
     * @return {?}
     */
    _attachWindowComponent(moduleCFR, containerEl, contentRef) {
        /** @type {?} */
        let windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
        /** @type {?} */
        let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    }
    /**
     * @private
     * @param {?} windowInstance
     * @param {?} options
     * @return {?}
     */
    _applyWindowOptions(windowInstance, options) {
        this._windowAttributes.forEach((/**
         * @param {?} optionName
         * @return {?}
         */
        (optionName) => {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        }));
    }
    /**
     * @private
     * @param {?} backdropInstance
     * @param {?} options
     * @return {?}
     */
    _applyBackdropOptions(backdropInstance, options) {
        this._backdropAttributes.forEach((/**
         * @param {?} optionName
         * @return {?}
         */
        (optionName) => {
            if (isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        }));
    }
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} activeModal
     * @param {?} options
     * @return {?}
     */
    _getContentRef(moduleCFR, contentInjector, content, activeModal, options) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            return this._createFromTemplateRef(content, activeModal);
        }
        else if (isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
        }
    }
    /**
     * @private
     * @param {?} content
     * @param {?} activeModal
     * @return {?}
     */
    _createFromTemplateRef(content, activeModal) {
        /** @type {?} */
        const context = {
            $implicit: activeModal,
            /**
             * @param {?} result
             * @return {?}
             */
            close(result) { activeModal.close(result); },
            /**
             * @param {?} reason
             * @return {?}
             */
            dismiss(reason) { activeModal.dismiss(reason); }
        };
        /** @type {?} */
        const viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new ContentRef([viewRef.rootNodes], viewRef);
    }
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    _createFromString(content) {
        /** @type {?} */
        const component = this._document.createTextNode(`${content}`);
        return new ContentRef([[component]]);
    }
    /**
     * @private
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    _createFromComponent(moduleCFR, contentInjector, content, context, options) {
        /** @type {?} */
        const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        /** @type {?} */
        const modalContentInjector = Injector.create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
        /** @type {?} */
        const componentRef = contentCmptFactory.create(modalContentInjector);
        /** @type {?} */
        const componentNativeEl = componentRef.location.nativeElement;
        if (options.scrollable) {
            ((/** @type {?} */ (componentNativeEl))).classList.add('component-host-scrollable');
        }
        this._applicationRef.attachView(componentRef.hostView);
        // FIXME: we should here get rid of the component nativeElement
        // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
        return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    _setAriaHidden(element) {
        /** @type {?} */
        const parent = element.parentElement;
        if (parent && element !== this._document.body) {
            Array.from(parent.children).forEach((/**
             * @param {?} sibling
             * @return {?}
             */
            sibling => {
                if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                    this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }));
            this._setAriaHidden(parent);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _revertAriaHidden() {
        this._ariaHiddenValues.forEach((/**
         * @param {?} value
         * @param {?} element
         * @return {?}
         */
        (value, element) => {
            if (value) {
                element.setAttribute('aria-hidden', value);
            }
            else {
                element.removeAttribute('aria-hidden');
            }
        }));
        this._ariaHiddenValues.clear();
    }
    /**
     * @private
     * @param {?} ngbModalRef
     * @return {?}
     */
    _registerModalRef(ngbModalRef) {
        /** @type {?} */
        const unregisterModalRef = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const index = this._modalRefs.indexOf(ngbModalRef);
            if (index > -1) {
                this._modalRefs.splice(index, 1);
            }
        });
        this._modalRefs.push(ngbModalRef);
        ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    }
    /**
     * @private
     * @param {?} ngbWindowCmpt
     * @return {?}
     */
    _registerWindowCmpt(ngbWindowCmpt) {
        this._windowCmpts.push(ngbWindowCmpt);
        this._activeWindowCmptHasChanged.next();
        ngbWindowCmpt.onDestroy((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const index = this._windowCmpts.indexOf(ngbWindowCmpt);
            if (index > -1) {
                this._windowCmpts.splice(index, 1);
                this._activeWindowCmptHasChanged.next();
            }
        }));
    }
}
NgbModalStack.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NgbModalStack.ctorParameters = () => [
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ScrollBar },
    { type: RendererFactory2 }
];
/** @nocollapse */ NgbModalStack.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbModalStack_Factory() { return new NgbModalStack(i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.ScrollBar), i0.ɵɵinject(i0.RendererFactory2)); }, token: NgbModalStack, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._activeWindowCmptHasChanged;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._ariaHiddenValues;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._backdropAttributes;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._modalRefs;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._windowAttributes;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._windowCmpts;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._document;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._scrollBar;
    /**
     * @type {?}
     * @private
     */
    NgbModalStack.prototype._rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtc3RhY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFDTCxjQUFjLEVBR2QsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUMsY0FBYyxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHOUMsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBU3hCLFlBQ1ksZUFBK0IsRUFBVSxTQUFtQixFQUE0QixTQUFjLEVBQ3RHLFVBQXFCLEVBQVUsZ0JBQWtDO1FBRGpFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBNEIsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUN0RyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZyRSxnQ0FBMkIsR0FBRyxJQUFJ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Ozs7O0lBQ2hHLHFDQUEwRDs7Ozs7SUFHdEQsd0NBQXVDOzs7OztJQUFFLGtDQUEyQjs7Ozs7SUFBRSxrQ0FBd0M7Ozs7O0lBQzlHLG1DQUE2Qjs7Ozs7SUFBRSx5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge25nYkZvY3VzVHJhcH0gZnJvbSAnLi4vdXRpbC9mb2N1cy10cmFwJztcbmltcG9ydCB7Q29udGVudFJlZn0gZnJvbSAnLi4vdXRpbC9wb3B1cCc7XG5pbXBvcnQge1Njcm9sbEJhcn0gZnJvbSAnLi4vdXRpbC9zY3JvbGxiYXInO1xuaW1wb3J0IHtpc0RlZmluZWQsIGlzU3RyaW5nfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHtOZ2JNb2RhbEJhY2tkcm9wfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wJztcbmltcG9ydCB7TmdiTW9kYWxPcHRpb25zfSBmcm9tICcuL21vZGFsLWNvbmZpZyc7XG5pbXBvcnQge05nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZn0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHtOZ2JNb2RhbFdpbmRvd30gZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JNb2RhbFN0YWNrIHtcbiAgcHJpdmF0ZSBfYWN0aXZlV2luZG93Q21wdEhhc0NoYW5nZWQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9hcmlhSGlkZGVuVmFsdWVzOiBNYXA8RWxlbWVudCwgc3RyaW5nPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BBdHRyaWJ1dGVzID0gWydiYWNrZHJvcENsYXNzJ107XG4gIHByaXZhdGUgX21vZGFsUmVmczogTmdiTW9kYWxSZWZbXSA9IFtdO1xuICBwcml2YXRlIF93aW5kb3dBdHRyaWJ1dGVzID1cbiAgICAgIFsnYXJpYUxhYmVsbGVkQnknLCAnYmFja2Ryb3AnLCAnY2VudGVyZWQnLCAna2V5Ym9hcmQnLCAnc2Nyb2xsYWJsZScsICdzaXplJywgJ3dpbmRvd0NsYXNzJ107XG4gIHByaXZhdGUgX3dpbmRvd0NtcHRzOiBDb21wb25lbnRSZWY8TmdiTW9kYWxXaW5kb3c+W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZiwgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgcHJpdmF0ZSBfc2Nyb2xsQmFyOiBTY3JvbGxCYXIsIHByaXZhdGUgX3JlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIC8vIFRyYXAgZm9jdXMgb24gYWN0aXZlIFdpbmRvd0NtcHRcbiAgICB0aGlzLl9hY3RpdmVXaW5kb3dDbXB0SGFzQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbmRvd0NtcHRzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBhY3RpdmVXaW5kb3dDbXB0ID0gdGhpcy5fd2luZG93Q21wdHNbdGhpcy5fd2luZG93Q21wdHMubGVuZ3RoIC0gMV07XG4gICAgICAgIG5nYkZvY3VzVHJhcChhY3RpdmVXaW5kb3dDbXB0LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjdGl2ZVdpbmRvd0NtcHRIYXNDaGFuZ2VkKTtcbiAgICAgICAgdGhpcy5fcmV2ZXJ0QXJpYUhpZGRlbigpO1xuICAgICAgICB0aGlzLl9zZXRBcmlhSGlkZGVuKGFjdGl2ZVdpbmRvd0NtcHQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKG1vZHVsZUNGUjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBjb250ZW50SW5qZWN0b3I6IEluamVjdG9yLCBjb250ZW50OiBhbnksIG9wdGlvbnMpOiBOZ2JNb2RhbFJlZiB7XG4gICAgY29uc3QgY29udGFpbmVyRWwgPVxuICAgICAgICBpc0RlZmluZWQob3B0aW9ucy5jb250YWluZXIpID8gdGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcikgOiB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5fcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuXG4gICAgY29uc3QgcmV2ZXJ0UGFkZGluZ0ZvclNjcm9sbEJhciA9IHRoaXMuX3Njcm9sbEJhci5jb21wZW5zYXRlKCk7XG4gICAgY29uc3QgcmVtb3ZlQm9keUNsYXNzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9tb2RhbFJlZnMubGVuZ3RoKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHRoaXMuX3JldmVydEFyaWFIaWRkZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFjb250YWluZXJFbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc3BlY2lmaWVkIG1vZGFsIGNvbnRhaW5lciBcIiR7b3B0aW9ucy5jb250YWluZXIgfHwgJ2JvZHknfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIERPTS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVNb2RhbCA9IG5ldyBOZ2JBY3RpdmVNb2RhbCgpO1xuICAgIGNvbnN0IGNvbnRlbnRSZWYgPVxuICAgICAgICB0aGlzLl9nZXRDb250ZW50UmVmKG1vZHVsZUNGUiwgb3B0aW9ucy5pbmplY3RvciB8fCBjb250ZW50SW5qZWN0b3IsIGNvbnRlbnQsIGFjdGl2ZU1vZGFsLCBvcHRpb25zKTtcblxuICAgIGxldCBiYWNrZHJvcENtcHRSZWY6IENvbXBvbmVudFJlZjxOZ2JNb2RhbEJhY2tkcm9wPiA9XG4gICAgICAgIG9wdGlvbnMuYmFja2Ryb3AgIT09IGZhbHNlID8gdGhpcy5fYXR0YWNoQmFja2Ryb3AobW9kdWxlQ0ZSLCBjb250YWluZXJFbCkgOiBudWxsO1xuICAgIGxldCB3aW5kb3dDbXB0UmVmOiBDb21wb25lbnRSZWY8TmdiTW9kYWxXaW5kb3c+ID0gdGhpcy5fYXR0YWNoV2luZG93Q29tcG9uZW50KG1vZHVsZUNGUiwgY29udGFpbmVyRWwsIGNvbnRlbnRSZWYpO1xuICAgIGxldCBuZ2JNb2RhbFJlZjogTmdiTW9kYWxSZWYgPSBuZXcgTmdiTW9kYWxSZWYod2luZG93Q21wdFJlZiwgY29udGVudFJlZiwgYmFja2Ryb3BDbXB0UmVmLCBvcHRpb25zLmJlZm9yZURpc21pc3MpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJNb2RhbFJlZihuZ2JNb2RhbFJlZik7XG4gICAgdGhpcy5fcmVnaXN0ZXJXaW5kb3dDbXB0KHdpbmRvd0NtcHRSZWYpO1xuICAgIG5nYk1vZGFsUmVmLnJlc3VsdC50aGVuKHJldmVydFBhZGRpbmdGb3JTY3JvbGxCYXIsIHJldmVydFBhZGRpbmdGb3JTY3JvbGxCYXIpO1xuICAgIG5nYk1vZGFsUmVmLnJlc3VsdC50aGVuKHJlbW92ZUJvZHlDbGFzcywgcmVtb3ZlQm9keUNsYXNzKTtcbiAgICBhY3RpdmVNb2RhbC5jbG9zZSA9IChyZXN1bHQ6IGFueSkgPT4geyBuZ2JNb2RhbFJlZi5jbG9zZShyZXN1bHQpOyB9O1xuICAgIGFjdGl2ZU1vZGFsLmRpc21pc3MgPSAocmVhc29uOiBhbnkpID0+IHsgbmdiTW9kYWxSZWYuZGlzbWlzcyhyZWFzb24pOyB9O1xuXG4gICAgdGhpcy5fYXBwbHlXaW5kb3dPcHRpb25zKHdpbmRvd0NtcHRSZWYuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgIGlmICh0aGlzLl9tb2RhbFJlZnMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xuICAgIH1cblxuICAgIGlmIChiYWNrZHJvcENtcHRSZWYgJiYgYmFja2Ryb3BDbXB0UmVmLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBseUJhY2tkcm9wT3B0aW9ucyhiYWNrZHJvcENtcHRSZWYuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmdiTW9kYWxSZWY7XG4gIH1cblxuICBkaXNtaXNzQWxsKHJlYXNvbj86IGFueSkgeyB0aGlzLl9tb2RhbFJlZnMuZm9yRWFjaChuZ2JNb2RhbFJlZiA9PiBuZ2JNb2RhbFJlZi5kaXNtaXNzKHJlYXNvbikpOyB9XG5cbiAgaGFzT3Blbk1vZGFscygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX21vZGFsUmVmcy5sZW5ndGggPiAwOyB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoQmFja2Ryb3AobW9kdWxlQ0ZSOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNvbnRhaW5lckVsOiBhbnkpOiBDb21wb25lbnRSZWY8TmdiTW9kYWxCYWNrZHJvcD4ge1xuICAgIGxldCBiYWNrZHJvcEZhY3RvcnkgPSBtb2R1bGVDRlIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTmdiTW9kYWxCYWNrZHJvcCk7XG4gICAgbGV0IGJhY2tkcm9wQ21wdFJlZiA9IGJhY2tkcm9wRmFjdG9yeS5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoYmFja2Ryb3BDbXB0UmVmLmhvc3RWaWV3KTtcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZChiYWNrZHJvcENtcHRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIGJhY2tkcm9wQ21wdFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaFdpbmRvd0NvbXBvbmVudChtb2R1bGVDRlI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgY29udGFpbmVyRWw6IGFueSwgY29udGVudFJlZjogYW55KTpcbiAgICAgIENvbXBvbmVudFJlZjxOZ2JNb2RhbFdpbmRvdz4ge1xuICAgIGxldCB3aW5kb3dGYWN0b3J5ID0gbW9kdWxlQ0ZSLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5nYk1vZGFsV2luZG93KTtcbiAgICBsZXQgd2luZG93Q21wdFJlZiA9IHdpbmRvd0ZhY3RvcnkuY3JlYXRlKHRoaXMuX2luamVjdG9yLCBjb250ZW50UmVmLm5vZGVzKTtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHdpbmRvd0NtcHRSZWYuaG9zdFZpZXcpO1xuICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHdpbmRvd0NtcHRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIHdpbmRvd0NtcHRSZWY7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseVdpbmRvd09wdGlvbnMod2luZG93SW5zdGFuY2U6IE5nYk1vZGFsV2luZG93LCBvcHRpb25zOiBPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLl93aW5kb3dBdHRyaWJ1dGVzLmZvckVhY2goKG9wdGlvbk5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChvcHRpb25zW29wdGlvbk5hbWVdKSkge1xuICAgICAgICB3aW5kb3dJbnN0YW5jZVtvcHRpb25OYW1lXSA9IG9wdGlvbnNbb3B0aW9uTmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseUJhY2tkcm9wT3B0aW9ucyhiYWNrZHJvcEluc3RhbmNlOiBOZ2JNb2RhbEJhY2tkcm9wLCBvcHRpb25zOiBPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLl9iYWNrZHJvcEF0dHJpYnV0ZXMuZm9yRWFjaCgob3B0aW9uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoaXNEZWZpbmVkKG9wdGlvbnNbb3B0aW9uTmFtZV0pKSB7XG4gICAgICAgIGJhY2tkcm9wSW5zdGFuY2Vbb3B0aW9uTmFtZV0gPSBvcHRpb25zW29wdGlvbk5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29udGVudFJlZihcbiAgICAgIG1vZHVsZUNGUjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBjb250ZW50SW5qZWN0b3I6IEluamVjdG9yLCBjb250ZW50OiBhbnksIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgIG9wdGlvbnM6IE5nYk1vZGFsT3B0aW9ucyk6IENvbnRlbnRSZWYge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtdKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZyb21UZW1wbGF0ZVJlZihjb250ZW50LCBhY3RpdmVNb2RhbCk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb250ZW50KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZyb21TdHJpbmcoY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVGcm9tQ29tcG9uZW50KG1vZHVsZUNGUiwgY29udGVudEluamVjdG9yLCBjb250ZW50LCBhY3RpdmVNb2RhbCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRnJvbVRlbXBsYXRlUmVmKGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT4sIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCk6IENvbnRlbnRSZWYge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAkaW1wbGljaXQ6IGFjdGl2ZU1vZGFsLFxuICAgICAgY2xvc2UocmVzdWx0KSB7IGFjdGl2ZU1vZGFsLmNsb3NlKHJlc3VsdCk7IH0sXG4gICAgICBkaXNtaXNzKHJlYXNvbikgeyBhY3RpdmVNb2RhbC5kaXNtaXNzKHJlYXNvbik7IH1cbiAgICB9O1xuICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0KTtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZyb21TdHJpbmcoY29udGVudDogc3RyaW5nKTogQ29udGVudFJlZiB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Y29udGVudH1gKTtcbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1tjb21wb25lbnRdXSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGcm9tQ29tcG9uZW50KFxuICAgICAgbW9kdWxlQ0ZSOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNvbnRlbnRJbmplY3RvcjogSW5qZWN0b3IsIGNvbnRlbnQ6IGFueSwgY29udGV4dDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICBvcHRpb25zOiBOZ2JNb2RhbE9wdGlvbnMpOiBDb250ZW50UmVmIHtcbiAgICBjb25zdCBjb250ZW50Q21wdEZhY3RvcnkgPSBtb2R1bGVDRlIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29udGVudCk7XG4gICAgY29uc3QgbW9kYWxDb250ZW50SW5qZWN0b3IgPVxuICAgICAgICBJbmplY3Rvci5jcmVhdGUoe3Byb3ZpZGVyczogW3twcm92aWRlOiBOZ2JBY3RpdmVNb2RhbCwgdXNlVmFsdWU6IGNvbnRleHR9XSwgcGFyZW50OiBjb250ZW50SW5qZWN0b3J9KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb250ZW50Q21wdEZhY3RvcnkuY3JlYXRlKG1vZGFsQ29udGVudEluamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnROYXRpdmVFbCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChvcHRpb25zLnNjcm9sbGFibGUpIHtcbiAgICAgIChjb21wb25lbnROYXRpdmVFbCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnY29tcG9uZW50LWhvc3Qtc2Nyb2xsYWJsZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgLy8gRklYTUU6IHdlIHNob3VsZCBoZXJlIGdldCByaWQgb2YgdGhlIGNvbXBvbmVudCBuYXRpdmVFbGVtZW50XG4gICAgLy8gYW5kIHVzZSBgW0FycmF5LmZyb20oY29tcG9uZW50TmF0aXZlRWwuY2hpbGROb2RlcyldYCBpbnN0ZWFkIGFuZCByZW1vdmUgdGhlIGFib3ZlIENTUyBjbGFzcy5cbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1tjb21wb25lbnROYXRpdmVFbF1dLCBjb21wb25lbnRSZWYuaG9zdFZpZXcsIGNvbXBvbmVudFJlZik7XG4gIH1cblxuICBwcml2YXRlIF9zZXRBcmlhSGlkZGVuKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCAmJiBlbGVtZW50ICE9PSB0aGlzLl9kb2N1bWVudC5ib2R5KSB7XG4gICAgICBBcnJheS5mcm9tKHBhcmVudC5jaGlsZHJlbikuZm9yRWFjaChzaWJsaW5nID0+IHtcbiAgICAgICAgaWYgKHNpYmxpbmcgIT09IGVsZW1lbnQgJiYgc2libGluZy5ub2RlTmFtZSAhPT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICB0aGlzLl9hcmlhSGlkZGVuVmFsdWVzLnNldChzaWJsaW5nLCBzaWJsaW5nLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3NldEFyaWFIaWRkZW4ocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXZlcnRBcmlhSGlkZGVuKCkge1xuICAgIHRoaXMuX2FyaWFIaWRkZW5WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9hcmlhSGlkZGVuVmFsdWVzLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3Rlck1vZGFsUmVmKG5nYk1vZGFsUmVmOiBOZ2JNb2RhbFJlZikge1xuICAgIGNvbnN0IHVucmVnaXN0ZXJNb2RhbFJlZiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbW9kYWxSZWZzLmluZGV4T2YobmdiTW9kYWxSZWYpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fbW9kYWxSZWZzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9tb2RhbFJlZnMucHVzaChuZ2JNb2RhbFJlZik7XG4gICAgbmdiTW9kYWxSZWYucmVzdWx0LnRoZW4odW5yZWdpc3Rlck1vZGFsUmVmLCB1bnJlZ2lzdGVyTW9kYWxSZWYpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJXaW5kb3dDbXB0KG5nYldpbmRvd0NtcHQ6IENvbXBvbmVudFJlZjxOZ2JNb2RhbFdpbmRvdz4pIHtcbiAgICB0aGlzLl93aW5kb3dDbXB0cy5wdXNoKG5nYldpbmRvd0NtcHQpO1xuICAgIHRoaXMuX2FjdGl2ZVdpbmRvd0NtcHRIYXNDaGFuZ2VkLm5leHQoKTtcblxuICAgIG5nYldpbmRvd0NtcHQub25EZXN0cm95KCgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fd2luZG93Q21wdHMuaW5kZXhPZihuZ2JXaW5kb3dDbXB0KTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuX3dpbmRvd0NtcHRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVdpbmRvd0NtcHRIYXNDaGFuZ2VkLm5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19