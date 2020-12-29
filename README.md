
<!--#echo json="package.json" key="name" underline="=" -->
yaml-head-foot-pmb
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Template functions to make YAML file headers and footers.
<!--/#echo -->



API
---

This module exports an object that holds these functions:


### .mergeLines()

A method to be called onto arrays of lines to convert them to string,
adding a newline at the end of each line.



### .header([opt])

Returns an array of lines (with `.mergeLines` as the `.toString` method)
that can be used as the file header of a YAML file.

`opt` is an optional options object that supports these optional keys:

* `tabw`: Tab width. Should be a positive integer.




### .footer([opt])

Returns an array of lines (with `.mergeLines` as the `.toString` method)
that can be used as the last part of a YAML file,
e.g. to confirm completeness of transmission.

`opt` is an optional options object that supports these optional keys:

* (none yet)


### .wrapBody(body[, opt])

Returns a copy of `body` with `.header(opt)` prepended and `.footer(opt)`
appended. If `body` is an array, the result will be an array,
with `.mergeLines` as the `.toString` method.
Otherweise, the result will be a string.





<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
