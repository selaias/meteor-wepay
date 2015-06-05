## wepay

  Meteor wrapper of the [Official WePay NodeJS SDK](https://github.com/wepay/NodeJS-SDK).

## Installation

 Local installation:

    $ meteor add selaias:wepay

 
## Usage

 ```js
 var wepay_settings = {
    'client_id'     : '123456', 
    'client_secret' : '14d42150ac',
    'access_token'  : '370fe096ed3160f3e890f1c5db60124203da0c52f198e1333123244afe', //required from oauth2
    'environment'   : 'staging' // either 'staging' or 'production'
  }
  var wp = new WePay(wepay_settings);

var params = {
        'account_id': 1723052,
        'short_description': 'Selling 42 Pens',
        'type': 'GOODS',
        'amount': 50
    }

  var callback = function(response){
    console.log('%s', response);
  }
  
  wp.call('/checkout/create', params, callback)
  
```
 
## More Information

  * [WePay API](https://www.wepay.com/developer) for documentation
  * [API Support](https://support.wepay.com) for API questions

## License 

(The MIT License)

Copyright (c) 2009-2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
