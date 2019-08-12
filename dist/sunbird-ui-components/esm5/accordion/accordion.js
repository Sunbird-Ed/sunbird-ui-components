/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, Directive, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef } from '@angular/core';
import { isString } from '../util/util';
import { NgbAccordionConfig } from './accordion-config';
/** @type {?} */
var nextId = 0;
/**
 * The context for the [NgbPanelHeader](#/components/accordion/api#NgbPanelHeader) template
 *
 * \@since 4.1.0
 * @record
 */
export function NgbPanelHeaderContext() { }
if (false) {
    /**
     * `True` if current panel is opened
     * @type {?}
     */
    NgbPanelHeaderContext.prototype.opened;
}
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * \@since 4.1.0
 */
var NgbPanelHeader = /** @class */ (function () {
    function NgbPanelHeader(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelHeader.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbPanelHeader]' },] }
    ];
    /** @nocollapse */
    NgbPanelHeader.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgbPanelHeader;
}());
export { NgbPanelHeader };
if (false) {
    /** @type {?} */
    NgbPanelHeader.prototype.templateRef;
}
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
var NgbPanelTitle = /** @class */ (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbPanelTitle]' },] }
    ];
    /** @nocollapse */
    NgbPanelTitle.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgbPanelTitle;
}());
export { NgbPanelTitle };
if (false) {
    /** @type {?} */
    NgbPanelTitle.prototype.templateRef;
}
/**
 * A directive that wraps the accordion panel content.
 */
var NgbPanelContent = /** @class */ (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbPanelContent]' },] }
    ];
    /** @nocollapse */
    NgbPanelContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NgbPanelContent;
}());
export { NgbPanelContent };
if (false) {
    /** @type {?} */
    NgbPanelContent.prototype.templateRef;
}
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
var NgbPanel = /** @class */ (function () {
    function NgbPanel() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = "ngb-panel-" + nextId++;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    NgbPanel.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbPanel.decorators = [
        { type: Directive, args: [{ selector: 'ngb-panel' },] }
    ];
    NgbPanel.propDecorators = {
        disabled: [{ type: Input }],
        id: [{ type: Input }],
        title: [{ type: Input }],
        type: [{ type: Input }],
        titleTpls: [{ type: ContentChildren, args: [NgbPanelTitle, { descendants: false },] }],
        headerTpls: [{ type: ContentChildren, args: [NgbPanelHeader, { descendants: false },] }],
        contentTpls: [{ type: ContentChildren, args: [NgbPanelContent, { descendants: false },] }]
    };
    return NgbPanel;
}());
export { NgbPanel };
if (false) {
    /**
     *  If `true`, the panel is disabled an can't be toggled.
     * @type {?}
     */
    NgbPanel.prototype.disabled;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     * @type {?}
     */
    NgbPanel.prototype.id;
    /** @type {?} */
    NgbPanel.prototype.isOpen;
    /**
     *  The panel title.
     *
     *  You can alternatively use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to set panel title.
     * @type {?}
     */
    NgbPanel.prototype.title;
    /**
     * Type of the current panel.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     * @type {?}
     */
    NgbPanel.prototype.type;
    /** @type {?} */
    NgbPanel.prototype.titleTpl;
    /** @type {?} */
    NgbPanel.prototype.headerTpl;
    /** @type {?} */
    NgbPanel.prototype.contentTpl;
    /** @type {?} */
    NgbPanel.prototype.titleTpls;
    /** @type {?} */
    NgbPanel.prototype.headerTpls;
    /** @type {?} */
    NgbPanel.prototype.contentTpls;
}
/**
 * An event emitted right before toggling an accordion panel.
 * @record
 */
