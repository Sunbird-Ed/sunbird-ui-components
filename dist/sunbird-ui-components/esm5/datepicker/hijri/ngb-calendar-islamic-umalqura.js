/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgbCalendarIslamicCivil } from './ngb-calendar-islamic-civil';
import { NgbDate } from '../ngb-date';
import { Injectable } from '@angular/core';
/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * @type {?}
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
/** @type {?} */
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
/** @type {?} */
var HIJRI_BEGIN = 1300;
/** @type {?} */
var HIJRI_END = 1600;
/** @type {?} */
var ONE_DAY = 1000 * 60 * 60 * 24;
/** @type {?} */
var MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function getDaysDiff(date1, date2) {
    // Ignores the time part in date1 and date2:
    /** @type {?} */
    var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    /** @type {?} */
    var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    /** @type {?} */
    var diff = Math.abs(time1 - time2);
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    tslib_1.__extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var hDay = 1;
        /** @type {?} */
        var hMonth = 0;
        /** @type {?} */
        var hYear = 1300;
        /** @type {?} */
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            /** @type {?} */
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    /** @type {?} */
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
        }
        else {
            return _super.prototype.fromGregorian.call(this, gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    function (hDate) {
        /** @type {?} */
        var hYear = hDate.year;
        /** @type {?} */
        var hMonth = hDate.month - 1;
        /** @type {?} */
        var hDay = hDate.day;
        /** @type {?} */
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        /** @type {?} */
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = _super.prototype.toGregorian.call(this, hDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */
    function (hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            /** @type {?} */
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
    };
    NgbCalendarIslamicUmalqura.decorators = [
        { type: Injectable }
    ];
    return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil));
export { NgbCalendarIslamicUmalqura };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2hpanJpL25nYi1jYWxlbmRhci1pc2xhbWljLXVtYWxxdXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQVNuQyxvQkFBb0IsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7SUFDN0MsbUJBQW1CLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7O0lBQzVDLFdBQVcsR0FBRyxJQUFJOztJQUNsQixTQUFTLEdBQUcsSUFBSTs7SUFDaEIsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7O0lBRTdCLFlBQVksR0FBRztJQUNuQixZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO0lBQzlFLFlBQVk7SUFDWixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztJQUM5RSxZQUFZO0lBQ1osY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDOUUsWUFBWTtJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUs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QyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZEO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsS0FBSyxHQUFHLGlCQUFNLFdBQVcsWUFBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNEOzs7O01BSUU7Ozs7Ozs7OztJQUNGLG9EQUFlOzs7Ozs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxLQUFhO1FBQzNDLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFOztnQkFDeEMsR0FBRyxHQUFHLEtBQUssR0FBRyxXQUFXO1lBQy9CLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8saUJBQU0sZUFBZSxZQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkF0RUYsVUFBVTs7SUF1RVgsaUNBQUM7Q0FBQSxBQXZFRCxDQUNnRCx1QkFBdUIsR0FzRXRFO1NBdEVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdiQ2FsZW5kYXJJc2xhbWljQ2l2aWx9IGZyb20gJy4vbmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwnO1xuaW1wb3J0IHtOZ2JEYXRlfSBmcm9tICcuLi9uZ2ItZGF0ZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFVtYWxxdXJhIGNhbGVuZGFyIGlzIG9uZSB0eXBlIG9mIEhpanJpIGNhbGVuZGFycyB1c2VkIGluIGlzbGFtaWMgY291bnRyaWVzLlxuICogVGhpcyBDYWxlbmRhciBpcyB1c2VkIGJ5IFNhdWRpIEFyYWJpYSBmb3IgYWRtaW5pc3RyYXRpdmUgcHVycG9zZS5cbiAqIFVubGlrZSB0YWJ1bGFyIGNhbGVuZGFycywgdGhlIGFsZ29yaXRobSBpbnZvbHZlcyBhc3Ryb25vbWljYWwgY2FsY3VsYXRpb24sIGJ1dCBpdCdzIHN0aWxsIGRldGVybWluaXN0aWMuXG4gKiBodHRwOi8vY2xkci51bmljb2RlLm9yZy9kZXZlbG9wbWVudC9kZXZlbG9wbWVudC1wcm9jZXNzL2Rlc2lnbi1wcm9wb3NhbHMvaXNsYW1pYy1jYWxlbmRhci10eXBlc1xuICovXG5cbmNvbnN0IEdSRUdPUklBTl9GSVJTVF9EQVRFID0gbmV3IERhdGUoMTg4MiwgMTAsIDEyKTtcbmNvbnN0IEdSRUdPUklBTl9MQVNUX0RBVEUgPSBuZXcgRGF0ZSgyMTc0LCAxMCwgMjUpO1xuY29uc3QgSElKUklfQkVHSU4gPSAxMzAwO1xuY29uc3QgSElKUklfRU5EID0gMTYwMDtcbmNvbnN0IE9ORV9EQVkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuXG5jb25zdCBNT05USF9MRU5HVEggPSBbXG4gIC8vIDEzMDAtMTMwNFxuICAnMTAxMDEwMTAxMDEwJywgJzExMDEwMTAxMDEwMCcsICcxMTEwMTEwMDEwMDEnLCAnMDExMDExMDEwMTAwJywgJzAxMTAxMTEwMTAxMCcsXG4gIC8vIDEzMDUtMTMwOVxuICAnMDAxMTAxMTAxMTAwJywgJzEwMTAxMDEwMTEwMScsICcwMTAxMDEwMTAxMDEnLCAnMDExMDEwMTAxMDAxJywgJzAxMTExMDAxMDAxMCcsXG4gIC8vIDEzMTAtMTMxNFxuICAnMTAxMTEwMTAxMDAxJywgJzAxMDExMTAxMDEwMCcsICcxMDEwMTEwMTEwMTAnLCAnMDEwMTAxMDExMTAwJywgJzExMDEwMDEwMTEwMScsXG4gIC8vIDEzMTUtMTMxOVxuICAnMDExMDEwMDEwMTAxJywgJzAxMTEwMTAwMTAxMCcsICcxMDExMDEwMTAxMDAnLCAnMTAxMTAxMTAxMDEwJywgJzAxMDExMDEwMTEwMScsXG4gIC8vIDEzMjAtMTMyNFxuICAnMDEwMDEwMTAxMTEwJywgJzEwMTAwMTAwMTExMScsICcwMTAxMDAwMTAxMTEnLCAnMDExMDEwMDAxMDExJywgJzAxMTAxMDEwMDEwMScsXG4gIC8vIDEzMjUtMTMyOVxuICAnMTAxMDExMDEwMTAxJywgJzAwMTAxMTAxMDExMCcsICcxMDAxMDEwMTEwMTEnLCAnMDEwMDEwMDExMTAxJywgJzEwMTAwMTAwMTEwMScsXG4gIC8vIDEzMzAtMTMzNFxuICAnMTEwMTAwMTAwMTEwJywgJzExMDExMDAxMDEwMScsICcwMTAxMTAxMDExMDAnLCAnMTAwMTEwMTEwMTEwJywgJzAwMTAxMDExMTAxMCcsXG4gIC8vIDEzMzUtMTMzOVxuICAnMTAxMDAxMDExMDExJywgJzAxMDEwMDEwMTAxMScsICcxMDEwMTAwMTAxMDEnLCAnMDExMDExMDAxMDEwJywgJzEwMTAxMTEwMTAwMScsXG4gIC8vIDEzNDAtMTM0NFxuICAnMDAxMDExMTEwMTAwJywgJzEwMDEwMTExMDExMCcsICcwMDEwMTAxMTAxMTAnLCAnMTAwMTAxMDEwMTEwJywgJzEwMTAxMTAwMTAxMCcsXG4gIC8vIDEzNDUtMTM0OVxuICAnMTAxMTEwMTAwMTAwJywgJzEwMTExMTAxMDAxMCcsICcwMTAxMTEwMTEwMDEnLCAnMDAxMDExMDExMTAwJywgJzEwMDEwMTEwMTEwMScsXG4gIC8vIDEzNTAtMTM1NFxuICAnMDEwMTAxMDAxMTAxJywgJzEwMTAxMDEwMDEwMScsICcxMDExMDEwMTAwMTAnLCAnMTAxMTEwMTAwMTAxJywgJzAxMDExMDExMDEwMCcsXG4gIC8vIDEzNTUtMTM1OVxuICAnMTAwMTEwMTEwMTEwJywgJzAxMDEwMTAxMDExMScsICcwMDEwMTAwMTAxMTEnLCAnMDEwMTAxMDAxMDExJywgJzAxMTAxMDEwMDAxMScsXG4gIC8vIDEzNjAtMTM2NFxuICAnMDExMTAxMDEwMDEwJywgJzEwMTEwMTEwMDEwMScsICcwMTAxMDExMDEwMTAnLCAnMTAxMDEwMTAxMDExJywgJzAxMDEwMDEwMTAxMScsXG4gIC8vIDEzNjUtMTM2OVxuICAnMTEwMDEwMDEwMTAxJywgJzExMDEwMTAwMTAxMCcsICcxMTAxMTAxMDAxMDEnLCAnMDEwMTExMDAxMDEwJywgJzEwMTAxMTAxMDExMCcsXG4gIC8vIDEzNzAtMTM3NFxuICAnMTAwMTAxMDEwMTExJywgJzAxMDAxMDEwMTAxMScsICcxMDAxMDEwMDEwMTEnLCAnMTAxMDEwMTAwMTAxJywgJzEwMTEwMTAxMDAxMCcsXG4gIC8vIDEzNzUtMTM3OVxuICAnMTAxMTAxMTAxMDEwJywgJzAxMDEwMTExMDEwMScsICcwMDEwMDExMTAxMTAnLCAnMTAwMDEwMTEwMTExJywgJzAxMDAwMTAxMTAxMScsXG4gIC8vIDEzODAtMTM4NFxuICAnMDEwMTAxMDEwMTAxJywgJzAxMDExMDEwMTAwMScsICcwMTAxMTAxMTAxMDAnLCAnMTAwMTExMDExMDEwJywgJzAxMDAxMTAxMTEwMScsXG4gIC8vIDEzODUtMTM4OVxuICAnMDAxMDAxMTAxMTEwJywgJzEwMDEwMDExMDExMCcsICcxMDEwMTAxMDEwMTAnLCAnMTEwMTAxMDEwMTAwJywgJzExMDExMDExMDAxMCcsXG4gIC8vIDEzOTAtMTM5NFxuICAnMDEwMTExMDEwMTAxJywgJzAwMTAxMTAxMTAxMCcsICcxMDAxMDEwMTEwMTEnLCAnMDEwMDEwMTAxMDExJywgJzEwMTAwMTAxMDEwMScsXG4gIC8vIDEzOTUtMTM5OVxuICAnMTAxMTAxMDAxMDAxJywgJzEwMTEwMTEwMDEwMCcsICcxMDExMDExMTAwMDEnLCAnMDEwMTEwMTEwMTAwJywgJzEwMTAxMDExMDEwMScsXG4gIC8vIDE0MDAtMTQwNFxuICAnMTAxMDAxMDEwMTAxJywgJzExMDEwMDEwMDEwMScsICcxMTEwMTAwMTAwMTAnLCAnMTExMDExMDAxMDAxJywgJzAxMTAxMTAxMDEwMCcsXG4gIC8vIDE0MDUtMTQwOVxuICAnMTAxMDExMTAxMDAxJywgJzEwMDEwMTEwMTAxMScsICcwMTAwMTAxMDEwMTEnLCAnMTAxMDEwMDEwMDExJywgJzExMDEwMTAwMTAwMScsXG4gIC8vIDE0MTAtMTQxNFxuICAnMTEwMTEwMTAwMTAwJywgJzExMDExMDExMDAxMCcsICcxMDEwMTAxMTEwMDEnLCAnMDEwMDEwMTExMDEwJywgJzEwMTAwMTAxMTAxMScsXG4gIC8vIDE0MTUtMTQxOVxuICAnMDEwMTAwMTAxMDExJywgJzEwMTAxMDAxMDEwMScsICcxMDExMDAxMDEwMTAnLCAnMTAxMTAxMDEwMTAxJywgJzAxMDEwMTAxMTEwMCcsXG4gIC8vIDE0MjAtMTQyNFxuICAnMDEwMDEwMTExMTAxJywgJzAwMTAwMDExMTEwMScsICcxMDAxMDAwMTExMDEnLCAnMTAxMDEwMDEwMTAxJywgJzEwMTEwMTAwMTAxMCcsXG4gIC8vIDE0MjUtMTQyOVxuICAnMTAxMTAxMDExMDEwJywgJzAxMDEwMTEwMTEwMScsICcwMDEwMTAxMTAxMTAnLCAnMTAwMTAwMTExMDExJywgJzAxMDAxMDAxMTAxMScsXG4gIC8vIDE0MzAtMTQzNFxuICAnMDExMDAxMDEwMTAxJywgJzAxMTAxMDEwMTAwMScsICcwMTExMDEwMTAxMDAnLCAnMTAxMTAxMTAxMDEwJywgJzAxMDEwMTEwMTEwMCcsXG4gIC8vIDE0MzUtMTQzOVxuICAnMTAxMDEwMTAxMTAxJywgJzAxMDEwMTAxMDEwMScsICcxMDExMDAxMDEwMDEnLCAnMTAxMTEwMDEwMDEwJywgJzEwMTExMDEwMTAwMScsXG4gIC8vIDE0NDAtMTQ0NFxuICAnMDEwMTExMDEwMTAwJywgJzEwMTAxMTAxMTAxMCcsICcwMTAxMDEwMTEwMTAnLCAnMTAxMDEwMTAxMDExJywgJzAxMDExMDAxMDEwMScsXG4gIC8vIDE0NDUtMTQ0OVxuICAnMDExMTAxMDAxMDAxJywgJzAxMTEwMTEwMDEwMCcsICcxMDExMTAxMDEwMTAnLCAnMDEwMTEwMTEwMTAxJywgJzAwMTAxMDExMDExMCcsXG4gIC8vIDE0NTAtMTQ1NFxuICAnMTAxMDAxMDEwMTEwJywgJzExMTAwMTAwMTEwMScsICcxMDExMDAxMDAxMDEnLCAnMTAxMTAxMDEwMDEwJywgJzEwMTEwMTEwMTAxMCcsXG4gIC8vIDE0NTUtMTQ1OVxuICAnMDEwMTEwMTAxMTAxJywgJzAwMTAxMDEwMTExMCcsICcxMDAxMDAxMDExMTEnLCAnMDEwMDEwMDEwMTExJywgJzAxMTAwMTAwMTAxMScsXG4gIC8vIDE0NjAtMTQ2NFxuICAnMDExMDEwMTAwMTAxJywgJzAxMTAxMDEwMTEwMCcsICcxMDEwMTEwMTAxMTAnLCAnMDEwMTAxMDExMTAxJywgJzAxMDAxMDAxMTEwMScsXG4gIC8vIDE0NjUtMTQ2OVxuICAnMTAxMDAxMDAxMTAxJywgJzExMDEwMDAxMDExMCcsICcxMTAxMTAwMTAxMDEnLCAnMDEwMTEwMTAxMDEwJywgJzAxMDExMDExMDEwMScsXG4gIC8vIDE0NzAtMTQ3NFxuICAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTAxMScsICcwMTAwMTAxMDExMDEnLCAnMDEwMTEwMDEwMTAxJywgJzAxMTAxMTAwMTAxMCcsXG4gIC8vIDE0NzUtMTQ3OVxuICAnMDExMDExMTAwMTAwJywgJzEwMTAxMTEwMTAxMCcsICcwMTAwMTExMTAxMDEnLCAnMDAxMDEwMTEwMTEwJywgJzEwMDEwMTAxMDExMCcsXG4gIC8vIDE0ODAtMTQ4NFxuICAnMTAxMDEwMTAxMDEwJywgJzEwMTEwMTAxMDEwMCcsICcxMDExMTEwMTAwMTAnLCAnMDEwMTExMDExMDAxJywgJzAwMTAxMTEwMTAxMCcsXG4gIC8vIDE0ODUtMTQ4OVxuICAnMTAwMTAxMTAxMTAxJywgJzAxMDAxMDEwMTEwMScsICcxMDEwMTAwMTAxMDEnLCAnMTAxMTAxMDAxMDEwJywgJzEwMTExMDEwMDEwMScsXG4gIC8vIDE0OTAtMTQ5NFxuICAnMDEwMTEwMTEwMDEwJywgJzEwMDExMDExMDEwMScsICcwMTAwMTEwMTAxMTAnLCAnMTAxMDEwMDEwMTExJywgJzAxMDEwMTAwMDExMScsXG4gIC8vIDE0OTUtMTQ5OVxuICAnMDExMDEwMDEwMDExJywgJzAxMTEwMTAwMTAwMScsICcxMDExMDEwMTAxMDEnLCAnMDEwMTAxMTAxMDEwJywgJzEwMTAwMTEwMTAxMScsXG4gIC8vIDE1MDAtMTUwNFxuICAnMDEwMTAwMTAxMDExJywgJzEwMTAxMDAwMTAxMScsICcxMTAxMDEwMDAxMTAnLCAnMTEwMTEwMTAwMDExJywgJzAxMDExMTAwMTAxMCcsXG4gIC8vIDE1MDUtMTUwOVxuICAnMTAxMDExMDEwMTEwJywgJzAxMDAxMTAxMTAxMScsICcwMDEwMDExMDEwMTEnLCAnMTAwMTAxMDAxMDExJywgJzEwMTAxMDEwMDEwMScsXG4gIC8vIDE1MTAtMTUxNFxuICAnMTAxMTAxMDEwMDEwJywgJzEwMTEwMTEwMTAwMScsICcwMTAxMDExMTAxMDEnLCAnMDAwMTAxMTEwMTEwJywgJzEwMDAxMDExMDExMScsXG4gIC8vIDE1MTUtMTUxOVxuICAnMDAxMDAxMDExMDExJywgJzAxMDEwMDEwMTAxMScsICcwMTAxMDExMDAxMDEnLCAnMDEwMTEwMTEwMTAwJywgJzEwMDExMTAxMTAxMCcsXG4gIC8vIDE1MjAtMTUyNFxuICAnMDEwMDExMTAxMTAxJywgJzAwMDEwMTEwMTEwMScsICcxMDAwMTAxMTAxMTAnLCAnMTAxMDEwMTAwMTEwJywgJzExMDEwMTAxMDAxMCcsXG4gIC8vIDE1MjUtMTUyOVxuICAnMTEwMTEwMTAxMDAxJywgJzAxMDExMTAxMDEwMCcsICcxMDEwMTEwMTEwMTAnLCAnMTAwMTAxMDExMDExJywgJzAxMDAxMDEwMTAxMScsXG4gIC8vIDE1MzAtMTUzNFxuICAnMDExMDAxMDEwMDExJywgJzAxMTEwMDEwMTAwMScsICcwMTExMDExMDAwMTAnLCAnMTAxMTEwMTAxMDAxJywgJzAxMDExMDExMDAxMCcsXG4gIC8vIDE1MzUtMTUzOVxuICAnMTAxMDEwMTEwMTAxJywgJzAxMDEwMTAxMDEwMScsICcxMDExMDAxMDAxMDEnLCAnMTEwMTEwMDEwMDEwJywgJzExMTAxMTAwMTAwMScsXG4gIC8vIDE1NDAtMTU0NFxuICAnMDExMDExMDEwMDEwJywgJzEwMTAxMTEwMTAwMScsICcwMTAxMDExMDEwMTEnLCAnMDEwMDEwMTAxMDExJywgJzEwMTAwMTAxMDEwMScsXG4gIC8vIDE1NDUtMTU0OVxuICAnMTEwMTAwMTAxMDAxJywgJzExMDEwMTAxMDEwMCcsICcxMTAxMTAxMDEwMTAnLCAnMTAwMTEwMTEwMTAxJywgJzAxMDAxMDExMTAxMCcsXG4gIC8vIDE1NTAtMTU1NFxuICAnMTAxMDAwMTExMDExJywgJzAxMDAxMDAxMTAxMScsICcxMDEwMDEwMDExMDEnLCAnMTAxMDEwMTAxMDEwJywgJzEwMTAxMTAxMDEwMScsXG4gIC8vIDE1NTUtMTU1OVxuICAnMDAxMDExMDExMDEwJywgJzEwMDEwMTAxMTEwMScsICcwMTAwMDEwMTExMTAnLCAnMTAxMDAwMTAxMTEwJywgJzExMDAxMDAxMTAxMCcsXG4gIC8vIDE1NjAtMTU2NFxuICAnMTEwMTAxMDEwMTAxJywgJzAxMTAxMDExMDAxMCcsICcwMTEwMTAxMTEwMDEnLCAnMDEwMDEwMTExMDEwJywgJzEwMTAwMTAxMTEwMScsXG4gIC8vIDE1NjUtMTU2OVxuICAnMDEwMTAwMTAxMTAxJywgJzEwMTAxMDAxMDEwMScsICcxMDExMDEwMTAwMTAnLCAnMTAxMTEwMTAxMDAwJywgJzEwMTExMDExMDEwMCcsXG4gIC8vIDE1NzAtMTU3NFxuICAnMDEwMTEwMTExMDAxJywgJzAwMTAxMTAxMTAxMCcsICcxMDAxMDEwMTEwMTAnLCAnMTAxMTAxMDAxMDEwJywgJzExMDExMDEwMDEwMCcsXG4gIC8vIDE1NzUtMTU3OVxuICAnMTExMDExMDEwMDAxJywgJzAxMTAxMTEwMTAwMCcsICcxMDExMDExMDEwMTAnLCAnMDEwMTAxMTAxMTAxJywgJzAxMDEwMDExMDEwMScsXG4gIC8vIDE1ODAtMTU4NFxuICAnMDExMDEwMDEwMTAxJywgJzExMDEwMTAwMTAxMCcsICcxMTAxMTAxMDEwMDAnLCAnMTEwMTExMDEwMTAwJywgJzAxMTAxMTAxMTAxMCcsXG4gIC8vIDE1ODUtMTU4OVxuICAnMDEwMTAxMDExMDExJywgJzAwMTAxMDAxMTEwMScsICcwMTEwMDAxMDEwMTEnLCAnMTAxMTAwMDEwMTAxJywgJzEwMTEwMTAwMTAxMCcsXG4gIC8vIDE1OTAtMTU5NFxuICAnMTAxMTEwMDEwMTAxJywgJzAxMDExMDEwMTAxMCcsICcxMDEwMTAxMDExMTAnLCAnMTAwMTAwMTAxMTEwJywgJzExMDAxMDAwMTExMScsXG4gIC8vIDE1OTUtMTU5OVxuICAnMDEwMTAwMTAwMTExJywgJzAxMTAxMDAxMDEwMScsICcwMTEwMTAxMDEwMTAnLCAnMTAxMDExMDEwMTEwJywgJzAxMDEwMTAxMTEwMScsXG4gIC8vIDE2MDBcbiAgJzAwMTAxMDAxMTEwMSdcbl07XG5cbmZ1bmN0aW9uIGdldERheXNEaWZmKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IG51bWJlciB7XG4gIC8vIElnbm9yZXMgdGhlIHRpbWUgcGFydCBpbiBkYXRlMSBhbmQgZGF0ZTI6XG4gIGNvbnN0IHRpbWUxID0gRGF0ZS5VVEMoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKTtcbiAgY29uc3QgdGltZTIgPSBEYXRlLlVUQyhkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpLCBkYXRlMi5nZXREYXRlKCkpO1xuICBjb25zdCBkaWZmID0gTWF0aC5hYnModGltZTEgLSB0aW1lMik7XG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBPTkVfREFZKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkNhbGVuZGFySXNsYW1pY1VtYWxxdXJhIGV4dGVuZHMgTmdiQ2FsZW5kYXJJc2xhbWljQ2l2aWwge1xuICAvKipcbiAgKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IGlzbGFtaWMoVW1hbHF1cmEpIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBHcmVnb3JpYW4gZGF0ZS5cbiAgKiBgZ2RhdGVgIGlzIHMgSlMgRGF0ZSB0byBiZSBjb252ZXJ0ZWQgdG8gSGlqcmkuXG4gICovXG4gIGZyb21HcmVnb3JpYW4oZ0RhdGU6IERhdGUpOiBOZ2JEYXRlIHtcbiAgICBsZXQgaERheSA9IDEsIGhNb250aCA9IDAsIGhZZWFyID0gMTMwMDtcbiAgICBsZXQgZGF5c0RpZmYgPSBnZXREYXlzRGlmZihnRGF0ZSwgR1JFR09SSUFOX0ZJUlNUX0RBVEUpO1xuICAgIGlmIChnRGF0ZS5nZXRUaW1lKCkgLSBHUkVHT1JJQU5fRklSU1RfREFURS5nZXRUaW1lKCkgPj0gMCAmJiBnRGF0ZS5nZXRUaW1lKCkgLSBHUkVHT1JJQU5fTEFTVF9EQVRFLmdldFRpbWUoKSA8PSAwKSB7XG4gICAgICBsZXQgeWVhciA9IDEzMDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1PTlRIX0xFTkdUSC5sZW5ndGg7IGkrKywgeWVhcisrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTI7IGorKykge1xuICAgICAgICAgIGxldCBudW1PZkRheXMgPSArTU9OVEhfTEVOR1RIW2ldW2pdICsgMjk7XG4gICAgICAgICAgaWYgKGRheXNEaWZmIDw9IG51bU9mRGF5cykge1xuICAgICAgICAgICAgaERheSA9IGRheXNEaWZmICsgMTtcbiAgICAgICAgICAgIGlmIChoRGF5ID4gbnVtT2ZEYXlzKSB7XG4gICAgICAgICAgICAgIGhEYXkgPSAxO1xuICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaiA+IDExKSB7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICB5ZWFyKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoTW9udGggPSBqO1xuICAgICAgICAgICAgaFllYXIgPSB5ZWFyO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZ2JEYXRlKGhZZWFyLCBoTW9udGggKyAxLCBoRGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF5c0RpZmYgPSBkYXlzRGlmZiAtIG51bU9mRGF5cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuZnJvbUdyZWdvcmlhbihnRGF0ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIENvbnZlcnRzIHRoZSBjdXJyZW50IEhpanJpIGRhdGUgdG8gR3JlZ29yaWFuLlxuICAqL1xuICB0b0dyZWdvcmlhbihoRGF0ZTogTmdiRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGhZZWFyID0gaERhdGUueWVhcjtcbiAgICBjb25zdCBoTW9udGggPSBoRGF0ZS5tb250aCAtIDE7XG4gICAgY29uc3QgaERheSA9IGhEYXRlLmRheTtcbiAgICBsZXQgZ0RhdGUgPSBuZXcgRGF0ZShHUkVHT1JJQU5fRklSU1RfREFURSk7XG4gICAgbGV0IGRheURpZmYgPSBoRGF5IC0gMTtcbiAgICBpZiAoaFllYXIgPj0gSElKUklfQkVHSU4gJiYgaFllYXIgPD0gSElKUklfRU5EKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhZZWFyIC0gSElKUklfQkVHSU47IHkrKykge1xuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IDEyOyBtKyspIHtcbiAgICAgICAgICBkYXlEaWZmICs9ICtNT05USF9MRU5HVEhbeV1bbV0gKyAyOTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBoTW9udGg7IG0rKykge1xuICAgICAgICBkYXlEaWZmICs9ICtNT05USF9MRU5HVEhbaFllYXIgLSBISUpSSV9CRUdJTl1bbV0gKyAyOTtcbiAgICAgIH1cbiAgICAgIGdEYXRlLnNldERhdGUoR1JFR09SSUFOX0ZJUlNUX0RBVEUuZ2V0RGF0ZSgpICsgZGF5RGlmZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdEYXRlID0gc3VwZXIudG9HcmVnb3JpYW4oaERhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ0RhdGU7XG4gIH1cbiAgLyoqXG4gICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBzcGVjaWZpYyBIaWpyaSBoTW9udGguXG4gICogYGhNb250aGAgaXMgMSBmb3IgTXVoYXJyYW0sIDIgZm9yIFNhZmFyLCBldGMuXG4gICogYGhZZWFyYCBpcyBhbnkgSGlqcmkgaFllYXIuXG4gICovXG4gIGdldERheXNQZXJNb250aChoTW9udGg6IG51bWJlciwgaFllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGhZZWFyID49IEhJSlJJX0JFR0lOICYmIGhZZWFyIDw9IEhJSlJJX0VORCkge1xuICAgICAgY29uc3QgcG9zID0gaFllYXIgLSBISUpSSV9CRUdJTjtcbiAgICAgIHJldHVybiArTU9OVEhfTEVOR1RIW3Bvc11baE1vbnRoIC0gMV0gKyAyOTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmdldERheXNQZXJNb250aChoTW9udGgsIGhZZWFyKTtcbiAgfVxufVxuIl19