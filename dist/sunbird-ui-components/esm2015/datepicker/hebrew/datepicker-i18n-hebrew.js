/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbDatepickerI18n } from '../datepicker-i18n';
import { hebrewNumerals, isHebrewLeapYear } from './hebrew';
import { Injectable } from '@angular/core';
/** @type {?} */
const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
/** @type {?} */
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/** @type {?} */
const MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * \@since 3.2.0
 */
export class NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    getMonthShortName(month, year) { return this.getMonthFullName(month, year); }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    getMonthFullName(month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
    }
    /**
     * @param {?} weekday
     * @return {?}
     */
    getWeekdayShortName(weekday) { return WEEKDAYS[weekday - 1]; }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayAriaLabel(date) {
        return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumerals(date) { return hebrewNumerals(date.day); }
    /**
     * @param {?} weekNumber
     * @return {?}
     */
    getWeekNumerals(weekNumber) { return hebrewNumerals(weekNumber); }
    /**
     * @param {?} year
     * @return {?}
     */
    getYearNumerals(year) { return hebrewNumerals(year); }
}
NgbDatepickerI18nHebrew.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLWhlYnJldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdW5iaXJkLWVkL3N1bmJpcmQtdWktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvaGVicmV3L2RhdGVwaWNrZXItaTE4bi1oZWJyZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7TUFHbkMsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDOztNQUNyRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7TUFDcEcsV0FBVyxHQUNiLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDOzs7O0FBTTVHLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7OztJQUM1RCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsSUFBYSxJQUFZLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUV0RyxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsSUFBYTtRQUMzQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsT0FBZSxJQUFZLE9BQU8sUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBRTlFLGVBQWUsQ0FBQyxJQUFtQjtRQUNqQyxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BILENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQW1CLElBQVksT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFaEYsZUFBZSxDQUFDLFVBQWtCLElBQVksT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUVsRixlQUFlLENBQUMsSUFBWSxJQUFZLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1lBbEJ2RSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ2JEYXRlcGlja2VySTE4bn0gZnJvbSAnLi4vZGF0ZXBpY2tlci1pMThuJztcbmltcG9ydCB7TmdiRGF0ZVN0cnVjdH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuaW1wb3J0IHtoZWJyZXdOdW1lcmFscywgaXNIZWJyZXdMZWFwWWVhcn0gZnJvbSAnLi9oZWJyZXcnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5jb25zdCBXRUVLREFZUyA9IFsn16nXoNeZJywgJ9ep15zXmdep15knLCAn16jXkdeZ16LXmScsICfXl9ee15nXqdeZJywgJ9ep15nXqdeZJywgJ9ep15HXqicsICfXqNeQ16nXldefJ107XG5jb25zdCBNT05USFMgPSBbJ9eq16nXqNeZJywgJ9eX16nXldefJywgJ9eb16HXnNeVJywgJ9eY15HXqicsICfXqdeR15gnLCAn15DXk9eoJywgJ9eg15nXodefJywgJ9eQ15nXmdeoJywgJ9eh15nXldefJywgJ9eq157XldeWJywgJ9eQ15EnLCAn15DXnNeV15wnXTtcbmNvbnN0IE1PTlRIU19MRUFQID1cbiAgICBbJ9eq16nXqNeZJywgJ9eX16nXldefJywgJ9eb16HXnNeVJywgJ9eY15HXqicsICfXqdeR15gnLCAn15DXk9eoINeQ17MnLCAn15DXk9eoINeR17MnLCAn16DXmdeh158nLCAn15DXmdeZ16gnLCAn16HXmdeV158nLCAn16rXnteV15YnLCAn15DXkScsICfXkNec15XXnCddO1xuXG4vKipcbiAqIEBzaW5jZSAzLjIuMFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlckkxOG5IZWJyZXcgZXh0ZW5kcyBOZ2JEYXRlcGlja2VySTE4biB7XG4gIGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5nZXRNb250aEZ1bGxOYW1lKG1vbnRoLCB5ZWFyKTsgfVxuXG4gIGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzSGVicmV3TGVhcFllYXIoeWVhcikgPyBNT05USFNfTEVBUFttb250aCAtIDFdIDogTU9OVEhTW21vbnRoIC0gMV07XG4gIH1cblxuICBnZXRXZWVrZGF5U2hvcnROYW1lKHdlZWtkYXk6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBXRUVLREFZU1t3ZWVrZGF5IC0gMV07IH1cblxuICBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2hlYnJld051bWVyYWxzKGRhdGUuZGF5KX0gJHt0aGlzLmdldE1vbnRoRnVsbE5hbWUoZGF0ZS5tb250aCwgZGF0ZS55ZWFyKX0gJHtoZWJyZXdOdW1lcmFscyhkYXRlLnllYXIpfWA7XG4gIH1cblxuICBnZXREYXlOdW1lcmFscyhkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHsgcmV0dXJuIGhlYnJld051bWVyYWxzKGRhdGUuZGF5KTsgfVxuXG4gIGdldFdlZWtOdW1lcmFscyh3ZWVrTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gaGVicmV3TnVtZXJhbHMod2Vla051bWJlcik7IH1cblxuICBnZXRZZWFyTnVtZXJhbHMoeWVhcjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIGhlYnJld051bWVyYWxzKHllYXIpOyB9XG59XG4iXX0=