export function NgbPanelChangeEvent() { }
if (false) {
    /**
     * The id of the accordion panel that is being toggled.
     * @type {?}
     */
    NgbPanelChangeEvent.prototype.panelId;
    /**
     * The next state of the panel.
     *
     * `true` if it will be opened, `false` if closed.
     * @type {?}
     */
    NgbPanelChangeEvent.prototype.nextState;
    /**
     * Calling this function will prevent panel toggling.
     * @type {?}
     */
    NgbPanelChangeEvent.prototype.preventDefault;
}
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
var NgbAccordion = /** @class */ (function () {
    function NgbAccordion(config) {
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new EventEmitter();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    /**
     * Checks if a panel with a given id is expanded.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.isExpanded = /**
     * Checks if a panel with a given id is expanded.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { return this.activeIds.indexOf(panelId) > -1; };
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.expand = /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { this._changeOpenState(this._findPanelById(panelId), true); };
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     * @return {?}
     */
    NgbAccordion.prototype.expandAll = /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach((/**
             * @param {?} panel
             * @return {?}
             */
            function (panel) { return _this._changeOpenState(panel, true); }));
        }
    };
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.collapse = /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { this._changeOpenState(this._findPanelById(panelId), false); };
    /**
     * Collapses all opened panels.
     */
    /**
     * Collapses all opened panels.
     * @return {?}
     */
    NgbAccordion.prototype.collapseAll = /**
     * Collapses all opened panels.
     * @return {?}
     */
    function () {
        var _this = this;
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { _this._changeOpenState(panel, false); }));
    };
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype.toggle = /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) {
        /** @type {?} */
        var panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    };
    /**
     * @return {?}
     */
    NgbAccordion.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; }));
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @private
     * @param {?} panel
     * @param {?} nextState
     * @return {?}
     */
    NgbAccordion.prototype._changeOpenState = /**
     * @private
     * @param {?} panel
     * @param {?} nextState
     * @return {?}
     */
    function (panel, nextState) {
        if (panel && !panel.disabled && panel.isOpen !== nextState) {
            /** @type {?} */
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: (/**
                 * @return {?}
                 */
                function () { defaultPrevented_1 = true; }) });
            if (!defaultPrevented_1) {
                panel.isOpen = nextState;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
            }
        }
    };
    /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype._closeOthers = /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) {
        this.panels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        }));
    };
    /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    NgbAccordion.prototype._findPanelById = /**
     * @private
     * @param {?} panelId
     * @return {?}
     */
    function (panelId) { return this.panels.find((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.id === panelId; })); };
    /**
     * @private
     * @return {?}
     */
    NgbAccordion.prototype._updateActiveIds = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIds = this.panels.filter((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.isOpen && !panel.disabled; })).map((/**
         * @param {?} panel
         * @return {?}
         */
        function (panel) { return panel.id; }));
    };
    NgbAccordion.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbAccordion.ctorParameters = function () { return [
        { type: NgbAccordionConfig }
    ]; };
    NgbAccordion.propDecorators = {
        panels: [{ type: ContentChildren, args: [NgbPanel,] }],
        activeIds: [{ type: Input }],
        closeOtherPanels: [{ type: Input, args: ['closeOthers',] }],
        destroyOnHide: [{ type: Input }],
        type: [{ type: Input }],
        panelChange: [{ type: Output }]
    };
    return NgbAccordion;
}());
export { NgbAccordion };
if (false) {
    /** @type {?} */
    NgbAccordion.prototype.panels;
    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     * @type {?}
     */
    NgbAccordion.prototype.activeIds;
    /**
     *  If `true`, only one panel could be opened at a time.
     *
     *  Opening a new panel will close others.
     * @type {?}
     */
    NgbAccordion.prototype.closeOtherPanels;
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     * @type {?}
     */
    NgbAccordion.prototype.destroyOnHide;
    /**
     * Type of panels.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     * @type {?}
     */
    NgbAccordion.prototype.type;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     * @type {?}
     */
    NgbAccordion.prototype.panelChange;
}
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * \@since 4.1.0
 */
