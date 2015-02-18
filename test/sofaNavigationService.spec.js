'use strict';

describe('sofa.navigationService', function () {

    var $navigationService, $location, stateResolverService;

    beforeEach(module('sofa.navigationService'));

    beforeEach(inject(function($injector) {
        $navigationService = $injector.get('navigationService');
        $location = $injector.get('$location');
        stateResolverService = $injector.get('stateResolverService');
        spyOn($location, 'path').and.callThrough();
    }));

    it('should run tests', function () {
        expect(true).toBe(true);
    });

    it('should be defined', function () {
        expect($navigationService).toBeDefined();
    });

    it('should navigate to the given url', function() {
        $navigationService.navigateToUrl('test');
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/test');
    });

    it('should navigate to a page url', function() {
        $navigationService.navigateToContentPage('test');
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/pages/test');
    });

    it('should navigate to the root category', function() {
        $navigationService.navigateToRootCategory();
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/');
    });

    it('should navigate to the cart', function() {
        $navigationService.navigateToCart();
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/cart');
    });

    it('should navigate to the checkout page', function() {
        $navigationService.navigateToCheckout();
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/checkout');
    });

    it('should navigate to the summary page', function() {
        $navigationService.navigateToSummary('test');
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/summary/test');
    });

    it('should navigate to the shipping costs page', function() {
        $navigationService.navigateToShippingCostsPage();
        expect($location.path).toHaveBeenCalled();
        expect($location.path()).toEqual('/pages/');
    });
});
