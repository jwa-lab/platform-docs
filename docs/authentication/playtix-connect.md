# PlayTiX Connect

PlatyTiX Connect is an Identity Provider that allows your apps to connect with all the players 
from the PlayTiX Platform.

Technically, it is a standard OpenID Connect (OIDC) Provider supporting the Authorization Code flow 
(with or without PKCE).

Many open-source implementations of OIDC clients are available in many languages, so you probably don't 
have to write everything yourself.

## Okta

Behind the scene, PlayTix Connect relies on Okta, a world leading Identity Provider, to ensure a maximum 
level of security and compliance with the latest standards.  


As a PlayTiX Connect customer, we provide you a fully configured and secured environment for your application.  
You can find all the required information in the PlayTiX Developer Portal.

## OAuth 2.0 & OpenID Connect

OAuth 2.0 is a standard authorization protocol enhanced by OpenID Connect for authentication.

### Authorization Code flow

The **Authorization Code flow** allows a _Client_ application (your game) to get the authorization from a 
_Resource Owner_ (a player from the PlayTiX community) to access a _Resource Server_ (the PlayTiX API) on its behalf.

#### PKCE

If your application is running on the backend and can securely store and use a secret key, then you can use the
default **Authorization Code flow**.

See: https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/

If your application is running on the frontend and cannot securely store and use a secret key, then you must use the
**Authorization Code flow with PKCE**.

See: https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/

### Tokens 

- [Access Token](https://developer.okta.com/docs/reference/api/oidc/#access-token) : Allows making request to the Resources Server.
- [ID Token](https://developer.okta.com/docs/reference/api/oidc/#id-token): Additional token returned by the OpenID provider that contains information about the end user in the form of claims.
- [Refresh Token](https://developer.okta.com/docs/guides/refresh-tokens/overview/): Allows to get a new Access Tokens after the initial one is expired.

## Workflow

### Requirements

In the PlayTiX Developer Portal, you can find:
- your `client_id` and `client_secret`
- the `authorization_url`
- the `tokens_url`
- the `infos_url`

You also have to set up at least one `redirect_uri` for your game.

If you run the **Authorization Code flow** from your backend, the `redirect_uri` looks 
like `https://my.app.com/playtix-connect/auth/callback`.  
If you run the **Authorization Code flow with PKCE** from your frontend, the `redirect_uri` must use a custom 
app protocol like `myapp://`

### Get the tokens

Generate an url to the authorization endpoint (this is usually done by your OIDC client library) and open it in a 
browser, a [Chrome Custom Tabs](https://developer.chrome.com/docs/multidevice/android/customtabs/) or 
a [Safari View Controller](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller).

The user will be prompted to log in and authorize your app to access his account. If he does he will be redirected
to the `redirect_uri` with an authorization code.  
The authorization code is exchanged for the final tokens (this is usually done by your OIDC client library).

### What to do the tokens ?

- The **Access Token** can be used as is to send requests to the PlayTiX API, for example to assign an item instance
to a player.
- The **ID Token** can be used to get information about the player, including his ID that you will need to send requests 
to the PlayTiX API.
- The **Refresh Token** can be stored to get new Access Token when the current one is expired, without the need to start
the **Authorization Code flow** again.