var NgbPanelToggle = /** @class */ (function () {
    function NgbPanelToggle(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    Object.defineProperty(NgbPanelToggle.prototype, "ngbPanelToggle", {
        set: /**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            if (panel) {
                this.panel = panel;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbPanelToggle.decorators = [
        { type: Directive, args: [{
                    selector: 'button[ngbPanelToggle]',
                    host: {
                        'type': 'button',
                        '[disabled]': 'panel.disabled',
                        '[class.collapsed]': '!panel.isOpen',
                        '[attr.aria-expanded]': 'panel.isOpen',
                        '[attr.aria-controls]': 'panel.id',
                        '(click)': 'accordion.toggle(panel.id)'
                    }
                },] }
    ];
    /** @nocollapse */
    NgbPanelToggle.ctorParameters = function () { return [
        { type: NgbAccordion },
        { type: NgbPanel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    NgbPanelToggle.propDecorators = {
        ngbPanelToggle: [{ type: Input }]
    };
    return NgbPanelToggle;
}());
export { NgbPanelToggle };
if (false) {
    /** @type {?} */
    NgbPanelToggle.prototype.accordion;
    /** @type {?} */
    NgbPanelToggle.prototype.panel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztJQUVsRCxNQUFNLEdBQUcsQ0FBQzs7Ozs7OztBQU9kLDJDQUtDOzs7Ozs7SUFEQyx1Q0FBZ0I7Ozs7Ozs7Ozs7O0FBWWxCO0lBRUUsd0JBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7O2dCQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUM7Ozs7Z0JBOUJsRCxXQUFXOztJQWlDYixxQkFBQztDQUFBLEFBSEQsSUFHQztTQUZZLGNBQWM7OztJQUNiLHFDQUFvQzs7Ozs7OztBQVFsRDtJQUVFLHVCQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOztnQkFGckQsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFDOzs7O2dCQXhDakQsV0FBVzs7SUEyQ2Isb0JBQUM7Q0FBQSxBQUhELElBR0M7U0FGWSxhQUFhOzs7SUFDWixvQ0FBb0M7Ozs7O0FBTWxEO0lBRUUseUJBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7O2dCQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsOEJBQThCLEVB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Q0FBOEI7Ozs7Ozs7O0lBUTlCLDRCQUFzQjs7Ozs7OztJQU90QixtQ0FBZ0U7Ozs7Ozs7OztBQW9IbEU7SUFtQkUsd0JBQW1CLFNBQXVCLEVBQTZCLEtBQWU7UUFBbkUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUE2QixVQUFLLEdBQUwsS0FBSyxDQUFVO0lBQUcsQ0FBQztJQVAxRixzQkFDSSwwQ0FBYzs7Ozs7UUFEbEIsVUFDbUIsS0FBZTtZQUNoQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtRQUNILENBQUM7OztPQUFBOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsUUFBUTt3QkFDaEIsWUFBWSxFQUFFLGdCQUFnQjt3QkFDOUIsbUJBQW1CLEVBQUUsZUFBZTt3QkFDcEMsc0JBQXNCLEVBQUUsY0FBYzt3QkFDdEMsc0JBQXNCLEVBQUUsVUFBVTt3QkFDbEMsU0FBUyxFQUFFLDRCQUE0QjtxQkFDeEM7aUJBQ0Y7Ozs7Z0JBUytCLFlBQVk7Z0JBQW9DLFFBQVEsdUJBQXpDLFFBQVEsWUFBSSxJQUFJOzs7aUNBUDVELEtBQUs7O0lBUVIscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQVRZLGNBQWM7OztJQVFiLG1DQUE4Qjs7SUFBRSwrQkFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5pbXBvcnQge05nYkFjY29yZGlvbkNvbmZpZ30gZnJvbSAnLi9hY2NvcmRpb24tY29uZmlnJztcblxubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogVGhlIGNvbnRleHQgZm9yIHRoZSBbTmdiUGFuZWxIZWFkZXJdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsSGVhZGVyKSB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlBhbmVsSGVhZGVyQ29udGV4dCB7XG4gIC8qKlxuICAgKiBgVHJ1ZWAgaWYgY3VycmVudCBwYW5lbCBpcyBvcGVuZWRcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIGFuIGFjY29yZGlvbiBwYW5lbCBoZWFkZXIgd2l0aCBhbnkgSFRNTCBtYXJrdXAgYW5kIGEgdG9nZ2xpbmcgYnV0dG9uXG4gKiBtYXJrZWQgd2l0aCBbYE5nYlBhbmVsVG9nZ2xlYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxUb2dnbGUpLlxuICogU2VlIHRoZSBbaGVhZGVyIGN1c3RvbWl6YXRpb24gZGVtb10oIy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcyNoZWFkZXIpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IGNhbiBhbHNvIHVzZSBbYE5nYlBhbmVsVGl0bGVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbFRpdGxlKSB0byBjdXN0b21pemUgb25seSB0aGUgcGFuZWwgdGl0bGUuXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiUGFuZWxIZWFkZXJdJ30pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBvbmx5IHRoZSBwYW5lbCB0aXRsZSB3aXRoIEhUTUwgbWFya3VwIGluc2lkZS5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIFtgTmdiUGFuZWxIZWFkZXJgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbEhlYWRlcikgdG8gY3VzdG9taXplIHRoZSBmdWxsIHBhbmVsIGhlYWRlci5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYW5lbFRpdGxlXSd9KVxuZXhwb3J0IGNsYXNzIE5nYlBhbmVsVGl0bGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyB0aGUgYWNjb3JkaW9uIHBhbmVsIGNvbnRlbnQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiUGFuZWxDb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIE5nYlBhbmVsQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIGFuIGluZGl2aWR1YWwgYWNjb3JkaW9uIHBhbmVsIHdpdGggdGl0bGUgYW5kIGNvbGxhcHNpYmxlIGNvbnRlbnQuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmdiLXBhbmVsJ30pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWwgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgLyoqXG4gICAqICBJZiBgdHJ1ZWAsIHRoZSBwYW5lbCBpcyBkaXNhYmxlZCBhbiBjYW4ndCBiZSB0b2dnbGVkLlxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogIEFuIG9wdGlvbmFsIGlkIGZvciB0aGUgcGFuZWwgdGhhdCBtdXN0IGJlIHVuaXF1ZSBvbiB0aGUgcGFnZS5cbiAgICpcbiAgICogIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBhdXRvLWdlbmVyYXRlZCBpbiB0aGUgYG5nYi1wYW5lbC14eHhgIGZvcm1hdC5cbiAgICovXG4gIEBJbnB1dCgpIGlkID0gYG5nYi1wYW5lbC0ke25leHRJZCsrfWA7XG5cbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqICBUaGUgcGFuZWwgdGl0bGUuXG4gICAqXG4gICAqICBZb3UgY2FuIGFsdGVybmF0aXZlbHkgdXNlIFtgTmdiUGFuZWxUaXRsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVGl0bGUpIHRvIHNldCBwYW5lbCB0aXRsZS5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGN1cnJlbnQgcGFuZWwuXG4gICAqXG4gICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgKiBgJ3NlY29uZGFyeSdgLCBgJ2xpZ2h0J2AgYW5kIGAnZGFyaydgLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIHRpdGxlVHBsOiBOZ2JQYW5lbFRpdGxlIHwgbnVsbDtcbiAgaGVhZGVyVHBsOiBOZ2JQYW5lbEhlYWRlciB8IG51bGw7XG4gIGNvbnRlbnRUcGw6IE5nYlBhbmVsQ29udGVudCB8IG51bGw7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JQYW5lbFRpdGxlLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgdGl0bGVUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxUaXRsZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiUGFuZWxIZWFkZXIsIHtkZXNjZW5kYW50czogZmFsc2V9KSBoZWFkZXJUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxIZWFkZXI+O1xuICBAQ29udGVudENoaWxkcmVuKE5nYlBhbmVsQ29udGVudCwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGNvbnRlbnRUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxDb250ZW50PjtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgLy8gV2UgYXJlIHVzaW5nIEBDb250ZW50Q2hpbGRyZW4gaW5zdGVhZCBvZiBAQ29udGVudENoaWxkIGFzIGluIHRoZSBBbmd1bGFyIHZlcnNpb24gYmVpbmcgdXNlZFxuICAgIC8vIG9ubHkgQENvbnRlbnRDaGlsZHJlbiBhbGxvd3MgdXMgdG8gc3BlY2lmeSB0aGUge2Rlc2NlbmRhbnRzOiBmYWxzZX0gb3B0aW9uLlxuICAgIC8vIFdpdGhvdXQge2Rlc2NlbmRhbnRzOiBmYWxzZX0gd2UgYXJlIGhpdHRpbmcgYnVncyBkZXNjcmliZWQgaW46XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvaXNzdWVzLzIyNDBcbiAgICB0aGlzLnRpdGxlVHBsID0gdGhpcy50aXRsZVRwbHMuZmlyc3Q7XG4gICAgdGhpcy5oZWFkZXJUcGwgPSB0aGlzLmhlYWRlclRwbHMuZmlyc3Q7XG4gICAgdGhpcy5jb250ZW50VHBsID0gdGhpcy5jb250ZW50VHBscy5maXJzdDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRvZ2dsaW5nIGFuIGFjY29yZGlvbiBwYW5lbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JQYW5lbENoYW5nZUV2ZW50IHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYWNjb3JkaW9uIHBhbmVsIHRoYXQgaXMgYmVpbmcgdG9nZ2xlZC5cbiAgICovXG4gIHBhbmVsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5leHQgc3RhdGUgb2YgdGhlIHBhbmVsLlxuICAgKlxuICAgKiBgdHJ1ZWAgaWYgaXQgd2lsbCBiZSBvcGVuZWQsIGBmYWxzZWAgaWYgY2xvc2VkLlxuICAgKi9cbiAgbmV4dFN0YXRlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IHBhbmVsIHRvZ2dsaW5nLlxuICAgKi9cbiAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQWNjb3JkaW9uIGlzIGEgY29sbGVjdGlvbiBvZiBjb2xsYXBzaWJsZSBwYW5lbHMgKGJvb3RzdHJhcCBjYXJkcykuXG4gKlxuICogSXQgY2FuIGVuc3VyZSBvbmx5IG9uZSBwYW5lbCBpcyBvcGVuZWQgYXQgYSB0aW1lIGFuZCBhbGxvd3MgdG8gY3VzdG9taXplIHBhbmVsXG4gKiBoZWFkZXJzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICduZ2JBY2NvcmRpb24nLFxuICBob3N0OiB7J2NsYXNzJzogJ2FjY29yZGlvbicsICdyb2xlJzogJ3RhYmxpc3QnLCAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJyFjbG9zZU90aGVyUGFuZWxzJ30sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0IG5nYlBhbmVsSGVhZGVyIGxldC1wYW5lbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBbbmdiUGFuZWxUb2dnbGVdPVwicGFuZWxcIj5cbiAgICAgICAge3twYW5lbC50aXRsZX19PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhbmVsLnRpdGxlVHBsPy50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcGFuZWwgW25nRm9yT2ZdPVwicGFuZWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJcIiBpZD1cInt7cGFuZWwuaWR9fS1oZWFkZXJcIiBbY2xhc3NdPVwiJ2NhcmQtaGVhZGVyICcgKyAocGFuZWwudHlwZSA/ICdiZy0nK3BhbmVsLnR5cGU6IHR5cGUgPyAnYmctJyt0eXBlIDogJycpXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhbmVsLmhlYWRlclRwbD8udGVtcGxhdGVSZWYgfHwgdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7JGltcGxpY2l0OiBwYW5lbCwgb3BlbmVkOiBwYW5lbC5pc09wZW59XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ7e3BhbmVsLmlkfX1cIiByb2xlPVwidGFicGFuZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwicGFuZWwuaWQgKyAnLWhlYWRlcidcIlxuICAgICAgICAgICAgIGNsYXNzPVwiY29sbGFwc2VcIiBbY2xhc3Muc2hvd109XCJwYW5lbC5pc09wZW5cIiAqbmdJZj1cIiFkZXN0cm95T25IaWRlIHx8IHBhbmVsLmlzT3BlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwYW5lbC5jb250ZW50VHBsPy50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JQYW5lbCkgcGFuZWxzOiBRdWVyeUxpc3Q8TmdiUGFuZWw+O1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciBjb21tYSBzZXBhcmF0ZWQgc3RyaW5ncyBvZiBwYW5lbCBpZHMgdGhhdCBzaG91bGQgYmUgb3BlbmVkICoqaW5pdGlhbGx5KiouXG4gICAqXG4gICAqIEZvciBzdWJzZXF1ZW50IGNoYW5nZXMgdXNlIG1ldGhvZHMgbGlrZSBgZXhwYW5kKClgLCBgY29sbGFwc2UoKWAsIGV0Yy4gYW5kXG4gICAqIHRoZSBgKHBhbmVsQ2hhbmdlKWAgZXZlbnQuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJZHM6IHN0cmluZyB8IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqICBJZiBgdHJ1ZWAsIG9ubHkgb25lIHBhbmVsIGNvdWxkIGJlIG9wZW5lZCBhdCBhIHRpbWUuXG4gICAqXG4gICAqICBPcGVuaW5nIGEgbmV3IHBhbmVsIHdpbGwgY2xvc2Ugb3RoZXJzLlxuICAgKi9cbiAgQElucHV0KCdjbG9zZU90aGVycycpIGNsb3NlT3RoZXJQYW5lbHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcGFuZWwgY29udGVudCB3aWxsIGJlIGRldGFjaGVkIGZyb20gRE9NIGFuZCBub3Qgc2ltcGx5IGhpZGRlbiB3aGVuIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICBASW5wdXQoKSBkZXN0cm95T25IaWRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVHlwZSBvZiBwYW5lbHMuXG4gICAqXG4gICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgKiBgJ3NlY29uZGFyeSdgLCBgJ2xpZ2h0J2AgYW5kIGAnZGFyaydgLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgcGFuZWwgdG9nZ2xlIGhhcHBlbnMuXG4gICAqXG4gICAqIFNlZSBbTmdiUGFuZWxDaGFuZ2VFdmVudF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICovXG4gIEBPdXRwdXQoKSBwYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiUGFuZWxDaGFuZ2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5nYkFjY29yZGlvbkNvbmZpZykge1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuY2xvc2VPdGhlclBhbmVscyA9IGNvbmZpZy5jbG9zZU90aGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQgaXMgZXhwYW5kZWQuXG4gICAqL1xuICBpc0V4cGFuZGVkKHBhbmVsSWQ6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihwYW5lbElkKSA+IC0xOyB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZHMgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQuXG4gICAqXG4gICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGFscmVhZHkgZXhwYW5kZWQgb3IgZGlzYWJsZWQuXG4gICAqL1xuICBleHBhbmQocGFuZWxJZDogc3RyaW5nKTogdm9pZCB7IHRoaXMuX2NoYW5nZU9wZW5TdGF0ZSh0aGlzLl9maW5kUGFuZWxCeUlkKHBhbmVsSWQpLCB0cnVlKTsgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRzIGFsbCBwYW5lbHMsIGlmIGBbY2xvc2VPdGhlcnNdYCBpcyBgZmFsc2VgLlxuICAgKlxuICAgKiBJZiBgW2Nsb3NlT3RoZXJzXWAgaXMgYHRydWVgLCBpdCB3aWxsIGV4cGFuZCB0aGUgZmlyc3QgcGFuZWwsIHVubGVzcyB0aGVyZSBpcyBhbHJlYWR5IGEgcGFuZWwgb3BlbmVkLlxuICAgKi9cbiAgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlT3RoZXJQYW5lbHMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUlkcy5sZW5ndGggPT09IDAgJiYgdGhpcy5wYW5lbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZU9wZW5TdGF0ZSh0aGlzLnBhbmVscy5maXJzdCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4gdGhpcy5fY2hhbmdlT3BlblN0YXRlKHBhbmVsLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBhIHBhbmVsIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKlxuICAgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IGNvbGxhcHNlZCBvciBkaXNhYmxlZC5cbiAgICovXG4gIGNvbGxhcHNlKHBhbmVsSWQ6IHN0cmluZykgeyB0aGlzLl9jaGFuZ2VPcGVuU3RhdGUodGhpcy5fZmluZFBhbmVsQnlJZChwYW5lbElkKSwgZmFsc2UpOyB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBhbGwgb3BlbmVkIHBhbmVscy5cbiAgICovXG4gIGNvbGxhcHNlQWxsKCkge1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHBhbmVsKSA9PiB7IHRoaXMuX2NoYW5nZU9wZW5TdGF0ZShwYW5lbCwgZmFsc2UpOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGEgcGFuZWwgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqXG4gICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgdG9nZ2xlKHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5fZmluZFBhbmVsQnlJZChwYW5lbElkKTtcbiAgICBpZiAocGFuZWwpIHtcbiAgICAgIHRoaXMuX2NoYW5nZU9wZW5TdGF0ZShwYW5lbCwgIXBhbmVsLmlzT3Blbik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIGFjdGl2ZSBpZCB1cGRhdGVzXG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuYWN0aXZlSWRzKSkge1xuICAgICAgdGhpcy5hY3RpdmVJZHMgPSB0aGlzLmFjdGl2ZUlkcy5zcGxpdCgvXFxzKixcXHMqLyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHBhbmVscyBvcGVuIHN0YXRlc1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuaXNPcGVuID0gIXBhbmVsLmRpc2FibGVkICYmIHRoaXMuYWN0aXZlSWRzLmluZGV4T2YocGFuZWwuaWQpID4gLTEpO1xuXG4gICAgLy8gY2xvc2VPdGhlcnMgdXBkYXRlc1xuICAgIGlmICh0aGlzLmFjdGl2ZUlkcy5sZW5ndGggPiAxICYmIHRoaXMuY2xvc2VPdGhlclBhbmVscykge1xuICAgICAgdGhpcy5fY2xvc2VPdGhlcnModGhpcy5hY3RpdmVJZHNbMF0pO1xuICAgICAgdGhpcy5fdXBkYXRlQWN0aXZlSWRzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlT3BlblN0YXRlKHBhbmVsOiBOZ2JQYW5lbCwgbmV4dFN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHBhbmVsICYmICFwYW5lbC5kaXNhYmxlZCAmJiBwYW5lbC5pc09wZW4gIT09IG5leHRTdGF0ZSkge1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5wYW5lbENoYW5nZS5lbWl0KFxuICAgICAgICAgIHtwYW5lbElkOiBwYW5lbC5pZCwgbmV4dFN0YXRlOiBuZXh0U3RhdGUsIHByZXZlbnREZWZhdWx0OiAoKSA9PiB7IGRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyB9fSk7XG5cbiAgICAgIGlmICghZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBwYW5lbC5pc09wZW4gPSBuZXh0U3RhdGU7XG5cbiAgICAgICAgaWYgKG5leHRTdGF0ZSAmJiB0aGlzLmNsb3NlT3RoZXJQYW5lbHMpIHtcbiAgICAgICAgICB0aGlzLl9jbG9zZU90aGVycyhwYW5lbC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQWN0aXZlSWRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VPdGhlcnMocGFuZWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICBpZiAocGFuZWwuaWQgIT09IHBhbmVsSWQpIHtcbiAgICAgICAgcGFuZWwuaXNPcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9maW5kUGFuZWxCeUlkKHBhbmVsSWQ6IHN0cmluZyk6IE5nYlBhbmVsIHwgbnVsbCB7IHJldHVybiB0aGlzLnBhbmVscy5maW5kKHAgPT4gcC5pZCA9PT0gcGFuZWxJZCk7IH1cblxuICBwcml2YXRlIF91cGRhdGVBY3RpdmVJZHMoKSB7XG4gICAgdGhpcy5hY3RpdmVJZHMgPSB0aGlzLnBhbmVscy5maWx0ZXIocGFuZWwgPT4gcGFuZWwuaXNPcGVuICYmICFwYW5lbC5kaXNhYmxlZCkubWFwKHBhbmVsID0+IHBhbmVsLmlkKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHB1dCBvbiBhIGJ1dHRvbiB0aGF0IHRvZ2dsZXMgcGFuZWwgb3BlbmluZyBhbmQgY2xvc2luZy5cbiAqXG4gKiBUbyBiZSB1c2VkIGluc2lkZSB0aGUgW2BOZ2JQYW5lbEhlYWRlcmBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsSGVhZGVyKVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbmdiUGFuZWxUb2dnbGVdJyxcbiAgaG9zdDoge1xuICAgICd0eXBlJzogJ2J1dHRvbicsXG4gICAgJ1tkaXNhYmxlZF0nOiAncGFuZWwuZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuY29sbGFwc2VkXSc6ICchcGFuZWwuaXNPcGVuJyxcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAncGFuZWwuaXNPcGVuJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAncGFuZWwuaWQnLFxuICAgICcoY2xpY2spJzogJ2FjY29yZGlvbi50b2dnbGUocGFuZWwuaWQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE5nYlBhbmVsVG9nZ2xlIHtcbiAgQElucHV0KClcbiAgc2V0IG5nYlBhbmVsVG9nZ2xlKHBhbmVsOiBOZ2JQYW5lbCkge1xuICAgIGlmIChwYW5lbCkge1xuICAgICAgdGhpcy5wYW5lbCA9IHBhbmVsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2NvcmRpb246IE5nYkFjY29yZGlvbiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE5nYlBhbmVsKSB7fVxufVxuIl19