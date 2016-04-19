# bin-packing







## Getting Started
Configure your development machine to use Kettle's [npm registry](#kettle-npm).  Once you have configured npm to use Kette's npm registry, install the bin-packing module via npm:

	$ npm install bin-packing --save

Require bin-packing within your module.

	var BinPacking = require('bin-packing');





## Documentation
Document appropriate module events, methods and properties.



### BinPacking Properties
List module properties here.  Do not include private properties.

* `@property {boolean} toBeRemoved` - just an example to follow



### BinPacking Events
List all events here.

* `BinPacking.fakeEvent` - just an example to follow



### BinPacking Methods
List all public methods here.  CamelCase method names.  Do not include private methods.

* `BinPacking.fakeMethod` - just an example to follow; include parameters if applicable



### Private BinPacking Properties
List all properties that should be assumed to be private.  Name private properties with two leading underscores so other developers know these properties are intended to be private.

* `@property {boolean} toBeRemoved` - just an example to follow



### Private BinPacking Methods
List all methods that should be assumed to be private here.  Name private methods with two leading underscores so other developers know these methods are intended to be private.

* `BinPacking.__fakeMethod` - just an example to follow; include parameters if applicable



## Usage
Explain how the module is used in all appropriate contexts.



### Examples
Illustrate usage of the module with a few examples.  Include basic and advanced examples when applicable.



## Known issues
Document any known issues here.




## Contributing
Bugs and Pull Requests can be made from the module's [GitHub page](https://github.com/kettle/bin-packing).




***



## <a name="kettle-npm"></a>Configuring Kettle NPM

Configure your development machine to use Kettle's npm registry.  If you have not already, run the (beautiful) script below from the terminal.

	echo 'function setnpm() { rm -f ~/.npmrc; b=`tput bold`; n=`tput sgr0`; echo ""; printf "%.0s=" {1..52}; echo; if [ "$1" == "help" ]; then echo "${n}Run “setnpm” with one of the following options:"; printf "%.0s-" {1..52}; echo; echo "· ${b}help 	      ${n}this screen"; echo "· ${b}apple        ${n}use Apple’s npm server"; echo "· ${b}kettle       ${n}use Kettle’s npm server"; echo "· ${n}*empty*      use the default npmjs.org npm server"; elif [ "$1" == "kettle" ]; then echo "registry=http://npm.kettlenyc.com:4873/" > ~/.npmrc; echo "${b}NPM configured to use Kettle’s npm server."; echo "${n}You will need to run “npm login” to publish modules."; elif [ "$1" == "apple" ]; then echo "registry=https://npm.interactive-apps.apple.com/" > ~/.npmrc; echo "${b}NPM configured to use Apple’s npm server."; echo "${n}Don’t publish modules!"; else echo "registry=https://registry.npmjs.org/" > ~/.npmrc; echo "${b}NPM configured to use npmjs.org"; echo "${n}Don’t publish Kettle / Apple modules!"; fi; printf "%.0s-" {1..52}; echo; echo ""; }' >>~/.bash_profile; source ~/.bash_profile;

This will add the `setnpm` function to your `~/.bash_profile`.

	$ setnpm kettle

Additionally, you can run `$ setnpm apple` to point npm to Apple's registry, or `$ setnpm` to use the public npmjs.org registry.  You can also run `$ setnpm help` to see a list of parameters.

	$ setnpm help

	====================================================
	Run “setnpm” with one of the following options:
	----------------------------------------------------
	· help         this screen
	· apple        use Apple’s npm server
	· kettle       use Kettle’s npm server
	· *empty*      use the default npmjs.org npm server
	----------------------------------------------------



