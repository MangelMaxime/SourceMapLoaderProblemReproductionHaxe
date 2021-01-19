@:expose
@:keep
class App {

    static function echoTimeFromHaxe() {
        var date = Date.now();
        trace(date.toString());
    }

}
