## Instructions

The first 3 steps are from memory as it was already setup on my computer. If needed don't hesite to ask for help.

1. Install Haxe 3.4.7 from: https://haxe.org/download/version/3.4.7/
1. Run `haxelib setup` keep the default
1. Run `haxelib install build.hxml` and accept
1. `npm i`
1. `haxe build.hxml -debug`: `-debug` generates the source map
1. `npm run watch`
1. Make a change to `App.hx` and observe that webpack is recompiling the bundle

*See that the problem doesn't occur when not using the source-maps*

1. Delete the `temp` folder
1. `haxe build.hxml`
1. `npm run watch`
1. Make a change to `App.hx` and observe that webpack is recompiling the bundle
