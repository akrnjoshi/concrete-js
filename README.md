concrete-js
===========

**concrete-js** is a JavaScript library for working with  [Concrete](https://gitlab.hltcoe.jhu.edu/concrete/concrete), a set of NLP data types defined by a [Thrift](https://thrift.apache.org) schema.

The **concrete-js** library contains JavaScript code generated by the Thrift compiler, plus some utility functions for manipulating Concrete objects.

concrete-js vs. QuickLime
-------------------------

The [QuickLime](https://gitlab.hltcoe.jhu.edu/concrete/quicklime) project is a visualization and annotation tool that uses the **concrete-js** library.   **concrete-js** is a low-level library for manipulating Concrete data-structures that does not touch the DOM.  The QuickLime repository includes a copy of the **concrete-js** library - you do not need to checkout this repository in order to use QuickLime.

Using concrete-js
-----------------

Copy the files ```dist/thrift.js``` and ```dist/concrete.js``` to your project, and include the scripts from your HTML files using:

    <script src="thrift.js"></script>
    <script src="concrete.js"></script>

Building concrete-js
--------------------

You do not need to build **concrete-js** in order to use **concrete-js** - a working copy of the library is included in the ```dist/``` directory.  The **concrete-js** library only needs to (re)built when the Thrift schema files for Concrete have been updated, or when you update the utility functions.

Requirements for building **concrete-js**:

* A copy of the [Concrete](https://gitlab.hltcoe.jhu.edu/concrete/concrete) repo in your home directory - ```${HOME}/concrete```
* [Thrift](https://thrift.apache.org)
* [Node](http://nodejs.org)
* [Grunt](http://gruntjs.com) - a JavaScript build tool

Build **concrete-js** using the command:

    grunt

which will:

* call the Thrift compiler to generate JavaScript code for the Thrift schema under ```${HOME}/concrete```
* combine the Thrift-generated JavaScript code with the hand-written utility function JavaScript code
* run [JSHint](http://www.jshint.com) on the combined JavaScript code to check for problems
* minify the combined code
* download the latest version of ```thrift.js``` from the Apache Thrift repository