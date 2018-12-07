# HIPGIVE-APP

Para generar la clave de login con facebook
$ keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

password: android

<!-- keytool -exportcert -keystore <path-to-debug-or-production-keystore> -list -v -alias <alias-name> -->



