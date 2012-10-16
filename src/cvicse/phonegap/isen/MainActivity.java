package cvicse.phonegap.isen;


import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.login_bg);
        super.loadUrl("file:///android_asset/www/login.html",10000);
        super.setIntegerProperty("loadUrlTimeoutValue", 60000); 
    }  
}
