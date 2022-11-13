import { Ziggy } from "@/ziggy";
import { Route } from "ziggy-js"

export {}

declare global {
    function route(name?: keyof typeof Ziggy.routes, params?: RouteParamsWithQueryOverload | RouteParam | undefined, absolute?: boolean | undefined, config?: Config | undefined) : any

    interface Window {
        Ziggy: {
            url: string;
            port: null;
            defaults: {};
            routes: Record<keyof Ziggy.routes, {
                uri: string
                methods: string[]
            }>
        }
    }
    
    var KTApp: any;
    var KTDrawer: any;
    var KTMenu: any;
    var KTScroll: any;
    var KTSticky: any;
    var KTSwapper: any;
    var KTToggle: any;
    var KTScrolltop: any;
    var KTDialer: any;	
    var KTImageInput: any;
    var KTPasswordMeter: any
}