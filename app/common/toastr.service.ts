/**
 * Created by erupare on 02/07/2017.
 */
import  {OpaqueToken, InjectionToken} from '@angular/core'

/**
 OpaqueToken Deprecation Notes
 since v4.0.0 because it does not support type information, use InjectionToken<?> instead.
 https://angular.io/api/core/OpaqueToken
 **/
<<<<<<< HEAD
// export let TOASTR_TOKEN = new InjectionToken<String>('toastr');
export let TOASTR_TOKEN = new OpaqueToken('toastr');
=======
// export let TOASTR_TOKEN = new OpaqueToken('toastr');

export let TOASTR_TOKEN = new InjectionToken<String>('toastr');
>>>>>>> using-the-inject-decorator

export interface Toastr {
    success (msg:string, title?:string):void;
    info (msg:string, title?:string):void;
    warning (msg:string, title?:string):void;
    error (msg:string, title?:string):void;
}








