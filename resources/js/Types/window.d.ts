import { Ziggy } from "@/ziggy";
import { Route } from "ziggy-js"

export {}

type routeVal = string & {
    current: () => keyof typeof Ziggy.routes
}
declare global {
    var route : (name?: keyof typeof Ziggy.routes, params?: RouteParamsWithQueryOverload | RouteParam | undefined, absolute?: boolean | undefined, config?: Config | undefined) =>  routeVal

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