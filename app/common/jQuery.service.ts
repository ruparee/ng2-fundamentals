/**
 * Created by erupare on 06/07/2017.
 */

import  {OpaqueToken, InjectionToken} from '@angular/core'

/**
 OpaqueToken Deprecation Notes
 since v4.0.0 because it does not support type information, use InjectionToken<?> instead.
 https://angular.io/api/core/OpaqueToken
 **/

export let JQ_TOKEN = new OpaqueToken('jQuery');

// export let JQ_TOKEN = new InjectionToken<String>('jQuery');

