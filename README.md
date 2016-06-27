# popup.js
A simple JS popup library

_______________________________________________

popup.js is a Javascript plugin who can display litle popup at the top of your screen.

##Usage

Import library : 

```html
<head>
	<link rel="stylesheet" type="text/css" href="css/popup.css">
	<link rel="stylesheet" type="text/css" href="css/style1.css">
	<script type="text/javascript" src="js/jquery-1.11.min.js"></script>
	<script type="text/javascript" src="js/popup.js"></script>
</head>
```

```javascript
setPopup(text, type, time);
```

-text (Required): the text you want to display 
-type (Facultative): the type of your popup : default, warning, danger or info ("default" by default)
-time (Facultative): the time (in seconds) you want the popup to be displayed (4 seconds by default)

Be sure that you have the CSS & Jquery inclued. however, JQuery is inclued in the repository.

if you have questions or bug about popup.js, please contact me : maximegirou1@gmail.com

thanks for using it !
