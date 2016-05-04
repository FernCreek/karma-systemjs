#Why are there multiple branches?
The short answer is so we don't break old builds. Long answer incoming. In the first iteration of our angular build tools, the dependency for this package was this: https://github.com/FernCreek/karma-systemjs/archive/master.zip. So when we needed to upgrade SystemJS and es6-module-loader, we created a new branch so that if anyone needs to install an old version of the build tools they can. Now we can depend on a specific tag rather than a branch.

#How to upgrade the SystemJS/es6-module-loader version(s)
  1. Get the karma-systemjs-1.0.0 branch
  2. Bump the versions in package.json for karma-systemjs as well as for the packages to be upgraded
  3. Do a local commit and tag it with the correct version (e.g. v1.1.0)
  4. Push all of that to GitHub and update the dependency in the build tools
