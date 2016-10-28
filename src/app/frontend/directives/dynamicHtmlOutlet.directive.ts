import {
    ComponentFactory, Component, ComponentFactoryResolver, Directive, Input, ViewContainerRef,
    ReflectiveInjector, OnChanges
} from "@angular/core";
declare var jQuery:any;
let $j=jQuery.noConflict();
function createComponentFactory(resolver: ComponentFactoryResolver, metadata:{}): ComponentFactory<any> {
    @Component(metadata)
    class DynamicComponent{}
    return resolver.resolveComponentFactory(DynamicComponent);
}
@Directive({
    selector: 'dynamic-html-outlet',
})
export class DynamicHtmlOutlet implements OnChanges{
    @Input('htmlTemplate') htmlTemplate: string;
    constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {}
    ngOnChanges() {
        if (!this.htmlTemplate) return;
        $j('dynamic-html') && $j('dynamic-html').remove();
        const metadata = {
            selector: 'dynamic-html',
            templateUrl: this.htmlTemplate,
        };
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.vcRef.createComponent(createComponentFactory(this.resolver, metadata), 0, injector, []);

    }
}